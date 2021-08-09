import Register from './Register'
import About from './About'
import Login from './Login'
import classes from './Auth.module.css'

function AuthSection(props) {
    // if (props.action=="register") {
        return (
            <div>
                <div className={classes.authSection}>
                    <Register />
                </div>
                <div className={classes.authSection}>
                <About />
                </div>
                <div className={classes.authSection}>
                <Login />
                </div>
                <div className={classes.authSection}>
                    `
                </div>
            </div>


        )
    // }
    
    // else  {
    //         return (
    //             <div>
    //                 {props.action}
    //             </div>
    //         )
    // }
}

export default AuthSection;