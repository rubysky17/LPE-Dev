import React, { useEffect } from "react";

import { Fade, Zoom } from "react-reveal";
import Iframe from "react-iframe";

import Carousel from "./Carousel";
import ProblemBusiness from "./ProblemBusiness";
import Story from "./Story";
import JourneyCourse from "./JourneyCourse";
import SkillOfCourse from "./SkillOfCourse";
import Pricing from "./Pricing";
import AboutMrVas from "./AboutMrVas";
import FormRegister from "./FormRegister";
import BenefitAfterCourse from "./BenefitAfterCourse";
import Footer from "app/components/footer";

import "./styles/styles.scss";

function VisionaryLeadership() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Carousel />
      <ProblemBusiness />
      <Story />
      <JourneyCourse />

      <Fade left>
        <div className="container py-5">
          <div className="wrapper-video">
            <Iframe
              className="video-vas"
              url="https://www.youtube.com/embed/5tIZsrqFCAk"
              width="70%"
              height="450px"
              frameborder="0"
            />
          </div>
        </div>
      </Fade>

      <SkillOfCourse />
      <AboutMrVas />
      <Pricing />
      <BenefitAfterCourse />

      <div className="bg-dangKy">
        <div className="container-fluid py-5" id="dangKy">
          <Fade left>
            <h1 className="text-center heading-title wow fadeInUp">
              Nhận Tư Vấn Về Khóa Học
            </h1>
          </Fade>

          <div className="row">
            <Zoom bottom>
              <div className="col-12 wrapper-form wow zoomInLeft">
                <FormRegister />
              </div>
            </Zoom>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VisionaryLeadership;
