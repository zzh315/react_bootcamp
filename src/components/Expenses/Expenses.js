import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020"); // useState Hook must be used directly under the component function

  const addFilterHandler = (filterValue) => {
    // this function grabs filteryear data from children component
    setFilterYear(filterValue);
    // console.log(filterValue);
  };

  // console.log(filterYear);

  const filteredExpenses = props.expense.filter(
    (i) => i.date.getFullYear().toString() === filterYear
  ); // filter display expenses array by filteryear

  // console.log(props.expense[0].date.getFullYear());
  // console.log(filterYear);

  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesFilter
        selectedYear={filterYear}
        onAddFilter={addFilterHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
