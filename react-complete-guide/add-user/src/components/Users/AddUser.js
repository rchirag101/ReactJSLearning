import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

function AddUser(props) {
    // Below is a JavaScript syntax, which is called array de-structuring and we use it, because useState always returns an array with exactly two elements. And with this syntax, we're pulling these elements out of that returned array. And we store them in separate constants, of the name enteredUsername and setEnteredUsername. And I chose those names for those constants, because the first element of that returned array, is the current state snapshot. And every time this Component re-renders, which it, for example, does when the state is updated, this concept will hold the latest state snapshot and setEnteredUsername on the other hand, holds a function which we can call, to change that state and to then trigger such a re-render cycle.
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    function usernameChangeHandler(event) {
        setEnteredUsername(event.target.value);
    }
    function ageChangeHandler(event) {
        setEnteredAge(event.target.value);
    }

    function addUserHandler(event) {
        event.preventDefault();
        console.log(enteredUsername, enteredAge);

        // to set input boxes blank onSubmit | form resetting
        setEnteredUsername("");
        setEnteredAge("");
    }

    return (
        // we can use className for Card because it defined in Card.js as props.className
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
    );
}
export default AddUser;
