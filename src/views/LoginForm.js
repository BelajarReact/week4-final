import React,{useState} from 'react';



class LoginForm extends React.Component{
    constructor(props) {
        super(props);
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(event)
    }

    render() {
        return(
          <div className="LoginForm">
              <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyoneelse.</small>
                  </div>
                  <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div className="form-group form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
              </form>
          </div>
        )
    }
}

export default LoginForm;