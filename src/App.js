
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from './components/home/Home';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ProductDetail from './components/ProductDetail/ProductDetail'



function App() {
  const products = [
    {
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/Hc72f3726c52c459a8c9d68be9cea111eF.jpg_300x300.jpg",
      name: "AirPods",
      price: `6,99 $`,
      id:0
    },
    {
      imgSrc: `https://s.alicdn.com/@sc01/kf/Hdfd49d641a21425b980735a170a9de89K.jpg_300x300.jpg`,
      name: "Smart watch",
      price: `8,64 $`,
      id:1
    },
    {
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/H06b8a5528adc413b8f4eeef65d889acfK.jpg_300x300.jpg",
      name: "Iphone 11 ",
      price: `150 $`,
      id:2
    },
  ];
  return (
    <div className="App">
        <BrowserRouter>
           <NavBar/>
           <Switch>
           <Route path="/login" component={Login}/>
            <Route path="/" component={Home} exact/>
            <Route path="/products" render = {() => <Products products={products}/>}/>
            <Route path="/product/:id" render = {(props) => <ProductDetail {...props} products={products}/>} />
           </Switch>
            
            
        </BrowserRouter>
    </div>
  );
}

export default App;
