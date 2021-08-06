import classes from './Home.module.css'
import jimmy from '../../assets/jimmy.png'
import { useState, useEffect } from 'react';

import AuthSection from '../auth/Auth'

function HomePage() {
    const [action, setAction] = useState("register");
    return (
        <div>
            <div className={`container `}>
                <div className="row">
                        <div className="d-flex justify-content-center">
                            <div className="col-7 ">
                                <div className="">
                                    <div className=" display-3 fw-bold">
                                        Hey, My Name is Jimmy!<br />
                                    </div>
                                    <div className=" display-5">
                                        Jimmy LOVES money management.<br />
                                        He will help you to stop living <br />
                                        paycheck-to-paycheck, get out of <br />
                                        debt and save more money. <br /> <br /> 
                                    </div>
                                    <div className="d-flex justify-content-evenly">
                                        <button type="button" className="btn btn-lg btn-warning" onClick={() => setAction("register")} ><b>Join Now</b></button>
                                        <button type="button" className="btn btn-lg btn-warning" onClick={() => setAction("login")}><b>Login</b></button>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="d-flex justify-content-center">
                                    <img src={jimmy} alt="" width="85%" class="d-inline-block align-text-top"></img>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="">
                    <div className="">
                        <AuthSection action={action} />
                    </div>
                </div>
        </div>
        
        
    )

}

export default HomePage;