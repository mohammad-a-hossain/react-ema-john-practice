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





function App() {
  return (
    <div>
   <Header/>
   <Router>
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
       <Route path='/details'>
         <Details></Details>
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
  
    
    </div>
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