const XLSX = require('xlsx');
const fs = require('fs');

function convert() {
    try {
        const workbook = XLSX.readFile('ngan_hang_tu_vung.xlsx');
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const rawData = XLSX.utils.sheet_to_json(worksheet);

        const processedData = rawData.map(item => ({
            vocab: item['Từ vựng'] ? String(item['Từ vựng']).trim() : '',
            pinyin: item['Phiên âm'] ? String(item['Phiên âm']).trim() : '',
            meaning: item['Nghĩa'] ? String(item['Nghĩa']).trim() : '',
            type: item['Từ loại'] ? String(item['Từ loại']).trim() : '',
            lesson: item['Bài'] ? String(item['Bài']).trim() : '',
            topic: item['Chủ đề'] ? String(item['Chủ đề']).trim().replace(/:$/, '') : 'Khác'
        })).filter(item => item.vocab && item.meaning);

        // Save as JS variable with UTF-8 encoding
        const jsContent = `const VOCAB_DATA = ${JSON.stringify(processedData, null, 2)};`;
        fs.writeFileSync('data.js', jsContent, 'utf8');
        
        console.log(`Successfully converted ${processedData.length} entries to data.js`);
    } catch (error) {
        console.error('Error during conversion:', error);
    }
}

convert();
