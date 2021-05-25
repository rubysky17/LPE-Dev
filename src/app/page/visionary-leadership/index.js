import React from "react";

import Carousel from "./Carousel";
import ProblemBusiness from "./ProblemBusiness";
import Story from "./Story";
import JourneyCourse from "./JourneyCourse";
import SkillOfCourse from "./SkillOfCourse";
import Pricing from "./Pricing";
import AboutMrVas from "./AboutMrVas";
import FormRegister from "./FormRegister";
import BenefitAfterCourse from "./BenefitAfterCourse";

import "./styles/styles.scss";

function VisionaryLeadership() {
  return (
    <div>
      <Carousel />
      <ProblemBusiness />
      <Story />
      <JourneyCourse />
      <SkillOfCourse />
      <AboutMrVas />
      <Pricing />
      <BenefitAfterCourse />

      <div className="bg-dangKy">
        <div className="container-fluid py-5" id="dangKy">
          <h1 className="text-center heading-title wow fadeInUp">
            Nhận Tư Vấn Về Khóa Học
          </h1>
          <div className="row">
            <div className="col-12 wrapper-form wow zoomInLeft">
              <FormRegister />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionaryLeadership;
