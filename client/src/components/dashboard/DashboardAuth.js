

import axios from 'axios'
import { useState, useEffect } from 'react';
import DashboardLayout from './DashboardLayout';
import ExpensesChart from './ExpensesChart';

function Balance() {  
    const [isAuthState, setisAuth] = useState(null); 

    function isAuth() {
        axios({
            method: 'get',
            url: `http://localhost:3100/api/cycles/isAuth`
        }).then(res => {
            if(res.data.success) setisAuth(true);
        }).catch(err => {
            setisAuth(false)
        });
    }




        return(
            <div>
                {isAuth()}
                <DashboardLayout isAuth={isAuthState}>
                    <ExpensesChart />
                    {/* more charts */}

                </DashboardLayout>
                
            </div>
        )
}


export default Balance;