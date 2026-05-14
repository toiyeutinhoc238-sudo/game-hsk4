const fs = require('fs');

const data = fs.readFileSync('c:\\Users\\BRAVO 15\\Downloads\\game tieng trung hsk 4\\data.js', 'utf8');
const lines = data.split('\n');

const words = [
    "聚餐", "考生", "联系", "商量", "者", "感", "表示", "表现", "表扬", 
    "材料", "擦", "出口", "重新", "待", "道路", "答应", "订", "多么", 
    "房租", "复杂", "感谢", "改", "共", "共同", "国籍", "换乘", "获得"
];

const results = {};

words.forEach(word => {
    results[word] = [];
    lines.forEach((line, index) => {
        if (line.includes(`"vocab": "${word}"`)) {
            results[word].push({
                lineNumber: index + 1,
                content: line.trim(),
                topic: lines.slice(index, index + 10).find(l => l.includes('"topic"'))?.trim()
            });
        }
    });
});

console.log(JSON.stringify(results, null, 2));
