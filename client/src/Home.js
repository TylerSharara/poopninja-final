import React from 'react';
import HomeJumbo from './HomeJumbo';
import HomeCards from './HomeCards';
import About from "./About";

function Home() {
    return (
        <div>
            <br />
            <br />
            <HomeJumbo />
            <br />
            <HomeCards />
            <br />
            <About/>
        </div>
    );
}

export default Home;