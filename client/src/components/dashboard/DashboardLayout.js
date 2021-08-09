import ExpenseHistory from "./ExpenseHistory";
import ExpensesChart from "./ExpensesChart";



function DashboardLayout(props) {

    if (props.isAuth) {
        return(
                <div className="container ">
                    <div className="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-6">
                                <ExpensesChart />
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-6">
                                <ExpenseHistory />
                            </div>
                        </div>
                    </div>

                    

                </div>
        )
    }
    else {
        return(
        <div className="text-center">
            <h1>Please Login!</h1>
        </div>
        )
    }
}

export default DashboardLayout;