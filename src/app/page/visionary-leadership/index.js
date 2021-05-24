import React  from 'react'
import "./styles/styles.scss";
import NavBar from "./navBar/index";
import Carousel from "./Carousel/index";
import ProblemBusiness from "./ProblemBusiness/index";
import Story from "./Story/index";
import JourneyCourse from "./JourneyCourse/index";
import SkillOfCourse from "./SkillOfCourse/index";
import Pricing from "./Pricing/index";
import AboutMrVas from "./AboutMrVas/index";
import FormRegister from "./FormRegister/index";
import temPlate from "assets/images/template.jpeg";
import BenefitAfterCourse from "./BenefitAfterCourse/index";
function VisionaryLeadership() {
     
    return (
      <div>
        {/* <NavBar/> */}
        <Carousel />
        <ProblemBusiness/>
        <Story/>
        <JourneyCourse/>
        <SkillOfCourse/>
        <AboutMrVas/>
        <Pricing/>
        <BenefitAfterCourse/>
        <div className="bg-dangKy">
          <div className="container-fluid py-5" id="dangKy">
            <h1 className="text-center heading-title wow fadeInUp">Nhận Tư Vấn Về Khóa Học</h1>
            <div className="row">
              <div className="col-12 wrapper-form wow zoomInLeft">
                <FormRegister/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default VisionaryLeadership