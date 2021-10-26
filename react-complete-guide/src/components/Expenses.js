import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./css/Expenses.css";
import Card from "./Card";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2021");

    function filterChangeHandler(selectedYear) {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = (
        <center>
            <p>No expenses found</p>
        </center>
    );

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }
    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {expensesContent}
        </Card>
    );
}

export default Expenses;
