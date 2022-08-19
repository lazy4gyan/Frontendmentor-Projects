import React, { useState } from "react";

export default function Rating() {
  const [response, setResponse] = useState(true);
  const [rating, setRating] = useState(0);
  const [clickedId, setClickedId] = useState(-1);

  // Getting onClick value and also setting the clickiD for activating the selected number
  function getRating(event, number) {
    setClickedId(number);
    setRating(event.target.value);
  }

  //To provide the response of the feedback
  function clickHandler() {
    if (rating === 0) {
      return alert("Please select below rating for feedback!");
    } else {
      setResponse((prevState) => !prevState);
    }
  }

  // Setting up rating options/value
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => (
    <li
      key={number}
      onClick={(event) => getRating(event, number)}
      value={number}
      className={number === clickedId ? "active" : "transparent"}
    >
      {number}
    </li>
  ));

  return (
    <section>
      {response ? (
        <div className="container front-side">
          <div className="star-box">
            <img src="./images/icon-star.svg" alt="" />
          </div>
          <h1 className="feedback">How did we do?</h1>
          <p className="feedback-para">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ul className="scale">{listItems}</ul>
          <button className="submit-btn" onClick={clickHandler}>
            submit
          </button>
        </div>
      ) : (
        <div className="container back-side">
          <div className="thanks-box">
            <img src="./images/illustration-thank-you.svg" alt="" />
          </div>
          <h3 className="response-message">You selected {rating} out of 5</h3>
          <h2 className="thanks-note">Thank you!</h2>
          <p className="message">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </section>
  );
}
