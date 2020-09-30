import React from 'react';
import clock from "./media/clock.jpg";
import happyDog from "./media/happydog.jpg";
import garbage from "./media/garbage2.jpg";
import {Link} from "react-router-dom";

function HomeCards() {
    return (
        <div className="HomeCards-container">
            <h3 className="panel-header">&#8213;   Our Process   &#8213;</h3>
            <br />
            <div className="HomeCards">
                <div className="card">
                    <div className="card-img-container">
                        <img className="card-img-top" src={clock} alt={"clock, Schedule"}/>
                    </div>
                        <div className="card-body">
                            <h5 className="card-title">Just Schedule</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <Link to={"/services"} className="btn btn-primary card-btn">Learn More</Link>
                        </div>
                </div>
                <div className="card">
                    <div className="card-img-container">
                        <img className="card-img-top" src={garbage} alt={"garbage, waste removal, clean up"}/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">We Scoop</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <Link to={"/services"} className="btn btn-primary card-btn">Learn More</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-container">
                        <img className="card-img-top" src={happyDog} alt={"happy dog, pug, small dog"}/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">You Enjoy</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <Link to={"/services"} className="btn btn-primary card-btn">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCards;