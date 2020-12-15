import React from 'react';
import clock from "./media/clock.webp";
import happyDog from "./media/happy-dog.webp";
import garbage from "./media/garbage.webp";
import {Link} from "react-router-dom";

function HomeCards() {
    return (
        <div className="HomeCards-container">
            <h3 className="panel-header">&#8213;   Our Process   &#8213;</h3>
            <br />
            <div className="HomeCards">
                <div className="card">
                    <div className="card-img-container">
                        <img className="card-img-top" src={clock} alt={"Schedule, Clock"}/>
                    </div>
                        <div className="card-body">
                            <h5 className="card-title">Pencil Us In</h5>
                            <p className="card-text">Lets us know when and where. We'll take care of everything else from there!</p>
                            <Link to={"/services"} className="btn btn-primary card-btn">Learn More</Link>
                        </div>
                </div>
                <div className="card">
                    <div className="card-img-container">
                        <img className="card-img-top" src={garbage} alt={"waste removal, dog poop clean up"}/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">We Scoop</h5>
                        <p className="card-text">A clean yard every time – guaranteed. Easy and hassle-free for your convenience.</p>
                        <Link to={"/services"} className="btn btn-primary card-btn">Learn More</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-container">
                        <img className="card-img-top" src={happyDog} alt={"happy dog, pug, small dog"}/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">You Enjoy</h5>
                        <p className="card-text">Spend time doing stuff you love, like enjoying your clean yard with the whole family.</p>
                        <Link to={"/services"} className="btn btn-primary card-btn">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCards;