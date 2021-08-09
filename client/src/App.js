import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout'
import HomePage from './components/home/Home';
import Balance from './components/dashboard/DashboardAuth';



function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
            <HomePage />
        </Route>
        <Route path='/balance' exact>
            <Balance />
        </Route>

      </Switch>
    </Layout>
    
  );
}

export default App;
