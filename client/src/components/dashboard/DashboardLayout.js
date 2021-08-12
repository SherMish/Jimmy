import ExpenseHistory from "./ExpenseHistory";
import ExpensesChart from "./ExpensesChart";



function DashboardLayout(props) {

    if (props.isAuth) {
        return(
                <div className="container ">
                    <div className="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-6">
                                <div className="display-5 d-flex justify-content-center fw-bold">
                                    Welcome Back, {localStorage.getItem('username')}.
                                </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="btn-group-vertical btn-group-lg mt-4" role="group" aria-label="Basic outlined example">
                                            <button type="button" class="btn btn-success">View Current Balance</button>
                                            <button type="button" class="btn btn-outline-success">View Older Balances</button>
                                            <button type="button" class="btn btn-success">View Current Expenses</button>
                                            <button type="button" class="btn btn-outline-success">View Older Expenses</button>
                                            <button type="button" class="btn btn-danger">Start a New Cycle</button>
                                            <button type="button" class="btn btn-outline-danger">Update The Income</button>
                                            <button type="button" class="btn btn-outline-danger">Add Expenses</button>
                                            <button type="button" class="btn btn-outline-danger">Remove Expenses</button>
                                            <button type="button" class="btn btn-warning">Logout</button>
                                        </div>
                                    </div>
                                </div>
                                
                            
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