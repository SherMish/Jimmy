import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import axios from 'axios'

function Login() {

    const [errMsg, setErrMsg] = useState(null);

    const history = useHistory();

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault(); //prevents full page reload

        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        axios({
            method: 'post',
            url: `http://localhost:3100/api/users/login`,
            data: {
              username: enteredUsername,
              password: enteredPassword
            }
          }).then(res => {
            if (res.data.success == false) {
                setErrMsg(`${res.data.message}`);
            }
            else {
                localStorage.setItem("username", enteredUsername);
                localStorage.setItem("token", res.data.token);
                history.push("balance");
            }
          })





        
    }

    return(
        <div>
            <div className="container ">
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        <div className=" display-3 fw-bold text-center mb-4">
                            Already a Member?
                        </div>
                        <form>
                            {/* <label for='fullName' className="form-label"><b>Full Name</b></label> */}
                            <input type='text' className="form-control" required id='fullName' placeholder="Enter Your Username Here" ref={usernameInputRef} />
                            <div className="mt-4">
                                    {/* <label for='pass' className="form-label">Password</label> */}
                                    <input type='email' className="form-control" required id='email' placeholder="Enter Your Password Here" ref={passwordInputRef} />
                            </div>
                            <p class="text-danger">{errMsg}</p>
                            <div className="d-flex justify-content-evenly mt-4">
                                    <button onClick={submitHandler} class="btn btn-warning btn-lg"><b>Login</b></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;