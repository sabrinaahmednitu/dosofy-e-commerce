
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './common/Header/Header';
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';
import { useState } from 'react';
import Cart from './common/cart/Cart';

function App() {
  //step 1:fetch data from database
  const { productItems } = Data

  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    
    if (productExit) {
      setCartItem(cartItem.map((item) =>
        (item.id===product.id ? {...productExit,qty:productExit.qty+1} :item)
      ))
    }
  }
    
  return (
    <>
      <Header cartItem={cartItem}></Header>
      <Routes>
        <Route
          path="/"
          element={
            <Pages productItems={productItems} addToCart={addToCart}></Pages>
          }
          exact
        ></Route>
        <Route
          path="/cart"
          element={<Cart cartItem={cartItem} addToCart={addToCart}></Cart>}
          exact
        ></Route>
      </Routes>
    </>
  );
}

export default App;
