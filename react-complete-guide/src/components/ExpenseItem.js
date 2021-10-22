import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./css/ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {
    // useState() returns array of two values
    // the first element is the current state value, here is title
    // and And the second element is a function for updating that, here setTitle
    const [title, setTitle] = useState(props.title);

    function clickHandler() {
        setTitle("New Title");
        console.log(title);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button button onClick={clickHandler}>
                Change Title
            </button>
        </Card>
    );
}

export default ExpenseItem;
