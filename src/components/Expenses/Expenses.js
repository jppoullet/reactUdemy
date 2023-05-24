import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("202");

  const changeSelectedYearHandler = (selectedYearValue) => {
    console.log(`from expenses filter ${selectedYearValue}`);
    setSelectedYear(selectedYearValue);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeSelectedYear={changeSelectedYearHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
