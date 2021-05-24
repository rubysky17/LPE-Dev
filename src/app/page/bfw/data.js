import card1 from "assets/images/card1.png";
import card2 from "assets/images/card2.png";
import card3 from "assets/images/card3.png";
import card4 from "assets/images/card4.png";
import card5 from "assets/images/card5.png";
import card6 from "assets/images/card6.png";
import hinh1 from "assets/images/1.png";
import hinh2 from "assets/images/2.png";
import hinh3 from "assets/images/3.png";
import hinh4 from "assets/images/4.png";
import hinh5 from "assets/images/5.png";
import hinh6 from "assets/images/6.png";
import hinh7 from "assets/images/7.png";
import hinh8 from "assets/images/8.png";
import logo from "assets/images/lahagiangthanh.png";

const menu = [
  {
    link: "#gioiThieu",
    content: "BFW",
  },
  {
    link: "#bio",
    content: "Bio",
  },
  {
    link: "#root",
    img: logo,
  },
  {
    link: "#hocPhi",
    content: "Khóa học",
  },
  {
    link: "#dangKy",
    content: "Đăng ký",
  },
];
const program = [
  {
    id: 1,
    level: "Level 1: BEAUTY FROM WITHIN - ĐẸP TỪ BÊN TRONG",
    description:
      "Phụ nữ luôn mang trên vai những gánh nặng khác nhau trong cuộc sống. Điều này đôi khi vô tình ngăn cản chúng ta yêu thương hoặc nhìn nhận bản thân đúng cách. Hoặc chúng ta đã bận “sống chuẩn mực”, bận “sống cho người khác” suốt thời gian qua. Nhưng, một lúc bất chợt nhìn vào gương, thật lòng bạn thấy gì trong gương?",
    video: "https://www.youtube.com/embed/va0sSA9UG-8",
  },
  {
    id: 2,
    level: "Level 2: LOVE AND BELOVED - YÊU VÀ ĐƯỢC YÊU",
    description:
      "Chúng ta không thể mong cầu tình yêu thương từ người khác nếu bản thân chưa hiểu, chưa biết cách thực hành tình yêu chân thành với chính mình. Bất kỳ ai cũng xứng đáng ở bên cạnh một người dành cho mình tình yêu trọn vẹn, bất kỳ ai cũng có quyền xinh đẹp, được yêu & viên mãn.",
    video: "https://www.youtube.com/embed/AUKyFY9Yhbg",
  },
];
const flipCardCourse1 = [
  {
    id: 1,
    hinhAnh: card1,
    front:
      "Tái định nghĩa về “Chuẩn đẹp”. Học cách để trở nên Tự tin. Vì tự tin là thần thái & là giao diện tuyệt vời nhất.",
    back: "Học được cách nhìn tích cực về vẻ đẹp riêng biệt của chính mình. Nhìn thấy được nét đẹp độc đáo của bản thân & người thân xung quanh. Tìm hiểu cách thức để đẹp từ cả “bên trong” lẫn “bên ngoài”. Hiểu được giá trị chân thật để bản thân luôn tự tin khi là chính mình. ",
  },
  {
    id: 2,
    hinhAnh: card2,
    front:
      "Học cách để thiết lập & giữ vững nguồn năng lượng dồi dào. Trở nên kiên cường bất biến trước mọi vấn đề trong cuộc sống.",
    back: "Rất nhiều người phụ nữ chúng ta hằng ngày đều bị chi phối bởi cảm xúc, đặc biệt là cảm xúc tiêu cực. Khi có quá nhiều thứ tiêu cực diễn ra trong cơ thể bạn, bạn sẽ không thể giữ cho mình nguồn năng lượng tích cực đủ đầy. Và vẻ đẹp của bạn cũng sẽ xuất phát từ nguồn năng lượng bên trong cũng như “giao diện” bên ngoài của bạn.",
  },
  {
    id: 3,
    hinhAnh: card3,
    front:
      "Đẹp từ “bên trong” lẫn “bên ngoài” có nghĩa là bạn cần phú ý đến những nguồn thức ăn được nạp vào cơ thể (Bên trong) và cách làm đẹp cho cơ thể, khuôn mặt của mình (Bên ngoài)",
    back: "Học cách chăm sóc cho cả cơ thể. Tìm hiểu bí quyết ăn uống hiệu quả, nạp chất dinh dưỡng hợp lý và giúp cơ thể hấp thụ đầy đủ, đào thải độc tố. Học & thực hành nghệ thuật trang điểm tôn lên vẻ đẹp cả nhân với phong cách ăn mặc phù hợp để mỗi quý cô trở nên xinh đẹp theo cách riêng.",
  },
];
const flipCardCourse2 = [
  {
    id: 4,
    hinhAnh: card4,

    front:
      "Tham gia những trải nghiệm để đánh thức tình yêu thương đong đầy, vô điều kiện dành cho chính bản thân mình.",
    back: "Nhìn vào gương bạn thấy gì? Có phải bạn đang phán xét bản thân bằng những khuyết điểm của chính mình? Khi bạn dành cho bản thân một tình yêu thương chân thành & vô điều kiện, bạn sẽ nhận được tình yêu đó từ một người phù hợp, đầy giá trị.",
  },
  {
    id: 5,
    hinhAnh: card5,

    front:
      "Học cách xây dựng hình mẫu của người bạn đời. Cách để cư xử đúng & duy trì ngọn lửa hôn nhân Xoá bỏ niềm tin tiêu cực về tình yêu.",
    back: "Bạn không biết cách xây dựng mối quan hệ “dài hơi”, hay bạn vẫn đang loay hoay tìm kiếm cho mình người bạn đời phù hợp? Khi đã nâng cấp mình trở thành một cá thể độc đáo, đủ đầy, người bạn đời phù hợp nhất sẽ xuất hiện. Tìm hiểu & áp dụng những bí quyết để thu hút người bạn đời. Hiểu được rằng, mỗi người cần phải là một cá thể độc đáo riêng biệt để thu hút đối phương.",
  },
  {
    id: 6,
    hinhAnh: card6,

    front:
      "Trải nghiệm những qui trình đặc biệt để xây dựng ngọn lửa yêu thương.",
    back: "Kích hoạt nguồn năng lượng nữ giới ở bên trong. Kích hoạt thiên chức, quyền năng của người phụ nữ. Bí quyết toả sáng với vẻ đẹp tự nhiên. Hoàn toàn yêu thương chính mình, nhìn thế giới với đôi mắt của tình yêu thương & sự bình an.",
  },
];
const picture = [hinh1, hinh2, hinh3, hinh4, hinh5, hinh6, hinh7, hinh8];

export { menu, program, flipCardCourse1, flipCardCourse2, picture };
