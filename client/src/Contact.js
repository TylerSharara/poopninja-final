import React, {Component} from 'react';
import grass from "./media/grass.jpg";
import Panel from "./Panel";
import validator from 'validator';
import axios from 'axios';

const initialState = {
    name: '',
    email: '',
    phone: '',
    name2: '',
    errMsg: ''
};

export default class Contact extends Component {

    constructor() {
        super();

        this.state = initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    validate = () => {
        let errMsg = "";

        if(!validator.isEmail(this.state.email)){
            errMsg = "invalid Email";
        }

        if(!validator.isNumeric(this.state.phone, {no_symbols: false})){
            errMsg = "invalid Phone";
        }

        if(errMsg){
            this.setState({errMsg});
            return false;
        }
        else{
            return true;
        }
    };

    async handleSubmit(e) {
        const isValid = this.validate();

        if (!isValid) {
            e.preventDefault();
        }

        const {name, email, phone} = this.state;

        if(isValid && !this.state.name2) {
            const form = await axios.post('/api/form', {
                name,
                email,
                phone
            });
            this.setState({errMsg: null});
        }
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <div className="jumbotron">
                    <div className={"overlay"}></div>
                    <img src={grass} alt={"green grass"}/>
                    <h1 className="display-4 jumbo-header">Contact Us</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="errMsg">{this.state.errMsg}</div>
                        <div className="form-group">
                            <label htmlFor="name" className="contact-label">Name</label>
                            <input type="text" name="name" className="form-control" required onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="contact-label">Email</label>
                            <input type="text" name="email" className="form-control" required onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" className="contact-label" >Phone</label>
                            <input type="text" name="phone" className="form-control" required onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="sneaky" htmlFor="name2">Name</label>
                            <input className="sneaky" autoComplete="off" type="text" id="name" name="name2" placeholder="Your name here" onChange={this.handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg jumbo-btn">Submit</button>
                    </form>
                </div>
                <br/>
                <Panel/>
                <br/>
            </div>
        );
    }
}