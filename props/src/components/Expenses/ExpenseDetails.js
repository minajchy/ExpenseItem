import React from "react";
import "./ExpenseDetails.css";

function ExpenseDetails(props) {
  const details = props.amount;

  return (
    <div className="expense-details">
      <div className="expense-details__details">Rs {details}</div>
    </div>
  );
}

export default ExpenseDetails;
