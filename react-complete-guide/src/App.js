import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Laptop",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    function addExpenseHandler(expense) {
        // console.log("In App.js");
        console.log(expense);
        console.log(expenses);
        setExpenses((prevExpenses) => {
            return [...prevExpenses, expense];
        });
    }

    return (
        <div>
            <center>
                <h2>Expense Manager</h2>
            </center>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );

    // alternative of above return using React object
    // return React.createElement(
    //     "div",
    //     {},
    //     React.createElement("h2", {}, "Hello World"),
    //     React.createElement("h2", {}, "Let's build Expense Manager"),
    //     React.createElement(Expenses, {items:expenses}),
    // );
}

export default App;
