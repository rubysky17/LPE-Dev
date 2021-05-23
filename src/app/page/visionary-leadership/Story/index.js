import React, { Component } from 'react'
import "./styles/styles.scss"
import story01 from "assets/images/story/story01.png";
export default class index extends Component {
    render() {
        return (
            <div className="story container area-mb">
                <div className="row content01 area-pd">
                    <div className="col-md-6 ">
                        <h2>"Làm thế nào để đẩy doanh nghiệp phát triển tốt ở giai đoạn khủng hoảng? "</h2>
                        <p>
                        Ở giai đoạn khủng hoảng hiện tại, bạn có thể có rất nhiều kiến thức chuyên môn, nhưng thứ sẽ giúp bạn vẫn phát triển tốt lại chính là một Tầm nhìn đủ lớn rộng & những cách thức áp dụng Tâm lý học vào việc kinh doanh.
                        </p>
                    </div>
                    <div className="col-md-6 ">
                        {/* <img src={story01} className="img-responsive" alt="Image"/> */}
                        <iframe className="video" src="https://www.youtube.com/embed/B_61cPLb1JY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="row content02">
                    <div className="col-md-6">
                        <h2>"CHÚNG TÔI SẼ <br/>ĐỒNG HÀNH CÙNG BẠN!"</h2>
                        <p>
                        Chúng tôi ý thức được cặn kẽ về những biến cố đang xảy ra ngay lúc này & chúng tôi cũng hiểu rất rõ về căn nguyên của những vấn đề bạn đang gặp phải.
                        </p>
                        <br/>
                        <p>Không ai có thể chắc chắn rằng mọi thứ sẽ trở lại trạng thái bình thường như trước. Hãy coi như đây chính là cơ hội để tái thiết lập lại & xây dựng mọi thứ vững mạnh hơn</p>
                    </div>
                    <div className="col-md-6 ">
                        <img src={story01} className="img-responsive" alt="Image"/>
                    </div>
                </div>
            </div>
        )
    }
}
