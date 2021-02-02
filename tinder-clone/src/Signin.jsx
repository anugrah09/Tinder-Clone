import React, { Component } from 'react'
import { Redirect, Link} from 'react-router-dom'
import axios from './axios.js'
import './signin.css'
class Signin extends Component {
    state ={
        name: '',
        imgurl: '',
        key: ''
    }
    
    handleChange= (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(this.state);
        const registered ={
            name: this.state.name,
            imgurl: this.state.imgurl
        }
        if(this.state.name && this.state.imgurl){

            axios.post("/tinder/cards", registered)
            .then(res=>{
                // console.log(res.data._id);
                this.setState({
                    [e.key]: res.data._id
                })
                // console.log(this.state)
                // if(res.data._id) return <Redirect to="/"/>
            })
        }
    }

    render(){
        if (this.state.name && this.state.imgurl && this.state.undefined){
            return <Redirect to="/" />
        }
        // console.log(this.props)
        return (
            <div className="form">
                    <form onSubmit={this.handleSubmit} className="container">
                        <div>

                        <h5 className="signin">Sign In</h5>
                        <div className="input-field">
                            <label htmlFor="text">Username</label><br/>
                            <input id="name" type="text" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="text">Imgurl</label><br/>
                            <input id="imgurl" type="text" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <button className="btn red">SignIn</button>
                        </div>
                        <Link to="/register">New User</Link>
                        </div>
                    </form>
                </div>
        )
    }
}

export default Signin
