import React from 'react';
import family from "./media/family-dog.jpg";
import SlantUpper from "./SlantUpper";
import SlantLower from "./SlantLower";

function About() {
    return (
        <div className="about">
            <SlantUpper />
            <img className="about-img" src={family} alt={"Family and dog playing in yard"}/>
            <div className="overlay2"></div>
            <div className="about-content">
                <h1 className="about-header">Hello, Neighbor!</h1>
                <p className="lead about-text"><span className="accent">PoopNinja</span> is a locally owned and operated <span className="accent">Pet Waste Management </span>
                    service from the Metro-Detroit area. We’ll clean your yard as many times per week as you prefer,
                    <span className="accent"> thoroughly and professionally</span> — so you and your family can squeeze more enjoyment out of every sunny afternoon,
                    snow day, pool party, birthday celebration, and Sunday cookout.
                </p>
            </div>
            <SlantLower/>
        </div>
    );
}

export default About;

