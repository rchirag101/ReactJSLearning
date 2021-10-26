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

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />

            {props.items.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
}

export default Expenses;
