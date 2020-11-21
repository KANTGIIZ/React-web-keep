import styled from 'styled-components';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Homepage from './pages/Homepage';
import AddwordPage from './pages/Addwordpage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
const Styledrapper = styled.div`
 
`
function App() {

  return (
    <Styledrapper >

      <div>
        <div>
          <Link to="/">Homepage</Link>
        </div>
        <div>
          <Link to="/login">LoginPage</Link>
        </div>
        <div>
          <Link to="/register">RegisterPage</Link>
        </div>
        <div>
          <Link to="/add-word">AddwordPage</Link>
        </div>

      </div>

      <Switch>

        <Route path="/add-word">
          <AddwordPage />
        </Route>

        <Router path="/login">
          <LoginPage />
        </Router>

        <Route path="/register">
          <RegisterPage />
        </Route>

        <Route path="/">
          <Homepage />
        </Route>

      </Switch>
    </Styledrapper>
  );
}
export default App;
