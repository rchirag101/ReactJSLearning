import React, { useState } from "react";

import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

import "./css/App.css";

function App() {
	const [showParagraph, setShowParagraph] = useState(false);

	console.log("App Running");

	const toggleParagraphHandler = () => {
		setShowParagraph((prevShowParagraph) => !prevShowParagraph);
	};

	return (
		<div className="app">
			<h1>Hi there!</h1>
			<DemoOutput show={false} />
			<Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
		</div>
	);
}

export default App;
