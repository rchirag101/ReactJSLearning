import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "./Helpers/Wrapper";

function Dashboard(props) {
	return (
		<Wrapper>
            <h2>Welcome</h2>
			<ul>
				{["Alex", "John", "Jaz", "fedrik", "missali"].map(
					(user, idx) => {
						return <li key={idx}>{user}</li>;
					}
				)}
			</ul>
		</Wrapper>
	);
}

export default Dashboard;
