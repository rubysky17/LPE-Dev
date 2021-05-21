import React , { useEffect, useState} from 'react'
import "./styles/styles.scss";
import logo from "assets/images/doanhNhan.png";

function VisionaryLeadership() {
     const [toggle, setToggle] = useState(false);
     const menu = [
    {
      link: "#gioiThieu",
      content: "Practice Areas",
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
      content: "Học phí",
    },
    {
      link: "#dangKy",
      content: "Đăng ký",
    },
  ];
    return (
        <div>
         
        <nav className="navbar navbar-dp-big">
         {/* navbar */}
            <ul className="listNavbar">
              {menu.map((item, index) => {
                return (
                  <li className="itemNavbar" key={index}>
                    <a href={item.link}>
                      {!item.img ? (
                        item.content
                      ) : (
                        <img src={logo} alt={logo} className="img-logo" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <nav
            className={`navbar navbarSmall navbar-dp-small ${
              !!toggle && "nav-open"
            }`}
            style={{
              opacity: toggle && "1",
            }}
          >
            <ul className="listNavbar">
              <li className="itemNavbar itemLogo">
                <a href="#root">
                  <img src={logo} alt={logo} className="img-logo" />
                </a>
              </li>

              <li
                className="itemNavbar icon"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                {!toggle ? (
                  <i className="far fa-bars"></i>
                ) : (
                  <i className="far fa-times"></i>
                )}
              </li>
            </ul>

            {
              <>
                <ul className="navMobile">
                  <li className="itemNavbar">
                    <a href="#khoaHoc">Khóa học</a>
                  </li>
                  <li className="itemNavbar">
                    <a href="#bio">Bio</a>
                  </li>
                  <li className="itemNavbar">
                    <a href="#hocPhi">Học phí</a>
                  </li>
                  <li className="itemNavbar">
                    <a href="#dangKy">Đăng ký</a>
                  </li>
                </ul>
              </>
            }
          </nav>
          </div>
    )
}

export default VisionaryLeadership
