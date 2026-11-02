// Game Configuration
const SEGMENTS = [
    { label: "100", type: "points", value: 100, color: "#ef4444" },
    { label: "200", type: "points", value: 200, color: "#f59e0b" },
    { label: "300", type: "points", value: 300, color: "#10b981" },
    { label: "CƯỚP ĐIỂM", type: "steal", color: "#6366f1" },
    { label: "400", type: "points", value: 400, color: "#8b5cf6" },
    { label: "500", type: "points", value: 500, color: "#ec4899" },
    { label: "MẤT TRẮNG", type: "lose_all", color: "#1e293b" },
    { label: "600", type: "points", value: 600, color: "#ef4444" },
    { label: "700", type: "points", value: 700, color: "#f59e0b" },
    { label: "HOÁN ĐỔI", type: "swap", color: "#10b981" },
    { label: "800", type: "points", value: 800, color: "#6366f1" },
    { label: "GẤP ĐÔI", type: "double", color: "#8b5cf6" },
    { label: "900", type: "points", value: 900, color: "#ec4899" },
    { label: "CHIA ĐÔI", type: "halve", color: "#334155" },
    { label: "1000", type: "points", value: 1000, color: "#ef4444" },
    { label: "MAY MẮN", type: "lucky", color: "#f59e0b" },
    { label: "CƠ HỘI", type: "opportunity", color: "#10b981" },
    { label: "200", type: "points", value: 200, color: "#6366f1" },
    { label: "400", type: "points", value: 400, color: "#8b5cf6" },
    { label: "500", type: "points", value: 500, color: "#ec4899" }
];

// Helper to darken colors
function shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    const RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16));
    const GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16));
    const BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16));

    return "#" + RR + GG + BB;
}

// Synchronization & Window State Management
var isChildWindow = false;
var childGameWindow = null;
var childCheckInterval = null;
var gameSyncChannel = null;
var latestSyncedState = null;
var isWaitingForChild = false;
var lastChildMessageTime = 0;
window.isWaitingForChild = false;
window.currentActiveQuestionData = null;
window.currentActiveActionTitle = null;

// State Management
let players = [];
let currentPlayerIndex = 0;
let vocabData = [];
let filteredVocab = [];
let currentSessionVocab = [];
let selectedTopic = "";
let isSpinning = false;
let currentRotation = 0;
let isMuted = false;
let currentMaxRounds = 7;
let currentSpinCount = 0;

// Audio Management
const audioIntro = new Audio('nhac_nen/modau.mp3');
audioIntro.loop = true;

const audioSpin = new Audio('nhac_nen/quayvongquay.mp3');
const audioClap = new Audio('nhac_nen/votay.mp3');
const audioRight = new Audio('nhac_nen/dung.mp3');
const audioWrong = new Audio('nhac_nen/sai.mp3');

let lastSoundToggleTime = 0;
function toggleSound(e) {
    if (e && e.preventDefault) e.preventDefault();
    const now = Date.now();
    if (now - lastSoundToggleTime < 200) return; // Debounce rapid clicks
    lastSoundToggleTime = now;

    isMuted = !isMuted;
    const icon = document.querySelector('#sound-toggle .icon');
    if (icon) icon.textContent = isMuted ? '🔇' : '🔊';
    
    if (typeof audioIntro !== 'undefined') {
        audioIntro.muted = isMuted;
        if (isMuted) {
            try { audioIntro.pause(); } catch (err) {}
        } else {
            startIntro();
        }
    }
    if (typeof audioSpin !== 'undefined') audioSpin.muted = isMuted;
    if (typeof audioClap !== 'undefined') audioClap.muted = isMuted;
    if (typeof audioRight !== 'undefined') audioRight.muted = isMuted;
    if (typeof audioWrong !== 'undefined') audioWrong.muted = isMuted;

    broadcastAudioSync();
}

function broadcastAudioSync() {
    const curTime = (typeof audioIntro !== 'undefined' && audioIntro && !isNaN(audioIntro.currentTime)) ? Number(audioIntro.currentTime.toFixed(2)) : 0;
    const msg = {
        type: 'HSK4_AUDIO_SYNC',
        isMuted: isMuted,
        audioCurrentTime: curTime
    };
    if (window.safeStorage) {
        try { window.safeStorage.setItem('hsk4_audio_mute', isMuted ? 'true' : 'false'); } catch (e) {}
    }
    if (window.gameSyncChannel) {
        try { window.gameSyncChannel.postMessage(msg); } catch (e) {}
    }
    if (isChildWindow && window.opener && !window.opener.closed) {
        try { window.opener.postMessage(msg, '*'); } catch (e) {}
    } else if (window.childGameWindow && !window.childGameWindow.closed) {
        try { window.childGameWindow.postMessage(msg, '*'); } catch (e) {}
    }
}

function startIntro() {
    if (audioIntro.paused && !isMuted) {
        audioIntro.play().catch(e => {
            console.log("Auto-play blocked, waiting for next user interaction");
        });
    }
}

// Global interaction listener to "unlock" audio on first click/tap
['click', 'touchstart'].forEach(evt => {
    document.addEventListener(evt, startIntro, { once: true });
});

// Setup Game Steps Flow
function populateTopics() {
    // Extract unique topics (handle comma separated ones)
    const topicCounts = {};
    vocabData.forEach(d => {
        const dTopics = d.topic.split(',').map(t => t.trim());
        dTopics.forEach(t => {
            topicCounts[t] = (topicCounts[t] || 0) + 1;
        });
    });

    const topics = Object.keys(topicCounts)
        .filter(t => topicCounts[t] >= 9) // Only show topics with at least 9 words
        .sort((a, b) => {
            const numA = parseInt(a.match(/^\d+/) || 0);
            const numB = parseInt(b.match(/^\d+/) || 0);
            if (numA !== numB) {
                return numA - numB;
            }
            return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
        });

    window.allTopics = topics; // Store for URL mapping

    const topicsGrid = document.getElementById('topics-grid');
    topicsGrid.innerHTML = '';

    topics.forEach(t => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        const count = topicCounts[t] || vocabData.length;
        card.innerHTML = `
            <div class="topic-header">CHỦ ĐỀ</div>
            <div class="topic-name">${t === "Tất cả" ? "Tất cả chủ đề" : t}</div>
            <div class="topic-count">${count} từ vựng</div>
        `;
        card.onclick = () => selectTopic(t);
        topicsGrid.appendChild(card);
    });
}

function createSlug(t) {
    if (t === "Khác") return "khac";
    if (t === "Tất cả") return "tatca";
    const numMatch = t.match(/^(\d+)/);
    const partMatch = t.match(/\(Phần (\d+)\)/);
    
    let slug = "";
    if (numMatch) {
        slug = "chude" + numMatch[1];
        if (partMatch) {
            slug += "_phan" + partMatch[1];
        }
    }
    return slug;
}

function selectTopic(topic, updateUrl = true) {
    startIntro();
    window.tempSelectedTopic = topic;
    
    // Update URL safely if requested (catch SecurityError in restricted LMS iframes)
    if (updateUrl && !window.isChildWindow) {
        const slug = createSlug(topic);
        if (slug) {
            try {
                const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + slug;
                window.history.pushState({path:newUrl},'',newUrl);
            } catch (e) {
                // Ignore SecurityError in cross-origin / sandboxed LMS iframe
            }
        }
    }
    
    document.getElementById('topic-selection-step').style.display = 'none';
    document.getElementById('player-count-step').style.display = 'block';
    if (typeof broadcastGameState === 'function') broadcastGameState();
}

function determineInitialTopic() {
    if (!window.allTopics || window.allTopics.length === 0) {
        return "1. Con người & Các mối quan hệ (Phần 1)";
    }

    try {
        const urlParams = new URLSearchParams(window.location.search);
        
        // 1. Explicit params: ?topic=... or ?chude=... or ?theme=...
        const paramTopic = urlParams.get('topic') || urlParams.get('chude') || urlParams.get('theme');
        if (paramTopic) {
            const found = window.allTopics.find(t => 
                t.toLowerCase() === paramTopic.toLowerCase() || 
                createSlug(t).toLowerCase() === paramTopic.toLowerCase()
            );
            if (found) return found;
        }

        // 2. Query keys (e.g. ?chude1_phan1 or ?chude2)
        const keys = Array.from(urlParams.keys());
        for (const key of keys) {
            if (key === 'mode' || key === 'state') continue;
            const found = window.allTopics.find(t => createSlug(t).toLowerCase() === key.toLowerCase());
            if (found) return found;
        }

        // 3. Hash fragment (e.g. #chude1_phan1)
        if (window.location.hash) {
            const hash = window.location.hash.substring(1);
            if (!hash.startsWith('state=')) {
                const found = window.allTopics.find(t => createSlug(t).toLowerCase() === hash.toLowerCase());
                if (found) return found;
            }
        }
    } catch (e) {
        console.warn("[Topic] Could not parse URL params for topic:", e);
    }

    return window.allTopics[0] || "1. Con người & Các mối quan hệ (Phần 1)";
}

