import {React, Component } from 'react';
import "./styles/styles.scss";
import slider01 from "assets/images/slider/slider-01.jpeg";

class index extends Component {
    render() {
        return (
            <div className="slider">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol> */}

                    <div className="carousel-inner">
                    <div className="item active">
                        <img src={slider01} alt="Los Angeles" />
                    </div>

                    {/* <div className="item">
                        <img src={slider01}  alt="Chicago" />
                    </div>
                    
                    <div className="item">
                        <img src={slider01}  alt="New york"/>
                    </div> */}
                    </div>

                    {/* <!-- Left and right controls --> */}
                    {/* <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                    </a> */}
                </div>
            </div>
        );
    }
}

export default index;