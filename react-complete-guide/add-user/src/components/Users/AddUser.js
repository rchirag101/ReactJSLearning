import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser(props) {
    // Below is a JavaScript syntax, which is called array de-structuring and we use it, because useState always returns an array with exactly two elements. And with this syntax, we're pulling these elements out of that returned array. And we store them in separate constants, of the name enteredUsername and setEnteredUsername. And I chose those names for those constants, because the first element of that returned array, is the current state snapshot. And every time this Component re-renders, which it, for example, does when the state is updated, this concept will hold the latest state snapshot and setEnteredUsername on the other hand, holds a function which we can call, to change that state and to then trigger such a re-render cycle.
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    function usernameChangeHandler(event) {
        setEnteredUsername(event.target.value);
    }
    function ageChangeHandler(event) {
        setEnteredAge(event.target.value);
    }

    function addUserHandler(event) {
        event.preventDefault();

        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setError({
                title: "Invalid Input",
                message:
                    "Please enter a valid name and age (non-empty values).",
            });
            return;
        }
        if (+enteredAge < 1) {
            //So we have a string here, enteredAge, a string not a number. Now I'm comparing it to a number here. And generally that should work in JavaScript but to be super safe we can force a conversion of enteredAge to a number by adding a PLUS here. And with that we ensure that well, it is a number.

            setError({
                title: "Invalid Age",
                message: "Please enter a valid age (>0).",
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        // console.log(enteredUsername, enteredAge);

        // to set input boxes blank onSubmit | form resetting
        setEnteredUsername("");
        setEnteredAge("");
    }

    function errorHandler() {
        setError(null);
    }

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            {/* we can use className for Card because it defined in Card.js as props.className */}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        onChange={usernameChangeHandler}
                        value={enteredUsername}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        onChange={ageChangeHandler}
                        value={enteredAge}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}
export default AddUser;