function checkUrlParams() {
    const initialTopic = determineInitialTopic();
    if (initialTopic) {
        window.tempSelectedTopic = initialTopic;
    }
}

function backToTopics() {
    document.getElementById('player-count-step').style.display = 'none';
    document.getElementById('topic-selection-step').style.display = 'block';
    if (typeof broadcastGameState === 'function') broadcastGameState();
}

function selectPlayers(count) {
    startIntro();
    window.tempPlayerCount = count;
    document.getElementById('player-count-step').style.display = 'none';
    document.getElementById('rules-step').style.display = 'block';
    if (typeof broadcastGameState === 'function') broadcastGameState();
}

function startCountdown() {
    startIntro();
    document.getElementById('rules-step').style.display = 'none';
    document.getElementById('countdown-step').style.display = 'flex';
    
    const countEl = document.getElementById('countdown-number');
    let count = 3;
    
    const timer = setInterval(() => {
        count--;
        if (count > 0) {
            countEl.textContent = count;
        } else {
            clearInterval(timer);
            setupGame(window.tempPlayerCount, window.tempSelectedTopic);
        }
    }, 1000);
}

function setupGame(count, topic) {
    players = [];
    for (let i = 1; i <= count; i++) {
        players.push({ id: i, name: `Người chơi ${i}`, score: 0 });
    }
    
    selectedTopic = topic;
    if (topic === "Tất cả") {
        filteredVocab = vocabData;
    } else {
        // Use includes to match words that might have multiple topics
        filteredVocab = vocabData.filter(v => v.topic.split(',').map(t => t.trim()).includes(topic));
    }
    
    currentSessionVocab = [...filteredVocab].sort(() => Math.random() - 0.5);
    
    document.getElementById('setup-screen').classList.remove('show');
    document.querySelector('.current-status').textContent = `Chủ đề: ${topic}`;
    currentSpinCount = 0;
    currentMaxRounds = 7;
    updateStatus();
    updateScoreboard();
    if (typeof broadcastGameState === 'function') broadcastGameState();
}

// DOM Elements
const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const spinBtn = document.getElementById('spin-btn');
const playersList = document.getElementById('players-list');
const currentPlayerDisplay = document.getElementById('current-player-display');
const lastResultDisplay = document.getElementById('last-result-display');
const questionModal = document.getElementById('question-modal');
const actionModal = document.getElementById('action-modal');

// Initialize Game
function init() {
    if (typeof VOCAB_DATA !== 'undefined') {
        vocabData = VOCAB_DATA;
        drawWheel();
        updateScoreboard();
        populateTopics();
        
        // Auto-select topic from URL or default topic so user goes directly to player count screen
        window.tempSelectedTopic = determineInitialTopic();
        
        initSyncEngine();
    } else {
        console.error('Failed to load vocabulary data: VOCAB_DATA is not defined.');
    }
}

// Draw Wheel
function drawWheel() {
    const size = canvas.width;
    const center = size / 2;
    const radius = center - 10;
    const angleStep = (Math.PI * 2) / SEGMENTS.length;

    ctx.clearRect(0, 0, size, size);

    SEGMENTS.forEach((seg, i) => {
        const angle = i * angleStep;
        
        // Draw segment
        ctx.beginPath();
        ctx.moveTo(center, center);
        ctx.arc(center, center, radius, angle, angle + angleStep);
        
        // Create premium gradient for segment
        const gradient = ctx.createRadialGradient(center, center, 0, center, center, radius);
        gradient.addColorStop(0, shadeColor(seg.color, 10));
        gradient.addColorStop(0.7, seg.color);
        gradient.addColorStop(1, shadeColor(seg.color, -40));
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add segment border
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw text
        ctx.save();
        ctx.translate(center, center);
        ctx.rotate(angle + angleStep / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = 'white';
        ctx.font = 'bold 18px "Be Vietnam Pro", "LXGW WenKai", sans-serif';
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 4;
        ctx.fillText(seg.label, radius - 40, 8);
        ctx.restore();
    });

    // Add glossy overlay
    ctx.beginPath();
    const overlayGradient = ctx.createLinearGradient(0, 0, size, size);
    overlayGradient.addColorStop(0, 'rgba(255,255,255,0.15)');
    overlayGradient.addColorStop(0.5, 'rgba(255,255,255,0)');
    overlayGradient.addColorStop(1, 'rgba(0,0,0,0.1)');
    ctx.fillStyle = overlayGradient;
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.fill();
}

// Spin Logic
spinBtn.addEventListener('click', spin);

function spin() {
    if (isSpinning) return;
    isSpinning = true;
    spinBtn.disabled = true;

    // Play spin audio safely with LMS fallback
    audioSpin.currentTime = 0;
    if (window.LMSAdapter) {
        window.LMSAdapter.safePlayAudio(audioSpin, 'tick');
    } else {
        audioSpin.play().catch(e => console.log("Spin sound restricted:", e));
    }

    // Use audio duration for spin time (fallback to 5s if not loaded)
    const spinDuration = audioSpin.duration ? audioSpin.duration * 1000 : 5000;

    const extraRounds = 5 + Math.floor(Math.random() * 5);
    const randomAngle = Math.random() * Math.PI * 2;
    const totalRotation = extraRounds * Math.PI * 2 + randomAngle;
    
    currentRotation += totalRotation;
    canvas.style.transition = `transform ${spinDuration}ms cubic-bezier(0.15, 0, 0.15, 1)`;
    canvas.style.transform = `rotate(${currentRotation}rad)`;

    // Simulate tick sounds/animations
    const pointer = document.querySelector('.pointer');
    let lastSegment = -1;
    const step = (Math.PI * 2) / SEGMENTS.length;
    
    const interval = setInterval(() => {
        const style = window.getComputedStyle(canvas);
        const matrix = style.transform === 'none' ? null : new WebKitCSSMatrix(style.transform);
        if (!matrix) return;
        
        const angle = Math.atan2(matrix.b, matrix.a);
        const currentAngle = (Math.PI * 1.5 - angle) % (Math.PI * 2);
        const seg = Math.floor((currentAngle < 0 ? currentAngle + Math.PI * 2 : currentAngle) / step);
        
        if (seg !== lastSegment) {
            pointer.classList.remove('tick');
            void pointer.offsetWidth; // Trigger reflow
            pointer.classList.add('tick');
            lastSegment = seg;
        }
    }, 50);

    // Calculate result after animation (sync with audio duration)
    setTimeout(() => {
        clearInterval(interval);
        isSpinning = false;
        const normalizedRotation = currentRotation % (Math.PI * 2);
        let targetAngle = (Math.PI * 1.5 - normalizedRotation) % (Math.PI * 2);
        if (targetAngle < 0) targetAngle += Math.PI * 2;
        
        const segmentIndex = Math.floor(targetAngle / step);
        const result = SEGMENTS[segmentIndex];
        
        handleResult(result);
    }, spinDuration);
}

// Result Handling
function handleResult(result) {
    lastResultDisplay.textContent = result.label;
    
    switch (result.type) {
        case 'points':
            showQuestion(result.value);
            break;
        case 'lose_all':
            players[currentPlayerIndex].score = 0;
            finishTurn(`Ôi không! Bạn đã mất trắng điểm.`);
            break;
        case 'double':
            showQuestion(players[currentPlayerIndex].score, true); // Double current score
            break;
        case 'halve':
            players[currentPlayerIndex].score = Math.floor(players[currentPlayerIndex].score / 2);
            finishTurn(`Tiếc quá! Điểm của bạn đã bị chia đôi.`);
            break;
        case 'steal':
            showStealDialog();
            break;
        case 'swap':
            showSwapDialog();
            break;
        case 'lucky':
            const luckyPoints = 500;
            players[currentPlayerIndex].score += luckyPoints;
            finishTurn(`Chúc mừng! Bạn nhận được ${luckyPoints} điểm may mắn.`);
            break;
        case 'opportunity':
            showQuestion(1000); // High reward
            break;
    }
}

// Pinyin distractor generator
function generatePinyinDistractors(correctPinyin) {
    const toneMap = {
        'a': ['ā', 'á', 'ǎ', 'à', 'a'], 'ā': ['a', 'á', 'ǎ', 'à'], 'á': ['a', 'ā', 'ǎ', 'à'], 'ǎ': ['a', 'ā', 'á', 'à'], 'à': ['a', 'ā', 'á', 'ǎ'],
        'e': ['ē', 'é', 'ě', 'è', 'e'], 'ē': ['e', 'é', 'ě', 'è'], 'é': ['e', 'ē', 'ě', 'è'], 'ě': ['e', 'ē', 'é', 'è'], 'è': ['e', 'ē', 'é', 'ě'],
        'i': ['ī', 'í', 'ǐ', 'ì', 'i'], 'ī': ['i', 'í', 'ǐ', 'ì'], 'í': ['i', 'ī', 'ǐ', 'ì'], 'ǐ': ['i', 'ī', 'í', 'ì'], 'ì': ['i', 'ī', 'í', 'ǐ'],
        'o': ['ō', 'ó', 'ǒ', 'ò', 'o'], 'ō': ['o', 'ó', 'ǒ', 'ò'], 'ó': ['o', 'ō', 'ǒ', 'ò'], 'ǒ': ['o', 'ō', 'ó', 'ò'], 'ò': ['o', 'ō', 'ó', 'ǒ'],
        'u': ['ū', 'ú', 'ǔ', 'ù', 'u'], 'ū': ['u', 'ú', 'ǔ', 'ù'], 'ú': ['u', 'ū', 'ǔ', 'ù'], 'ǔ': ['u', 'ū', 'ú', 'ù'], 'ù': ['u', 'ū', 'ú', 'ǔ'],
        'ü': ['ǖ', 'ǘ', 'ǚ', 'ǜ', 'ü'], 'ǖ': ['ü', 'ǘ', 'ǚ', 'ǜ'], 'ǘ': ['ü', 'ǖ', 'ǚ', 'ǜ'], 'ǚ': ['ü', 'ǖ', 'ǘ', 'ǜ'], 'ǜ': ['ü', 'ǖ', 'ǘ', 'ǚ']
    };
    
    let distractors = [];
    let chars = correctPinyin.split('');
    let toneIndices = [];
    chars.forEach((c, i) => {
        if (toneMap[c]) toneIndices.push(i);
    });
    
    if (toneIndices.length > 0) {
        let attempts = 0;
        while (distractors.length < 3 && attempts < 50) {
            attempts++;
            let variantChars = [...chars];
            let idxToChange = toneIndices[Math.floor(Math.random() * toneIndices.length)];
            let originalChar = variantChars[idxToChange];
            let possibleReplacements = toneMap[originalChar];
            let replacement = possibleReplacements[Math.floor(Math.random() * possibleReplacements.length)];
            
            variantChars[idxToChange] = replacement;
            let variantPinyin = variantChars.join('');
            if (variantPinyin !== correctPinyin && !distractors.includes(variantPinyin)) {
                distractors.push(variantPinyin);
            }
        }
    }
    
    return distractors;
}

// Question System
function showQuestion(points, isDouble = false) {
    if (currentSessionVocab.length === 0) {
        currentSessionVocab = [...filteredVocab].sort(() => Math.random() - 0.5);
    }
    const word = currentSessionVocab.pop();
    const questionType = Math.random() > 0.5 ? 'meaning' : 'pinyin';
    
    const questionEl = document.getElementById('question-text');
    const pinyinEl = document.getElementById('question-pinyin');
    const badgeEl = document.getElementById('question-points-badge');
    const optionsGrid = document.getElementById('options-grid');
    
    badgeEl.textContent = isDouble ? `GẤP ĐÔI ĐIỂM` : `${points} Điểm`;
    
    let correctAnswer;
    if (questionType === 'meaning') {
        questionEl.innerHTML = `Nghĩa của từ "<span class="chinese-word">${word.vocab}</span>" là gì?`;
        pinyinEl.textContent = ``;
        correctAnswer = word.meaning;
    } else {
        questionEl.innerHTML = `Phiên âm của từ "<span class="chinese-word">${word.vocab}</span>" là gì?`;
        pinyinEl.textContent = ``;
        correctAnswer = word.pinyin;
    }
    
    // Generate distractors
    let distractors = [];
    if (questionType === 'meaning') {
        while (distractors.length < 3) {
            const randomWord = vocabData[Math.floor(Math.random() * vocabData.length)];
            const distractor = randomWord.meaning;
            if (distractor !== correctAnswer && !distractors.includes(distractor)) {
                distractors.push(distractor);
            }
        }
    } else {
        distractors = generatePinyinDistractors(correctAnswer);
        let attempts = 0;
        while (distractors.length < 3 && attempts < 50) {
            attempts++;
            const randomWord = vocabData[Math.floor(Math.random() * vocabData.length)];
            const distractor = randomWord.pinyin;
            if (distractor !== correctAnswer && !distractors.includes(distractor)) {
                distractors.push(distractor);
            }
        }
    }
    
    const options = [correctAnswer, ...distractors].sort(() => Math.random() - 0.5);
    
    optionsGrid.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.toLowerCase();
        btn.onclick = (e) => checkAnswer(opt.toLowerCase() === correctAnswer.toLowerCase(), points, isDouble, e.target, correctAnswer.toLowerCase());
        optionsGrid.appendChild(btn);
    });
    
    window.currentActiveQuestionData = {
        badgeText: isDouble ? `GẤP ĐÔI ĐIỂM` : `${points} Điểm`,
        questionHtml: questionEl.innerHTML,
        pinyin: pinyinEl.textContent,
        options: options,
        correctAnswer: correctAnswer,
        points: points,
        isDouble: isDouble,
        currentWordVocab: word.vocab
    };

    questionModal.classList.add('show');
    startTimer(correctAnswer);
    if (typeof broadcastGameState === 'function') broadcastGameState();
}

