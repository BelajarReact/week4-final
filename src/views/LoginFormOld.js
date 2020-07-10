import React,{useState} from 'react';
import {connect} from 'react-redux';

import {setLogin} from '../actions'


class LoginFormOld extends React.Component{

        constructor(props) {
            super(props);

            this.inputEmail = React.createRef();
            this.inputPassword = React.createRef();
            this.RememberMe = React.createRef();

            this.state = {
                email:'',
                password:'',
                emailError: false,
                passwordError: false
            }

        }

    handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            emailError :false,
            passwordError :false,
        })
        const  email = this.inputEmail.current.value;
        const  password = this.inputPassword.current.value;

        if ('hadie87@gmail.com' !== email){
            this.setState({
                emailError :true
            })


        }

        if ('rahasia' !== password){
            this.setState({
                passwordError :true
            })
        }

        if ('hadie87@gmail.com' === email && 'rahasia' === password){
            setLogin(email,password);


        }
    }

    render() {
            const {emailError,passwordError} = this.state;
                const {email,password} = this.props;

        return(
          <div className="LoginForm">
              <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className={`form-control ${emailError ? 'is-invalid':''}`} defaultValue={`hadie87@gmail.com`} id="exampleInputEmail1" aria-describedby="emailHelp" ref={this.inputEmail}/>
                      <div className="invalid-feedback">
                          Please input with email hadie87@gmail.com.
                      </div>
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyoneelse.</small>
                  </div>
                  <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className={`form-control ${passwordError ? 'is-invalid':''}`} defaultValue={`rahasia`} id="exampleInputPassword1" ref={this.inputPassword}/>
                      <div className="invalid-feedback">
                          Please input with password "rahasia"
                      </div>
                  </div>
                  <div className="form-group form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" ref={this.RememberMe}/>
                          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              {email}
              {password}
          </div>
        )
    }
}

// export default LoginFormOld;
const mapStateToProps = state => ({
   email : state.email,
    password: state.password
})

const mapDispatchToProps = dispatch => ({
    DataLogin: email => dispatch({type: 'SET_LOGIN',email})
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginFormOld);
