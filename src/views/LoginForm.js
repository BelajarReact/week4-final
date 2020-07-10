import React, {useState} from 'react';
import {Login} from "../actions"
import {useDispatch} from "react-redux";


const LoginForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setemailError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);

    const dispatch = useDispatch();

    const onChangeEmail = event =>  setUsername(event.target.value)
    const onChangePassword = event =>  setPassword(event.target.value)

    const handleSubmit = event => {
        event.preventDefault();
        setemailError(false);
        setpasswordError(false);

        if ('halo@google.com' !== username) {
            setemailError(true)
        }


        if ('rahasia' !== password) {
            setpasswordError(true)
        }

        dispatch(
            Login(
                {'username': username, 'password': password}
            )
        )


    }
    return (
        <div className="LoginForm">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className={`form-control ${emailError ? 'is-invalid' : ''}`}
                          value={username} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChangeEmail}/>
                    <div className="invalid-feedback">
                        Please input with email halo@google.com.
                    </div>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                        anyoneelse.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                           value={password} id="exampleInputPassword1" onChange={onChangePassword}/>
                    <div className="invalid-feedback">
                        Please input with password "rahasia"
                    </div>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>

        </div>
    )
}

export default LoginForm;