import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        locationOfExpenditure={props.items[0].locationOfExpenditure}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        locationOfExpenditure={props.items[1].locationOfExpenditure}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        locationOfExpenditure={props.items[2].locationOfExpenditure}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        locationOfExpenditure={props.items[3].locationOfExpenditure}
      />
      <ExpenseItem
        title={props.items[4].title}
        amount={props.items[4].amount}
        date={props.items[4].date}
        locationOfExpenditure={props.items[4].locationOfExpenditure}
      />
    </Card>
  );
};

/*function Expenses(props) {
    const { expenses } = props;

    return (
        <Card className="expenses">
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                    locationOfExpenditure={expense.locationOfExpenditure}
                />
            ))}
        </Card>
    );
}*/

/*function Expenses(props) {
    const { expenses } = props;
    const expenseItems = [];

    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];
        expenseItems.push(
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount}
                locationOfExpenditure={expense.locationOfExpenditure}
            />
        );
    }

    return (
        <Card className="expenses">
            {expenseItems}
        </Card>
    );
}*/

export default Expenses;
