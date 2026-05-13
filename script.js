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
// let introStarted = false; // Removed flag as we now check audio.paused state


function toggleSound() {
    isMuted = !isMuted;
    const icon = document.querySelector('.sound-control .icon');
    icon.textContent = isMuted ? '🔇' : '🔊';
    
    audioIntro.muted = isMuted;
    if (!isMuted) startIntro();
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
    
    // Update URL if requested
    if (updateUrl) {
        const slug = createSlug(topic);
        if (slug) {
            const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + slug;
            window.history.pushState({path:newUrl},'',newUrl);
        }
    }
    
    document.getElementById('topic-selection-step').style.display = 'none';
    document.getElementById('player-count-step').style.display = 'block';
}

function checkUrlParams() {
    const param = window.location.search.substring(1);
    
    if (param) {
        const targetTopic = window.allTopics.find(t => createSlug(t) === param);
        if (targetTopic) {
            // Select topic without updating URL again
            selectTopic(targetTopic, false);
        }
    }
}

function backToTopics() {
    document.getElementById('player-count-step').style.display = 'none';
    document.getElementById('topic-selection-step').style.display = 'block';
}

function selectPlayers(count) {
    startIntro();
    window.tempPlayerCount = count;
    document.getElementById('player-count-step').style.display = 'none';
    document.getElementById('rules-step').style.display = 'block';
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
        checkUrlParams();
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
        ctx.font = 'bold 18px "Be Vietnam Pro"';
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

    // Play spin audio
    audioSpin.currentTime = 0;
    audioSpin.play();

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
    
    let correctAnswer, questionText;
    if (questionType === 'meaning') {
        questionText = `Nghĩa của từ "${word.vocab}" là gì?`;
        pinyinEl.textContent = ``;
        correctAnswer = word.meaning;
    } else {
        questionText = `Phiên âm của từ "${word.vocab}" là gì?`;
        pinyinEl.textContent = ``;
        correctAnswer = word.pinyin;
    }
    
    questionEl.textContent = questionText;
    
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
    
    questionModal.classList.add('show');
    startTimer(correctAnswer);
}

let timerInterval;
function startTimer(correctAnswer) {
    const progress = document.getElementById('timer-progress');
    let width = 100;
    progress.style.width = '100%';
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        width -= 1;
        progress.style.width = `${width}%`;
        if (width <= 0) {
            clearInterval(timerInterval);
            checkAnswer(false, 0, false, null, correctAnswer, true); // Timeout
        }
    }, 100); // 10 seconds total
}

function checkAnswer(isCorrect, points, isDouble, clickedBtn, correctAnswer, isTimeout = false) {
    clearInterval(timerInterval);
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
    
    let proceeded = false;
    const proceed = () => {
        if (proceeded) return;
        proceeded = true;
        
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

    const audioToPlay = isCorrect ? audioRight : audioWrong;
    audioToPlay.currentTime = 0;
    audioToPlay.onended = proceed;
    
    audioToPlay.play().catch(e => {
        console.log("Audio play failed", e);
        setTimeout(proceed, 2000);
    });
    
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
    
    // Add click listeners to scoreboard items
    const cards = document.querySelectorAll('.player-card');
    cards.forEach((card, index) => {
        if (index !== currentPlayerIndex) {
            card.onclick = () => {
                // Remove listeners and cleanup
                cards.forEach(c => c.onclick = null);
                document.body.classList.remove('targeting-mode');
                
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
                <td style="font-weight: 800; color: var(--accent);">${v.vocab}</td>
                <td style="color: var(--text-dim);">${v.pinyin.toLowerCase()}</td>
                <td>${v.meaning.toLowerCase()}</td>
            </tr>
        `).join('');
    }
    
    audioIntro.pause();
    audioClap.play();
    modal.classList.add('show');
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
    window.location.reload();
});
