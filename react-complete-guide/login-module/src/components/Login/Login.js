import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.includes("@") };
	}
	if (action.type === "INPUT_BLUR") {
		return { value: state.value, isValid: state.value.includes("@") };
	}
	return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.trim().length > 6 };
	}
	if (action.type === "INPUT_BLUR") {
		return { value: state.value, isValid: state.value.trim().length > 6 };
	}
	return { value: "", isValid: false };
};

const Login = (props) => {
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState('');
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: null,
	});
	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: "",
		isValid: null,
	});

	useEffect(() => {
		console.log("EFFECT RUNNING");

		return () => {
			console.log("EFFECT CLEANUP");
		};
	}, []);

	const { isValid: emailIsValid } = emailState;
	const { isValid: passwordIsValid } = passwordState;

	useEffect(() => {
		const identifier = setTimeout(() => {
			console.log("Checking form validity!");
			setFormIsValid(emailIsValid && passwordIsValid);
		}, 500);

		return () => {
			console.log("CLEANUP");
			clearTimeout(identifier);
		};
	}, [emailIsValid, passwordIsValid]);

	const emailChangeHandler = (event) => {
		dispatchEmail({ type: "USER_INPUT", val: event.target.value });

		// setFormIsValid(
		//   event.target.value.includes('@') && passwordState.isValid
		// );
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({ type: "USER_INPUT", val: event.target.value });

		// setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: "INPUT_BLUR" });
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ type: "INPUT_BLUR" });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		props.onLogin(emailState.value, passwordState.value);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						emailState.isValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor="email">E-Mail</label>
					<input
						type="email"
						id="email"
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						passwordState.isValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={passwordState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button
						type="submit"
						className={classes.btn}
						disabled={!formIsValid}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;

// endNote:
// when to use useState vs useReducer,

// useState:
// 	useState is main state management tool.
// 	Typically, start with useState and often it's all we need.
// 	It's great for independent pieces of state and data.
// 	It's great for simple state, we could say.
// 	It's great if state updates are easy and limited to a few kinds of updates.
// 	So, if we don't have a lot of different cases that will change a state and especially if we don't have, let's say, an object as a state or anything like that.

// useReducer:
// 	Now, if we do have an object as a state or a more complex state useReducer might be interesting because, in general, useReducer is great if we need more power and with more power,
// 	It simply mean that weF can write such a reducer function that can contain more complex state updating logic where we always are guaranteed to work with the latest state snapshot.
// 	And where we can move that potentially more complex logic out of wer component function body into a separate reducer function.
// 	So, all the restructure code, that might be interesting.
// 	We should especially consider useReducer, if we're dealing with related data with state that is made up of related pieces of state.
// 	So when we, for example, have a scenario, as we had it with our form input state. And, in general, useReducer can be helpful if we have more complex state updates, if we have different cases, different actions that can change a state, cases like this.
