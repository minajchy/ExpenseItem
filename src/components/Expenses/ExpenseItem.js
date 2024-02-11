import React from "react";   

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  /*const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle('updated');
    console.log(title);
  };

  const handleClick = () => {
    setAmount('100')
    console.log(amount);
  }*/

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

//<button onClick={clickHandler}>Delete Expense</button>
//<button onClick={handleClick}>Update</button>

export default ExpenseItem;
