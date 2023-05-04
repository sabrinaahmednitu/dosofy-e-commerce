import React from 'react';

const Head = () => {
    return (
      <div>
        <section className="head">
          <div className="container d_flex">
              
            <div className="left row">
              <i className="fa fa-phone"></i>
              <label htmlFor="">+88012 3456 789</label>
              <i className="fa fa-envelope"></i>
              <label htmlFor="">dosofy@gmail.com</label>
            </div>
            
            <div className="right row RText">
              <label htmlFor="">Theme FAQ's</label>
              <label htmlFor="">Need Helps</label>
              <span> 🏳️‍⚧️</span>
              <label htmlFor="">EN</label>
              <span> 🏳️‍⚧️</span>
              <label htmlFor="">USD</label>
            </div>
            
          </div>
        </section>
      </div>
    );
};

export default Head;