import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import './signin.css'
import {loginUser} from "./actions/authactions"
class Login extends Component {
    state ={
        username: '',
        password: '',
        errors: {}
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
            name: this.state.username,
            imgurl: this.state.password
        }
        this.props.login(registered);
        // if(this.state.username && this.state.password){

        //     axios.post("/login", registered)
        //     .then(res=>{
        //         // console.log(res.data._id);
        //         this.setState({
        //             [e.key]: res.data._id
        //         })
        //         // console.log(this.state)
        //         // if(res.data._id) return <Redirect to="/"/>
        //     })
        // }
    }

    render(){
        // if (this.state.name && this.state.imgurl && this.state.undefined){
        //     return <Redirect to="/" />
        // }
        const { errors } = this.state;
        console.log(errors);
        console.log(this.props)
        return (
            <div className="form">
                    <form onSubmit={this.handleSubmit} className="container">
                        <div>

                        <h5 className="signin">Log In</h5>
                        <div className="input-field">
                            <label htmlFor="text">Username</label><br/>
                            <input id="username" type="text" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="text">Password</label><br/>
                            <input id="password" type="password" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <button className="btn red">LogIn</button>
                        </div>
                        <Link to="/register">New User</Link>
                        </div>
                    </form>
                </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

const mapDispatchtoProps = (dispatch)=>{
    return{
        login: (creds)=> dispatch(loginUser(creds))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Login);