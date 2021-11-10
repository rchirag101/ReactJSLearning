import React from "react";
import MyParagraph from "./MyParagraph";

function DemoOutput(props) {
	console.log("DemoOutput Running");
	return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
}

export default React.memo(DemoOutput);
// So React.memo allows us to optimize functional components. Now, what does memo do?
// It tells React that for this component, which it gets as a argument,
// React should look at the props this component gets and check the new value for all those props and compare it to the previous value those props got.
// And only if the value of a prop changed, the component should be re-executed and re-evaluated.
// And if the parent component changed but the prop values for that component here did not change,
// component execution will be skipped.

// Of course, React.memo can be a great tool if you have a huge component tree with a lot of child components.
// And on a high level in the component tree, you can avoid unnecessary re-render cycles for the entire branch of the component tree.
// Like in this case, by avoiding the re-evaluation of DemoOutput, we're also automatically avoiding the re-evaluation of MyParagraph even though we're not using
// React Demo in there just because we cut off this entire branch,
// so this entire branch of the component tree.

// for larger apps where you can cut off entire branches of unnecessary re-evaluations, it might very well be worth it.
