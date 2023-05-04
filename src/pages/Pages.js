import React from 'react';
import FlashDeals from '../components/flashDeals/FlashDeals';
import Home from '../components/mainpage/Home';


const Pages = ({productItems}) => {
    return (
      <>
        <Home></Home>
        <FlashDeals productItems={productItems}></FlashDeals>
      </>
    );
};

export default Pages;