import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import ActionImage from '../../assets/love_money2.png'
import axios from 'axios'


function Register(props) {
    const [errMsg, setErrMsg] = useState(null);

    const history = useHistory();
    
    const usernameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();


    function submitHandler(event) {
        event.preventDefault(); //prevents full page reload
        
        const enteredUsername = usernameInputRef.current.value;
        const enteredEmail= emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        
        axios({
            method: 'post',
            url: `http://localhost:3100/api/users/register`,
            data: {
              username: enteredUsername,
              email: enteredEmail,
              password: enteredPassword
            }
          }).then( (res) => {
              if (res.data.success == false) {
                  setErrMsg(`${res.data.message}`);
              }
              else { 
                localStorage.setItem("username", enteredUsername);
                localStorage.setItem("token", res.data.token);
                history.push("balance");
              }
          }).catch( (err) => {
              console.log(err)
              setErrMsg("An error has occured. Please try again later")
          });
    
      }
      
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="">
                        <img src={ActionImage} alt="" width="85%" class="d-inline-block align-text-top"></img>
                    </div>
                </div>
                <div className="col-6">
                    <div className=" display-3 fw-bold">
                        Save.<br /> Live Peacefully.<br /> Join Now For Free.<br />
                    </div>
                    <form className="">
                        <div className="mt-4">
                            {/* <label for='fullName' className="form-label"><b>Full Name</b></label> */}
                            <input type='text' className="form-control" required id='fullName' placeholder="Enter Your Username Here" ref={usernameInputRef} />
                        </div>
                        <div className="mt-4">
                                {/* <label for='pass' className="form-label">Password</label> */}
                                <input type='email' className="form-control" required id='email' placeholder="Enter Your Email Here" ref={emailInputRef} />
                        </div>
                            <div className="mt-4">
                                {/* <label for='pass' className="form-label">Password</label> */}
                                <input type='password' className="form-control" required id='password' placeholder="Enter Your Password Here" ref={passwordInputRef} />
                        </div>
                                 <p class="text-danger">{errMsg}</p>
                                <div className="d-flex justify-content-evenly mt-4">
                                    <button onClick={submitHandler} class="btn btn-warning btn-lg"><b>Register</b></button>
                                </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Register;