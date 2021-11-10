import React from "react";

function MyParagraph(props) {
	console.log("MyParagraph Running");
	return <p>{props.children}</p>;
}

export default MyParagraph;
