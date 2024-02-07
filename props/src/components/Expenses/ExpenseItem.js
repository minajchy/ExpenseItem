import React from "react";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2 className="expense-item h2">{props.title}</h2>
        <ExpenseDetails amount={props.amount}></ExpenseDetails>
        <div className="expense-item__location">
          {props.locationOfExpenditure}
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
