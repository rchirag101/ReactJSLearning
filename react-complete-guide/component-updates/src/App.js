import React, { useState, useCallback } from "react";

import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

import "./css/App.css";

function App() {
	const [showParagraph, setShowParagraph] = useState(false);

	console.log("App Running");

	// useCallback note:
	// 	Use Callback is a hook that allows us to basically store a function across component executions.
	// 	So it allows us to tell React that we wanna save a function and that this function should not be recreated with every execution.
	// 	With that one in the same function object is stored so one in the same place in memory and therefore the comparison does work.

	// 	what Use Callback does for us, it will save a function of our choice basically somewhere in
	// 	React's internal storage and we'll always reuse that same function object then when this component function executes.

	// 	And using it is simple. We just wrapped the function we wanna save with it.
	// 	So here we use the Use Callback Hook and pass our function as a first argument
	// 	to use callback and Use Callback then returns that stored function and when the app function reruns
	// 	Use Callback will look for that stored function which React stored for us and reuse that same function object.

	const toggleParagraphHandler = useCallback(() => {
		setShowParagraph((prevShowParagraph) => !prevShowParagraph);
	}, []);

	return (
		<div className="app">
			<h1>Hi there!</h1>
			<DemoOutput show={false} />
			<Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
		</div>
	);
}

export default App;
