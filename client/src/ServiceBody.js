import React from "react";
import residential from "./media/residential.jpg";
import common from "./media/common-area.jpg";
import partydog from "./media/party-dog.jpg";
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
                        Love your dog but hate the mess? With <span className="accent">PoopNinja</span> Pet Waste Removal Service, you can wash your hands of the whole “clean up” business.
                        <span className="accent"> We offer weekly, bi- week and monthly scooping service, as well as one-time clean ups</span> to keep your yard clean and safe for your family
                        and pets to enjoy year-round.
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
                        <span className="accent">PoopNinja</span> is dedicated to making the world a better place to live, one waste removal at a time. With our
                        <span className="accent"> environmentally-friendly pet waste management practices</span>, we not only keep your community clean and safe
                        for families and pets to enjoy, but we work to improve the local environment as well.
                    </p>
                </div>
                <div className="service-btn-container">
                    <Link to={"/contact"} className="btn btn-primary btn-lg jumbo-btn service-btn">Request Free Quote</Link>
                </div>
            </div>
            <br/>
            <div className="service">
                <img className="service-img" src={partydog} alt={"Two dogs with party hats, smiling dogs"}/>
                <div className="overlay"></div>
                <h1 className="service-title">Events</h1>
                <div className="service-content">
                    <h1 className="service-header">Walk, run, and ride without a care.</h1>
                    <p className="service-para">
                        Our friendly crew will  <span className="accent">patrol your event from start to finish.</span> In big cities, small towns,
                        and the suburbs in between, we’ve got the equipment and know-how to sanitize your space. From birthday parties to festivals we've got you covered.
                    </p>
                </div>
                <h2 className="service-header">One Time Clean-ups Available</h2>
            </div>
        </div>
    );
}

export default ServiceBody;
