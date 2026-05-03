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
- HTML5 / CSS3 (Vanilla)
- Javascript (Vanilla)
- Canvas API cho vòng quay
- Google Fonts (Outfit)
