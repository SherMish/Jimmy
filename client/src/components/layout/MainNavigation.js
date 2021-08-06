import jimmy from '../../assets/jimmy.png'
import classes from './MainNavigation.module.css' 

function MainNavigation() {
    return (
        <div className={classes.mainNav}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container px-4">
                    <a className="navbar-brand fs-3 fw-bold" >
                    <img src={jimmy} alt="" width="55.5" height="57.6" class="d-inline-block align-text-top"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item fs-5 fw-bold"><a className="nav-link" href="#about">Join Now</a></li>
                            <li className="nav-item fs-5 fw-bold"><a className="nav-link" href="#services">Login</a></li>
                            <li className="nav-item fs-5 fw-bold"><a className="nav-link" href="#about">Add Expense</a></li>
                            <li className="nav-item fs-5 fw-bold"><a className="nav-link" href="#about">Balance</a></li>
                            <li className="nav-item fs-5 fw-bold"><a className="nav-link" href="#contact">About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
    );
}

export default MainNavigation;