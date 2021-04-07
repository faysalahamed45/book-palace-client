import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import { createContext, useState } from 'react';
// import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';
import CheckOut from './components/CheckOut/CheckOut';
import Admin from './components/AdminPanel/Admin/Admin';
import Order from './components/Order/Order';
import Shipment from './components/Shipment/Shipment';
// import UserOrder from './components/UserOrder/UserOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserOrderItem from './components/UserOrder/UserOrderItem/UserOrderItem';


export const userCreate = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [addCart,setAddCart] = useState([]);

  return (
    <userCreate.Provider value={[loggedInUser, setLoggedInUser,addCart,setAddCart]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path="/order">
        <UserOrderItem></UserOrderItem>
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path='/checkout/:id'>
            <CheckOut></CheckOut>
          </PrivateRoute>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <Route path="/shipment">
            <Shipment></Shipment>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </userCreate.Provider>


  );
}

export default App;
