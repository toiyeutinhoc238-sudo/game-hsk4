# Chiếc Nón Kỳ Diệu - HSK 4 Edition

Trò chơi mô phỏng gameshow "Chiếc Nón Kỳ Diệu" giúp bạn ôn luyện từ vựng HSK 4 một cách thú vị.

## Cách chơi
1. **Mở file `index.html`** trên trình duyệt của bạn.
2. **Chọn số lượng người chơi** (2, 3 hoặc 4).
3. **Chọn chủ đề** mà bạn muốn ôn luyện (hoặc chọn "Tất cả chủ đề").
4. **Nhấn nút "QUAY"** ở giữa vòng quay.
4. **Kết quả quay**:
   - Nếu vào ô **Điểm số**: Bạn cần trả lời đúng câu hỏi HSK 4 để nhận điểm. Trả lời sai sẽ không được gì.
   - Nếu vào ô **Đặc biệt**:
     - **Cướp điểm**: Lấy điểm từ người chơi khác.
     - **Hoán đổi**: Đổi điểm với người chơi khác.
     - **Mất trắng**: Mất toàn bộ số điểm hiện có.
     - **Gấp đôi**: Gấp đôi điểm hiện tại nếu trả lời đúng câu hỏi.
     - **Chia đôi**: Bị chia nửa số điểm.
     - **May mắn**: Nhận ngay 500 điểm mà không cần trả lời.
     - **Cơ hội**: Trả lời câu hỏi để nhận 1000 điểm.
5. **Thời gian**: Bạn có 15 giây để trả lời mỗi câu hỏi.
6. **Thắng cuộc**: Người chơi có số điểm cao nhất sau khi kết thúc buổi chơi sẽ giành chiến thắng.

## Dữ liệu
Dữ liệu được trích xuất từ file `ngan_hang_tu_vung.xlsx` và lưu dưới dạng `data.js` để tránh lỗi bảo mật (CORS) khi mở trực tiếp file HTML.

## Công nghệ
- HTML5 / CSS3 (Vanilla Responsive)
- Javascript (Vanilla)
- Canvas API cho vòng quay 3D
- Google Fonts: Be Vietnam Pro (Latin/Tiếng Việt)
- Khải Thể (KaiTi / LXGW WenKai): Chuẩn thư pháp Hán tự HSK
- Tối ưu đa thiết bị: Điện thoại, máy tính bảng, laptop, máy tính để bàn
- LMS Adapter: Tương thích 100% với Moodle, Canvas, Blackboard, SCORM 1.2 & 2004

## Tương thích Hệ Thống LMS (Learning Management System)
Game được trang bị `lms-adapter.js` và `imsmanifest.xml` chuẩn quốc tế:
1. **Đóng gói SCORM (Moodle, Canvas, Blackboard, Schoology, Brightspace)**:
   - Nén toàn bộ thư mục thành file `.zip`.
   - Upload trực tiếp file zip lên LMS dưới dạng khóa học/hoạt động SCORM 1.2 hoặc SCORM 2004.
   - Hệ thống tự động ghi nhận điểm số (`cmi.core.score.raw`), thời gian học (`cmi.core.session_time`), và trạng thái hoàn thành (`passed`/`completed`).
2. **Nhúng qua iFrame (Web nội bộ, Google Classroom, WordPress/LearnDash)**:
   - Hỗ trợ cơ chế tự động co giãn chiều cao (`postMessage` `setHeight` & `resize`) giúp triệt tiêu thanh cuộn kép.
   - Nút **Mở tab mới (Popout)** tự động xuất hiện khi game phát hiện đang chạy trong iFrame, giúp người học chuyển sang chế độ độc lập khi cần.
3. **Chống lỗi Sandbox & Mạng trường học**:
   - `SafeStorage`: Tự động chuyển sang bộ nhớ RAM nếu trình duyệt chặn `localStorage` trong iFrame cross-origin.
   - `Web Audio API Synthesizer`: Tự động tạo hiệu ứng âm thanh bằng bộ dao động tần số nếu trường học chặn file `.mp3` hoặc chính sách autoplay nghiêm ngặt.


