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
import Topbar from './components/Topbar';
import MainPage from './pages/MainPage';
const Styledrapper = styled.div`
 
`
function App() {

  return (
    <Styledrapper >
   
      <Switch>

        <Router path="/login">
          <LoginPage />
        </Router>

        <Route path="/register">
          <RegisterPage />
        </Route>  
        
        <Route path='/'>
          <MainPage/>
        </Route>

      </Switch>
    
    </Styledrapper>
  );
}
export default App;
