import React from "react";
import residential from "./media/residential.jpg";
import common from "./media/common-area.jpg";
import spring from "./media/spring-grass.jpg";
import {Link} from "react-router-dom";

function ServiceBody() {
    return (
        <div className="service-container">
            <div className="service">
                <img className="service-img" src={residential} alt={"neighborhood, suburbs, houses"}/>
                <div className="overlay"></div>
                <h1 className="service-title">Residential</h1>
                <div className="service-content">
                    <h1 className="service-header">A clean yard every time – guaranteed.</h1>
                    <p className="service-para">
                        Love your dog but hate the mess? With <span className="accent">PoopNinja</span> Pet Waste Removal Service, you never have to worry about the whole “clean up” business.
                        <span className="accent"> We offer weekly, bi-weekly and monthly scooping services, as well as one-time clean ups</span> to keep your yard clean and safe year-round.
                        All you have to do is schedule, relax and enjoy.
                    </p>
                </div>
                <h2 className="service-header">Weekly Services as Low as <span className="accent">$9.99</span></h2>
            </div>
            <br/>
            <div className="service">
                <img className="service-img" src={common} alt={"Couple walking dog in a public park"}/>
                <div className="overlay"></div>
                <h1 className="service-title">Communities</h1>
                <div className="service-content">
                    <h1 className="service-header">An array of services to suit your needs.</h1>
                    <p className="service-para">
                        <span className="accent">PoopNinja</span> is dedicated to making your community clean and safe, one waste removal at a time.
                        <span className="accent">we offer thorough, reliable clean-ups</span> to keep common areas looking fresh and clean.
                        Ask our team how we can create a plan to meet your community's needs.
                    </p>
                </div>
                <h2 className="service-header">Have a Question? Call Us!</h2>
            </div>
            <br/>
            <div className="service">
                <img className="service-img" src={spring} alt={"Spring grass, Spring Cleaning"}/>git v
                <div className="overlay"></div>
                <h1 className="service-title">Spring Clean-Ups</h1>
                <div className="service-content">
                    <h1 className="service-header">Big job? No problem.</h1>
                    <p className="service-para">
                        Don't worry we get it - sometimes things pile up! Especially during the winter months it can be tough keeping up with your pets when nature calls.
                        <span className="accent">We offer one-time clean-ups</span> to help you when you when you need it most. Spring, summer or anytime in-between, if you need
                        help with pet waste removal you know who to call!
                    </p>
                </div>
                <h2 className="service-header">One Time Clean-Ups Available</h2>
            </div>
        </div>
    );
}

export default ServiceBody;
