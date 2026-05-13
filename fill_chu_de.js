const xlsx = require('xlsx');

// Load game_theo_chu_de.xlsx
const gameWorkbook = xlsx.readFile('game_theo_chu_de.xlsx');
const gameSheetName = gameWorkbook.SheetNames[0];
const gameSheet = gameWorkbook.Sheets[gameSheetName];
const gameData = xlsx.utils.sheet_to_json(gameSheet);

const newChuDeData = [];

// Fixed texts for all rows
const defaultGoiYToChuc = "Tổ chức cho toàn lớp chia thành các đội thi đấu với nhau.";
const defaultGoiYHoatDong = "Giáo viên mở trò chơi trên màn hình lớn. Các đội lần lượt chọn từ và trả lời câu hỏi. Đội nào hoàn thành với số điểm cao nhất sẽ chiến thắng.";

gameData.forEach(row => {
    const chuDe = row['HSK 4'];
    const rawTuVung = row['Những từ vựng sử dụng'];
    
    if (chuDe && rawTuVung) {
        // Split rawTuVung into array, remove empty strings
        const tuVungArr = rawTuVung.split(/\r?\n/).filter(item => item.trim() !== '');
        
        // Format with numbers: 1. word1\n2. word2\n...
        const formattedTuVung = tuVungArr.map((word, index) => `${index + 1}. ${word.trim()}`).join('\n');
        
        newChuDeData.push({
            'Chủ đề': chuDe,
            'Từ vựng': formattedTuVung,
            'Gợi ý tổ chức': defaultGoiYToChuc,
            'Gợi ý hoạt động': defaultGoiYHoatDong
        });
    }
});

// Create a new workbook for chu_de.xlsx
const newChuDeWorkbook = xlsx.utils.book_new();
const newChuDeSheet = xlsx.utils.json_to_sheet(newChuDeData);

// Set column widths for better readability
newChuDeSheet['!cols'] = [
    { wch: 30 }, // Chủ đề
    { wch: 30 }, // Từ vựng
    { wch: 40 }, // Gợi ý tổ chức
    { wch: 50 }  // Gợi ý hoạt động
];

xlsx.utils.book_append_sheet(newChuDeWorkbook, newChuDeSheet, 'Sheet1');
xlsx.writeFile(newChuDeWorkbook, 'chu_de.xlsx');

console.log('Successfully updated chu_de.xlsx');