let timerInterval;
let currentTimerWidth = 100;

function startTimer(correctAnswer, startWidth = 100) {
    const progress = document.getElementById('timer-progress');
    currentTimerWidth = typeof startWidth === 'number' ? startWidth : 100;
    if (progress) progress.style.width = `${currentTimerWidth}%`;
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        currentTimerWidth -= 1;
        if (progress) progress.style.width = `${currentTimerWidth}%`;
        if (currentTimerWidth <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            checkAnswer(false, 0, false, null, correctAnswer, true); // Timeout
        }
    }, 100); // 10 seconds total
}

window.pauseTimer = function () {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
};

window.resumeTimer = function () {
    const questionModal = document.getElementById('question-modal');
    if (questionModal && questionModal.classList.contains('show') && window.currentActiveQuestionData) {
        startTimer(window.currentActiveQuestionData.correctAnswer, currentTimerWidth > 0 ? currentTimerWidth : 100);
    }
};

function checkAnswer(isCorrect, points, isDouble, clickedBtn, correctAnswer, isTimeout = false) {
    window.pauseTimer();
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer.toLowerCase()) {
            btn.classList.add('correct');
        }
    });
    
    if (isCorrect) {
        const p = players[currentPlayerIndex];
        if (isDouble) p.score *= 2;
        else p.score += points;
    } else {
        if (clickedBtn) {
            clickedBtn.classList.add('wrong');
        }
    }
    updateScoreboard();
    if (typeof broadcastGameState === 'function') broadcastGameState();
    
    let proceeded = false;
    const proceed = () => {
        if (proceeded) return;
        proceeded = true;
        window.currentActiveQuestionData = null;
        
        if (isCorrect) {
            finishTurn(`Chính xác! Bạn nhận được ${isDouble ? 'gấp đôi' : points} điểm.`, true, 1000);
        } else if (isTimeout) {
            finishTurn(`Hết thời gian! Không nhận được điểm.`, false, 1000);
        } else {
            finishTurn(`Sai rồi! Không nhận được điểm.`, false, 1000);
        }
        
        setTimeout(() => {
            questionModal.classList.remove('show');
        }, 500);
    };

    // Report progress to LMS / SCORM
    if (window.LMSAdapter) {
        const questionEl = document.getElementById('question-text');
        window.LMSAdapter.reportProgress(questionEl ? questionEl.textContent : '', isCorrect, isDouble ? points * 2 : points);
    }

    const audioToPlay = isCorrect ? audioRight : audioWrong;
    audioToPlay.currentTime = 0;
    audioToPlay.onended = proceed;
    
    if (window.LMSAdapter) {
        window.LMSAdapter.safePlayAudio(audioToPlay, isCorrect ? 'correct' : 'wrong');
    } else {
        audioToPlay.play().catch(e => {
            console.log("Audio play failed", e);
            setTimeout(proceed, 2000);
        });
    }
    
    // Fallback timer just in case audio fails to trigger onended
    setTimeout(proceed, 5000);
}

// Special Actions Dialogs
function showStealDialog() {
    const otherPlayers = players.filter((_, i) => i !== currentPlayerIndex);
    if (otherPlayers.every(p => p.score <= 0)) {
        finishTurn("Không có ai để cướp điểm!");
        return;
    }
    
    startTargeting("CƯỚP ĐIỂM", (targetPlayer) => {
        const stealAmount = Math.min(targetPlayer.score, 300);
        targetPlayer.score -= stealAmount;
        players[currentPlayerIndex].score += stealAmount;
        finishTurn(`Bạn đã cướp ${stealAmount} điểm từ ${targetPlayer.name}!`);
    });
}

function showSwapDialog() {
    startTargeting("HOÁN ĐỔI ĐIỂM", (targetPlayer) => {
        const temp = players[currentPlayerIndex].score;
        players[currentPlayerIndex].score = targetPlayer.score;
        targetPlayer.score = temp;
        finishTurn(`Bạn đã hoán đổi điểm với ${targetPlayer.name}!`);
    });
}

