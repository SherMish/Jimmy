import coinsRight from '../../assets/coins_right.png'
import coinsLeft from '../../assets/coins_left.png'

function About() {

    return(
        <div className="container">
            <div className="row">
                <div className="col-3" >
                    <div className="d-flex justify-content-center">
                        <img src={coinsRight} alt="" width="65%" class=""></img>
                    </div>
                </div>
                <div className="col-6">
                    <div className=" display-2 fw-bold text-center mt-4">
                        Spend Smarter <br />
                        Save More
                    </div>
                    <div className=" display-6 text-center mt-4">
                        Jimmy allows controlling your budget easily by adding expenses and choosing the right spending categories. 
                        <div className="mt-4">
                            You can always create custom categories and/or modify the existing ones.
                        
                        </div>
                        <div className="mt-4 fw-bold">
                            Check the balance. <br /> Control the spendings.
                        </div>
                        <div className="mt-4">
                            <button class="btn btn-warning btn-lg"><b>Start Today!</b></button>
                        </div>
                    </div>
                </div>
                <div className="col-3" >
                    <div className="d-flex justify-content-center">
                        <img src={coinsLeft} alt="" width="65%" class=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;