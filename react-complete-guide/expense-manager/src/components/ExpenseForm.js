import React, { useState } from "react";
import "./css/ExpenseForm.css";

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    var todaysDate = new Date().toISOString().split("T")[0];

    // multiple state to one state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    function titleChangeHandler(event) {
        // console.log(event.target.value);
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        // alternative of above setUserInput(), note: use when state is State That Depends On The Previous State
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value,
        //     };
        // });
    }

    function amountChangeHandler(event) {
        // console.log(event.target.value);
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    }

    function dateChangeHandler(event) {
        // console.log(event.target.value);
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    }

    function todayDateGetter(event) {
        console.log("todayDateGetter is called");
        todaysDate = new Date().toISOString().split("T")[0];
    }
    function submitHandler(event) {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                        required="required"
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                        required="required"
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        id="datePickerId"
                        type="date"
                        min="2020-01-01"
                        max={todaysDate}
                        value={enteredDate}
                        onChange={dateChangeHandler}
                        onLoad={todayDateGetter()}
                        required="required"
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
