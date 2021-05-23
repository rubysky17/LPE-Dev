import React from 'react'
import "./styles/styles.scss"

function BenefitAfterCourse() {
    return (
       <div className="benefitAfterCourse">
            <div className="row content01">
                <div className="col-md-6 contentright">
                    <h2>"ĐẶC QUYỀN SAU CHƯƠNG TRÌNH "</h2>
                    <p>
                    Bạn sẽ được theo dõi hàng tuần, bởi hai chuyên gia NLP hàng đầu – Mr.Vas & Ms. Giang Thanh về cách thức thực hiện, áp dụng kiến thức thực tế, lên kế hoạch, chỉnh sửa kịp thời ngay khi xuất hiện vấn đề tại doanh nghiệp.
                    </p>
                    <p>Hai chuyên gia sẽ chính là hai người cố vấn để lắng nghe, chia sẻ & tư vấn giải quyết bất kể vấn đề bạn gặp phải là gì. Là người thấu hiểu nỗi lòng mà chỉ những Nhà lãnh đạo mới có.</p>
                </div>
                <div className="col-md-5 contentleft">
                    <iframe className="video" src="https://www.youtube.com/embed/zjVLmHDwxgE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default BenefitAfterCourse
