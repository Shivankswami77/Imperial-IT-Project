import React, { useState } from "react";
import "./App.css";

function App() {
  const [enteredDate, setEnteredDate] = useState("");

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  console.log(enteredDate, "date");

  return (
    <div className="App">
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2001-01-01"
          max="2041-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
        <div className="text-style">Selected Date is :- {enteredDate}</div>
      </div>
    </div>
  );
}

export default App;