function startTargeting(actionTitle, callback) {
    const statusHighlight = document.getElementById('last-result-display');
    statusHighlight.textContent = `[HÀNH ĐỘNG: ${actionTitle}] Nhấp vào một đội khác trên Bảng Điểm để thực hiện!`;
    statusHighlight.style.color = 'var(--accent)';
    
    document.body.classList.add('targeting-mode');
    window.currentActiveActionTitle = actionTitle;
    if (typeof broadcastGameState === 'function') broadcastGameState();
    
    // Add click listeners to scoreboard items
    const cards = document.querySelectorAll('.player-card');
    cards.forEach((card, index) => {
        if (index !== currentPlayerIndex) {
            card.onclick = () => {
                // Remove listeners and cleanup
                cards.forEach(c => c.onclick = null);
                document.body.classList.remove('targeting-mode');
                window.currentActiveActionTitle = null;
                if (typeof broadcastGameState === 'function') broadcastGameState();
                
                // Execute action
                callback(players[index]);
            };
        }
    });
}

// End Turn
function finishTurn(message, success = null, delay = 3000) {
    updateScoreboard();
    
    // Highlight the result
    lastResultDisplay.textContent = message;
    if (success === true) lastResultDisplay.style.color = 'var(--success)';
    else if (success === false) lastResultDisplay.style.color = 'var(--error)';
    else lastResultDisplay.style.color = 'var(--accent)';

    if (typeof broadcastGameState === 'function') broadcastGameState();

    setTimeout(() => {
        currentSpinCount++;
        if (currentSpinCount >= players.length * currentMaxRounds) {
            const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
            if (players.length > 1 && sortedPlayers[0].score === sortedPlayers[1].score) {
                currentMaxRounds++;
                lastResultDisplay.textContent = "Hòa điểm! Thêm vòng chơi phụ để phân định thắng bại.";
                lastResultDisplay.style.color = 'var(--accent)';
                setTimeout(() => {
                    nextTurn();
                }, 2000);
            } else {
                showGameOver();
            }
        } else {
            nextTurn();
        }
    }, delay);
}

function nextTurn() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateStatus();
    spinBtn.disabled = false;
    lastResultDisplay.textContent = "-";
    lastResultDisplay.style.color = 'var(--text)';
    
    // Update round display
    const round = Math.floor(currentSpinCount / players.length) + 1;
    document.getElementById('round-display').textContent = `${round} / ${currentMaxRounds}`;
    if (typeof broadcastGameState === 'function') broadcastGameState();
}

function showGameOver() {
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
    const winner = sortedPlayers[0];
    
    const modal = document.getElementById('game-over-modal');
    const messageEl = document.getElementById('winner-message');
    const scoresEl = document.getElementById('final-scores');
    const summaryBody = document.getElementById('vocab-summary-body');
    const summaryContainer = document.getElementById('vocab-summary-container');
    
    messageEl.textContent = `Chúc mừng ${winner.name} đã giành chiến thắng!`;
    
    scoresEl.innerHTML = sortedPlayers.map((p, i) => `
        <div class="player-card ${i === 0 ? 'active' : ''}" style="margin-bottom: 0.5rem; transform: none;">
            <span>${p.name}</span>
            <span class="player-score">${p.score.toLocaleString()}đ</span>
        </div>
    `).join('');

    // Generate Vocabulary Summary
    if (filteredVocab && filteredVocab.length > 0) {
        summaryContainer.style.display = 'block';
        summaryBody.innerHTML = filteredVocab.map(v => `
            <tr>
                <td class="chinese-word-cell" style="font-weight: 800; color: var(--accent);">${v.vocab}</td>
                <td style="color: var(--text-dim);">${v.pinyin.toLowerCase()}</td>
                <td>${v.meaning.toLowerCase()}</td>
            </tr>
        `).join('');
    }
    
    audioIntro.pause();
    if (window.LMSAdapter) {
        window.LMSAdapter.safePlayAudio(audioClap, 'victory');
        window.LMSAdapter.reportComplete(winner, sortedPlayers, currentMaxRounds);
    } else {
        audioClap.play().catch(() => {});
    }
    modal.classList.add('show');
    if (typeof broadcastGameState === 'function') broadcastGameState();
}

// UI Updates
function updateScoreboard() {
    playersList.innerHTML = '';
    players.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = `player-card ${i === currentPlayerIndex ? 'active' : ''}`;
        card.innerHTML = `
            <span class="player-name">${p.name}</span>
            <span class="player-score">${p.score.toLocaleString()}đ</span>
        `;
        playersList.appendChild(card);
    });
}

function updateStatus() {
    if (players.length > 0) {
        currentPlayerDisplay.textContent = players[currentPlayerIndex].name;
        updateScoreboard();
    } else {
        currentPlayerDisplay.textContent = "Đang chờ...";
    }
}

// Start
init();

// Handle browser back button
window.addEventListener('popstate', () => {
    if (!window.isChildWindow) {
        window.location.reload();
    }
});

/* ==========================================================================
   REAL-TIME TWO-WAY STATE SYNCHRONIZATION ENGINE
   Tương thích đa cửa sổ & LMS iFrame (Moodle, Canvas, SCORM, Popup Window)
   Kiến trúc chuẩn hoá dựa trên nền tảng ổn định của HSK 2
   ========================================================================== */

// (Sync variables initialized at top of script to eliminate TDZ ReferenceErrors)

// Storage fallback
const storage = window.safeStorage || {
    getItem(k) { try { return localStorage.getItem(k); } catch(e) { return null; } },
    setItem(k, v) { try { localStorage.setItem(k, v); } catch(e) {} },
    removeItem(k) { try { localStorage.removeItem(k); } catch(e) {} }
};

/**
 * Safely decode game state from URL parameter / hash / window.name (backward compatibility)
 */
function decodeStateFromUrlParam(paramStr) {
    if (!paramStr) return null;
    try {
        const decodedParam = decodeURIComponent(paramStr);
        try {
            if (typeof TextDecoder !== 'undefined') {
                const binary = atob(decodedParam);
                const bytes = new Uint8Array(binary.length);
                for (let i = 0; i < binary.length; i++) {
                    bytes[i] = binary.charCodeAt(i);
                }
                const json = new TextDecoder().decode(bytes);
                return JSON.parse(json);
            }
        } catch (e1) {}
        return JSON.parse(decodedParam);
    } catch (e) {
        try {
            const doubleDecoded = decodeURIComponent(decodeURIComponent(paramStr));
            return JSON.parse(doubleDecoded);
        } catch (e2) {
            return null;
        }
    }
}

/**
 * Extract initial state snapshot from all possible handover channels
 */
function getInitialStateForChild() {
    // 1. Try URL search query parameter (?state=...)
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const stateParam = urlParams.get('state');
        if (stateParam) {
            const state = decodeStateFromUrlParam(stateParam);
            if (state) return state;
        }
    } catch (e) {}

    // 2. Try URL hash fragment (#state=...)
    try {
        if (window.location.hash) {
            const rawHash = window.location.hash.substring(1);
            if (rawHash.startsWith('state=')) {
                const state = decodeStateFromUrlParam(rawHash.substring(6));
                if (state) return state;
            }
        }
    } catch (e) {}

    return null;
}

/**
 * Initialize Real-time Synchronization Engine (Based on HSK 2 Architecture)
 */
