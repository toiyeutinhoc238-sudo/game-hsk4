const VOCAB_DATA = [
  {
    "vocab": "啊",
    "pinyin": "a",
    "meaning": "à",
    "type": "",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1)"
  },
  {
    "vocab": "爱情",
    "pinyin": "àiqíng",
    "meaning": "yêu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1)"
  },
  {
    "vocab": "爱心",
    "pinyin": "àixīn",
    "meaning": "Yêu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1)"
  },
  {
    "vocab": "按",
    "pinyin": "àn",
    "meaning": "dựa vào",
    "type": "Động từ, Giới từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1)"
  },
  {
    "vocab": "安检",
    "pinyin": "ānjiǎn",
    "meaning": "Kiểm tra an ninh",
    "type": "Động từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1), 4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "安排",
    "pinyin": "ānpái",
    "meaning": "sắp xếp",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1)"
  },
  {
    "vocab": "按时",
    "pinyin": "ànshí",
    "meaning": "đúng giờ",
    "type": "Phó từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "按照",
    "pinyin": "ànzhào",
    "meaning": "theo",
    "type": "Giới từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1)"
  },
  {
    "vocab": "白酒",
    "pinyin": "báijiǔ",
    "meaning": "Rượu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1), 6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "棒",
    "pinyin": "bàng",
    "meaning": "Tuyệt",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1)"
  },
  {
    "vocab": "办公",
    "pinyin": "bàngōng",
    "meaning": "Văn phòng",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "办理",
    "pinyin": "bànlǐ",
    "meaning": "Xử lý",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "办事",
    "pinyin": "bànshì",
    "meaning": "công việc",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "抱",
    "pinyin": "bào",
    "meaning": "ôm",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1)"
  },
  {
    "vocab": "保护",
    "pinyin": "bǎohù",
    "meaning": "Bảo vệ",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "报考",
    "pinyin": "bàokǎo",
    "meaning": "Đăng kí nộp hồ sơ",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1)"
  },
  {
    "vocab": "报名",
    "pinyin": "bàomíng",
    "meaning": "báo danh",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1), 11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "抱歉",
    "pinyin": "bàoqiàn",
    "meaning": "xin lỗi",
    "type": "Tính từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1)"
  },
  {
    "vocab": "保证",
    "pinyin": "bǎozhèng",
    "meaning": "Đảm bảo/ sự đảm bảo",
    "type": "Động từ, Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1), 11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "倍",
    "pinyin": "bèi",
    "meaning": "lần",
    "type": "Lượng từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "背",
    "pinyin": "bēi",
    "meaning": "mặt sau",
    "type": "Động từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "背包",
    "pinyin": "bēibāo",
    "meaning": "Balo",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "北部",
    "pinyin": "běibù",
    "meaning": "Phía bắc",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí, 15. Tự nhiên (Phần 1)"
  },
  {
    "vocab": "笨",
    "pinyin": "bèn",
    "meaning": "ngu xuẩn",
    "type": "Tính từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1), 11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "本科",
    "pinyin": "běnkē",
    "meaning": "bậc cử nhân",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1)"
  },
  {
    "vocab": "本来",
    "pinyin": "běnlái",
    "meaning": "ban đầu",
    "type": "Tính từ, Phó từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "便于",
    "pinyin": "biànyú",
    "meaning": "dễ dàng",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "表",
    "pinyin": "biǎo",
    "meaning": "bề mặt",
    "type": "Danh từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "表格",
    "pinyin": "biǎogé",
    "meaning": "mẫu đơn, bảng biểu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1), 11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "表示",
    "pinyin": "biǎoshì",
    "meaning": "thể hiện",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1)"
  },
  {
    "vocab": "表现",
    "pinyin": "biǎoxiàn",
    "meaning": "biểu hiện",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1)"
  },
  {
    "vocab": "表扬",
    "pinyin": "biǎoyáng",
    "meaning": "khen",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1), 5. Đời sống sinh hoạt (Phần 1)"
  },
  {
    "vocab": "标准",
    "pinyin": "biāozhǔn",
    "meaning": "tiêu chuẩn",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1)"
  },
  {
    "vocab": "并",
    "pinyin": "bìng",
    "meaning": "đồng thời",
    "type": "Động từ, Phó từ, Liên từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1)"
  },
  {
    "vocab": "饼干",
    "pinyin": "bǐnggān",
    "meaning": "bánh quy",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "并且",
    "pinyin": "bìngqiě",
    "meaning": "Và",
    "type": "Liên từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1)"
  },
  {
    "vocab": "笔试",
    "pinyin": "bǐshì",
    "meaning": "kỳ thi viết",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "毕业",
    "pinyin": "bìyè",
    "meaning": "tốt nghiệp",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "毕业生",
    "pinyin": "bìyèshēng",
    "meaning": "sinh viên mới tốt nghiệp",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "鼻子",
    "pinyin": "bízi",
    "meaning": "mũi",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "播放",
    "pinyin": "bōfàng",
    "meaning": "phát sóng",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1)"
  },
  {
    "vocab": "博士",
    "pinyin": "bóshì",
    "meaning": "Tiến sĩ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1)"
  },
  {
    "vocab": "步",
    "pinyin": "bù",
    "meaning": "bước chân",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "部",
    "pinyin": "bù",
    "meaning": "phòng ban/ bộ",
    "type": "Danh từ, Lượng từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 1), 7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "不必",
    "pinyin": "búbì",
    "meaning": "Không cần",
    "type": "Phó từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1)"
  },
  {
    "vocab": "不便",
    "pinyin": "búbiàn",
    "meaning": "bất tiện",
    "type": "Tính từ, Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1)"
  },
  {
    "vocab": "不得不",
    "pinyin": "bùdébù",
    "meaning": "phải",
    "type": "Phó từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "不断",
    "pinyin": "búduàn",
    "meaning": "liên tục",
    "type": "Động từ, Phó từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 1)"
  },
  {
    "vocab": "部分",
    "pinyin": "bùfen",
    "meaning": "phần",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2)"
  },
  {
    "vocab": "不够",
    "pinyin": "búgòu",
    "meaning": "không đủ",
    "type": "Động từ, Phó từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1)"
  },
  {
    "vocab": "不管",
    "pinyin": "bùguǎn",
    "meaning": "mặc dù",
    "type": "Liên từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2)"
  },
  {
    "vocab": "不光",
    "pinyin": "bùguāng",
    "meaning": "không chỉ",
    "type": "Phó từ, Liên từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1)"
  },
  {
    "vocab": "不过",
    "pinyin": "búguò",
    "meaning": "Nhưng",
    "type": "Liên từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2)"
  },
  {
    "vocab": "不仅",
    "pinyin": "bùjǐn",
    "meaning": "không chỉ",
    "type": "Liên từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1)"
  },
  {
    "vocab": "不论",
    "pinyin": "búlùn",
    "meaning": "cho dù",
    "type": "Liên từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2)"
  },
  {
    "vocab": "不满",
    "pinyin": "bùmǎn",
    "meaning": "không hài lòng",
    "type": "Tính từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1)"
  },
  {
    "vocab": "部门",
    "pinyin": "bùmén",
    "meaning": "phòng ban/ bộ phận",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "不如",
    "pinyin": "bùrú",
    "meaning": "chi bằng",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "擦",
    "pinyin": "cā",
    "meaning": "lau đi",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2)"
  },
  {
    "vocab": "猜",
    "pinyin": "cāi",
    "meaning": "Đoán",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1), 11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "材料",
    "pinyin": "cáiliào",
    "meaning": "Vật liệu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2)"
  },
  {
    "vocab": "参观",
    "pinyin": "cānguān",
    "meaning": "thăm quan",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2)"
  },
  {
    "vocab": "参赛",
    "pinyin": "cānsài",
    "meaning": "Tham gia thi đấu",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2)"
  },
  {
    "vocab": "餐厅",
    "pinyin": "cāntīng",
    "meaning": "Phòng ăn",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "操场",
    "pinyin": "cāochǎng",
    "meaning": "sân tập",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "厕所",
    "pinyin": "cèsuǒ",
    "meaning": "nhà vệ sinh",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2)"
  },
  {
    "vocab": "查看",
    "pinyin": "chákàn",
    "meaning": "Kiểm tra",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1), 4. Tư duy & Nhận thức (Phần 1), 12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "厂",
    "pinyin": "chǎng",
    "meaning": "nhà máy",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "场",
    "pinyin": "chǎng",
    "meaning": "sân, bãi",
    "type": "Lượng từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "产生",
    "pinyin": "chǎnshēng",
    "meaning": "sản xuất",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "超过",
    "pinyin": "chāoguò",
    "meaning": "Quá",
    "type": "Động từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "茶叶",
    "pinyin": "cháyè",
    "meaning": "lá trà",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1), 15. Tự nhiên (Phần 1)"
  },
  {
    "vocab": "差(一)点儿",
    "pinyin": "chà(yì)diǎnr",
    "meaning": "thiếu chút nữa",
    "type": "Tính từ, Phó từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "查找",
    "pinyin": "cházhǎo",
    "meaning": "Tìm kiếm",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2), 11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "城",
    "pinyin": "chéng",
    "meaning": "thành phố",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "乘",
    "pinyin": "chéng",
    "meaning": "ngồi (phương tiện giao thông)",
    "type": "Động từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "成功",
    "pinyin": "chénggōng",
    "meaning": "thành công",
    "type": "Động từ, Tính từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1)"
  },
  {
    "vocab": "乘客",
    "pinyin": "chéngkè",
    "meaning": "hành khách",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1)"
  },
  {
    "vocab": "诚实",
    "pinyin": "chéngshí",
    "meaning": "trung thực",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "成为",
    "pinyin": "chéngwéi",
    "meaning": "trở nên",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "乘坐",
    "pinyin": "chéngzuò",
    "meaning": "ngồi (phương tiện giao thông)",
    "type": "Động từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "车速",
    "pinyin": "chēsù",
    "meaning": "Tốc độ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "车位",
    "pinyin": "chēwèi",
    "meaning": "chỗ đậu xe",
    "type": "Danh từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "迟",
    "pinyin": "chí",
    "meaning": "Muộn",
    "type": "Tính từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2)"
  },
  {
    "vocab": "吃惊",
    "pinyin": "chījīng",
    "meaning": "Ngạc nhiên",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2)"
  },
  {
    "vocab": "重",
    "pinyin": "chóng",
    "meaning": "Nặng",
    "type": "Phó từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2), 6. Đồ vật & Công cụ (Phần 1), 12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "重新",
    "pinyin": "chóngxīn",
    "meaning": "lại",
    "type": "Phó từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2)"
  },
  {
    "vocab": "窗",
    "pinyin": "chuāng",
    "meaning": "cửa sổ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "窗户",
    "pinyin": "chuānghu",
    "meaning": "cửa sổ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "出差",
    "pinyin": "chūchāi",
    "meaning": "đi công tác",
    "type": "Động từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1)"
  },
  {
    "vocab": "厨房",
    "pinyin": "chúfáng",
    "meaning": "phòng bếp",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "吹",
    "pinyin": "chuī",
    "meaning": "thổi",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2), 6. Đồ vật & Công cụ (Phần 1), 12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "出口",
    "pinyin": "chūkǒu",
    "meaning": "ra",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2)"
  },
  {
    "vocab": "厨师",
    "pinyin": "chúshī",
    "meaning": "đầu bếp",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "出现",
    "pinyin": "chūxiàn",
    "meaning": "Xuất hiện",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2)"
  },
  {
    "vocab": "出行",
    "pinyin": "chūxíng",
    "meaning": "du lịch",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2), 8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "出租",
    "pinyin": "chūzū",
    "meaning": "thuê",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2), 8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "此",
    "pinyin": "cǐ",
    "meaning": "cái này",
    "type": "Đại từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 2)"
  },
  {
    "vocab": "此次",
    "pinyin": "cǐcì",
    "meaning": "Lần này",
    "type": "",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3), 12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "此外",
    "pinyin": "cǐwài",
    "meaning": "Ngoài ra",
    "type": "Liên từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3)"
  },
  {
    "vocab": "词语",
    "pinyin": "cíyǔ",
    "meaning": "từ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3)"
  },
  {
    "vocab": "从此",
    "pinyin": "cóngcǐ",
    "meaning": "Từ đó trở đi",
    "type": "Phó từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "从来",
    "pinyin": "cónglái",
    "meaning": "trước giờ",
    "type": "Phó từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "从中",
    "pinyin": "cóngzhōng",
    "meaning": "từ đó",
    "type": "Phó từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "粗",
    "pinyin": "cū",
    "meaning": "dày/ thô",
    "type": "Tính từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1), 15. Tự nhiên (Phần 1), 12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "存",
    "pinyin": "cún",
    "meaning": "tích lũy",
    "type": "Động từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "村",
    "pinyin": "cūn",
    "meaning": "làng bản",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3), 7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "错过",
    "pinyin": "cuòguò",
    "meaning": "bỏ lỡ",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "错误",
    "pinyin": "cuòwù",
    "meaning": "sai lầm",
    "type": "Tính từ, Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "粗心",
    "pinyin": "cūxīn",
    "meaning": "bất cẩn",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1), 5. Đời sống sinh hoạt (Phần 3), 12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "答",
    "pinyin": "dá",
    "meaning": "trả lời",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "打招呼",
    "pinyin": "dǎ zhāohu",
    "meaning": "chào hỏi",
    "type": "",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3), 1. Con người & Các mối quan hệ (Phần 1), 11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "答案",
    "pinyin": "dá'àn",
    "meaning": "Trả lời",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3)"
  },
  {
    "vocab": "大巴",
    "pinyin": "dàbā",
    "meaning": "xe buýt",
    "type": "Danh từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "打败",
    "pinyin": "dǎbài",
    "meaning": "đánh bại",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3)"
  },
  {
    "vocab": "大大",
    "pinyin": "dàdà",
    "meaning": "to",
    "type": "Phó từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 1), 12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "达到",
    "pinyin": "dádào",
    "meaning": "đạt được",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3), 11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "打工",
    "pinyin": "dǎgōng",
    "meaning": "làm việc để kiếm sống",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "戴",
    "pinyin": "dài",
    "meaning": "mặc, đội",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3), 12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "待",
    "pinyin": "dāi",
    "meaning": "đối xử",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3)"
  },
  {
    "vocab": "大夫",
    "pinyin": "dàifu",
    "meaning": "bác sĩ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 1), 2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "袋子",
    "pinyin": "dàizi",
    "meaning": "cái túi",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "大量",
    "pinyin": "dàliàng",
    "meaning": "số lượng lớn",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "当",
    "pinyin": "dāng",
    "meaning": "khi",
    "type": "Động từ, Giới từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "当时",
    "pinyin": "dāngshí",
    "meaning": "khi đó",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1), 9. Không gian & Vị trí"
  },
  {
    "vocab": "单位",
    "pinyin": "dānwèi",
    "meaning": "đơn vị",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3), 11. Công việc & Nghề nghiệp (Phần 1)"
  },
  {
    "vocab": "倒",
    "pinyin": "dào",
    "meaning": "ngã",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3), 8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "道",
    "pinyin": "dào",
    "meaning": "lượng từ cho con đường/ đường",
    "type": "Danh từ, Lượng từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "刀",
    "pinyin": "dāo",
    "meaning": "dao",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3), 6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "到底",
    "pinyin": "dàodǐ",
    "meaning": "cuối cùng",
    "type": "Phó từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3)"
  },
  {
    "vocab": "到来",
    "pinyin": "dàolái",
    "meaning": "đến",
    "type": "Động từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "道路",
    "pinyin": "dàolù",
    "meaning": "cách",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3)"
  },
  {
    "vocab": "道歉",
    "pinyin": "dàoqiàn",
    "meaning": "Xin lỗi",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3)"
  },
  {
    "vocab": "导游",
    "pinyin": "dǎoyóu",
    "meaning": "hướng dẫn viên du lịch",
    "type": "Động từ, Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 1), 8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "打扰",
    "pinyin": "dǎrǎo",
    "meaning": "quấy rầy",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3)"
  },
  {
    "vocab": "大赛",
    "pinyin": "dàsài",
    "meaning": "Cuộc thi",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3), 11. Công việc & Nghề nghiệp (Phần 2)"
  },
  {
    "vocab": "大厅",
    "pinyin": "dàtīng",
    "meaning": "sảnh",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 2), 7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "打印",
    "pinyin": "dǎyìn",
    "meaning": "In",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 3), 11. Công việc & Nghề nghiệp (Phần 2)"
  },
  {
    "vocab": "答应",
    "pinyin": "dāying",
    "meaning": "đáp ứng",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4)"
  },
  {
    "vocab": "打印机",
    "pinyin": "dǎyìnjī",
    "meaning": "máy in",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1), 11. Công việc & Nghề nghiệp (Phần 2)"
  },
  {
    "vocab": "大约",
    "pinyin": "dàyuē",
    "meaning": "khoảng",
    "type": "Phó từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4), 13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "打折",
    "pinyin": "dǎzhé",
    "meaning": "Giảm giá",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4), 11. Công việc & Nghề nghiệp (Phần 2), 13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "打针",
    "pinyin": "dǎzhēn",
    "meaning": "tiêm",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4), 2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "大自然",
    "pinyin": "dàzìrán",
    "meaning": "Thiên nhiên",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 1)"
  },
  {
    "vocab": "等",
    "pinyin": "děng",
    "meaning": "vân vân",
    "type": "Trợ từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4), 12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "等到",
    "pinyin": "děngdào",
    "meaning": "đợi đến khi",
    "type": "Giới từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "登机",
    "pinyin": "dēngjī",
    "meaning": "Lên tàu",
    "type": "Động từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "得意",
    "pinyin": "déyì",
    "meaning": "đắc ý",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1)"
  },
  {
    "vocab": "底",
    "pinyin": "dǐ",
    "meaning": "đáy",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4), 15. Tự nhiên (Phần 1)"
  },
  {
    "vocab": "低",
    "pinyin": "dī",
    "meaning": "thấp/ làm giảm",
    "type": "Tính từ, Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "电动车",
    "pinyin": "diàndòngchē",
    "meaning": "xe điện",
    "type": "Danh từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "点名",
    "pinyin": "diǎnmíng",
    "meaning": "Điểm danh",
    "type": "Động từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1), 11. Công việc & Nghề nghiệp (Phần 2)"
  },
  {
    "vocab": "电视剧",
    "pinyin": "diànshìjù",
    "meaning": "phim truyền hình",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4), 6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "点头",
    "pinyin": "diǎntóu",
    "meaning": "gật đầu",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1), 12. Miêu tả & Đánh giá (Phần 1), 2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "掉",
    "pinyin": "diào",
    "meaning": "Thua",
    "type": "Động từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "调查",
    "pinyin": "diàochá",
    "meaning": "cuộc điều tra",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "低价",
    "pinyin": "dījià",
    "meaning": "giá thấp",
    "type": "Danh từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "订",
    "pinyin": "dìng",
    "meaning": "đặt hàng",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4)"
  },
  {
    "vocab": "定",
    "pinyin": "dìng",
    "meaning": "Chắc chắn",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4)"
  },
  {
    "vocab": "地球",
    "pinyin": "dìqiú",
    "meaning": "Trái đất",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí, 15. Tự nhiên (Phần 1)"
  },
  {
    "vocab": "低温",
    "pinyin": "dīwēn",
    "meaning": "nhiệt độ thấp",
    "type": "Danh từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "底下",
    "pinyin": "dǐxia",
    "meaning": "dưới",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "低于",
    "pinyin": "dīyú",
    "meaning": "Dưới",
    "type": "Động từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "地址",
    "pinyin": "dìzhǐ",
    "meaning": "Địa chỉ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "东部",
    "pinyin": "dōngbù",
    "meaning": "phía đông",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí, 15. Tự nhiên (Phần 1)"
  },
  {
    "vocab": "动车",
    "pinyin": "dòngchē",
    "meaning": "tàu cao tốc",
    "type": "Danh từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "动作",
    "pinyin": "dòngzuò",
    "meaning": "hoạt động",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4), 8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "短信",
    "pinyin": "duǎnxìn",
    "meaning": "Tin nhắn ngắn",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4), 11. Công việc & Nghề nghiệp (Phần 2)"
  },
  {
    "vocab": "堵车",
    "pinyin": "dǔchē",
    "meaning": "Tắc đường",
    "type": "Động từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "队",
    "pinyin": "duì",
    "meaning": "Đội",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4), 11. Công việc & Nghề nghiệp (Phần 2)"
  },
  {
    "vocab": "对方",
    "pinyin": "duìfāng",
    "meaning": "phía bên kia",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "对面",
    "pinyin": "duìmiàn",
    "meaning": "đối diện",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4)"
  },
  {
    "vocab": "对于",
    "pinyin": "duìyú",
    "meaning": "đối với",
    "type": "Giới từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "队员",
    "pinyin": "duìyuán",
    "meaning": "Thành viên nhóm",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1), 11. Công việc & Nghề nghiệp (Phần 2)"
  },
  {
    "vocab": "队长",
    "pinyin": "duìzhǎng",
    "meaning": "trưởng nhóm",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4)"
  },
  {
    "vocab": "度假",
    "pinyin": "dùjià",
    "meaning": "kì nghỉ",
    "type": "Động từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "顿",
    "pinyin": "dùn",
    "meaning": "bữa ăn",
    "type": "Lượng từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4), 13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "多么",
    "pinyin": "duōme",
    "meaning": "Làm sao",
    "type": "Phó từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4)"
  },
  {
    "vocab": "多数",
    "pinyin": "duōshù",
    "meaning": "hầu hết",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4)"
  },
  {
    "vocab": "多样",
    "pinyin": "duōyàng",
    "meaning": "đa dạng",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "读者",
    "pinyin": "dúzhě",
    "meaning": "độc giả",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1)"
  },
  {
    "vocab": "肚子",
    "pinyin": "dùzi",
    "meaning": "bụng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4), 2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "而",
    "pinyin": "ér",
    "meaning": "và/ mà",
    "type": "Liên từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "儿童",
    "pinyin": "értóng",
    "meaning": "đứa trẻ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1)"
  },
  {
    "vocab": "法",
    "pinyin": "fǎ",
    "meaning": "phép tắc/ phương pháp",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4)"
  },
  {
    "vocab": "发出",
    "pinyin": "fāchū",
    "meaning": "công bố/ xuất ra",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "法律",
    "pinyin": "fǎlǜ",
    "meaning": "pháp luật",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 4)"
  },
  {
    "vocab": "烦",
    "pinyin": "fán",
    "meaning": "làm phiền",
    "type": "Tính từ, Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5), 12. Miêu tả & Đánh giá (Phần 1)"
  },
  {
    "vocab": "反对",
    "pinyin": "fǎnduì",
    "meaning": "phản đối",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "房东",
    "pinyin": "fángdōng",
    "meaning": "chủ nhà",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1), 11. Công việc & Nghề nghiệp (Phần 2)"
  },
  {
    "vocab": "方面",
    "pinyin": "fāngmiàn",
    "meaning": "diện mạo",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "放弃",
    "pinyin": "fàngqì",
    "meaning": "bỏ cuộc",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1), 11. Công việc & Nghề nghiệp (Phần 2)"
  },
  {
    "vocab": "方式",
    "pinyin": "fāngshì",
    "meaning": "cách thức",
    "type": "Danh từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "放松",
    "pinyin": "fàngsōng",
    "meaning": "Thư giãn",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "房租",
    "pinyin": "fángzū",
    "meaning": "thuê nhà",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "烦恼",
    "pinyin": "fánnǎo",
    "meaning": "phiền não",
    "type": "Tính từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "翻译",
    "pinyin": "fānyì",
    "meaning": "dịch",
    "type": "Động từ, Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "发送",
    "pinyin": "fāsòng",
    "meaning": "gửi",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "费",
    "pinyin": "fèi",
    "meaning": "phí/ tiêu hao",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "费用",
    "pinyin": "fèiyong",
    "meaning": "trị giá",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "份",
    "pinyin": "fèn",
    "meaning": "phần",
    "type": "Lượng từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "丰富",
    "pinyin": "fēngfù",
    "meaning": "phong phú",
    "type": "Tính từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "风景",
    "pinyin": "fēngjǐng",
    "meaning": "phong cảnh",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 1)"
  },
  {
    "vocab": "分数",
    "pinyin": "fēnshù",
    "meaning": "Phân số",
    "type": "Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "分为",
    "pinyin": "fēnwéi",
    "meaning": "Chia thành",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 2), 12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "否则",
    "pinyin": "fǒuzé",
    "meaning": "nếu không thì",
    "type": "Liên từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1)"
  },
  {
    "vocab": "幅",
    "pinyin": "fú",
    "meaning": "khung",
    "type": "Lượng từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "付",
    "pinyin": "fù",
    "meaning": "chi trả",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "符合",
    "pinyin": "fúhé",
    "meaning": "phù hợp",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "父母",
    "pinyin": "fùmǔ",
    "meaning": "cha mẹ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1)"
  },
  {
    "vocab": "父女",
    "pinyin": "fùnǚ",
    "meaning": "Cha và con gái",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1)"
  },
  {
    "vocab": "父亲",
    "pinyin": "fùqīn",
    "meaning": "Bố",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 1)"
  },
  {
    "vocab": "复印",
    "pinyin": "fùyìn",
    "meaning": "bản sao",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5), 11. Công việc & Nghề nghiệp (Phần 2)"
  },
  {
    "vocab": "复杂",
    "pinyin": "fùzá",
    "meaning": "tổ hợp",
    "type": "Tính từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "负责",
    "pinyin": "fùzé",
    "meaning": "Chịu trách nhiệm",
    "type": "Động từ, Tính từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2), 11. Công việc & Nghề nghiệp (Phần 2)"
  },
  {
    "vocab": "负责人",
    "pinyin": "fùzérén",
    "meaning": "người phụ trách",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2), 11. Công việc & Nghề nghiệp (Phần 2)"
  },
  {
    "vocab": "父子",
    "pinyin": "fùzǐ",
    "meaning": "Cha và con trai",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2)"
  },
  {
    "vocab": "改",
    "pinyin": "gǎi",
    "meaning": "thay đổi",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "改变",
    "pinyin": "gǎibiàn",
    "meaning": "Thay đổi",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "赶",
    "pinyin": "gǎn",
    "meaning": "mau",
    "type": "Động từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "敢",
    "pinyin": "gǎn",
    "meaning": "dám",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "感 (hậu tố)",
    "pinyin": "gǎn",
    "meaning": "được thêm vào sau động từ hoặc tính từ để tạo thành danh từ",
    "type": "",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "干",
    "pinyin": "gān",
    "meaning": "Khô",
    "type": "Tính từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 1), 12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "干杯",
    "pinyin": "gānbēi",
    "meaning": "Cạn ly",
    "type": "Động từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2)"
  },
  {
    "vocab": "感动",
    "pinyin": "gǎndòng",
    "meaning": "cảm động",
    "type": "Tính từ, Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 5)"
  },
  {
    "vocab": "钢琴",
    "pinyin": "gāngqín",
    "meaning": "đàn piano",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "干活儿",
    "pinyin": "gànhuór",
    "meaning": "làm việc",
    "type": "Động từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2)"
  },
  {
    "vocab": "赶紧",
    "pinyin": "gǎnjǐn",
    "meaning": "khẩn trương làm việc gì",
    "type": "Phó từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "感觉",
    "pinyin": "gǎnjué",
    "meaning": "cảm thấy/ cảm giác",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1), 12. Miêu tả & Đánh giá (Phần 2), 2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "赶快",
    "pinyin": "gǎnkuài",
    "meaning": "nhanh chóng",
    "type": "Phó từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2)"
  },
  {
    "vocab": "感情",
    "pinyin": "gǎnqíng",
    "meaning": "cảm xúc",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "感人",
    "pinyin": "gǎnrén",
    "meaning": "Cảm động",
    "type": "Tính từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "赶上",
    "pinyin": "gǎnshàng",
    "meaning": "bắt kịp",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6)"
  },
  {
    "vocab": "感受",
    "pinyin": "gǎnshòu",
    "meaning": "cảm nhận",
    "type": "Động từ, Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "感谢",
    "pinyin": "gǎnxiè",
    "meaning": "tri ân",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6)"
  },
  {
    "vocab": "高价",
    "pinyin": "gāojià",
    "meaning": "Giá cao",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6), 12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "高考",
    "pinyin": "gāokǎo",
    "meaning": "Kỳ thi tuyển sinh đại học",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2)"
  },
  {
    "vocab": "高速",
    "pinyin": "gāosù",
    "meaning": "tốc độ cao",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 2), 8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "高温",
    "pinyin": "gāowēn",
    "meaning": "nhiệt độ cao",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 1), 12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "高于",
    "pinyin": "gāoyú",
    "meaning": "Cao hơn",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "各",
    "pinyin": "gè",
    "meaning": "mỗi",
    "type": "Đại từ, Phó từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "胳膊",
    "pinyin": "gēbo",
    "meaning": "cánh tay",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "各地",
    "pinyin": "gèdì",
    "meaning": "nhiều nơi",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "各个",
    "pinyin": "gègè",
    "meaning": "mỗi",
    "type": "Đại từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6), 14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "更加",
    "pinyin": "gèngjiā",
    "meaning": "hơn",
    "type": "Phó từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6)"
  },
  {
    "vocab": "歌声",
    "pinyin": "gēshēng",
    "meaning": "giọng hát",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6)"
  },
  {
    "vocab": "歌手",
    "pinyin": "gēshǒu",
    "meaning": "ca sĩ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 2)"
  },
  {
    "vocab": "各位",
    "pinyin": "gèwèi",
    "meaning": "Các bạn thân mến",
    "type": "Đại từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2)"
  },
  {
    "vocab": "各种",
    "pinyin": "gèzhǒng",
    "meaning": "Nhiều",
    "type": "Đại từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "共",
    "pinyin": "gòng",
    "meaning": "chung",
    "type": "Phó từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6)"
  },
  {
    "vocab": "工厂",
    "pinyin": "gōngchǎng",
    "meaning": "nhà máy",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 2), 7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "功夫",
    "pinyin": "gōngfu",
    "meaning": "cố gắng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1)"
  },
  {
    "vocab": "公共",
    "pinyin": "gōnggòng",
    "meaning": "công cộng",
    "type": "Tính từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2), 7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "功课",
    "pinyin": "gōngkè",
    "meaning": "bài tập, bài học",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2)"
  },
  {
    "vocab": "公里",
    "pinyin": "gōnglǐ",
    "meaning": "ki-lô-mét",
    "type": "Lượng từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "公路",
    "pinyin": "gōnglù",
    "meaning": "đường cao tốc",
    "type": "Danh từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 1)"
  },
  {
    "vocab": "工人",
    "pinyin": "gōngrén",
    "meaning": "Công nhân",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2)"
  },
  {
    "vocab": "共同",
    "pinyin": "gòngtóng",
    "meaning": "chung",
    "type": "Tính từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6)"
  },
  {
    "vocab": "工资",
    "pinyin": "gōngzī",
    "meaning": "lương",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 2)"
  },
  {
    "vocab": "够",
    "pinyin": "gòu",
    "meaning": "đủ",
    "type": "Động từ, Phó từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "购买",
    "pinyin": "gòumǎi",
    "meaning": "Mua",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6)"
  },
  {
    "vocab": "购物",
    "pinyin": "gòuwù",
    "meaning": "Mua sắm",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6)"
  },
  {
    "vocab": "挂",
    "pinyin": "guà",
    "meaning": "treo",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6)"
  },
  {
    "vocab": "管",
    "pinyin": "guǎn",
    "meaning": "quản",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6)"
  },
  {
    "vocab": "逛",
    "pinyin": "guàng",
    "meaning": "đi dạo",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6)"
  },
  {
    "vocab": "光",
    "pinyin": "guāng",
    "meaning": "Ánh sáng",
    "type": "Danh từ, Động từ, Tính từ, Phó từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 1)"
  },
  {
    "vocab": "广播",
    "pinyin": "guǎngbō",
    "meaning": "phát tin",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6), 11. Công việc & Nghề nghiệp (Phần 2)"
  },
  {
    "vocab": "广告",
    "pinyin": "guǎnggào",
    "meaning": "quảng cáo",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6)"
  },
  {
    "vocab": "关键",
    "pinyin": "guānjiàn",
    "meaning": "trọng tâm, then chốt",
    "type": "Danh từ, Tính từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 2)"
  },
  {
    "vocab": "观看",
    "pinyin": "guānkàn",
    "meaning": "theo dõi",
    "type": "Động từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "管理",
    "pinyin": "guǎnlǐ",
    "meaning": "quản lý",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6)"
  },
  {
    "vocab": "观众",
    "pinyin": "guānzhòng",
    "meaning": "khán giả",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2), 11. Công việc & Nghề nghiệp (Phần 2)"
  },
  {
    "vocab": "规定",
    "pinyin": "guīdìng",
    "meaning": "Quy định",
    "type": "Động từ, Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6)"
  },
  {
    "vocab": "估计",
    "pinyin": "gūjì",
    "meaning": "ước lượng",
    "type": "Động từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "顾客",
    "pinyin": "gùkè",
    "meaning": "khách hàng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2), 11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "鼓励",
    "pinyin": "gǔlì",
    "meaning": "khuyến khích",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1)"
  },
  {
    "vocab": "姑娘",
    "pinyin": "gūniang",
    "meaning": "cô gái",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2)"
  },
  {
    "vocab": "过程",
    "pinyin": "guòchéng",
    "meaning": "quá trình",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6), 11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "国籍",
    "pinyin": "guójí",
    "meaning": "Quốc tịch",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6)"
  },
  {
    "vocab": "国际",
    "pinyin": "guójì",
    "meaning": "tính quốc tế",
    "type": "Tính từ, Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 6)"
  },
  {
    "vocab": "果汁",
    "pinyin": "guǒzhī",
    "meaning": "nước ép",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7)"
  },
  {
    "vocab": "故意",
    "pinyin": "gùyì",
    "meaning": "cố ý",
    "type": "Phó từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7)"
  },
  {
    "vocab": "害羞",
    "pinyin": "hàixiū",
    "meaning": "xấu hổ",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1), 12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "海洋",
    "pinyin": "hǎiyáng",
    "meaning": "đại dương",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7)"
  },
  {
    "vocab": "汗",
    "pinyin": "hàn",
    "meaning": "mồ hôi",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7)"
  },
  {
    "vocab": "喊",
    "pinyin": "hǎn",
    "meaning": "kêu/ gọi",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7)"
  },
  {
    "vocab": "航班",
    "pinyin": "hángbān",
    "meaning": "chuyến bay",
    "type": "Danh từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "寒假",
    "pinyin": "hánjià",
    "meaning": "kỳ nghỉ đông",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "寒冷",
    "pinyin": "hánlěng",
    "meaning": "lạnh lẽo",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1), 12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "好处",
    "pinyin": "hǎochu",
    "meaning": "lợi ích",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7)"
  },
  {
    "vocab": "好好",
    "pinyin": "hǎohāo",
    "meaning": "Tốt",
    "type": "Tính từ, Phó từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "好笑",
    "pinyin": "hǎoxiào",
    "meaning": "buồn cười",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1)"
  },
  {
    "vocab": "合格",
    "pinyin": "hégé",
    "meaning": "đạt tiêu chuẩn",
    "type": "Tính từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7)"
  },
  {
    "vocab": "盒子",
    "pinyin": "hézi",
    "meaning": "Hộp",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7)"
  },
  {
    "vocab": "红包",
    "pinyin": "hóngbāo",
    "meaning": "Phong bì đỏ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "厚",
    "pinyin": "hòu",
    "meaning": "dày",
    "type": "Tính từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7)"
  },
  {
    "vocab": "后悔",
    "pinyin": "hòuhuǐ",
    "meaning": "hối tiếc",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7)"
  },
  {
    "vocab": "坏处",
    "pinyin": "huàichu",
    "meaning": "làm hại",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "怀疑",
    "pinyin": "huáiyí",
    "meaning": "Nghi ngờ",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "话剧",
    "pinyin": "huàjù",
    "meaning": "vở kịch sân khấu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7)"
  },
  {
    "vocab": "环保",
    "pinyin": "huánbǎo",
    "meaning": "Thân thiện với môi trường",
    "type": "Danh từ, Tính từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "换乘",
    "pinyin": "huànchéng",
    "meaning": "Chuyển khoản",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7)"
  },
  {
    "vocab": "回复",
    "pinyin": "huífù",
    "meaning": "trả lời, phản hồi",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "回信",
    "pinyin": "huíxìn",
    "meaning": "viết thư hồi âm",
    "type": "Động từ, Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7)"
  },
  {
    "vocab": "回忆",
    "pinyin": "huíyì",
    "meaning": "nhớ",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "会员",
    "pinyin": "huìyuán",
    "meaning": "thành viên",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "互联网",
    "pinyin": "hùliánwǎng",
    "meaning": "internet",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "活",
    "pinyin": "huó",
    "meaning": "sống",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7), 15. Tự nhiên (Phần 1)"
  },
  {
    "vocab": "货",
    "pinyin": "huò",
    "meaning": "hàng hóa",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "火",
    "pinyin": "huǒ",
    "meaning": "ngọn lửa",
    "type": "Danh từ, Tính từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7), 15. Tự nhiên (Phần 1)"
  },
  {
    "vocab": "获得",
    "pinyin": "huòdé",
    "meaning": "lấy",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7)"
  },
  {
    "vocab": "活动",
    "pinyin": "huódòng",
    "meaning": "Hoạt động",
    "type": "Động từ, Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7)"
  },
  {
    "vocab": "获奖",
    "pinyin": "huòjiǎng",
    "meaning": "nhận giải thưởng",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7)"
  },
  {
    "vocab": "活泼",
    "pinyin": "huópō",
    "meaning": "sống động",
    "type": "Tính từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "获取",
    "pinyin": "huòqǔ",
    "meaning": "đạt được",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7), 11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "忽然",
    "pinyin": "hūrán",
    "meaning": "đột nhiên",
    "type": "Phó từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 7)"
  },
  {
    "vocab": "护士",
    "pinyin": "hùshi",
    "meaning": "Y tá",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "互相",
    "pinyin": "hùxiāng",
    "meaning": "nhau",
    "type": "Phó từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8), 15. Tự nhiên (Phần 1)"
  },
  {
    "vocab": "既",
    "pinyin": "jì",
    "meaning": "đã...(thì)",
    "type": "Phó từ, Liên từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "寄",
    "pinyin": "jì",
    "meaning": "gửi",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8)"
  },
  {
    "vocab": "假",
    "pinyin": "jiǎ",
    "meaning": "Giả mạo",
    "type": "Tính từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8)"
  },
  {
    "vocab": "加班",
    "pinyin": "jiābān",
    "meaning": "làm thêm giờ",
    "type": "Động từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1), 11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "价格",
    "pinyin": "jiàgé",
    "meaning": "giá",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8)"
  },
  {
    "vocab": "家具",
    "pinyin": "jiājù",
    "meaning": "nội thất",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8)"
  },
  {
    "vocab": "加快",
    "pinyin": "jiākuài",
    "meaning": "tăng tốc",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8), 8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "减",
    "pinyin": "jiǎn",
    "meaning": "giảm bớt",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8)"
  },
  {
    "vocab": "降",
    "pinyin": "jiàng",
    "meaning": "làm rơi",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8)"
  },
  {
    "vocab": "奖",
    "pinyin": "jiǎng",
    "meaning": "phần thưởng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8), 11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "江",
    "pinyin": "jiāng",
    "meaning": "Dòng sông",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 1)"
  },
  {
    "vocab": "将",
    "pinyin": "jiāng",
    "meaning": "Sẽ",
    "type": "Giới từ, Phó từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "降低",
    "pinyin": "jiàngdī",
    "meaning": "giảm bớt",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8)"
  },
  {
    "vocab": "降价",
    "pinyin": "jiàngjià",
    "meaning": "Giảm giá",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8)"
  },
  {
    "vocab": "奖金",
    "pinyin": "jiǎngjīn",
    "meaning": "thưởng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8)"
  },
  {
    "vocab": "将来",
    "pinyin": "jiānglái",
    "meaning": "tương lai",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "降落",
    "pinyin": "jiàngluò",
    "meaning": "hạ cánh",
    "type": "Động từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "降温",
    "pinyin": "jiàngwēn",
    "meaning": "Làm mát",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8), 15. Tự nhiên (Phần 1)"
  },
  {
    "vocab": "奖学金",
    "pinyin": "jiǎngxuéjīn",
    "meaning": "học bổng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2)"
  },
  {
    "vocab": "将要",
    "pinyin": "jiāngyào",
    "meaning": "Sắp sửa",
    "type": "Phó từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8)"
  },
  {
    "vocab": "减轻",
    "pinyin": "jiǎnqīng",
    "meaning": "giảm nhẹ",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8)"
  },
  {
    "vocab": "减少",
    "pinyin": "jiǎnshǎo",
    "meaning": "giảm bớt",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8)"
  },
  {
    "vocab": "健身",
    "pinyin": "jiànshēn",
    "meaning": "rèn luyện sức khỏe",
    "type": "Động từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "健身房",
    "pinyin": "jiànshēnfáng",
    "meaning": "Phòng tập thể dục",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 1), 7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "建议",
    "pinyin": "jiànyì",
    "meaning": "gợi ý",
    "type": "Động từ, Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8)"
  },
  {
    "vocab": "交",
    "pinyin": "jiāo",
    "meaning": "nộp",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8)"
  },
  {
    "vocab": "骄傲",
    "pinyin": "jiāo'ào",
    "meaning": "kiêu ngạo/ sự kiêu ngạo",
    "type": "Tính từ, Danh từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1), 12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "交警",
    "pinyin": "jiāojǐng",
    "meaning": "cảnh sát giao thông",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "教练",
    "pinyin": "jiàoliàn",
    "meaning": "huấn luyện viên",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8)"
  },
  {
    "vocab": "交流",
    "pinyin": "jiāoliú",
    "meaning": "giao tiếp",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 8), 11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "郊区",
    "pinyin": "jiāoqū",
    "meaning": "vùng ngoại ô",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "教师",
    "pinyin": "jiàoshī",
    "meaning": "Giáo viên",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "教授",
    "pinyin": "jiàoshòu",
    "meaning": "giáo sư",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2), 11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "交通",
    "pinyin": "jiāotōng",
    "meaning": "giao thông",
    "type": "Danh từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "教学",
    "pinyin": "jiàoxué",
    "meaning": "giảng dạy",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "教育",
    "pinyin": "jiàoyù",
    "meaning": "giáo dục",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "叫作",
    "pinyin": "jiàozuò",
    "meaning": "Gọi điện",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "价钱",
    "pinyin": "jiàqian",
    "meaning": "Giá",
    "type": "Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "加强",
    "pinyin": "jiāqiáng",
    "meaning": "tăng cường",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "假日",
    "pinyin": "jiàrì",
    "meaning": "ngày lễ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "加入",
    "pinyin": "jiārù",
    "meaning": "tham gia",
    "type": "Động từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2)"
  },
  {
    "vocab": "加上",
    "pinyin": "jiāshàng",
    "meaning": "Thêm vào đó",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "家庭",
    "pinyin": "jiātíng",
    "meaning": "gia đình",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2)"
  },
  {
    "vocab": "家乡",
    "pinyin": "jiāxiāng",
    "meaning": "quê hương",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "加油",
    "pinyin": "jiāyóu",
    "meaning": "Thôi nào",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1)"
  },
  {
    "vocab": "加油站",
    "pinyin": "jiāyóuzhàn",
    "meaning": "Trạm xăng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "家长",
    "pinyin": "jiācháng",
    "meaning": "Cha mẹ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2)"
  },
  {
    "vocab": "基本",
    "pinyin": "jīběn",
    "meaning": "Nền tảng",
    "type": "Tính từ, Danh từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "基本上",
    "pinyin": "jīběnshang",
    "meaning": "về cơ bản",
    "type": "Phó từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "基础",
    "pinyin": "jīchǔ",
    "meaning": "Căn cứ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "激动",
    "pinyin": "jīdòng",
    "meaning": "Hào hứng",
    "type": "Tính từ, Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1)"
  },
  {
    "vocab": "街道",
    "pinyin": "jiēdào",
    "meaning": "đường phố",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "结果",
    "pinyin": "jiéguǒ",
    "meaning": "kết quả",
    "type": "Danh từ, Liên từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "节假日",
    "pinyin": "jiéjiàrì",
    "meaning": "Ngày lễ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "解释",
    "pinyin": "jiěshì",
    "meaning": "giải thích",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "接受",
    "pinyin": "jiēshòu",
    "meaning": "chấp nhận",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1)"
  },
  {
    "vocab": "节约",
    "pinyin": "jiéyuē",
    "meaning": "cứu",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "结账",
    "pinyin": "jiézhàng",
    "meaning": "thanh toán",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "接着",
    "pinyin": "jiēzhe",
    "meaning": "sau đó",
    "type": "Động từ, Liên từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "计划",
    "pinyin": "jìhuà",
    "meaning": "kế hoạch",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "积极",
    "pinyin": "jījí",
    "meaning": "tích cực",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1)"
  },
  {
    "vocab": "积累",
    "pinyin": "jīlěi",
    "meaning": "sự tích lũy",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "仅",
    "pinyin": "jǐn",
    "meaning": "chỉ một",
    "type": "Phó từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "精彩",
    "pinyin": "jīngcǎi",
    "meaning": "Tuyệt vời",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "警察",
    "pinyin": "jǐngchá",
    "meaning": "cảnh sát",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "景点",
    "pinyin": "jǐngdiǎn",
    "meaning": "điểm tham quan",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "经济",
    "pinyin": "jīngjì",
    "meaning": "kinh tế",
    "type": "Danh từ, Tính từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "京剧",
    "pinyin": "jīngjù",
    "meaning": "Kinh kịch Bắc Kinh",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "经历",
    "pinyin": "jīnglì",
    "meaning": "kinh nghiệm",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "景区",
    "pinyin": "jǐngqū",
    "meaning": "Khu vực danh lam thắng cảnh",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 1), 7. Địa điểm & Nơi chốn (Phần 1)"
  },
  {
    "vocab": "竟然",
    "pinyin": "jìngrán",
    "meaning": "thế mà, vậy mà lại",
    "type": "Phó từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1), 14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "景色",
    "pinyin": "jǐngsè",
    "meaning": "xem",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 1)"
  },
  {
    "vocab": "尽管",
    "pinyin": "jǐnguǎn",
    "meaning": "mặc dù",
    "type": "Liên từ, Phó từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 1)"
  },
  {
    "vocab": "经验",
    "pinyin": "jīngyàn",
    "meaning": "kinh nghiệm",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "竞争",
    "pinyin": "jìngzhēng",
    "meaning": "cạnh tranh",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 2), 11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "镜子",
    "pinyin": "jìngzi",
    "meaning": "Gương",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "今后",
    "pinyin": "jīnhòu",
    "meaning": "từ bây giờ trở đi",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "仅仅",
    "pinyin": "jǐnjǐn",
    "meaning": "chỉ một",
    "type": "Phó từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "进入",
    "pinyin": "jìnrù",
    "meaning": "Đi vào",
    "type": "Động từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "进行",
    "pinyin": "jìnxíng",
    "meaning": "chỉ đạo",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "紧张",
    "pinyin": "jǐnzhāng",
    "meaning": "lo lắng",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1)"
  },
  {
    "vocab": "禁止",
    "pinyin": "jìnzhǐ",
    "meaning": "cấm",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "既然",
    "pinyin": "jìrán",
    "meaning": "bây giờ thì",
    "type": "Liên từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "及时",
    "pinyin": "jíshí",
    "meaning": "kịp thời",
    "type": "Tính từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "即使",
    "pinyin": "jíshǐ",
    "meaning": "mặc dù",
    "type": "Liên từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "技术",
    "pinyin": "jìshù",
    "meaning": "công nghệ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "究竟",
    "pinyin": "jiūjìng",
    "meaning": "sau tất cả",
    "type": "Phó từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "就是",
    "pinyin": "jiùshì",
    "meaning": "tức là",
    "type": "Phó từ, Liên từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "继续",
    "pinyin": "jìxù",
    "meaning": "Tiếp tục",
    "type": "Động từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "记者",
    "pinyin": "jìzhě",
    "meaning": "phóng viên",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "聚",
    "pinyin": "jù",
    "meaning": "Tập trung",
    "type": "Động từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "举",
    "pinyin": "jǔ",
    "meaning": "giơ lên",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "举办",
    "pinyin": "jǔbàn",
    "meaning": "giữ",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "聚餐",
    "pinyin": "jùcān",
    "meaning": "bữa tiệc tối",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "聚会",
    "pinyin": "jùhuì",
    "meaning": "đoàn tụ",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "拒绝",
    "pinyin": "jùjué",
    "meaning": "từ chối",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1)"
  },
  {
    "vocab": "距离",
    "pinyin": "jùlí",
    "meaning": "khoảng cách",
    "type": "Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "举例",
    "pinyin": "jǔlì",
    "meaning": "Ví dụ",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "举行",
    "pinyin": "jǔxíng",
    "meaning": "Giữ",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "剧院",
    "pinyin": "jùyuàn",
    "meaning": "nhà hát",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "开玩笑",
    "pinyin": "kāiwánxiào",
    "meaning": "nói đùa",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "看法",
    "pinyin": "kànfǎ",
    "meaning": "cách nhìn",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "烤",
    "pinyin": "kǎo",
    "meaning": "nướng",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "考虑",
    "pinyin": "kǎolǜ",
    "meaning": "cân nhắc, suy nghĩ",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "考生",
    "pinyin": "kǎoshēng",
    "meaning": "Ứng viên",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "咳",
    "pinyin": "ké",
    "meaning": "ho",
    "type": "Thán từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "克",
    "pinyin": "kè",
    "meaning": "gram",
    "type": "Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "棵",
    "pinyin": "kē",
    "meaning": "cây",
    "type": "Lượng từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "课程",
    "pinyin": "kèchéng",
    "meaning": "khóa học",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "科技",
    "pinyin": "kējì",
    "meaning": "khoa học và công nghệ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "肯定",
    "pinyin": "kěndìng",
    "meaning": "khẳng định",
    "type": "Động từ, Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1)"
  },
  {
    "vocab": "客气",
    "pinyin": "kèqi",
    "meaning": "lịch sự",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 1)"
  },
  {
    "vocab": "咳嗽",
    "pinyin": "késou",
    "meaning": "ho",
    "type": "Động từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "课堂",
    "pinyin": "kètáng",
    "meaning": "lớp học",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "客厅",
    "pinyin": "kètīng",
    "meaning": "phòng khách",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "可惜",
    "pinyin": "kěxī",
    "meaning": "đáng tiếc",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "科学",
    "pinyin": "kēxué",
    "meaning": "khoa học",
    "type": "Danh từ, Tính từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "空",
    "pinyin": "kōng",
    "meaning": "vô giá trị",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "空",
    "pinyin": "kōng",
    "meaning": "vô giá trị",
    "type": "Phó từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "恐怕",
    "pinyin": "kǒngpà",
    "meaning": "sợ rằng",
    "type": "Phó từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "空气",
    "pinyin": "kōngqì",
    "meaning": "Không khí",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 1)"
  },
  {
    "vocab": "口语",
    "pinyin": "kǒuyǔ",
    "meaning": "Ngôn ngữ nói",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "苦",
    "pinyin": "kǔ",
    "meaning": "vị đắng",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "快餐",
    "pinyin": "kuàicān",
    "meaning": "thức ăn nhanh",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "快递",
    "pinyin": "kuàidì",
    "meaning": "giao hàng nhanh",
    "type": "Danh từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "快速",
    "pinyin": "kuàisù",
    "meaning": "nhanh",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 2), 8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "困",
    "pinyin": "kùn",
    "meaning": "Buồn ngủ",
    "type": "Tính từ, Động từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "困难",
    "pinyin": "kùnnán",
    "meaning": "khó khăn",
    "type": "Danh từ, Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "辣",
    "pinyin": "là",
    "meaning": "cay",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "拉",
    "pinyin": "lā",
    "meaning": "lôi kéo",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "来不及",
    "pinyin": "láibují",
    "meaning": "Đã quá muộn",
    "type": "Động từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "来得及",
    "pinyin": "láidejí",
    "meaning": "Vẫn chưa quá muộn",
    "type": "Động từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "垃圾",
    "pinyin": "lājī",
    "meaning": "Rác",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "懒",
    "pinyin": "lǎn",
    "meaning": "lười",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "浪费",
    "pinyin": "làngfèi",
    "meaning": "lãng phí",
    "type": "Động từ, Tính từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "浪漫",
    "pinyin": "làngmàn",
    "meaning": "lãng mạn",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "老虎",
    "pinyin": "lǎohǔ",
    "meaning": "con hổ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 1)"
  },
  {
    "vocab": "老家",
    "pinyin": "lǎojiā",
    "meaning": "quê hương",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "老年",
    "pinyin": "lǎonián",
    "meaning": "người già",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "老是",
    "pinyin": "lǎoshi",
    "meaning": "luôn luôn",
    "type": "Phó từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "冷静",
    "pinyin": "lěngjìng",
    "meaning": "điềm tĩnh",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "俩",
    "pinyin": "liǎ",
    "meaning": "cả hai",
    "type": "Số từ, Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "连",
    "pinyin": "lián",
    "meaning": "thậm chí",
    "type": "Liên từ, Giới từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "凉",
    "pinyin": "liáng",
    "meaning": "lạnh lẽo",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 2)"
  },
  {
    "vocab": "量",
    "pinyin": "liàng",
    "meaning": "Số lượng",
    "type": "Động từ, Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 1)"
  },
  {
    "vocab": "亮",
    "pinyin": "liàng",
    "meaning": "Sáng",
    "type": "Tính từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2), 12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "两",
    "pinyin": "liǎng",
    "meaning": "hai",
    "type": "Số từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "联系",
    "pinyin": "liánxì",
    "meaning": "kết nối",
    "type": "Động từ, Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "列",
    "pinyin": "liè",
    "meaning": "Danh sách",
    "type": "Lượng từ, Động từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "理发",
    "pinyin": "lǐfà",
    "meaning": "Cắt tóc",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "厉害",
    "pinyin": "lìhai",
    "meaning": "lợi hại",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "理解",
    "pinyin": "lǐjiě",
    "meaning": "hiểu",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "礼貌",
    "pinyin": "lǐmào",
    "meaning": "lịch sự",
    "type": "Danh từ, Tính từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "另",
    "pinyin": "lìng",
    "meaning": "Khác",
    "type": "Đại từ, Phó từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "零下",
    "pinyin": "língxià",
    "meaning": "dưới không",
    "type": "Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "零花钱",
    "pinyin": "línghuāqián",
    "meaning": "Tiền tiêu vặt",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 1)"
  },
  {
    "vocab": "零钱",
    "pinyin": "língqián",
    "meaning": "tiền lẻ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "零食",
    "pinyin": "língshí",
    "meaning": "đồ ăn vặt",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "另外",
    "pinyin": "lìngwài",
    "meaning": "Ngoài ra",
    "type": "Phó từ, Tính từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "力气",
    "pinyin": "lìqì",
    "meaning": "sức mạnh",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "例如",
    "pinyin": "lìrú",
    "meaning": "Ví dụ",
    "type": "Động từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "留",
    "pinyin": "liú",
    "meaning": "Giữ",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "流",
    "pinyin": "liú",
    "meaning": "chảy",
    "type": "Động từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "流利",
    "pinyin": "liúlì",
    "meaning": "thông thạo",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "留下",
    "pinyin": "liúxià",
    "meaning": "lưu lại, để lại",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "流行",
    "pinyin": "liúxíng",
    "meaning": "phổ biến/ sự phổ biến",
    "type": "Tính từ, Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 9)"
  },
  {
    "vocab": "理想",
    "pinyin": "lǐxiǎng",
    "meaning": "lý tưởng",
    "type": "Danh từ, Tính từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "例子",
    "pinyin": "lìzi",
    "meaning": "ví dụ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "乱",
    "pinyin": "luàn",
    "meaning": "sự hỗn loạn",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "旅馆",
    "pinyin": "lǚguǎn",
    "meaning": "nhà nghỉ, khách sạn bình dân",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "路过",
    "pinyin": "lùguò",
    "meaning": "Đi ngang qua",
    "type": "Động từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "旅客",
    "pinyin": "lǚkè",
    "meaning": "du khách",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "落",
    "pinyin": "luò",
    "meaning": "rơi/ rụng",
    "type": "Động từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "律师",
    "pinyin": "lǜshī",
    "meaning": "luật sư",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "旅行",
    "pinyin": "lǚxíng",
    "meaning": "du lịch",
    "type": "Động từ, Danh từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "麻烦",
    "pinyin": "máfan",
    "meaning": "rắc rối",
    "type": "Tính từ, Danh từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "满",
    "pinyin": "mǎn",
    "meaning": "Đầy",
    "type": "Tính từ, Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "馒头",
    "pinyin": "mántou",
    "meaning": "Bánh bao hấp",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "毛巾",
    "pinyin": "máojīn",
    "meaning": "cái khăn lau",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "毛衣",
    "pinyin": "máoyī",
    "meaning": "áo len",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "帽子",
    "pinyin": "màozi",
    "meaning": "mũ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "美",
    "pinyin": "měi",
    "meaning": "đẹp",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "美好",
    "pinyin": "měihǎo",
    "meaning": "Tốt",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "美景",
    "pinyin": "měijǐng",
    "meaning": "Cảnh đẹp",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "美丽",
    "pinyin": "měilì",
    "meaning": "sắc đẹp",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "美食",
    "pinyin": "měishí",
    "meaning": "thức ăn hảo hạng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "梦",
    "pinyin": "mèng",
    "meaning": "giấc mơ",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "梦想",
    "pinyin": "mèngxiǎng",
    "meaning": "ước mơ",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "面对",
    "pinyin": "miànduì",
    "meaning": "đối mặt",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "免费",
    "pinyin": "miǎnfèi",
    "meaning": "miễn phí",
    "type": "Tính từ, Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "面试",
    "pinyin": "miànshì",
    "meaning": "phỏng vấn",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "秒",
    "pinyin": "miǎo",
    "meaning": "giây",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "密码",
    "pinyin": "mìmǎ",
    "meaning": "mật khẩu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "民族",
    "pinyin": "mínzú",
    "meaning": "dân tộc",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "末",
    "pinyin": "mò",
    "meaning": "kết thúc",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 1)"
  },
  {
    "vocab": "目标",
    "pinyin": "mùbiāo",
    "meaning": "Mục tiêu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "目的",
    "pinyin": "mùdì",
    "meaning": "Mục đích",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "目的地",
    "pinyin": "mùdìdì",
    "meaning": "điểm đến",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "母女",
    "pinyin": "mǔnǚ",
    "meaning": "Mẹ và con gái",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "目前",
    "pinyin": "mùqián",
    "meaning": "hiện tại",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "母亲",
    "pinyin": "mǔqīn",
    "meaning": "Mẹ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "母子",
    "pinyin": "mǔzǐ",
    "meaning": "Mẹ và con",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "耐心",
    "pinyin": "nàixīn",
    "meaning": "tính kiên nhẫn",
    "type": "Danh từ, Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "南部",
    "pinyin": "nánbù",
    "meaning": "Phía nam",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí, 7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "难道",
    "pinyin": "nándào",
    "meaning": "chẳng lẽ là...?",
    "type": "Phó từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "男士",
    "pinyin": "nánshì",
    "meaning": "Đàn ông",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "难受",
    "pinyin": "nánshòu",
    "meaning": "Thật khó chịu!",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "难忘",
    "pinyin": "nánwàng",
    "meaning": "khó quên",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "男性",
    "pinyin": "nánxìng",
    "meaning": "nam giới",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "内",
    "pinyin": "nèi",
    "meaning": "Bên trong",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "内容",
    "pinyin": "nèiróng",
    "meaning": "nội dung",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "内心",
    "pinyin": "nèixīn",
    "meaning": "trong lòng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "能否",
    "pinyin": "néngfǒu",
    "meaning": "Có thể",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "能够",
    "pinyin": "nénggòu",
    "meaning": "Có thể",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "能力",
    "pinyin": "nénglì",
    "meaning": "khả năng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "嗯",
    "pinyin": "en",
    "meaning": "Ừm",
    "type": "Thán từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "年底",
    "pinyin": "niándǐ",
    "meaning": "Cuối năm",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "年龄",
    "pinyin": "niánlíng",
    "meaning": "tuổi",
    "type": "Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "弄",
    "pinyin": "nòng",
    "meaning": "thao tác/ làm",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "农村",
    "pinyin": "nóngcūn",
    "meaning": "khu vực nông thôn",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "暖和",
    "pinyin": "nuǎnhuo",
    "meaning": "ấm",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "女性",
    "pinyin": "nǚxìng",
    "meaning": "nữ giới",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "偶尔",
    "pinyin": "ǒuěr",
    "meaning": "Thỉnh thoảng",
    "type": "Phó từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "排",
    "pinyin": "pái",
    "meaning": "xếp (hàng)",
    "type": "Động từ, Lượng từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "牌",
    "pinyin": "pái",
    "meaning": "Thẻ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "拍",
    "pinyin": "pāi",
    "meaning": "chụp",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "排队",
    "pinyin": "páiduì",
    "meaning": "xếp hàng",
    "type": "Động từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "排球",
    "pinyin": "páiqiú",
    "meaning": "bóng chuyền",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "牌子",
    "pinyin": "páizi",
    "meaning": "thương hiệu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "判断",
    "pinyin": "pànduàn",
    "meaning": "phán đoán",
    "type": "Động từ, Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 2)"
  },
  {
    "vocab": "陪",
    "pinyin": "péi",
    "meaning": "đi kèm",
    "type": "Động từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "片",
    "pinyin": "piàn",
    "meaning": "cái",
    "type": "Lượng từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "篇",
    "pinyin": "piān",
    "meaning": "Chương",
    "type": "Lượng từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "皮肤",
    "pinyin": "pífū",
    "meaning": "da",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "平常",
    "pinyin": "píngcháng",
    "meaning": "thường xuyên",
    "type": "Tính từ, Danh từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "乒乓球",
    "pinyin": "pīngpāngqiú",
    "meaning": "bóng bàn",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "批评",
    "pinyin": "pīpíng",
    "meaning": "phê bình, đánh giá",
    "type": "Động từ, Danh từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "脾气",
    "pinyin": "píqi",
    "meaning": "tính khí",
    "type": "Danh từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "皮鞋",
    "pinyin": "píxié",
    "meaning": "giày da",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "破",
    "pinyin": "pò",
    "meaning": "phá vỡ",
    "type": "Tính từ, Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "普遍",
    "pinyin": "pǔbiàn",
    "meaning": "phổ biến",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "葡萄",
    "pinyin": "pútao",
    "meaning": "Quả nho",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "葡萄酒",
    "pinyin": "pútaojiǔ",
    "meaning": "rượu nho",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "普通",
    "pinyin": "pǔtōng",
    "meaning": "bình thường",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "普通话",
    "pinyin": "pǔtōnghuà",
    "meaning": "Tiếng phổ thông",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "气",
    "pinyin": "qì",
    "meaning": "khí",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 1)"
  },
  {
    "vocab": "期",
    "pinyin": "qī",
    "meaning": "kỳ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "前方",
    "pinyin": "qiánfāng",
    "meaning": "Phía trước",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "强",
    "pinyin": "qiáng",
    "meaning": "mạnh mẽ",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "前后",
    "pinyin": "qiánhòu",
    "meaning": "trước và sau",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "千克",
    "pinyin": "qiānkè",
    "meaning": "kilogam",
    "type": "Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "千万",
    "pinyin": "qiānwàn",
    "meaning": "Hàng chục triệu",
    "type": "Số từ, Giới từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "签证",
    "pinyin": "qiānzhèng",
    "meaning": "visa",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "桥",
    "pinyin": "qiáo",
    "meaning": "cầu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "巧",
    "pinyin": "qiǎo",
    "meaning": "khéo léo",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "敲",
    "pinyin": "qiāo",
    "meaning": "đánh, gõ",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "巧克力",
    "pinyin": "qiǎokèlì",
    "meaning": "sôcôla",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "其次",
    "pinyin": "qícì",
    "meaning": "Ngoài ra",
    "type": "Liên từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "起到",
    "pinyin": "qǐdào",
    "meaning": "Đóng một vai trò",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "气候",
    "pinyin": "qìhòu",
    "meaning": "khí hậu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "期末",
    "pinyin": "qīmò",
    "meaning": "Bài kiểm tra cuối kỳ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "琴",
    "pinyin": "qín",
    "meaning": "đàn",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "轻",
    "pinyin": "qīng",
    "meaning": "nhẹ",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "情况",
    "pinyin": "qíngkuàng",
    "meaning": "Tình trạng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "青年",
    "pinyin": "qīngnián",
    "meaning": "thiếu niên",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 3)"
  },
  {
    "vocab": "轻松",
    "pinyin": "qīngsōng",
    "meaning": "nhẹ nhàng",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "庆祝",
    "pinyin": "qìngzhù",
    "meaning": "kính chúc",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "亲戚",
    "pinyin": "qīnqi",
    "meaning": "họ hàng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "汽水",
    "pinyin": "qìshuǐ",
    "meaning": "nước ngọt",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "球队",
    "pinyin": "qiúduì",
    "meaning": "đội bóng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "球迷",
    "pinyin": "qiúmí",
    "meaning": "người hâm mộ đấu bóng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "气温",
    "pinyin": "qìwēn",
    "meaning": "Nhiệt độ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "其中",
    "pinyin": "qízhōng",
    "meaning": "trong đó",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "期中",
    "pinyin": "qīzhōng",
    "meaning": "Giữa kỳ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "取",
    "pinyin": "qǔ",
    "meaning": "lấy",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "区",
    "pinyin": "qū",
    "meaning": "khu vưc",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "全",
    "pinyin": "quán",
    "meaning": "toàn bộ",
    "type": "Tính từ, Phó từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2), 12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "全部",
    "pinyin": "quánbù",
    "meaning": "tất cả",
    "type": "Danh từ, Tính từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "全都",
    "pinyin": "quándōu",
    "meaning": "tất cả đều",
    "type": "Phó từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "全球",
    "pinyin": "quánqiú",
    "meaning": "trên toàn thế giới",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "全身",
    "pinyin": "quánshēn",
    "meaning": "toàn thân",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "区别",
    "pinyin": "qūbié",
    "meaning": "sự khác biệt",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "取得",
    "pinyin": "qǔdé",
    "meaning": "Đạt được",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "却",
    "pinyin": "què",
    "meaning": "Nhưng",
    "type": "Phó từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "缺",
    "pinyin": "quē",
    "meaning": "thiếu",
    "type": "Động từ, Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "缺点",
    "pinyin": "quēdiǎn",
    "meaning": "khuyết điểm",
    "type": "Danh từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "缺少",
    "pinyin": "quēshǎo",
    "meaning": "Thiếu",
    "type": "Động từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "确实",
    "pinyin": "quèshí",
    "meaning": "Thực ra",
    "type": "Tính từ, Phó từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "取消",
    "pinyin": "qǔxiāo",
    "meaning": "Hủy bỏ",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "然而",
    "pinyin": "rán'ér",
    "meaning": "Tuy nhiên",
    "type": "Liên từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "热闹",
    "pinyin": "rènao",
    "meaning": "sống động",
    "type": "Tính từ, Danh từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "仍",
    "pinyin": "réng",
    "meaning": "vẫn",
    "type": "Phó từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "扔",
    "pinyin": "rēng",
    "meaning": "Ném",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "仍然",
    "pinyin": "réngrán",
    "meaning": "vẫn",
    "type": "Phó từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "任何",
    "pinyin": "rènhé",
    "meaning": "bất kì",
    "type": "Đại từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "人生",
    "pinyin": "rénshēng",
    "meaning": "Mạng sống",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "人数",
    "pinyin": "rénshù",
    "meaning": "Số người",
    "type": "Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "任务",
    "pinyin": "rènwu",
    "meaning": "Nhiệm vụ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "人员",
    "pinyin": "rényuán",
    "meaning": "nhân viên",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "日常",
    "pinyin": "rìcháng",
    "meaning": "hằng ngày",
    "type": "Danh từ, Tính từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "日记",
    "pinyin": "rìjì",
    "meaning": "nhật ký",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "日期",
    "pinyin": "rìqī",
    "meaning": "ngày tháng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "日子",
    "pinyin": "rìzi",
    "meaning": "ngày",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "入",
    "pinyin": "rù",
    "meaning": "đi vào",
    "type": "Động từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "入口",
    "pinyin": "rùkǒu",
    "meaning": "Cổng vào",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "入学",
    "pinyin": "rùxué",
    "meaning": "Nhập học",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "入住",
    "pinyin": "rùzhù",
    "meaning": "Đăng ký vào",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "散步",
    "pinyin": "sànbù",
    "meaning": "đi bộ",
    "type": "Động từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "扫码",
    "pinyin": "sǎomǎ",
    "meaning": "Quét mã",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "森林",
    "pinyin": "sēnlín",
    "meaning": "rừng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "商量",
    "pinyin": "shāngliang",
    "meaning": "bàn luận",
    "type": "Động từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "上门",
    "pinyin": "shàngmén",
    "meaning": "Dịch vụ tận nhà",
    "type": "Động từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "商品",
    "pinyin": "shāngpǐn",
    "meaning": "hàng hóa",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "伤心",
    "pinyin": "shāngxīn",
    "meaning": "buồn",
    "type": "Tính từ, Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "稍",
    "pinyin": "shāo",
    "meaning": "một chút",
    "type": "Phó từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "少见",
    "pinyin": "shǎojiàn",
    "meaning": "Hiếm",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "少量",
    "pinyin": "shǎoliàng",
    "meaning": "số lượng nhỏ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "少年",
    "pinyin": "shàonián",
    "meaning": "thiếu niên",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "少数",
    "pinyin": "shǎoshù",
    "meaning": "thiểu số",
    "type": "Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "稍微",
    "pinyin": "shāowēi",
    "meaning": "một chút",
    "type": "Phó từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "社会",
    "pinyin": "shèhuì",
    "meaning": "Xã hội",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "身",
    "pinyin": "shēn",
    "meaning": "Thân thể, thân",
    "type": "Danh từ, Lượng từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "深",
    "pinyin": "shēn",
    "meaning": "Sâu",
    "type": "Tính từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "身份证",
    "pinyin": "shēnfènzhèng",
    "meaning": "Chứng minh nhân dân/Căn cước công dân",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "剩",
    "pinyin": "shèng",
    "meaning": "Thừa, còn lại",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "省",
    "pinyin": "shěng",
    "meaning": "Tỉnh",
    "type": "Danh từ , Động từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "生",
    "pinyin": "shēng",
    "meaning": "Sinh, đẻ, sống",
    "type": "Động từ , Tính từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "生",
    "pinyin": "shēng",
    "meaning": "Sống, tươi (chưa nấu chín)",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "生命",
    "pinyin": "shēngmìng",
    "meaning": "Sinh mệnh, cuộc sống",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "生意",
    "pinyin": "shēngyi",
    "meaning": "Việc buôn bán, kinh doanh",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "申请",
    "pinyin": "shēnqǐng",
    "meaning": "Đăng ký, xin, yêu cầu",
    "type": "Động từ , Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "甚至",
    "pinyin": "shènzhì",
    "meaning": "Thậm chí",
    "type": "Phó từ , Liên từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "摄氏度",
    "pinyin": "shèshìdù",
    "meaning": "Độ C",
    "type": "Danh từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 3)"
  },
  {
    "vocab": "使",
    "pinyin": "shǐ",
    "meaning": "Khiến cho, sai khiến",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "失败",
    "pinyin": "shībài",
    "meaning": "Thất bại",
    "type": "Động từ , Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "市场",
    "pinyin": "shìchǎng",
    "meaning": "Chợ, thị trường",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "十分",
    "pinyin": "shífēn",
    "meaning": "Rất, vô cùng",
    "type": "Phó từ , Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "是否",
    "pinyin": "shìfǒu",
    "meaning": "Có... hay không",
    "type": "Phó từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "师傅",
    "pinyin": "shīfu",
    "meaning": "Sư phụ, bác thợ (cách gọi tôn trọng)",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "使馆",
    "pinyin": "shǐguǎn",
    "meaning": "Đại sứ quán",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "适合",
    "pinyin": "shìhé",
    "meaning": "Phù hợp",
    "type": "Động từ , Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "实际",
    "pinyin": "shíjì",
    "meaning": "Thực tế",
    "type": "Danh từ , Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "世纪",
    "pinyin": "shìjì",
    "meaning": "Thế kỷ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "时间表",
    "pinyin": "shíjiānbiǎo",
    "meaning": "Thời gian biểu, lịch trình",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "实际上",
    "pinyin": "shíjìshàng",
    "meaning": "Trên thực tế",
    "type": "Phó từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "食品",
    "pinyin": "shípǐn",
    "meaning": "Thực phẩm",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "视频",
    "pinyin": "shìpín",
    "meaning": "Video",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "市区",
    "pinyin": "shìqū",
    "meaning": "Khu vực thành phố",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "失去",
    "pinyin": "shīqù",
    "meaning": "Mất đi",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "师生",
    "pinyin": "shīshēng",
    "meaning": "Thầy và trò",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "食堂",
    "pinyin": "shítáng",
    "meaning": "Nhà ăn, căng tin",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "试题",
    "pinyin": "shìtí",
    "meaning": "Đề thi",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "失望",
    "pinyin": "shīwàng",
    "meaning": "Thất vọng",
    "type": "Động từ, Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "食物",
    "pinyin": "shíwù",
    "meaning": "Đồ ăn, thức ăn",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "适应",
    "pinyin": "shìyìng",
    "meaning": "Thích ứng",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "使用",
    "pinyin": "shǐyòng",
    "meaning": "Sử dụng",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "实在",
    "pinyin": "shízài",
    "meaning": "Thật thà, thực sự",
    "type": "Tính từ, Phó từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "十字路口",
    "pinyin": "shízì lùkǒu",
    "meaning": "Ngã tư",
    "type": "Danh từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "首",
    "pinyin": "shǒu",
    "meaning": "(Lượng từ cho bài hát, thơ)",
    "type": "Lượng từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "受不了",
    "pinyin": "shòubùliǎo",
    "meaning": "Không chịu nổi",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "首都",
    "pinyin": "shǒudū",
    "meaning": "Thủ đô",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "收费",
    "pinyin": "shōufèi",
    "meaning": "Thu phí",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "售票员",
    "pinyin": "shòupiàoyuán",
    "meaning": "Nhân viên bán vé",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "收入",
    "pinyin": "shōurù",
    "meaning": "Thu nhập",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 3)"
  },
  {
    "vocab": "受伤",
    "pinyin": "shòushāng",
    "meaning": "Bị thương",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "收拾",
    "pinyin": "shōushi",
    "meaning": "Thu dọn",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "收听",
    "pinyin": "shōutīng",
    "meaning": "Nghe (đài, chương trình)",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "首先",
    "pinyin": "shǒuxiān",
    "meaning": "Trước tiên",
    "type": "Phó từ, Đại từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "数",
    "pinyin": "shù",
    "meaning": "Số, con số",
    "type": "Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "输",
    "pinyin": "shū",
    "meaning": "Thua",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "熟",
    "pinyin": "shú/shóu",
    "meaning": "Chín, quen thuộc",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "帅",
    "pinyin": "shuài",
    "meaning": "Đẹp trai",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "暑假",
    "pinyin": "shǔjià",
    "meaning": "Nghỉ hè",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "数量",
    "pinyin": "shùliàng",
    "meaning": "Số lượng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 2)"
  },
  {
    "vocab": "树林",
    "pinyin": "shùlín",
    "meaning": "Rừng cây",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "顺便",
    "pinyin": "shùnbiàn",
    "meaning": "Tiện thể",
    "type": "Phó từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "顺利",
    "pinyin": "shùnlì",
    "meaning": "Thuận lợi",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "顺序",
    "pinyin": "shùnxù",
    "meaning": "Trình tự",
    "type": "Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "说法",
    "pinyin": "shuōfǎ",
    "meaning": "Cách nói, quan điểm",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "说明",
    "pinyin": "shuōmíng",
    "meaning": "Giải thích, minh chứng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "说明书",
    "pinyin": "shuōmíngshū",
    "meaning": "Sách hướng dẫn",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 2)"
  },
  {
    "vocab": "硕士",
    "pinyin": "shuòshì",
    "meaning": "Thạc sĩ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "熟悉",
    "pinyin": "shúxi",
    "meaning": "Quen thuộc",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "数字",
    "pinyin": "shùzì",
    "meaning": "Con số",
    "type": "Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "死",
    "pinyin": "sǐ",
    "meaning": "Chết",
    "type": "Động từ, Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "算",
    "pinyin": "suàn",
    "meaning": "Tính toán",
    "type": "Động từ, Phó từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "酸",
    "pinyin": "suān",
    "meaning": "Chua",
    "type": "Tính từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "酸奶",
    "pinyin": "suānnǎi",
    "meaning": "Sữa chua",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "速度",
    "pinyin": "sùdù",
    "meaning": "Tốc độ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "随便",
    "pinyin": "suíbiàn",
    "meaning": "Tùy ý",
    "type": "Động từ, Tính từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "随着",
    "pinyin": "suízhe",
    "meaning": "Cùng với, theo với",
    "type": "Giới từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "塑料",
    "pinyin": "sùliào",
    "meaning": "Nhựa, chất dẻo",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "孙女",
    "pinyin": "sūnnǚ",
    "meaning": "Cháu gái (nội)",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "孙子",
    "pinyin": "sūnzi",
    "meaning": "Cháu trai (nội)",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "所有",
    "pinyin": "suǒyǒu",
    "meaning": "Tất cả, sở hữu",
    "type": "Tính từ, Động từ, Danh từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "台",
    "pinyin": "tái",
    "meaning": "Cái (lượng từ cho máy móc...)",
    "type": "Lượng từ, Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "抬",
    "pinyin": "tái",
    "meaning": "Nhấc lên, khiêng",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "态度",
    "pinyin": "tàidù",
    "meaning": "Thái độ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "抬头",
    "pinyin": "táitóu",
    "meaning": "Ngẩng đầu",
    "type": "Động từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "弹",
    "pinyin": "tán",
    "meaning": "Búng, đàn (nhạc cụ)",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "谈",
    "pinyin": "tán",
    "meaning": "Nói chuyện, đàm luận",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "趟",
    "pinyin": "tàng",
    "meaning": "Chuyến, lần",
    "type": "Lượng từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "躺",
    "pinyin": "tǎng",
    "meaning": "Nằm",
    "type": "Động từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "汤",
    "pinyin": "tāng",
    "meaning": "Canh, nước súp",
    "type": "Danh từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "讨论",
    "pinyin": "tǎolùn",
    "meaning": "Thảo luận",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "讨厌",
    "pinyin": "tǎoyàn",
    "meaning": "Ghét, đáng ghét",
    "type": "Động từ, Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "特点",
    "pinyin": "tèdiǎn",
    "meaning": "Đặc điểm",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "提",
    "pinyin": "tí",
    "meaning": "Đề cập, nhắc tới, xách",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "填写",
    "pinyin": "tiánxiě",
    "meaning": "Điền vào",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "条件",
    "pinyin": "tiáojiàn",
    "meaning": "Điều kiện",
    "type": "Danh từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "提出",
    "pinyin": "tíchū",
    "meaning": "Đưa ra, đề xuất",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "提到",
    "pinyin": "tídào",
    "meaning": "Nhắc đến",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "提供",
    "pinyin": "tígōng",
    "meaning": "Cung cấp",
    "type": "Động từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "体检",
    "pinyin": "tǐjiǎn",
    "meaning": "Kiểm tra sức khỏe",
    "type": "Động từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "停",
    "pinyin": "tíng",
    "meaning": "Dừng lại",
    "type": "Động từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "停车",
    "pinyin": "tíngchē",
    "meaning": "Đỗ xe",
    "type": "Động từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "停车场",
    "pinyin": "tíngchēchǎng",
    "meaning": "Bãi đỗ xe",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "听力",
    "pinyin": "tīnglì",
    "meaning": "Nghe hiểu (thính lực)",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "停止",
    "pinyin": "tíngzhǐ",
    "meaning": "Ngừng, dừng lại",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "听众",
    "pinyin": "tīngzhòng",
    "meaning": "Thính giả",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "提前",
    "pinyin": "tíqián",
    "meaning": "Làm trước thời hạn",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "体温",
    "pinyin": "tǐwēn",
    "meaning": "Thân nhiệt",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "提醒",
    "pinyin": "tíxǐng",
    "meaning": "Nhắc nhở",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "体重",
    "pinyin": "tǐzhòng",
    "meaning": "Cân nặng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "痛",
    "pinyin": "tòng",
    "meaning": "Đau",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "桶",
    "pinyin": "tǒng",
    "meaning": "Cái thùng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "通",
    "pinyin": "tōng",
    "meaning": "Thông suốt, hiểu",
    "type": "Động từ, Tính từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "通过",
    "pinyin": "tōngguò",
    "meaning": "Thông qua, đi qua",
    "type": "Động từ, Giới từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 1)"
  },
  {
    "vocab": "童年",
    "pinyin": "tóngnián",
    "meaning": "Tuổi thơ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "同时",
    "pinyin": "tóngshí",
    "meaning": "Đồng thời",
    "type": "Danh từ, Liên từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "同样",
    "pinyin": "tóngyàng",
    "meaning": "Giống nhau",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "通知",
    "pinyin": "tōngzhī",
    "meaning": "Thông báo",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "头痛",
    "pinyin": "tóutòng",
    "meaning": "Đau đầu",
    "type": "Tính từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "图",
    "pinyin": "tú",
    "meaning": "Bức tranh, hình vẽ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "土",
    "pinyin": "tǔ",
    "meaning": "Đất, quê mùa",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "推",
    "pinyin": "tuī",
    "meaning": "Đẩy",
    "type": "Động từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "推迟",
    "pinyin": "tuīchí",
    "meaning": "Trì hoãn",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "推出",
    "pinyin": "tuīchū",
    "meaning": "Đưa ra, tung ra",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "脱",
    "pinyin": "tuō",
    "meaning": "Cởi, thoát ra",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "图片",
    "pinyin": "túpiàn",
    "meaning": "Hình ảnh",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "外出",
    "pinyin": "wàichū",
    "meaning": "Đi ra ngoài",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "外套",
    "pinyin": "wàitào",
    "meaning": "Áo khoác",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "晚安",
    "pinyin": "wǎn'ān",
    "meaning": "Chúc ngủ ngon",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 2)"
  },
  {
    "vocab": "晚餐",
    "pinyin": "wǎncān",
    "meaning": "Bữa tối",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "网购",
    "pinyin": "wǎnggòu",
    "meaning": "Mua sắm trực tuyến",
    "type": "Động từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "往往",
    "pinyin": "wǎngwǎng",
    "meaning": "Thường, thường thường",
    "type": "Phó từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "网页",
    "pinyin": "wǎngyè",
    "meaning": "Trang web",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "网友",
    "pinyin": "wǎngyǒu",
    "meaning": "Bạn qua mạng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "网址",
    "pinyin": "wǎngzhǐ",
    "meaning": "Địa chỉ web",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "完全",
    "pinyin": "wánquán",
    "meaning": "Hoàn toàn",
    "type": "Tính từ, Phó từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "袜子",
    "pinyin": "wàzi",
    "meaning": "Tất, vớ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "为",
    "pinyin": "wéi",
    "meaning": "Làm, là",
    "type": "Động từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "味",
    "pinyin": "wèi",
    "meaning": "Mùi, vị",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "味道",
    "pinyin": "wèidào",
    "meaning": "Mùi vị",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "卫生",
    "pinyin": "wèishēng",
    "meaning": "Vệ sinh",
    "type": "Danh từ, Tính từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "危险",
    "pinyin": "wēixiǎn",
    "meaning": "Nguy hiểm",
    "type": "Tính từ, Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "闻",
    "pinyin": "wén",
    "meaning": "Ngửi",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "温度",
    "pinyin": "wēndù",
    "meaning": "Nhiệt độ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "文件",
    "pinyin": "wénjiàn",
    "meaning": "Tài liệu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "文章",
    "pinyin": "wénzhāng",
    "meaning": "Bài văn",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "文字",
    "pinyin": "wénzì",
    "meaning": "Chữ viết",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "无",
    "pinyin": "wú",
    "meaning": "Không có",
    "type": "Động từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "午餐",
    "pinyin": "wǔcān",
    "meaning": "Bữa trưa",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "无法",
    "pinyin": "wúfǎ",
    "meaning": "Không thể",
    "type": "Động từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "误会",
    "pinyin": "wùhuì",
    "meaning": "Hiểu lầm",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "无聊",
    "pinyin": "wúliáo",
    "meaning": "Chán nản, vô vị",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "无论",
    "pinyin": "wúlùn",
    "meaning": "Bất luận, dù cho",
    "type": "Liên từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "污染",
    "pinyin": "wūrǎn",
    "meaning": "Ô nhiễm",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 10)"
  },
  {
    "vocab": "细",
    "pinyin": "xì",
    "meaning": "Nhỏ, tinh tế, mỏng",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "吸",
    "pinyin": "xī",
    "meaning": "Hút, hít",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 3)"
  },
  {
    "vocab": "下降",
    "pinyin": "xiàjiàng",
    "meaning": "Hạ xuống, giảm xuống",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 4)"
  },
  {
    "vocab": "咸",
    "pinyin": "xián",
    "meaning": "Mặn",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "鲜",
    "pinyin": "xiān",
    "meaning": "Tươi, ngon",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "项",
    "pinyin": "xiàng",
    "meaning": "Khoản, mục",
    "type": "Lượng từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "响",
    "pinyin": "xiǎng",
    "meaning": "Vang, kêu",
    "type": "Động từ, Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "香",
    "pinyin": "xiāng",
    "meaning": "Thơm",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "相比",
    "pinyin": "xiāngbǐ",
    "meaning": "So sánh",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "想法",
    "pinyin": "xiǎngfǎ",
    "meaning": "Ý nghĩ, cách nghĩ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "相反",
    "pinyin": "xiāngfǎn",
    "meaning": "Ngược lại",
    "type": "Tính từ, Liên từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "相互",
    "pinyin": "xiānghù",
    "meaning": "Lẫn nhau",
    "type": "Phó từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "相同",
    "pinyin": "xiāngtóng",
    "meaning": "Giống nhau",
    "type": "Tính từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "详细",
    "pinyin": "xiángxì",
    "meaning": "Chi tiết",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "鲜花",
    "pinyin": "xiānhuā",
    "meaning": "Hoa tươi",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "现金",
    "pinyin": "xiànjīn",
    "meaning": "Tiền mặt",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "羡慕",
    "pinyin": "xiànmù",
    "meaning": "Ngưỡng mộ",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "线上",
    "pinyin": "xiàshàng",
    "meaning": "Trực tuyến (online)",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "线下",
    "pinyin": "xiànxià",
    "meaning": "Trực tiếp (offline)",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "现有",
    "pinyin": "xiànyǒu",
    "meaning": "Hiện có",
    "type": "Động từ, Tính từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "小吃",
    "pinyin": "xiǎochī",
    "meaning": "Đồ ăn vặt",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "效果",
    "pinyin": "xiàoguǒ",
    "meaning": "Hiệu quả",
    "type": "Danh từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "笑话",
    "pinyin": "xiàohua",
    "meaning": "Truyện cười, chế giễu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "小伙子",
    "pinyin": "xiǎohuǒzi",
    "meaning": "Chàng trai trẻ",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "小说",
    "pinyin": "xiǎoshuō",
    "meaning": "Tiểu thuyết",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "消息",
    "pinyin": "xiǎoxi",
    "meaning": "Tin tức",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "小组",
    "pinyin": "xiǎozǔ",
    "meaning": "Tổ, nhóm",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "西部",
    "pinyin": "xībù",
    "meaning": "Phía tây",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "血",
    "pinyin": "xiě",
    "meaning": "Máu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "西红柿",
    "pinyin": "xīhóngshì",
    "meaning": "Cà chua",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "心",
    "pinyin": "xīn",
    "meaning": "Tim, lòng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "性",
    "pinyin": "xìng",
    "meaning": "Tính chất",
    "type": "Danh từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "醒",
    "pinyin": "xǐng",
    "meaning": "Tỉnh (ngủ), thức giấc",
    "type": "Động từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "性别",
    "pinyin": "xìngbié",
    "meaning": "Giới tính",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "兴奋",
    "pinyin": "xīngfèn",
    "meaning": "Hưng phấn",
    "type": "Tính từ, Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "幸福",
    "pinyin": "xìngfú",
    "meaning": "Hạnh phúc",
    "type": "Danh từ, Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "性格",
    "pinyin": "xìnggé",
    "meaning": "Tính cách",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "星星",
    "pinyin": "xīngxing",
    "meaning": "Ngôi sao",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "信号",
    "pinyin": "xìnhào",
    "meaning": "Tín hiệu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "辛苦",
    "pinyin": "xīnkǔ",
    "meaning": "Vất vả, cực nhọc",
    "type": "Tính từ, Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "心情",
    "pinyin": "xīnqíng",
    "meaning": "Tâm trạng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "信息",
    "pinyin": "xìnxī",
    "meaning": "Thông tin",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "信心",
    "pinyin": "xìnxīn",
    "meaning": "Lòng tin, tự tin",
    "type": "Danh từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "熊",
    "pinyin": "xióng",
    "meaning": "Con gấu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "兄弟",
    "pinyin": "xiōngdì",
    "meaning": "Anh em",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "修",
    "pinyin": "xiū",
    "meaning": "Sửa chữa",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "修理",
    "pinyin": "xiūlǐ",
    "meaning": "Sửa chữa",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "细心",
    "pinyin": "xìxīn",
    "meaning": "Cẩn thận, tỉ mỉ",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "吸引",
    "pinyin": "xīyǐn",
    "meaning": "Thu hút",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "许多",
    "pinyin": "xǔduō",
    "meaning": "Nhiều",
    "type": "Số từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "学费",
    "pinyin": "xuéfèi",
    "meaning": "Học phí",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "学院",
    "pinyin": "xuéyuàn",
    "meaning": "Học viện",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "压",
    "pinyin": "yā",
    "meaning": "Nén, ép",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "牙膏",
    "pinyin": "yágāo",
    "meaning": "Kem đánh răng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "压力",
    "pinyin": "yālì",
    "meaning": "Áp lực",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "盐",
    "pinyin": "yán",
    "meaning": "Muối",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "演",
    "pinyin": "yǎn",
    "meaning": "Diễn, biểu diễn",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "烟",
    "pinyin": "yān",
    "meaning": "Khói, thuốc lá",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "演唱",
    "pinyin": "yǎnchàng",
    "meaning": "Hát biểu diễn",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "演出",
    "pinyin": "yǎnchū",
    "meaning": "Biểu diễn",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "养成",
    "pinyin": "yǎngchéng",
    "meaning": "Hình thành (thói quen)",
    "type": "Động từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "严格",
    "pinyin": "yángé",
    "meaning": "Nghiêm khắc",
    "type": "Động từ, Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "阳光",
    "pinyin": "yángguāng",
    "meaning": "Ánh nắng, ánh mặt trời",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "样子",
    "pinyin": "yàngzi",
    "meaning": "Dáng vẻ, kiểu dáng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "眼镜",
    "pinyin": "yǎnjìng",
    "meaning": "Kính mắt",
    "type": "Danh từ",
    "lesson": "",
    "topic": "2. Cơ thể & Sức khỏe (Phần 2)"
  },
  {
    "vocab": "研究",
    "pinyin": "yánjiū",
    "meaning": "Nghiên cứu",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "研究生",
    "pinyin": "yánjiūshēng",
    "meaning": "Nghiên cứu sinh",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "眼前",
    "pinyin": "yǎnqián",
    "meaning": "Trước mắt",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "演员",
    "pinyin": "yǎnyuán",
    "meaning": "Diễn viên",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "严重",
    "pinyin": "yánzhòng",
    "meaning": "Nghiêm trọng",
    "type": "Tính từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "邀请",
    "pinyin": "yāoqǐng",
    "meaning": "Mời, mời gọi",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "要是",
    "pinyin": "yàoshi",
    "meaning": "Nếu như",
    "type": "Liên từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "钥匙",
    "pinyin": "yàoshi",
    "meaning": "Chìa khóa",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "亚洲",
    "pinyin": "Yàzhōu",
    "meaning": "Châu Á",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "夜",
    "pinyin": "yè",
    "meaning": "Đêm",
    "type": "Danh từ, Lượng từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "夜晚",
    "pinyin": "yèwǎn",
    "meaning": "Ban đêm",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "也许",
    "pinyin": "yěxǔ",
    "meaning": "Có lẽ",
    "type": "Phó từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "叶子",
    "pinyin": "yèzi",
    "meaning": "Lá cây",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "己",
    "pinyin": "yǐ",
    "meaning": "Bản thân",
    "type": "Phó từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "意见",
    "pinyin": "yìjiàn",
    "meaning": "Ý kiến",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "因此",
    "pinyin": "yīncǐ",
    "meaning": "Do đó, vì thế",
    "type": "Liên từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "以内",
    "pinyin": "yǐnèi",
    "meaning": "ở trong",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "赢",
    "pinyin": "yíng",
    "meaning": "thắng",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "赢得",
    "pinyin": "yíngdé",
    "meaning": "thắng",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "应聘",
    "pinyin": "yìngpìn",
    "meaning": "Đơn xin việc",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "引起",
    "pinyin": "yǐnqǐ",
    "meaning": "gây ra",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "印象",
    "pinyin": "yìnxiàng",
    "meaning": "ấn tượng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "一切",
    "pinyin": "yīqiè",
    "meaning": "mọi thứ",
    "type": "Đại từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "一生",
    "pinyin": "yīshēng",
    "meaning": "suốt đời",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "艺术",
    "pinyin": "yìshù",
    "meaning": "Nghệ thuật",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "勇敢",
    "pinyin": "yǒnggǎn",
    "meaning": "can đảm",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "用来",
    "pinyin": "yònglái",
    "meaning": "Được sử dụng cho",
    "type": "Động từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "用于",
    "pinyin": "yòngyú",
    "meaning": "Vì",
    "type": "Động từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "永远",
    "pinyin": "yǒngyuǎn",
    "meaning": "mãi mãi",
    "type": "Phó từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "由",
    "pinyin": "yóu",
    "meaning": "Tùy thuộc vào",
    "type": "Giới từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "油",
    "pinyin": "yóu",
    "meaning": "Dầu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "优点",
    "pinyin": "yōudiǎn",
    "meaning": "lợi thế",
    "type": "Danh từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "友好",
    "pinyin": "yǒuhǎo",
    "meaning": "thân thiện",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "幽默",
    "pinyin": "yōumò",
    "meaning": "hài hước",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "尤其",
    "pinyin": "yóuqí",
    "meaning": "đặc biệt",
    "type": "Phó từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "友情",
    "pinyin": "yǒuqíng",
    "meaning": "Tình bạn",
    "type": "Danh từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "有趣",
    "pinyin": "yǒuqù",
    "meaning": "hấp dẫn",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "游玩",
    "pinyin": "yóuwán",
    "meaning": "chơi",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "有效",
    "pinyin": "yǒuxiào",
    "meaning": "có hiệu quả",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "优秀",
    "pinyin": "yōuxiù",
    "meaning": "xuất sắc",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "友谊",
    "pinyin": "yǒuyì",
    "meaning": "tình bạn",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "由于",
    "pinyin": "yóuyú",
    "meaning": "bởi vì",
    "type": "Liên từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "有着",
    "pinyin": "yǒuzhe",
    "meaning": "có",
    "type": "Động từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "与",
    "pinyin": "yǔ",
    "meaning": "Và",
    "type": "Liên từ, Giới từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "原来",
    "pinyin": "yuánlái",
    "meaning": "hóa ra là",
    "type": "Tính từ, Phó từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "远离",
    "pinyin": "yuǎnlí",
    "meaning": "tránh xa",
    "type": "Động từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "原谅",
    "pinyin": "yuánliàng",
    "meaning": "tha thứ",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "原因",
    "pinyin": "yuányīn",
    "meaning": "lý do",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "院长",
    "pinyin": "yuànzhǎng",
    "meaning": "Trưởng khoa",
    "type": "Danh từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "院子",
    "pinyin": "yuànzi",
    "meaning": "sân",
    "type": "Danh từ",
    "lesson": "",
    "topic": "7. Địa điểm & Nơi chốn (Phần 2)"
  },
  {
    "vocab": "约",
    "pinyin": "yuē",
    "meaning": "Về",
    "type": "Động từ, Phó từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "月饼",
    "pinyin": "yuèbǐng",
    "meaning": "bánh trung thu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "阅读",
    "pinyin": "yuèdú",
    "meaning": "đọc hiểu",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "月份",
    "pinyin": "yuèfèn",
    "meaning": "tháng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "约会",
    "pinyin": "yuēhuì",
    "meaning": "Hẹn hò",
    "type": "Danh từ, Động từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "语法",
    "pinyin": "yǔfǎ",
    "meaning": "ngữ pháp",
    "type": "Danh từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "愉快",
    "pinyin": "yúkuài",
    "meaning": "vui sướng",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "云",
    "pinyin": "yún",
    "meaning": "đám mây",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "允许",
    "pinyin": "yǔnxǔ",
    "meaning": "cho phép",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "于是",
    "pinyin": "yúshì",
    "meaning": "sau đó",
    "type": "Liên từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "预习",
    "pinyin": "yùxí",
    "meaning": "Xem trước",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "再次",
    "pinyin": "zàicì",
    "meaning": "lại",
    "type": "Phó từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "再说",
    "pinyin": "zàishuō",
    "meaning": "Hơn nữa",
    "type": "Động từ, Liên từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "暂时",
    "pinyin": "zànshí",
    "meaning": "tạm thời",
    "type": "Danh từ, Phó từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "暂停",
    "pinyin": "zàntíng",
    "meaning": "tạm dừng",
    "type": "Động từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "早餐",
    "pinyin": "zǎocān",
    "meaning": "bữa sáng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "早晨",
    "pinyin": "zǎochén",
    "meaning": "buổi sáng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "杂志",
    "pinyin": "zázhì",
    "meaning": "Tạp chí",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "增加",
    "pinyin": "zēngjiā",
    "meaning": "Tăng",
    "type": "Động từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "增长",
    "pinyin": "zēngzhǎng",
    "meaning": "tăng",
    "type": "Động từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "责任",
    "pinyin": "zérèn",
    "meaning": "trách nhiệm",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "着",
    "pinyin": "zhe",
    "meaning": "Mặc",
    "type": "Trợ từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "着火",
    "pinyin": "zháohuǒ",
    "meaning": "đang cháy",
    "type": "Động từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "招聘",
    "pinyin": "zhāopìn",
    "meaning": "tuyển dụng",
    "type": "Động từ, Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "者",
    "pinyin": "zhě",
    "meaning": "thay thế cho đối tượng đề cập trước đó",
    "type": "Hậu tố",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "证",
    "pinyin": "zhèng",
    "meaning": "giấy chứng nhận",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "整",
    "pinyin": "zhěng",
    "meaning": "tất cả",
    "type": "Tính từ, Động từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "正常",
    "pinyin": "zhèngcháng",
    "meaning": "Bình thường",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "整个",
    "pinyin": "zhěnggè",
    "meaning": "toàn bộ",
    "type": "Tính từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "正好",
    "pinyin": "zhènghǎo",
    "meaning": "Vừa phải",
    "type": "Tính từ, Phó từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "证件",
    "pinyin": "zhèngjiàn",
    "meaning": "NHẬN DẠNG",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "整理",
    "pinyin": "zhěnglǐ",
    "meaning": "ngăn nắp",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "证明",
    "pinyin": "zhèngmíng",
    "meaning": "chứng minh",
    "type": "Động từ, Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "正确",
    "pinyin": "zhèngquè",
    "meaning": "Chính xác",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "正式",
    "pinyin": "zhèngshì",
    "meaning": "chính thức",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "真正",
    "pinyin": "zhēnzhèng",
    "meaning": "thực tế",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "值",
    "pinyin": "zhí",
    "meaning": "giá trị",
    "type": "Động từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "指",
    "pinyin": "zhǐ",
    "meaning": "đề cập đến",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "之",
    "pinyin": "zhī",
    "meaning": "Của",
    "type": "Đại từ, Trợ từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "支持",
    "pinyin": "zhīchí",
    "meaning": "ủng hộ",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "指出",
    "pinyin": "zhǐchū",
    "meaning": "Chỉ ra",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "值得",
    "pinyin": "zhíde",
    "meaning": "đáng giá",
    "type": "Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "支付",
    "pinyin": "zhīfù",
    "meaning": "chi trả",
    "type": "Động từ",
    "lesson": "",
    "topic": "Khác"
  },
  {
    "vocab": "只好",
    "pinyin": "zhǐhǎo",
    "meaning": "chỉ đành",
    "type": "Phó từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "之后",
    "pinyin": "zhīhòu",
    "meaning": "sau đó",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "之间",
    "pinyin": "zhījiān",
    "meaning": "giữa",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "直接",
    "pinyin": "zhíjiē",
    "meaning": "trực tiếp",
    "type": "Tính từ, Phó từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "纸巾",
    "pinyin": "zhǐjīn",
    "meaning": "khăn giấy",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "质量",
    "pinyin": "zhìliàng",
    "meaning": "chất lượng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "之前",
    "pinyin": "zhīqián",
    "meaning": "Trước",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "至少",
    "pinyin": "zhìshǎo",
    "meaning": "Ít nhất",
    "type": "Phó từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "知识",
    "pinyin": "zhīshi",
    "meaning": "Kiến thức",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "植物",
    "pinyin": "zhíwù",
    "meaning": "thực vật",
    "type": "Danh từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "职业",
    "pinyin": "zhíyè",
    "meaning": "Nghề nghiệp",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "之中",
    "pinyin": "zhīzhōng",
    "meaning": "Giữa",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "种",
    "pinyin": "zhǒng",
    "meaning": "loại",
    "type": "Lượng từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "重",
    "pinyin": "zhòng",
    "meaning": "Nặng",
    "type": "Tính từ, Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "中餐",
    "pinyin": "zhōngcān",
    "meaning": "Đồ ăn Trung Quốc",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "重点",
    "pinyin": "zhòngdiǎn",
    "meaning": "Điểm chính",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "中年",
    "pinyin": "zhōngnián",
    "meaning": "trung niên",
    "type": "Danh từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "重视",
    "pinyin": "zhòngshì",
    "meaning": "xem trọng",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "周围",
    "pinyin": "zhōuwéi",
    "meaning": "xung quanh",
    "type": "Danh từ",
    "lesson": "",
    "topic": "9. Không gian & Vị trí"
  },
  {
    "vocab": "祝",
    "pinyin": "zhù",
    "meaning": "chúc",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "赚",
    "pinyin": "zhuàn",
    "meaning": "kiếm",
    "type": "Động từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "转",
    "pinyin": "zhuǎn",
    "meaning": "chuyển/ xoay",
    "type": "Động từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "转发",
    "pinyin": "zhuǎnfā",
    "meaning": "chuyển tiếp",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "装",
    "pinyin": "zhuāng",
    "meaning": "Đóng gói",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "转机",
    "pinyin": "zhuǎnjī",
    "meaning": "Bước ngoặt",
    "type": "Danh từ",
    "lesson": "",
    "topic": "8. Giao thông & Di chuyển (Phần 2)"
  },
  {
    "vocab": "专门",
    "pinyin": "zhuānmén",
    "meaning": "chuyên",
    "type": "Tính từ, Phó từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "专业",
    "pinyin": "zhuānyè",
    "meaning": "lớn lao",
    "type": "Danh từ, Tính từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "祝贺",
    "pinyin": "zhùhè",
    "meaning": "chúc mừng",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "著名",
    "pinyin": "zhùmíng",
    "meaning": "Nổi tiếng",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "准",
    "pinyin": "zhǔn",
    "meaning": "cho phép",
    "type": "Tính từ, Động từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "准确",
    "pinyin": "zhǔnquè",
    "meaning": "chính xác",
    "type": "Tính từ",
    "lesson": "",
    "topic": "12. Miêu tả & Đánh giá (Phần 5)"
  },
  {
    "vocab": "准时",
    "pinyin": "zhǔnshí",
    "meaning": "đúng giờ",
    "type": "Tính từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "主意",
    "pinyin": "zhǔyi",
    "meaning": "ý tưởng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "自",
    "pinyin": "zì",
    "meaning": "tự/ từ",
    "type": "Giới từ, Đại từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "资料",
    "pinyin": "zīliào",
    "meaning": "vật liệu",
    "type": "Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "自然",
    "pinyin": "zìrán",
    "meaning": "thiên nhiên",
    "type": "Danh từ, Tính từ",
    "lesson": "",
    "topic": "15. Tự nhiên (Phần 2)"
  },
  {
    "vocab": "自习",
    "pinyin": "zìxí",
    "meaning": "Tự học",
    "type": "Động từ, Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "仔细",
    "pinyin": "zǐxì",
    "meaning": "sự cẩn thận",
    "type": "Tính từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "自信",
    "pinyin": "zìxìn",
    "meaning": "sự tự tin",
    "type": "Tính từ, Danh từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "自学",
    "pinyin": "zìxué",
    "meaning": "Tự học",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "总结",
    "pinyin": "zǒngjié",
    "meaning": "Tóm tắt",
    "type": "Động từ, Danh từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "组",
    "pinyin": "zǔ",
    "meaning": "Nhóm",
    "type": "Động từ, Lượng từ",
    "lesson": "",
    "topic": "1. Con người & Các mối quan hệ (Phần 4)"
  },
  {
    "vocab": "租",
    "pinyin": "zū",
    "meaning": "thuê",
    "type": "Động từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "最终",
    "pinyin": "zuìzhōng",
    "meaning": "cuối cùng",
    "type": "Danh từ, Tính từ",
    "lesson": "",
    "topic": "10. Thời gian (Phần 2)"
  },
  {
    "vocab": "尊重",
    "pinyin": "zūnzhòng",
    "meaning": "sự tôn trọng",
    "type": "Động từ",
    "lesson": "",
    "topic": "3. Cảm xúc & Thái độ (Phần 3)"
  },
  {
    "vocab": "座",
    "pinyin": "zuò",
    "meaning": "ghế",
    "type": "Lượng từ, Danh từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "做法",
    "pinyin": "zuòfǎ",
    "meaning": "cách làm",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "作家",
    "pinyin": "zuòjiā",
    "meaning": "nhà văn",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "做梦",
    "pinyin": "zuòmèng",
    "meaning": "nằm mơ",
    "type": "Động từ",
    "lesson": "",
    "topic": "4. Tư duy & Nhận thức (Phần 4), 11. Công việc & Nghề nghiệp (Phần 4)"
  },
  {
    "vocab": "作品",
    "pinyin": "zuòpǐn",
    "meaning": "công việc",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "作为",
    "pinyin": "zuòwéi",
    "meaning": "BẰNG",
    "type": "Động từ, Giới từ",
    "lesson": "",
    "topic": "14. Công cụ ngữ pháp & Cấu trúc (Phần 2)"
  },
  {
    "vocab": "座位",
    "pinyin": "zuòwèi",
    "meaning": "chổ ngồi",
    "type": "Danh từ",
    "lesson": "",
    "topic": "6. Đồ vật & Công cụ (Phần 3)"
  },
  {
    "vocab": "作文",
    "pinyin": "zuòwén",
    "meaning": "bài văn",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11)"
  },
  {
    "vocab": "作用",
    "pinyin": "zuòyòng",
    "meaning": "tác dụng",
    "type": "Danh từ",
    "lesson": "",
    "topic": "5. Đời sống sinh hoạt (Phần 11), 4. Tư duy & Nhận thức (Phần 4)"
  },
  {
    "vocab": "左右",
    "pinyin": "zuǒyòu",
    "meaning": "khoảng",
    "type": "Danh từ, Phó từ",
    "lesson": "",
    "topic": "13. Số lượng & Đo lường (Phần 3)"
  },
  {
    "vocab": "作者",
    "pinyin": "zuòzhě",
    "meaning": "tác giả",
    "type": "Danh từ",
    "lesson": "",
    "topic": "11. Công việc & Nghề nghiệp (Phần 4)"
  }
];