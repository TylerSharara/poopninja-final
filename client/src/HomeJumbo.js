import React from 'react';
import grass from './media/grass.jpg';
import {Link} from "react-router-dom";

function HomeJumbo() {
    return (
        <div className="jumbotron">
            <div className={"overlay"}></div>
            <img src={grass} alt={"clean grass, poop-free"}/>
            <h1 className="display-4 jumbo-header">PoopNinja</h1>
            <hr className="my-4"></hr>
            <p className="lead">We know you love your dog, but we're willing to bet you don't love cleaning up
                when they go #2. That's where we come in! Let us handle the unpleasant stuff, quietly and quickly, and we'll
                be out of your hair in no time!
            </p>
            <Link to={"/contact"} className="btn btn-primary btn-lg jumbo-btn">Request Free Quote</Link>
        </div>
    );
}

export default HomeJumbo;