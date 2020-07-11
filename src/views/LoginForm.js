import React, {useState} from 'react';
import {useDispatch} from "react-redux";


const LoginForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setemailError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);
    const [loginStatus, setloginStatus] = useState(false);
    const KodeRahasia = 'RnPaXP515rIWmQPUZx5sZDkXdHVdKQ4sRASobRhIneVFsZw1k8NlANdjGq71UcsZ06D6C2vFuZAMt6sDtqIJZUAD9Vo5TVAcpzJ';

    const onChangeEmail = event => setUsername(event.target.value)
    const onChangePassword = event => setPassword(event.target.value)

    /**
     * Handle form login submit
     * @param event
     */
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
        if ('halo@google.com' === username && 'rahasia' === password) {
            localStorage.setItem(KodeRahasia,username);
              setloginStatus(true);
            window.location.reload(false);

        }


    }

    const isLogin = localStorage.getItem(KodeRahasia);

    /**
     * Handle Logout
     */
    const handleLogout = () =>{
       localStorage.removeItem(KodeRahasia);
        setloginStatus(false)
        window.location.reload(false);

    }


    return (
        <div className="LoginForm">
            {isLogin === null && (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className={`form-control ${emailError ? 'is-invalid' : ''}`}
                               value={username} id="exampleInputEmail1" aria-describedby="emailHelp"
                               onChange={onChangeEmail}/>
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

            )}
            {isLogin !== null  && (
                <button className="btn btn-block btn-danger" onClick={handleLogout}>Keluar</button>

            )}
          <div className="alert alert-danger mt-5">
              <h4 className="alert-heading">Catatan</h4>
              <p><strong>bisa dicoba dengan email atau password yang salah</strong></p>

              <p>email : halo@google.com = password : rahasia </p>
              <p>Form ini untuk fungsi login sederhana tanpa melakukan fetch ke external API. Nantinya bisa di implementasikan dengan API ya...</p>
              <p>Setelah username dan password benar, data akan di simpan ke localstorage yang nantinya bisa digunakan secara global</p>
          </div>
        </div>
    )
}

export default LoginForm;