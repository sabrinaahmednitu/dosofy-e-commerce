import React from 'react';
import './Cart.css';

const Cart = ({ cartItem, addToCart }) => {
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {cartItem.length === 0 && (
              <h1 className="no-items product">No Items are add in cart</h1>
            )}
            
              {
                  cartItem.map((item)=>{
                      const productQty = item.price * item.productQty
                      return (
                          <div className="cart-list product d_flex">
                              <div className="img">
                                  <img src={item.cover} alt="" />
                             </div>
                          </div>
                      )
                  })
              }        
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;