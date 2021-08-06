import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout'
import HomePage from './components/home/Home';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
            <HomePage />
        </Route>

      </Switch>
    </Layout>
    
  );
}

export default App;
