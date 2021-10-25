import React from "react";
import "./css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
}

export default NewExpense;
