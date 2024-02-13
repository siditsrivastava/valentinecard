import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const notAcceptHandler = () => {
    alert("There Are No Option. You Choose Only Me !!!");
  };

  const [open, setopen] = useState(false);

  return (
    <>
      {/* <div className="main-section container-fluid">
        <div className="sub-section-1 container">
          <div className="card-board container">

            <div className="title">
              <h4>You Are my Valentine ???</h4>
            </div>
            <div className="button-section">
            <button className="yes-button btn">Accept</button>
            <button className="no-button btn" onClick={notAcceptHandler}>
             Not Accept
            </button>
            </div>
          </div>
        </div>
        <div className="sub-section-2"></div>
      </div> */}

      <div className="valentines-day-card ">
        <input id="open" type="checkbox" />
        <label className="open" for="open"></label>
        <div className="card-front">
          <div className="note">Click to Open</div>
        </div>
        <div className="card-inside">
          <div className="text-one">Happy</div>
          <div className="heart"></div>
          <div className="smile"></div>
          <div className="eyes"></div>
          <button className="btn" onClick={notAcceptHandler}>Open</button> 
        </div>
      </div>
      
    </>
  );
};

export default Home;
