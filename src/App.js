import React from 'react'
import './App.css';
import Home from './Components/Home'
import { Route, Switch } from 'react-router';
import {ToastContainer} from 'react-toastify'
import Navbar from './Components/Navbar';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';

function App() {
  return (
    <> 
    <ToastContainer />
    <Navbar />
    <Switch>
    <Route exact path='/' component={ () =>  <Home /> }/>
    <Route  path='/add'>
    <AddContact />
    </Route>
    <Route exact path='/edit/:id'>
    <EditContact />
    </Route>
    </Switch> 
    </>
  );
}

export default App;
