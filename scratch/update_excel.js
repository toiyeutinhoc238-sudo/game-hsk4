const fs = require('fs');
const XLSX = require('xlsx');

// Read data.js content
const dataJs = fs.readFileSync('data.js', 'utf8');
const vocabData = JSON.parse(dataJs.replace('const VOCAB_DATA = ', '').replace(/;$/, ''));

// Extract topics and vocabulary
const topics = {};
vocabData.forEach(v => {
    const tList = v.topic.split(',').map(t => t.trim());
    tList.forEach(t => {
        if (!topics[t]) topics[t] = [];
        topics[t].push(v.vocab);
    });
});

const sortedTopicNames = Object.keys(topics)
    .filter(t => topics[t].length >= 9)
    .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/) || 0);
        const numB = parseInt(b.match(/\d+/) || 0);
        return (numA - numB) || a.localeCompare(b);
    });

// Prepare new Excel data
const excelData = sortedTopicNames.map((t, index) => ({
    "HSK 4": t,
    "Những từ vựng sử dụng": topics[t].join('\r\n'),
    "Tên Trò chơi (Trên Web)": "Chiếc Nón Kỳ Diệu - HSK 4",
    "Công cụ Tạo Game": "HTML/JS/CSS",
    "TV Phụ trách": "Antigravity",
    "Loại GAME": "Trò chơi giáo dục",
    "LINK SẢN PHẨM (BẮT BUỘC)": `index.html?chude${index + 1}`,
    "Mục tiêu Sư phạm": "Học từ vựng HSK 4 qua trò chơi tương tác, ghi nhớ âm hán việt và nghĩa.",
    "Gợi ý Ứng dụng": "Hoạt động khởi động hoặc ôn tập cuối buổi học.",
    "Gợi ý Hoạt động": "Chia đội thi đấu, mỗi đội 7 lượt quay."
}));

// Write to Excel
const ws = XLSX.utils.json_to_sheet(excelData);
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "Game Catalog");
XLSX.writeFile(wb, 'game_theo_chu_de.xlsx');

console.log('Updated game_theo_chu_de.xlsx successfully.');
