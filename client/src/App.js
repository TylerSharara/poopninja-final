import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <br />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/contact" exact component={Contact} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;