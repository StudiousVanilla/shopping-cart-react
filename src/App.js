import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import CheckoutPage from './components/CheckoutPage';
import Home from './components/Home';
import ShoppingPage from './components/ShoppingPage';
import NavBar from './components/NavBar';
import CartContextProvider from './contexts/CartContext';



function App() {
  return (
    <div className="App">
    <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/shopping" component={ShoppingPage}/>
            <Route path="/checkout" component={CheckoutPage}/>
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
