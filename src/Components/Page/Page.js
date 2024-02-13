import React from "react";
import "./Page.css";

const Page = () => {
  const handler = () => {
    alert("You Think that u get a Perfect BoyFriend !! Shanti Se Accept Kro Samaji Na Aap");
  };
  return (
    <>
      <div className="birthdaymain container-fluid">
        <div className="birthdayCard container ">
          <div className="cardFront">
            <div className="card-front">
              <div className="note">
                <h1>Click to Open</h1>
              </div>
            </div>
          </div>
          <div className="card-inside">
            <div className="text-one">You Are My </div>
            <div className="smile"></div>
            <div className="eyes"></div>
            <div className="btn">
              <button className="yes-btn btn">Accept</button>
              <button className="no-btn btn" onClick={handler}>
                Not Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
