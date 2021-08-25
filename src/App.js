import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admission from './Admission';
import Registration from './Registration';
import Login from './Login';

function App() {
  
  return (

    <Router>
      <div className="App">
        <Switch>
          
          <Route path="/login">
            <Login/>   
          </Route>
          <Route path="/register">
            <Registration/>   
          </Route>
          <Route path="/admissions">
            <Admission/>   
          </Route>

          <Route path="/">
            <Home/>   
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
