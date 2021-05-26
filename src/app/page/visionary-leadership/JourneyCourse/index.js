import React from 'react';
import "./styles/styles.scss";

import JC01 from "assets/images/journeyCourse/journeyCourse01.jpeg";
import JC02 from "assets/images/journeyCourse/journeyCourse02.jpeg";

function JourneyCourse() {
    return (
      <div className="journeyCourse  area-pd">
        <div className="container area-pt">
          <h2>HÀNH TRÌNH XÂY DỰNG TẦM NHÌN LÃNH ĐẠO</h2>
          {/* <p className="title">Please see the historical milestones of Kinglaw law firm, Lorem ipsum dolor sit amet, donsectetur adipiscing elit. Integer eget ultrices sapien. Praesent venenatis dictum turpis.</p> */}
          <section>
            {/* <h2>2 December</h2> */}
            <div className="grid-wrapper area-pd">
              <article>
                <h2>Ngày 1</h2>
                {/* <p>Life finds a way. You know what? It is beets. </p> */}
              </article>
              <article>
                {/* <h5>To Create an Organisation that is Disaster Proof</h5> */}
                <p>
                  Một cái cây muốn cao lớn toả bóng mát thì cần phải có gốc rễ
                  khoẻ mạnh. Gốc rễ vững chắc sẽ giúp cây không bị những tác
                  động ngoại lực ảnh hướng tới.
                </p>
              </article>
              <article>
                {/* <h5>To guide SMEs who are struggling to "Stay Afloat"</h5> */}
                <p>
                  Khi những biến cố xảy đến, những doanh nghiệp vừa & nhỏ luôn
                  chật vật vì chịu ảnh hưởng trực tiếp lên doanh thu, nguồn nhân
                  lực, nguồn cung ứng,…
                </p>
              </article>
              <article>
                {/* <h5>To revive SMEs who have closed down or are on the verge of closing down - to "Breath Again & keep going"</h5> */}
                <p>
                  Biến cố tác động mạnh mẽ khiến các doanh nghiệp vừa & nhỏ
                  khiến họ buộc phải đưa ra quyết định tạm thời đóng cửa, nhưng
                  tất cả sẽ là bài học cho sự khởi đầu mới.
                </p>
              </article>
              <article>
                {/* <h5>To Create a Compelling Vision</h5> */}
                <p>
                  Hầu hết mọi người quyết định kinh doanh vì thích một ngành
                  nghề nào đó, hoặc có khả năng trong lĩnh vực bất kỳ. Nhưng tại
                  thời điểm này, bất kỳ công ty nào muốn đứng{" "}
                </p>
              </article>
              <article>
                {/* <h5>To Create a Detailed Action Plan</h5> */}
                <p>
                  Kế hoạch hành động chi tiết sẽ giữ bạn không lạc ra khỏi quỹ
                  đạo ngay từ ban đầu của mình và bám sát mục tiêu hiệu quả hơn.{" "}
                </p>
                <img src={JC01} alt="Book" />
              </article>
              <article>
                <h2>Ngày 2</h2>
                {/* <p>Life finds a way. You know what? It is beets. </p> */}
              </article>
              <article>
                {/* <h5>To Communicate and Share the Vision & Plan to get buy-in</h5> */}
                <p>
                  Không thể ép buộc nhân viên trung thành với sếp, cũng không
                  thể hứa hẹn cam kết điều gì. Nhưng sẽ luôn có cách để họ đồng
                  lòng cùng bạn vượt qua những giai đoạn khó khăn này.
                </p>
              </article>
              <article>
                {/* <h5>To Rejuvenate the Team and Motivate them to Perform at Peak, more than ever before - "Breath life into a dead snake" and "Give it Wings"</h5> */}
                <p>
                  Những binh lính ở quân đội chưa bao giờ ngừng việc tin tưởng
                  người chỉ huy & hết mình chiến đấu cho tổ quốc của họ. Học
                  cách áp dụng tinh thần kiên cường của quân đội vào đội nhóm
                  của mình.
                </p>
              </article>
              <article>
                {/* <h5>To Create a High-Value Organisation with Military Quality Discipline</h5> */}
                <p>
                  Học cách áp dụng tính kỷ luật của quân đội vào đội nhóm của
                  mình.
                </p>
              </article>
              <article>
                {/* <h5>To Create a Culture of Excellence - Focused & Flexible to Achieve the Targets Relentlessly</h5> */}
                <p>
                  Quân đội không chỉ giành chiến thắng bằng các chiến lược đỉnh
                  cao & sức khoẻ bền bĩ, quân đội còn giành thắng lợi nhờ vào
                  tinh thần bất khuất của họ. Học cách để tạo dựng văn hoá riêng
                  của công ty/ doanh nghiệp của bạn.
                </p>
              </article>
              <article>
                {/* <h5>Engaging Creativity & Mind factor to Make it Easy and Fast</h5> */}
                <p>
                  Khi bạn đã có được tầm nhìn, bảng kế hoạch & những người đồng
                  đội. Yếu tố sáng tạo sẽ giúp mọi thứ được thực hiện hiệu quả
                  hơn, rút ngắn thời gian.
                </p>
                <img src={JC02} alt="Book Open" />
              </article>
            </div>
            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/5tIZsrqFCAk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    );
}

export default JourneyCourse