function initSyncEngine() {
    const params = new URLSearchParams(window.location.search);
    isChildWindow = Boolean(
        params.get('popout') === '1' ||
        params.get('mode') === 'popup'
    );
    window.isChildWindow = isChildWindow;

    // 1. Setup UI for child popup window
    if (isChildWindow) {
        document.body.classList.add('is-child-window');
        const popoutBtn = document.getElementById('popout-btn');
        if (popoutBtn) {
            popoutBtn.title = "Quay về màn hình LMS (Đóng cửa sổ này)";
            popoutBtn.setAttribute('aria-label', "Quay về màn hình LMS");
            popoutBtn.onclick = function (e) {
                if (e && e.preventDefault) e.preventDefault();
                closePopoutAndReturnToLMS();
            };
            const iconSpan = popoutBtn.querySelector('.icon') || popoutBtn;
            iconSpan.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;">
                    <polyline points="9 14 4 9 9 4"></polyline>
                    <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                </svg>
            `;
        }

        const handleUnload = () => {
            broadcastGameState(null, true);
        };
        window.addEventListener('beforeunload', handleUnload);
        window.addEventListener('pagehide', handleUnload);
    } else {
        const popoutBtn = document.getElementById('popout-btn');
        if (popoutBtn) {
            popoutBtn.title = "Mở ở cửa sổ mới (Đồng bộ tiến trình)";
            popoutBtn.setAttribute('aria-label', "Mở ở cửa sổ mới");
            popoutBtn.onclick = function (e) {
                if (e && e.preventDefault) e.preventDefault();
                openGameInNewWindow(e);
            };
        }
    }

    // 2. Setup BroadcastChannel (Same-origin instant bus)
    if (typeof BroadcastChannel !== 'undefined') {
        try {
            gameSyncChannel = new BroadcastChannel('hsk4_game_sync_bus');
            gameSyncChannel.onmessage = (event) => {
                if (!event || !event.data) return;
                handleIncomingSyncMessage(event.data);
            };
        } catch (e) {
            console.warn("[Sync] BroadcastChannel not available:", e);
        }
    }
    window.gameSyncChannel = gameSyncChannel;

    // 3. Setup postMessage Listener (Cross-window & LMS iFrame bridge)
    window.addEventListener('message', (event) => {
        if (!event || !event.data) return;
        handleIncomingSyncMessage(event.data);
    });

    // 4. Setup Storage event listener for cross-tab sync fallback
    window.addEventListener('storage', (event) => {
        if (event.key === 'hsk4_audio_mute') {
            const muted = event.newValue === 'true';
            if (isMuted !== muted) {
                isMuted = muted;
                const icon = document.querySelector('#sound-toggle .icon');
                if (icon) icon.textContent = isMuted ? '🔇' : '🔊';
                if (typeof audioIntro !== 'undefined') audioIntro.muted = isMuted;
                if (typeof audioSpin !== 'undefined') audioSpin.muted = isMuted;
                if (typeof audioClap !== 'undefined') audioClap.muted = isMuted;
                if (typeof audioRight !== 'undefined') audioRight.muted = isMuted;
                if (typeof audioWrong !== 'undefined') audioWrong.muted = isMuted;
            }
            return;
        }

        if ((event.key === 'hsk4_synced_state' || event.key === 'hsk4_game_sync_state') && event.newValue) {
            // Only process state sync if this is a child window, or if parent window is actually waiting for child
            if (isChildWindow || window.isWaitingForChild || window.childGameWindow) {
                try {
                    const parsed = JSON.parse(event.newValue);
                    if (parsed) {
                        handleIncomingSyncMessage({
                            type: parsed.isPopoutClosing ? 'HSK4_POPOUT_CLOSED' : 'HSK4_STATE_SYNC',
                            state: parsed
                        });
                    }
                } catch (e) {}
            }
        }
        if (event.key === 'hsk4_popout_closed') {
            if (!isChildWindow && (window.isWaitingForChild || window.childGameWindow)) {
                resumeInThisWindow(false);
            }
        }
    });

    // 5. If child window, restore state snapshot & setup periodic heartbeat
    if (isChildWindow) {
        let initialSyncedState = null;
        try {
            const raw = storage.getItem('hsk4_synced_state') || storage.getItem('hsk4_game_sync_state');
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && (Date.now() - parsed.timestamp < 7200000)) {
                    initialSyncedState = parsed;
                }
            }
        } catch (err) {}

        if (!initialSyncedState && window.opener) {
            try {
                if (window.opener.__HSK4_LATEST_STATE__) {
                    initialSyncedState = window.opener.__HSK4_LATEST_STATE__;
                }
            } catch (e) {}
        }

        if (!initialSyncedState) {
            initialSyncedState = getInitialStateForChild();
        }

        if (initialSyncedState) {
            importGameState(initialSyncedState, false);
        }

        // Notify parent LMS window that child is ready
        if (window.opener && !window.opener.closed) {
            try {
                window.opener.postMessage({ type: 'HSK4_CHILD_READY' }, '*');
            } catch (e) {}
        }
        if (gameSyncChannel) {
            try { gameSyncChannel.postMessage({ type: 'HSK4_CHILD_READY' }); } catch (e) {}
        }

        // Child heartbeat: periodically broadcast state every 1.5s while active in popout
        setInterval(() => {
            if (isChildWindow) {
                broadcastGameState();
            }
        }, 1500);
    } else {
        // Parent LMS window: active auto-sync listeners on focus & visibility ONLY when waiting for child
        window.addEventListener('focus', () => {
            if (window.isWaitingForChild || window.childGameWindow) {
                checkAndApplyLatestState();
            }
        });
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible' && (window.isWaitingForChild || window.childGameWindow)) {
                checkAndApplyLatestState();
            }
        });

        // Background poller: keep state fresh every 800ms while child window is active
        setInterval(() => {
            if (!isChildWindow && (window.childGameWindow || window.isWaitingForChild)) {
                checkAndApplyLatestState();
            }
        }, 800);
    }
}

/**
 * Handle Incoming Messages across postMessage & BroadcastChannel
 */
function handleIncomingSyncMessage(data) {
    if (!data) return;
    lastChildMessageTime = Date.now();
    const type = data.type || data.action;
    const state = data.state;

    // Fast-path: Audio mute synchronization between windows
    if (type === 'HSK4_AUDIO_SYNC') {
        if (typeof data.isMuted === 'boolean') {
            isMuted = data.isMuted;
            const icon = document.querySelector('#sound-toggle .icon');
            if (icon) icon.textContent = isMuted ? '🔇' : '🔊';
            if (typeof audioIntro !== 'undefined') {
                audioIntro.muted = isMuted;
                if (isMuted) {
                    try { audioIntro.pause(); } catch (e) {}
                } else if (!isMuted && !isChildWindow && (window.childGameWindow && !window.childGameWindow.closed)) {
                    // Keep parent intro paused while child is actively playing
                    try { audioIntro.pause(); } catch (e) {}
                } else {
                    startIntro();
                }
            }
            if (typeof audioSpin !== 'undefined') audioSpin.muted = isMuted;
            if (typeof audioClap !== 'undefined') audioClap.muted = isMuted;
            if (typeof audioRight !== 'undefined') audioRight.muted = isMuted;
            if (typeof audioWrong !== 'undefined') audioWrong.muted = isMuted;
        }
        return;
    }

    if (!isChildWindow) {
        // Child window is ready, reply with full state snapshot immediately
        if (type === 'HSK4_CHILD_READY') {
            window.isWaitingForChild = true;
            isWaitingForChild = true;
            const currentSnap = exportGameState();
            if (window.childGameWindow && !window.childGameWindow.closed) {
                try { window.childGameWindow.postMessage({ type: 'HSK4_STATE_SYNC', state: currentSnap }, '*'); } catch (e) {}
            }
            if (gameSyncChannel) {
                try { gameSyncChannel.postMessage({ type: 'HSK4_STATE_SYNC', state: currentSnap }); } catch (e) {}
            }
            return;
        }

        // Only process incoming child state if this parent window opened a child or is waiting
        if (!window.isWaitingForChild && !window.childGameWindow) {
            return;
        }

        if (state) {
            latestSyncedState = state;
            window.__HSK4_LATEST_STATE__ = state;

            // CRITICAL: Apply incoming state to parent LMS window background in real time!
            importGameState(state, false);

            // Report progress/completion to LMS SCORM in parent window
            if (window.LMSAdapter) {
                if (state.isGameOver) {
                    const winner = state.players && state.players.length > 0
                        ? [...state.players].sort((a, b) => b.score - a.score)[0]
                        : null;
                    const sortedPlayers = state.players ? [...state.players].sort((a, b) => b.score - a.score) : [];
                    window.LMSAdapter.reportComplete(winner, sortedPlayers, state.currentMaxRounds);
                } else if (state.players && state.players.length > 0) {
                    const topScore = Math.max(...state.players.map(p => p.score || 0));
                    const round = Math.floor((state.currentSpinCount || 0) / state.players.length) + 1;
                    window.LMSAdapter.reportProgress(`Vòng ${round} - Điểm cao nhất: ${topScore}`, true, topScore);
                }
            }

            // Keep sync overlay updated with live state
            const syncModal = document.getElementById('sync-active-modal');
            if (syncModal && !state.isPopoutClosing && window.isWaitingForChild) {
                syncModal.classList.add('show');
                syncModal.style.display = 'flex';
                updateSyncOverlayInfo(state);
            }
        }

        if (type === 'HSK4_CHILD_CLOSING' || type === 'HSK4_POPOUT_CLOSED' || (state && state.isPopoutClosing)) {
            resumeInThisWindow(false);
        }
    } else {
        // Child window handling updates from parent
        if ((type === 'HSK4_STATE_SYNC' || type === 'HSK4_SYNC_INIT') && state) {
            importGameState(state, false);
        } else if (type === 'HSK4_PARENT_RESUMED') {
            if (window.LMSAdapter && typeof window.LMSAdapter.showToast === 'function') {
                window.LMSAdapter.showToast("👉 Đang tiếp tục chơi trên màn hình LMS.");
            }
        }
    }
}

/**
 * Check and Apply Latest State in Parent Window (invoked on focus, tab switch, & poll)
 */
function checkAndApplyLatestState() {
    if (isChildWindow) return;
    if (!window.isWaitingForChild && !window.childGameWindow) return;

    let stateToApply = null;
    if (window.safeStorage) {
        try {
            const raw = window.safeStorage.getItem('hsk4_synced_state') || window.safeStorage.getItem('hsk4_game_sync_state');
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && (!latestSyncedState || (parsed.timestamp && parsed.timestamp >= (latestSyncedState.timestamp || 0)))) {
                    stateToApply = parsed;
                }
            }
        } catch (e) {}
    }
    if (!stateToApply) stateToApply = latestSyncedState || window.__HSK4_LATEST_STATE__;

    if (stateToApply) {
        latestSyncedState = stateToApply;
        window.__HSK4_LATEST_STATE__ = stateToApply;
        importGameState(stateToApply, false);
        updateSyncOverlayInfo(stateToApply);
    }

    let isClosed = false;
    try {
        if (window.childGameWindow) {
            isClosed = window.childGameWindow.closed;
        }
    } catch (e) {
        isClosed = false;
    }

    let popoutClosedFlag = false;
    if (window.safeStorage) {
        try {
            const popoutClosedTime = window.safeStorage.getItem('hsk4_popout_closed');
            if (popoutClosedTime && Date.now() - Number(popoutClosedTime) < 15000) {
                popoutClosedFlag = true;
                isClosed = true;
            }
        } catch (e) {}
    }

    // Only consider closed if explicit close flag was set, or window is marked closed AND heartbeat expired
    const isHeartbeatExpired = (Date.now() - lastChildMessageTime >= 4000);
    if (popoutClosedFlag || (isClosed && isHeartbeatExpired)) {
        resumeInThisWindow(false);
    } else if (window.isWaitingForChild) {
        const syncModal = document.getElementById('sync-active-modal');
        if (syncModal) {
            syncModal.classList.add('show');
            syncModal.style.display = 'flex';
        }
    }
}

/**
 * Export complete current game state snapshot
 */
function exportGameState() {
    let stage = 'playing';
    let step = null;
    const setupScreen = document.getElementById('setup-screen');
    const questionModal = document.getElementById('question-modal');
    const gameOverModal = document.getElementById('game-over-modal');

    if (setupScreen && setupScreen.classList.contains('show')) {
        stage = 'setup';
        const playerCountStep = document.getElementById('player-count-step');
        const rulesStep = document.getElementById('rules-step');
        const countdownStep = document.getElementById('countdown-step');
        
        if (countdownStep && countdownStep.style.display !== 'none') {
            step = 'countdown';
        } else if (rulesStep && rulesStep.style.display !== 'none') {
            step = 'rules';
        } else {
            step = 'player_count';
        }
    } else if (gameOverModal && gameOverModal.classList.contains('show')) {
        stage = 'game_over';
    }

    let activeQuestion = null;
    if (questionModal && questionModal.classList.contains('show') && window.currentActiveQuestionData) {
        activeQuestion = {
            isOpen: true,
            remainingWidth: typeof currentTimerWidth === 'number' ? currentTimerWidth : 100,
            ...window.currentActiveQuestionData
        };
    }

    let activeAction = null;
    if (document.body.classList.contains('targeting-mode')) {
        activeAction = {
            isTargeting: true,
            actionTitle: window.currentActiveActionTitle || '',
            lastResultText: lastResultDisplay ? lastResultDisplay.textContent : ''
        };
    }

    return {
        stage: stage,
        step: step,
        tempSelectedTopic: window.tempSelectedTopic || determineInitialTopic(),
        tempPlayerCount: window.tempPlayerCount || null,
        selectedTopic: selectedTopic || null,
        players: players ? JSON.parse(JSON.stringify(players)) : [],
        currentPlayerIndex: currentPlayerIndex,
        currentSpinCount: currentSpinCount,
        currentMaxRounds: currentMaxRounds,
        currentRotation: currentRotation,
        lastResult: {
            text: lastResultDisplay ? lastResultDisplay.textContent : '-',
            color: lastResultDisplay ? lastResultDisplay.style.color : ''
        },
        remainingVocabWords: currentSessionVocab ? currentSessionVocab.map(v => v.vocab) : [],
        activeQuestion: activeQuestion,
        activeAction: activeAction,
        isGameOver: stage === 'game_over',
        isMuted: isMuted,
        timestamp: Date.now()
    };
}

/**
 * Restore game state from state snapshot
 */
function importGameState(state, shouldBroadcast = false) {
    if (!state) return;

    // Stop any ongoing question countdown
    if (typeof timerInterval !== 'undefined') clearInterval(timerInterval);

    // 1. Audio Mute State
    if (typeof state.isMuted === 'boolean') {
        isMuted = state.isMuted;
        const soundIcon = document.querySelector('#sound-toggle .icon');
        if (soundIcon) soundIcon.textContent = isMuted ? '🔇' : '🔊';
        if (typeof audioIntro !== 'undefined') audioIntro.muted = isMuted;
    }

    // 2. Setup Screen State
    if (state.stage === 'setup') {
        const setupScreen = document.getElementById('setup-screen');
        if (setupScreen) setupScreen.classList.add('show');
        document.getElementById('question-modal').classList.remove('show');
        document.getElementById('game-over-modal').classList.remove('show');
        document.body.classList.remove('targeting-mode');

        document.getElementById('topic-selection-step').style.display = 'none';
        document.getElementById('player-count-step').style.display = 'none';
        document.getElementById('rules-step').style.display = 'none';
        document.getElementById('countdown-step').style.display = 'none';

        if (state.tempSelectedTopic) {
            window.tempSelectedTopic = state.tempSelectedTopic;
        } else if (!window.tempSelectedTopic) {
            window.tempSelectedTopic = determineInitialTopic();
        }

        if (state.step === 'rules' && state.tempPlayerCount) {
            window.tempPlayerCount = state.tempPlayerCount;
            document.getElementById('rules-step').style.display = 'block';
        } else if (state.step === 'countdown' && state.tempPlayerCount) {
            window.tempPlayerCount = state.tempPlayerCount;
            document.getElementById('rules-step').style.display = 'block';
        } else {
            // Default step is player_count directly
            document.getElementById('player-count-step').style.display = 'block';
        }
        if (shouldBroadcast) broadcastGameState();
        return;
    }

    // 3. Playing / Game Over State
    const setupScreen = document.getElementById('setup-screen');
    if (setupScreen) setupScreen.classList.remove('show');

    // Explicitly hide all setup step views
    const topicStep = document.getElementById('topic-selection-step');
    const playerStep = document.getElementById('player-count-step');
    const rulesStep = document.getElementById('rules-step');
    const countdownStep = document.getElementById('countdown-step');
    if (topicStep) topicStep.style.display = 'none';
    if (playerStep) playerStep.style.display = 'none';
    if (rulesStep) rulesStep.style.display = 'none';
    if (countdownStep) countdownStep.style.display = 'none';

    selectedTopic = state.selectedTopic || "Tất cả";
    const currentStatusEl = document.querySelector('.current-status');
    if (currentStatusEl) currentStatusEl.textContent = `Chủ đề: ${selectedTopic}`;

    if (typeof vocabData !== 'undefined' && vocabData.length > 0) {
        if (selectedTopic === "Tất cả") {
            filteredVocab = vocabData;
        } else {
            filteredVocab = vocabData.filter(v => v.topic.split(',').map(t => t.trim()).includes(selectedTopic));
        }

        if (state.remainingVocabWords && Array.isArray(state.remainingVocabWords) && state.remainingVocabWords.length > 0) {
            currentSessionVocab = filteredVocab.filter(v => state.remainingVocabWords.includes(v.vocab));
            if (currentSessionVocab.length === 0) {
                currentSessionVocab = [...filteredVocab].sort(() => Math.random() - 0.5);
            }
        } else {
            currentSessionVocab = [...filteredVocab].sort(() => Math.random() - 0.5);
        }
    }

    players = state.players && state.players.length > 0 ? JSON.parse(JSON.stringify(state.players)) : [];
    if (players.length === 0) {
        const count = state.tempPlayerCount || 2;
        for (let i = 1; i <= count; i++) {
            players.push({ id: i, name: `Người chơi ${i}`, score: 0 });
        }
    }

    currentPlayerIndex = typeof state.currentPlayerIndex === 'number' ? state.currentPlayerIndex : 0;
    currentSpinCount = typeof state.currentSpinCount === 'number' ? state.currentSpinCount : 0;
    currentMaxRounds = typeof state.currentMaxRounds === 'number' ? state.currentMaxRounds : 7;
    currentRotation = typeof state.currentRotation === 'number' ? state.currentRotation : 0;

    if (canvas) {
        canvas.style.transition = 'none';
        canvas.style.transform = `rotate(${currentRotation}rad)`;
    }

    updateScoreboard();
    updateStatus();

    const round = Math.floor(currentSpinCount / (players.length || 1)) + 1;
    const roundDisplay = document.getElementById('round-display');
    if (roundDisplay) roundDisplay.textContent = `${round} / ${currentMaxRounds}`;

    if (state.lastResult && lastResultDisplay) {
        lastResultDisplay.textContent = state.lastResult.text || "-";
        lastResultDisplay.style.color = state.lastResult.color || 'var(--text)';
    }

    isSpinning = false;
    spinBtn.disabled = false;

    // Restore Question Modal
    if (state.activeQuestion && state.activeQuestion.isOpen) {
        const q = state.activeQuestion;
        window.currentActiveQuestionData = q;
        const badgeEl = document.getElementById('question-points-badge');
        const questionEl = document.getElementById('question-text');
        const pinyinEl = document.getElementById('question-pinyin');
        const optionsGrid = document.getElementById('options-grid');

        if (badgeEl) badgeEl.textContent = q.badgeText || `${q.points} Điểm`;
        if (questionEl) questionEl.innerHTML = q.questionHtml || '';
        if (pinyinEl) pinyinEl.textContent = q.pinyin || '';

        if (optionsGrid && q.options) {
            optionsGrid.innerHTML = '';
            q.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = opt.toLowerCase();
                btn.onclick = (e) => checkAnswer(opt.toLowerCase() === q.correctAnswer.toLowerCase(), q.points, q.isDouble, e.target, q.correctAnswer.toLowerCase());
                optionsGrid.appendChild(btn);
            });
        }

        document.getElementById('question-modal').classList.add('show');
        const startW = typeof q.remainingWidth === 'number' ? q.remainingWidth : 100;
        startTimer(q.correctAnswer, startW);
    } else {
        document.getElementById('question-modal').classList.remove('show');
        window.currentActiveQuestionData = null;
    }

    // Restore Targeting Action (Steal / Swap)
    if (state.activeAction && state.activeAction.isTargeting) {
        if (state.activeAction.actionTitle === 'CƯỚP ĐIỂM') {
            showStealDialog();
        } else if (state.activeAction.actionTitle === 'HOÁN ĐỔI ĐIỂM') {
            showSwapDialog();
        }
    } else {
        document.body.classList.remove('targeting-mode');
        window.currentActiveActionTitle = null;
    }

    // Restore Game Over Modal
    if (state.isGameOver) {
        showGameOver();
    } else {
        document.getElementById('game-over-modal').classList.remove('show');
    }

    if (shouldBroadcast) broadcastGameState();
}

/**
 * Broadcast current game state across all active channels
 */
function broadcastGameState(extraProps = null, isClosing = false) {
    const state = exportGameState();
    if (extraProps) {
        Object.assign(state, extraProps);
    }
    if (isClosing) {
        state.isPopoutClosing = true;
    }
    window.__HSK4_LATEST_STATE__ = state;
    const stateStr = JSON.stringify(state);

    if (window.safeStorage) {
        window.safeStorage.setItem('hsk4_synced_state', stateStr);
        window.safeStorage.setItem('hsk4_game_sync_state', stateStr);
        if (isClosing) {
            try { localStorage.setItem('hsk4_popout_closed', Date.now().toString()); } catch (e) {}
        }
    }

    const msgType = isClosing ? 'HSK4_POPOUT_CLOSED' : 'HSK4_STATE_SYNC';
    const msg = { type: msgType, state: state };

    if (window.gameSyncChannel) {
        try { window.gameSyncChannel.postMessage(msg); } catch (e) {}
    }

    if (window.opener && window.opener !== window && !window.opener.closed) {
        try { window.opener.postMessage(msg, '*'); } catch (e) {}
    }

    if (window.childGameWindow && !window.childGameWindow.closed) {
        try { window.childGameWindow.postMessage(msg, '*'); } catch (e) {}
    }

    updateSyncOverlayInfo(state);
}

/**
 * Open Game in Dedicated Standalone Window with State Handover (Matches HSK 2 Architecture)
 */
function openGameInNewWindow(e) {
    if (e && e.preventDefault) e.preventDefault();

    const params = new URLSearchParams(window.location.search);
    const isPop = params.get('popout') === '1' || params.get('mode') === 'popup';
    if (isPop || isChildWindow) {
        closePopoutAndReturnToLMS();
        return;
    }

    // 1. Pause countdown timer and audio in LMS parent window (matches HSK 2)
    if (typeof window.pauseTimer === 'function') {
        window.pauseTimer();
    }
    if (typeof audioIntro !== 'undefined' && audioIntro && !audioIntro.paused) {
        try { audioIntro.pause(); } catch (err) {}
    }
    if (typeof audioSpin !== 'undefined' && audioSpin && !audioSpin.paused) {
        try { audioSpin.pause(); } catch (err) {}
    }

    // 2. Snapshot current state
    let snapshot = null;
    try {
        snapshot = exportGameState();
    } catch (err) {
        console.warn("[Popout] exportGameState failed, fallback:", err);
        snapshot = { stage: 'setup', timestamp: Date.now() };
    }
    snapshot.syncSessionId = 'sync_' + Date.now();
    snapshot.isLmsWaiting = true;
    window.__HSK4_LATEST_STATE__ = snapshot;

    const stateStr = JSON.stringify(snapshot);
    if (window.safeStorage) {
        try {
            window.safeStorage.setItem('hsk4_synced_state', stateStr);
            window.safeStorage.setItem('hsk4_game_sync_state', stateStr);
            window.safeStorage.setItem('hsk4_active_session', snapshot.syncSessionId);
        } catch (err) {}
    }

    if (window.gameSyncChannel) {
        try {
            window.gameSyncChannel.postMessage({ type: 'HSK4_SYNC_INIT', state: snapshot });
        } catch (err) {}
    }

    // 3. Clean URL (Short & Safe, identical to HSK 2)
    const targetUrl = new URL(window.location.href);
    targetUrl.searchParams.delete('state');
    targetUrl.hash = '';
    targetUrl.searchParams.set('popout', '1');
    targetUrl.searchParams.set('session', snapshot.syncSessionId);
    if (selectedTopic && selectedTopic !== 'Tất cả') {
        targetUrl.searchParams.set('topic', selectedTopic);
    }

    const scrWidth = (window.screen && window.screen.availWidth) || window.innerWidth || 1280;
    const scrHeight = (window.screen && window.screen.availHeight) || window.innerHeight || 800;
    const w = Math.min(1240, scrWidth - 40);
    const h = Math.min(880, scrHeight - 60);
    const left = Math.max(0, Math.floor((scrWidth - w) / 2));
    const top = Math.max(0, Math.floor((scrHeight - h) / 2));
    const windowFeatures = `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes`;

    // 4. Multi-tier Opening Strategy (Guarantees success across LMS iFrames & Browser popup blockers)
    let child = null;

    // Strategy 1: Standalone Popup Window (Matches HSK 2 preferred UX)
    try {
        child = window.open(targetUrl.toString(), 'HSK4_Standalone_Game', windowFeatures);
    } catch (err) {
        console.warn("[Popout] window.open with features failed/blocked:", err);
    }

    // Strategy 2: Named Window without features (Browser tab, far less restricted)
    if (!child || child.closed || typeof child.closed === 'undefined') {
        try {
            child = window.open(targetUrl.toString(), 'HSK4_Standalone_Game');
        } catch (err) {
            console.warn("[Popout] window.open named tab failed:", err);
        }
    }

    // Strategy 3: Standard New Tab (_blank)
    if (!child || child.closed || typeof child.closed === 'undefined') {
        try {
            child = window.open(targetUrl.toString(), '_blank');
        } catch (err) {
            console.warn("[Popout] window.open _blank failed:", err);
        }
    }

    // Strategy 4: Anchor Click Fallback (Bypasses strict iframe sandboxes in modern browsers)
    if (!child || child.closed || typeof child.closed === 'undefined') {
        try {
            const a = document.createElement('a');
            a.href = targetUrl.toString();
            a.target = '_blank';
            a.rel = 'noopener';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            child = true;
        } catch (err) {
            console.warn("[Popout] Anchor click fallback failed:", err);
        }
    }

    if (child) {
        if (child !== true) {
            window.childGameWindow = child;
            try { child.focus(); } catch (err) {}
        }
        window.isWaitingForChild = true;
        isWaitingForChild = true;

        // 5. Show Parent LMS Sync Overlay Modal (Always pauses LMS and prevents user interaction)
        const syncModal = document.getElementById('sync-active-modal');
        if (syncModal) {
            syncModal.classList.add('show');
            syncModal.style.display = 'flex';
            updateSyncOverlayInfo(snapshot);
        }

        if (window.LMSAdapter && typeof window.LMSAdapter.showToast === 'function') {
            const toastMsg = snapshot.stage === 'setup'
                ? "🚀 Đang mở giao diện trong cửa sổ mới..."
                : "🚀 Đang chơi tại cửa sổ mới! Màn hình LMS tạm dừng và chờ đồng bộ.";
            window.LMSAdapter.showToast(toastMsg);
        }

        // 6. Safe poller to detect child window closure (Grace period + heartbeat check)
        if (window.childCheckInterval) {
            clearInterval(window.childCheckInterval);
            window.childCheckInterval = null;
        }

        lastChildMessageTime = Date.now();

        setTimeout(() => {
            if (!window.childGameWindow || window.childGameWindow === true) return;
            window.childCheckInterval = setInterval(() => {
                let isClosed = false;
                try {
                    isClosed = !window.childGameWindow || window.childGameWindow.closed;
                } catch (err) {
                    isClosed = false;
                }
                if (isClosed) {
                    // In LMS iframes, Chromium/Edge marks childGameWindow.closed = true prematurely.
                    // If child sent a heartbeat/message within the last 4 seconds, it is STILL ALIVE!
                    if (Date.now() - lastChildMessageTime < 4000) {
                        return; // Do NOT resume while child is actively playing!
                    }
                    clearInterval(window.childCheckInterval);
                    window.childCheckInterval = null;
                    window.childGameWindow = null;
                    resumeInThisWindow(false);
                }
            }, 800);
        }, 2000);
    } else {
        if (typeof window.resumeTimer === 'function') window.resumeTimer();
        if (window.LMSAdapter && typeof window.LMSAdapter.showToast === 'function') {
            window.LMSAdapter.showToast("⚠️ Vui lòng cho phép popup trên trình duyệt của bạn!");
        }
    }
}

/**
 * Handle Child Window Closure & Synchronize Back to LMS Parent
 */
function closePopoutAndReturnToLMS() {
    broadcastGameState(null, true);
    if (window.safeStorage) {
        try {
            window.safeStorage.setItem('hsk4_popout_closed', Date.now().toString());
        } catch (e) {}
    }
    if (window.opener && !window.opener.closed) {
        try {
            window.opener.postMessage({ type: 'HSK4_POPOUT_CLOSED' }, '*');
            window.opener.focus();
        } catch (e) {}
    }
    try {
        window.close();
    } catch (e) {}
    setTimeout(() => {
        if (window.LMSAdapter && typeof window.LMSAdapter.showToast === 'function') {
            window.LMSAdapter.showToast("✅ Đã đồng bộ dữ liệu về LMS! Bạn có thể chuyển sang tab LMS.");
        }
    }, 200);
}

/**
 * Resume playing directly in the Parent LMS window (Matches HSK 2 Architecture)
 * @param {boolean} forceCloseChild - whether user explicitly clicked to force close child window
 */
function resumeInThisWindow(forceCloseChild = false) {
    window.isWaitingForChild = false;
    isWaitingForChild = false;
    if (window.childCheckInterval) {
        clearInterval(window.childCheckInterval);
        window.childCheckInterval = null;
    }

    if (forceCloseChild && window.childGameWindow) {
        try {
            if (!window.childGameWindow.closed) {
                window.childGameWindow.postMessage({ type: 'HSK4_PARENT_RESUMED' }, '*');
                window.childGameWindow.close();
            }
        } catch (e) {}
        window.childGameWindow = null;
    } else if (window.childGameWindow && window.childGameWindow.closed) {
        window.childGameWindow = null;
    }

    const syncModal = document.getElementById('sync-active-modal');
    if (syncModal) {
        syncModal.classList.remove('show');
        syncModal.style.display = 'none';
    }

    let stateToApply = latestSyncedState;
    if (window.safeStorage) {
        try {
            const saved = window.safeStorage.getItem('hsk4_synced_state') || window.safeStorage.getItem('hsk4_game_sync_state');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed && (!stateToApply || (parsed.timestamp && parsed.timestamp >= (stateToApply.timestamp || 0)))) {
                    stateToApply = parsed;
                }
            }
        } catch (e) {}
    }

    if (stateToApply) {
        latestSyncedState = stateToApply;
        window.__HSK4_LATEST_STATE__ = stateToApply;
        importGameState(stateToApply, false);

        // Resume background audio if unmuted and not game over
        if (!isMuted && !stateToApply.isGameOver) {
            if (typeof audioIntro !== 'undefined' && audioIntro && audioIntro.paused) {
                audioIntro.play().catch(() => {});
            }
        }

        if (window.LMSAdapter && typeof window.LMSAdapter.showToast === 'function') {
            if (stateToApply.isGameOver) {
                window.LMSAdapter.showToast("🏆 Đã đồng bộ kết quả từ cửa sổ mới!");
            } else if (stateToApply.stage === 'playing') {
                const round = Math.floor((stateToApply.currentSpinCount || 0) / ((stateToApply.players && stateToApply.players.length) || 1)) + 1;
                window.LMSAdapter.showToast(`🎮 Đã đồng bộ tiến trình! Tiếp tục vòng ${round}/${stateToApply.currentMaxRounds || 7}`);
            } else {
                window.LMSAdapter.showToast("🎮 Đã đồng bộ tiến trình từ cửa sổ mới!");
            }
        }
    } else {
        if (typeof window.resumeTimer === 'function') window.resumeTimer();
        if (!isMuted && typeof audioIntro !== 'undefined' && audioIntro && audioIntro.paused) {
            audioIntro.play().catch(() => {});
        }
    }
}

/**
 * Focus the active Child Window from Parent
 */
function focusChildWindow() {
    let isAlive = false;
    if (window.childGameWindow) {
        try { isAlive = !window.childGameWindow.closed; } catch (e) { isAlive = false; }
    }
    if (isAlive) {
        try { window.childGameWindow.focus(); return; } catch (e) {}
    }
    openGameInNewWindow();
}

/**
 * Update real-time sync overlay information
 */
function updateSyncOverlayInfo(state) {
    if (!state) return;
    const topicEl = document.getElementById('sync-overlay-topic');
    const roundEl = document.getElementById('sync-overlay-round');
    const turnEl = document.getElementById('sync-overlay-turn');
    const scoresContainer = document.getElementById('sync-overlay-scores');

    if (topicEl) topicEl.textContent = state.selectedTopic || state.tempSelectedTopic || "Chưa chọn";
    if (roundEl) {
        if (state.stage === 'setup') {
            roundEl.textContent = "Chuẩn bị bắt đầu";
        } else {
            const playersCount = state.players ? state.players.length : 1;
            const roundNum = Math.floor((state.currentSpinCount || 0) / (playersCount || 1)) + 1;
            roundEl.textContent = `${roundNum} / ${state.currentMaxRounds || 7}`;
        }
    }
    if (turnEl) {
        if (state.stage === 'setup') {
            turnEl.textContent = "Đang thiết lập tại cửa sổ mới";
        } else if (state.players && state.players.length > 0) {
            const p = state.players[state.currentPlayerIndex || 0];
            turnEl.textContent = p ? p.name : "-";
        } else {
            turnEl.textContent = "Thiết lập game";
        }
    }

    if (scoresContainer) {
        if (state.players && state.players.length > 0) {
            scoresContainer.innerHTML = state.players.map((p, idx) => {
                const isCurrent = idx === (state.currentPlayerIndex || 0);
                const border = isCurrent ? '1.5px solid var(--accent, #ffd700)' : '1px solid rgba(255,255,255,0.15)';
                const bg = isCurrent ? 'rgba(255, 215, 0, 0.15)' : 'rgba(255, 255, 255, 0.05)';
                return `<div style="padding: 0.35rem 0.75rem; border-radius: 8px; background: ${bg}; border: ${border}; font-size: 0.85rem; font-weight: 600; display: flex; align-items: center; gap: 0.4rem;">
                    <span>${p.name}:</span>
                    <span style="color: var(--accent, #ffd700);">${(p.score || 0).toLocaleString()}đ</span>
                </div>`;
            }).join('');
            scoresContainer.style.display = 'flex';
        } else {
            scoresContainer.innerHTML = '';
            scoresContainer.style.display = 'none';
        }
    }
}

/**
 * Cleanly restart game without stale sync data
 */
function restartGame() {
    if (window.safeStorage) {
        window.safeStorage.removeItem('hsk4_synced_state');
        window.safeStorage.removeItem('hsk4_game_sync_state');
    }
    const targetUrl = new URL(window.location.href);
    targetUrl.searchParams.delete('state');
    targetUrl.hash = '';
    if (window.isChildWindow) {
        targetUrl.searchParams.set('popout', '1');
    } else {
        targetUrl.searchParams.delete('popout');
        targetUrl.searchParams.delete('mode');
        targetUrl.searchParams.delete('session');
    }
    window.location.href = targetUrl.toString();
}

// Global functions exposed to window (supporting both naming standards)
window.exportGameState = exportGameState;
window.importGameState = importGameState;
window.broadcastGameState = broadcastGameState;
window.openGameInNewWindow = openGameInNewWindow;
window.openStandaloneWindow = openGameInNewWindow;
window.focusChildWindow = focusChildWindow;
window.resumeInThisWindow = resumeInThisWindow;
window.resumeInLmsWindow = resumeInThisWindow;
window.closePopoutAndReturnToLMS = closePopoutAndReturnToLMS;
window.closeStandaloneChildWindow = closePopoutAndReturnToLMS;
window.toggleSound = toggleSound;
window.broadcastAudioSync = broadcastAudioSync;
window.restartGame = restartGame;

