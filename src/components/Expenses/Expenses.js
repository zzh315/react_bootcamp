import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020"); // useState Hook must be used directly under the component function

  const addFilterHandler = (filterValue) => {
    setFilterYear(filterValue);
    // console.log(filterValue);
  };

  // console.log(filterYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterYear}
        onAddFilter={addFilterHandler}
      />
      <ExpenseItem
        title={props.expense[0].title}
        amount={props.expense[0].amount}
        date={props.expense[0].date}
      />

      <ExpenseItem
        title={props.expense[1].title}
        amount={props.expense[1].amount}
        date={props.expense[1].date}
      />

      <ExpenseItem
        title={props.expense[2].title}
        amount={props.expense[2].amount}
        date={props.expense[2].date}
      />

      <ExpenseItem
        title={props.expense[3].title}
        amount={props.expense[3].amount}
        date={props.expense[3].date}
      />
    </Card>
  );
}

export default Expenses;
