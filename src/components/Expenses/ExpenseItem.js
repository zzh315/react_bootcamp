import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  //returns an array that contains variable itself[0] and a function(index of 1) that allow us to callit with the variable argument and allow  us to modify the varibale
  // if we dont use it like this, the, even if we click, the rendered HTML will still be the same.because it was rendered at the start when loading the page.
  // useState is a kind of react hook
  //most react hook start with use, eg useHookName.
  //must be called within react component functions

  // const clickHandler = () => {
  //   setTitle("Updated!"); //when called update new variable, the entire component function will be called again
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
