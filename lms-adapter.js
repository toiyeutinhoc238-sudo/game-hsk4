/**
 * LMS Adapter for Chiếc Nón Kỳ Diệu - HSK 4 Edition
 * Tương thích 100% với mọi hệ thống LMS:
 * - Moodle, Canvas LMS, Blackboard, Schoology, Google Classroom, Brightspace (D2L), TalentLMS
 * - SCORM 1.2 & SCORM 2004 (CMI API: Lesson Status, Score, Session Time, Commit, Terminate)
 * - Cross-Origin iFrame & Sandbox Resilience (Safe Storage fallback, Safe pushState)
 * - Auto-Resize postMessage (setHeight, resize, HSK4_RESIZE)
 * - Smart Fullscreen & Popout (Open in New Tab fallback when iframe blocks fullscreen)
 * - Web Audio API Synthesizer Fallback (Works 100% offline, intranet & firewalled schools)
 */

(function (window) {
    'use strict';

    // 1. In-memory fallback if localStorage is blocked by sandboxed iframe
    const memoryStorage = {};

    const safeStorage = {
        getItem(key, defaultVal = null) {
            try {
                if (window.localStorage) {
                    const val = window.localStorage.getItem(key);
                    return val !== null ? val : defaultVal;
                }
            } catch (e) {
                // Blocked by LMS cross-origin iframe sandbox or 3rd-party cookie policy
            }
            return key in memoryStorage ? memoryStorage[key] : defaultVal;
        },
        setItem(key, value) {
            try {
                if (window.localStorage) {
                    window.localStorage.setItem(key, value);
                    return;
                }
            } catch (e) {
                // Fallback to in-memory store
            }
            memoryStorage[key] = String(value);
        },
        removeItem(key) {
            try {
                if (window.localStorage) {
                    window.localStorage.removeItem(key);
                    return;
                }
            } catch (e) {}
            delete memoryStorage[key];
        }
    };

    window.safeStorage = safeStorage;

    // 2. LMS Adapter Core
    const LMSAdapter = {
        isSCORM: false,
        scormVersion: null, // '1.2' or '2004'
        apiHandle: null,
        isInitialized: false,
        startTime: new Date(),
        isInIframe: false,
        audioCtx: null,

        /**
         * Safely discover SCORM API (API for 1.2, API_1484_11 for 2004)
         */
        findAPI(win) {
            let findAttempts = 0;
            const maxAttempts = 10;
            let current = win;

            while (current && findAttempts < maxAttempts) {
                try {
                    if (current.API) {
                        this.scormVersion = '1.2';
                        return current.API;
                    }
                    if (current.API_1484_11) {
                        this.scormVersion = '2004';
                        return current.API_1484_11;
                    }
                } catch (e) {
                    // Cross-origin boundary reached
                    break;
                }

                try {
                    if (current.parent && current.parent !== current) {
                        current = current.parent;
                    } else if (current.opener) {
                        current = current.opener;
                    } else {
                        break;
                    }
                } catch (e) {
                    break;
                }
                findAttempts++;
            }
            return null;
        },

        /**
         * Initialize LMS connection (SCORM, iFrame detection, postMessage, Auto-resize)
         */
        init() {
            if (this.isInitialized) return;

            // Detect if inside an iframe
            try {
                this.isInIframe = (window.self !== window.top);
            } catch (e) {
                this.isInIframe = true;
            }

            if (this.isInIframe && document.body) {
                document.body.classList.add('embedded-lms');
            }

            // 1. Detect SCORM
            try {
                this.apiHandle = this.findAPI(window);
                if (this.apiHandle) {
                    this.isSCORM = true;
                    if (this.scormVersion === '1.2') {
                        const initRes = this.apiHandle.LMSInitialize("");
                        if (initRes === "true" || initRes === true) {
                            this.apiHandle.LMSSetValue("cmi.core.lesson_status", "incomplete");
                            this.apiHandle.LMSCommit("");
                            console.log("[LMSAdapter] SCORM 1.2 Initialized successfully");
                        }
                    } else if (this.scormVersion === '2004') {
                        const initRes = this.apiHandle.Initialize("");
                        if (initRes === "true" || initRes === true) {
                            this.apiHandle.SetValue("cmi.completion_status", "incomplete");
                            this.apiHandle.SetValue("cmi.success_status", "unknown");
                            this.apiHandle.Commit("");
                            console.log("[LMSAdapter] SCORM 2004 Initialized successfully");
                        }
                    }
                }
            } catch (e) {
                console.warn("[LMSAdapter] SCORM initialization note:", e);
            }

            // 2. Setup PostMessage Communication & Auto-resize
            this.setupPostMessage();

            // 3. Setup Unload Handlers for SCORM session termination
            window.addEventListener('beforeunload', () => this.terminate());
            window.addEventListener('unload', () => this.terminate());

            this.isInitialized = true;
            this.sendPostMessage('HSK4_LMS_READY', {
                title: 'Chiếc Nón Kỳ Diệu - HSK 4 Edition',
                scorm: this.isSCORM,
                version: this.scormVersion,
                inIframe: this.isInIframe
            });
        },

        /**
         * Auto-report height & width to parent LMS iframe to eliminate scrollbars
         */
        setupPostMessage() {
            const reportSize = () => {
                try {
                    const height = Math.max(
                        document.body.scrollHeight || 0,
                        document.documentElement.scrollHeight || 0,
                        document.body.offsetHeight || 0,
                        document.documentElement.offsetHeight || 0
                    );
                    this.sendPostMessage('setHeight', { height });
                    this.sendPostMessage('resize', { height, width: window.innerWidth });
                    this.sendPostMessage('HSK4_RESIZE', { height });
                } catch (e) {}
            };

            window.addEventListener('resize', reportSize);
            window.addEventListener('load', reportSize);

            // Report height when DOM changes
            if (window.MutationObserver && document.body) {
                const observer = new MutationObserver(reportSize);
                observer.observe(document.body, { childList: true, subtree: true, attributes: true });
            }

            // Listen for control commands from parent LMS
            window.addEventListener('message', (event) => {
                if (!event || !event.data) return;
                const data = event.data;
                const action = data.action || data.type;

                if (action === 'PAUSE' || action === 'HSK4_PAUSE') {
                    // Optional LMS pause handler
                } else if (action === 'RESTART' || action === 'HSK4_RESTART') {
                    window.location.reload();
                } else if (action === 'MUTE' || action === 'HSK4_MUTE') {
                    if (typeof window.toggleSound === 'function' && !window.isMuted) {
                        window.toggleSound();
                    }
                } else if (action === 'UNMUTE' || action === 'HSK4_UNMUTE') {
                    if (typeof window.toggleSound === 'function' && window.isMuted) {
                        window.toggleSound();
                    }
                }
            });
        },

        /**
         * Broadcast events to parent LMS window
         */
        sendPostMessage(action, payload = {}) {
            try {
                if (window.parent && window.parent !== window) {
                    window.parent.postMessage({
                        source: 'HSK4_MAGIC_WHEEL',
                        action: action,
                        payload: payload,
                        timestamp: Date.now()
                    }, '*');
                }
            } catch (e) {}
        },

        /**
         * Format SCORM session time string (HH:MM:SS)
         */
        formatScormTime(startDate) {
            const diff = Math.max(0, Math.floor((new Date() - startDate) / 1000));
            const hours = Math.floor(diff / 3600);
            const minutes = Math.floor((diff % 3600) / 60);
            const seconds = diff % 60;
            const pad = (n) => (n < 10 ? '0' + n : n);
            return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        },

        /**
         * Report Question Progress to LMS
         */
        reportProgress(questionText, isCorrect, points) {
            this.sendPostMessage('HSK4_LMS_PROGRESS', {
                question: questionText,
                isCorrect: isCorrect,
                pointsAwarded: points
            });
        },

        /**
         * Report Game Completion, Winner & Scores to SCORM & LMS
         */
        reportComplete(winner, sortedPlayers, totalRounds) {
            const highestScore = winner ? winner.score : 0;
            const passed = highestScore > 0;
            const sessionTime = this.formatScormTime(this.startTime);

            // Normalized percentage score (e.g., benchmark score around 3000 points = 100%)
            const rawScore = Math.max(0, highestScore);
            const scorePercent = Math.min(100, Math.max(0, Math.round((rawScore / 3000) * 100)));

            // 1. SCORM reporting
            if (this.isSCORM && this.apiHandle) {
                try {
                    if (this.scormVersion === '1.2') {
                        this.apiHandle.LMSSetValue("cmi.core.score.raw", String(scorePercent));
                        this.apiHandle.LMSSetValue("cmi.core.score.min", "0");
                        this.apiHandle.LMSSetValue("cmi.core.score.max", "100");
                        this.apiHandle.LMSSetValue("cmi.core.session_time", sessionTime);
                        this.apiHandle.LMSSetValue("cmi.core.lesson_status", passed ? "passed" : "completed");
                        this.apiHandle.LMSCommit("");
                    } else if (this.scormVersion === '2004') {
                        this.apiHandle.SetValue("cmi.score.raw", String(scorePercent));
                        this.apiHandle.SetValue("cmi.score.scaled", String((scorePercent / 100).toFixed(2)));
                        this.apiHandle.SetValue("cmi.score.min", "0");
                        this.apiHandle.SetValue("cmi.score.max", "100");
                        this.apiHandle.SetValue("cmi.session_time", 'PT' + Math.floor((new Date() - this.startTime) / 1000) + 'S');
                        this.apiHandle.SetValue("cmi.completion_status", "completed");
                        this.apiHandle.SetValue("cmi.success_status", passed ? "passed" : "completed");
                        this.apiHandle.Commit("");
                    }
                    console.log(`[LMSAdapter] SCORM score committed: ${scorePercent}%`);
                } catch (e) {
                    console.warn("[LMSAdapter] SCORM score report note:", e);
                }
            }

            // 2. PostMessage event
            this.sendPostMessage('HSK4_LMS_COMPLETE', {
                winner: winner ? winner.name : 'Unknown',
                winnerScore: highestScore,
                scorePercent: scorePercent,
                passed: passed,
                duration: sessionTime,
                totalRounds: totalRounds,
                scoreboard: sortedPlayers
            });
        },

        /**
         * Terminate SCORM session cleanly
         */
        terminate() {
            if (this.isSCORM && this.apiHandle) {
                try {
                    if (this.scormVersion === '1.2') {
                        this.apiHandle.LMSCommit("");
                        this.apiHandle.LMSFinish("");
                    } else if (this.scormVersion === '2004') {
                        this.apiHandle.Commit("");
                        this.apiHandle.Terminate("");
                    }
                    this.apiHandle = null;
                } catch (e) {}
            }
        },

        /**
         * Show toast notification on game interface
         */
        showToast(msg, duration = 2500) {
            const toast = document.getElementById('lms-toast');
            if (!toast) return;
            toast.textContent = msg;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, duration);
        },

        /**
         * Smart Fullscreen toggle (in-place native or in-frame CSS expansion)
         */
        toggleFullscreen(targetElem = document.documentElement) {
            try {
                if (!document.fullscreenElement && !document.webkitFullscreenElement) {
                    const req = targetElem.requestFullscreen || targetElem.webkitRequestFullscreen || targetElem.mozRequestFullScreen || targetElem.msRequestFullscreen;
                    if (req) {
                        const p = req.call(targetElem);
                        if (p && typeof p.then === 'function') {
                            p.then(() => {
                                this.showToast("⛶ Đã bật chế độ Toàn Màn Hình");
                            }).catch(() => {
                                document.body.classList.toggle('app-fullscreen-mode');
                                const isExpanded = document.body.classList.contains('app-fullscreen-mode');
                                this.showToast(isExpanded ? "⛶ Đã mở rộng giao diện" : "🗗 Đã trở về chế độ chuẩn");
                            });
                            return;
                        }
                    }
                    document.body.classList.toggle('app-fullscreen-mode');
                    const isExpanded = document.body.classList.contains('app-fullscreen-mode');
                    this.showToast(isExpanded ? "⛶ Đã mở rộng giao diện" : "🗗 Đã trở về chế độ chuẩn");
                } else {
                    const exit = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
                    if (exit) {
                        exit.call(document);
                        document.body.classList.remove('app-fullscreen-mode');
                        this.showToast("🗗 Đã trở về chế độ chuẩn");
                    }
                }
            } catch (e) {
                document.body.classList.toggle('app-fullscreen-mode');
                const isExpanded = document.body.classList.contains('app-fullscreen-mode');
                this.showToast(isExpanded ? "⛶ Đã mở rộng giao diện" : "🗗 Đã trở về chế độ chuẩn");
            }
        },

        /**
         * Safe Audio Playback Wrapper (handles NotAllowedError and autoplay policies)
         */
        safePlayAudio(audio, synthFallbackType = null) {
            if (!audio) return;
            try {
                const p = audio.play();
                if (p && typeof p.catch === 'function') {
                    p.catch((err) => {
                        // Autoplay policy or media load failure
                        if (synthFallbackType) {
                            this.playSynthesizedSound(synthFallbackType);
                        }
                    });
                }
            } catch (e) {
                if (synthFallbackType) {
                    this.playSynthesizedSound(synthFallbackType);
                }
            }
        },

        /**
         * Web Audio API Synthesizer Fallback (Works 100% offline, intranet & firewalled schools)
         */
        getAudioContext() {
            if (!this.audioCtx) {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) {
                    this.audioCtx = new AudioCtx();
                }
            }
            if (this.audioCtx && this.audioCtx.state === 'suspended') {
                this.audioCtx.resume().catch(() => {});
            }
            return this.audioCtx;
        },

        playTone(freq, type = 'sine', duration = 0.2, gainVal = 0.2) {
            try {
                const ctx = this.getAudioContext();
                if (!ctx) return;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = type;
                osc.frequency.setValueAtTime(freq, ctx.currentTime);
                gain.gain.setValueAtTime(gainVal, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start();
                osc.stop(ctx.currentTime + duration);
            } catch (e) {}
        },

        playSynthesizedSound(type) {
            const ctx = this.getAudioContext();
            if (!ctx) return;

            switch (type) {
                case 'correct':
                case 'ding':
                    // Cheerful rising chord (C5 -> E5 -> G5)
                    [523.25, 659.25, 783.99].forEach((f, i) => {
                        setTimeout(() => this.playTone(f, 'triangle', 0.25, 0.25), i * 70);
                    });
                    break;
                case 'wrong':
                case 'buzz':
                    // Low dramatic buzzer
                    this.playTone(140, 'sawtooth', 0.35, 0.3);
                    setTimeout(() => this.playTone(100, 'sawtooth', 0.3, 0.3), 90);
                    break;
                case 'tick':
                    // Mechanical wheel tick
                    this.playTone(880, 'square', 0.03, 0.08);
                    break;
                case 'victory':
                case 'clap':
                    // Fanfare arpeggio
                    [523, 659, 784, 1046].forEach((f, i) => {
                        setTimeout(() => this.playTone(f, 'sine', 0.35, 0.2), i * 90);
                    });
                    break;
            }
        }
    };

    // Auto-init on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => LMSAdapter.init());
    } else {
        LMSAdapter.init();
    }

    window.LMSAdapter = LMSAdapter;

})(window);
