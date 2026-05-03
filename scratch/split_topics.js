const fs = require('fs');

// Read data.js
let rawData = fs.readFileSync('../data.js', 'utf8');
// Remove "const VOCAB_DATA = " and trailing ";"
let jsonStr = rawData.replace(/^const VOCAB_DATA = /i, '').replace(/;$/m, '');
let data = JSON.parse(jsonStr);

// Collect all unique topics
let topicMap = {};
data.forEach(word => {
    let topics = word.topic.split(',').map(t => t.trim()).filter(t => t.length > 0);
    topics.forEach(t => {
        if (!topicMap[t]) {
            topicMap[t] = [];
        }
        topicMap[t].push(word);
    });
});

// We want to keep track of the new topics for each word
let wordNewTopics = new Map();
data.forEach(word => {
    wordNewTopics.set(word, []);
});

for (let [topic, words] of Object.entries(topicMap)) {
    let n = words.length;
    // If n > 30, we split
    if (n > 30) {
        // Calculate number of parts to keep sizes ~20-30
        let numParts = Math.max(Math.ceil(n / 30), Math.floor(n / 20));
        let baseSize = Math.floor(n / numParts);
        let remainder = n % numParts;
        
        let sizes = [];
        for (let i = 0; i < numParts; i++) {
            sizes.push(baseSize + (i < remainder ? 1 : 0));
        }
        
        sizes.reverse();
        
        console.log(`Topic "${topic}" has ${n} words. Splitting into ${numParts} parts: ${sizes.join(', ')}`);
        
        let currentIndex = 0;
        for (let i = 0; i < numParts; i++) {
            let partSize = sizes[i];
            let partWords = words.slice(currentIndex, currentIndex + partSize);
            let newTopicName = `${topic} (Phần ${i + 1})`;
            
            partWords.forEach(w => {
                wordNewTopics.get(w).push(newTopicName);
            });
            
            currentIndex += partSize;
        }
    } else {
        console.log(`Topic "${topic}" has ${n} words. No need to split.`);
        words.forEach(w => {
            wordNewTopics.get(w).push(topic);
        });
    }
}

// Re-assign topics to words
data.forEach(word => {
    word.topic = wordNewTopics.get(word).join(', ');
});

// Write back to data.js
let outputStr = `const VOCAB_DATA = ${JSON.stringify(data, null, 2)};`;
fs.writeFileSync('../data.js', outputStr, 'utf8');

console.log('Successfully updated data.js');
