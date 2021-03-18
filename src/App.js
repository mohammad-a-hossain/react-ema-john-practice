import Header from './Components/Header/Header'
import './App.css';
import Shop from './Components/Header/shop/shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/Header/review/Review';
import Comment from './Components/Header/comments/Comment'
import Details from './Components/Header/details/Details';
import Notfound from './Components/notfound/Notfound';
import ProductDetail from './Components/productDetails/ProductDetail'
import Login from './Components/login/Login';
import Shipment from './Components/Shipment/Shipment';
import { createContext, useState } from 'react';
import PrivateRout from './Components/privateroute/PrivateRout';
import Inventory from './Components/Header/inventory/Inventory';

export const UserContext = createContext()



function App() {
   const [userLoggedIn, setUserLoggedIn] = useState({})
  return (
    <UserContext.Provider value={[userLoggedIn,setUserLoggedIn]}>
 
   <h3>user:{userLoggedIn.email}</h3><h3>name:{userLoggedIn.name}</h3><h3>name:{userLoggedIn.displayName}</h3>
   <Router>
       <Header/>
     <Switch>
       <Route exact path="/shop">
          <Shop/>
       </Route>
       <Route path="/review">
         <Review></Review>
       </Route>
       <Route path='/comments'>
         <Comment></Comment>
       </Route>
       <PrivateRout path='/details'>
        <Details></Details>
       </PrivateRout>
       <PrivateRout  path='/inventory'>
         <Inventory></Inventory>
       </PrivateRout >
       <PrivateRout path='/Shipment'>
         <Shipment></Shipment>
       </PrivateRout>
       <Route path='/login'>
         <Login></Login>
       </Route>
       <Route exact path='/'>
         <Shop></Shop>
       </Route>
       <Route path="/product/:productKey">
         <ProductDetail></ProductDetail>
       </Route>
       <Route path='*'>
        <Notfound></Notfound>
       </Route>
       
     </Switch>

   </Router>
  
    
    </UserContext.Provider>
  );
}

export default App;




/* 
import './App.css';
import Header from './Components/Header/Header'
import Product from './Components/Header/Product/Product';
import Shop from './Components/Header/shop/shop';

function App() {
  return (
    <div>
    {/* <Header/>
    <Shop>
    </Shop> /}
    </div>
  );
}

export default App;
 */