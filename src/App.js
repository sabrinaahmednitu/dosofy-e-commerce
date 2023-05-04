
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './common/Header/Header';
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';
import { useState } from 'react';

function App() {
  //step 1:fetch data from database
  const { productItems } = Data
  const[cartItem ,setCartItem]=useState([])
  return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={<Pages productItems={productItems}></Pages>}
          exact
        ></Route>
      </Routes>
    </>
  );
}

export default App;
