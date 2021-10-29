import React, { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./css/AddUser.module.css";

function AddUser(props) {
	// about useRef():
	// With refs, we can set up a connection between a HTML element which is being rendered in the end and our other JavaScript code.
	// And for that, we need to create a ref, which we do with the help of another React hook.
	// We use the useRef hook here and we then simply call useRef here in our code, in our functional component.
	// And like all React hooks, useRef is only usable inside of functional components.

	// if you just want to read a value(not change), refs are probably better.

	//about value of useRef():
	// This ref value, which is being generated here always is an object, which always has a current prop and the current prop holds the actual value that ref is connected with.
	// Now, by default, it's undefined but as soon as this code ran, because of this ref prop, the nameInputRef is connected to that input and hence,
	// it's actually the input which is being stored as a value in the current prop.
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	// Below is a JavaScript syntax, which is called array de-structuring and we use it, because useState always returns an array with exactly two elements. And with this syntax, we're pulling these elements out of that returned array. And we store them in separate constants, of the name enteredUsername and setEnteredUsername. And I chose those names for those constants, because the first element of that returned array, is the current state snapshot. And every time this Component re-renders, which it, for example, does when the state is updated, this concept will hold the latest state snapshot and setEnteredUsername on the other hand, holds a function which we can call, to change that state and to then trigger such a re-render cycle.
	const [error, setError] = useState();

	function addUserHandler(event) {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;

		if (
			enteredName.trim().length === 0 ||
			enteredUserAge.trim().length === 0
		) {
			setError({
				title: "Invalid Input",
				message:
					"Please enter a valid name and age (non-empty values).",
			});
			return;
		}
		if (+enteredUserAge < 1) {
			//So we have a string here, enteredAge, a string not a number. Now I'm comparing it to a number here. And generally that should work in JavaScript but to be super safe we can force a conversion of enteredAge to a number by adding a PLUS here. And with that we ensure that well, it is a number.

			setError({
				title: "Invalid Age",
				message: "Please enter a valid age (>0).",
			});
			return;
		}

		props.onAddUser(enteredName, enteredUserAge);
		// console.log(enteredName, enteredUserAge);

		// form resetting
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";
	}

	function errorHandler() {
		setError(null);
	}

	return (
		<Wrapper>
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
					<input id="username" type="text" ref={nameInputRef} />
					<label htmlFor="age">Age (Years)</label>
					<input id="age" type="number" ref={ageInputRef} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
}
export default AddUser;
