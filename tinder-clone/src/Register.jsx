import React, { Component } from 'react'
import './register.css'
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {registerUser} from "./actions/authactions"
class Signin extends Component {
    state = {
        username: '',
        password: '',
        errors: {}
    }
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.errors) {
    //       this.setState({
    //         errors: nextProps.errors
    //       });
    //     }
    //   }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        const registered = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.signIn(registered, this.props.history);
        // axios.post("/register", registered)
        //     .then(res => {

                // console.log(res.data._id);
                // this.setState({
                //     // [e.key]: res.data._id

                // })
                // console.log(res)
                // if(res.data._id) return <Redirect to="/"/>
            // })

    }

    render() {
        // if (this.state.name && this.state.imgurl && this.state.undefined){
        //     return <Redirect to="/" />
        // }
        // console.log(this.props)
        const { errors } = this.props;
        console.log(errors);
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit} className="container">
                    <div>

                        <h5 className="signin">Register</h5>
                        <div className="input-field">
                            <label htmlFor="text">Username</label><br />
                            <input id="username" type="text" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="text">Password</label><br />
                            <input id="password" type="password" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <button className="btn red">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

// Signin.propTypes = {
//     registerUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
//     errors: PropTypes.object.isRequired
//   };
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

const mapDispatchtoProps = (dispatch)=>{
    return{
        signIn: (creds,history)=> dispatch(registerUser(creds, history))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Signin);