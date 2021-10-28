import React, { useState } from "react";
import Wrapper from "./components/Helpers/Wrapper";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    function addUserHandler(uName, uAge) {
        setUsersList((prevUsersList) => {
            return [
                { id: Math.random().toString(), name: uName, age: uAge },
                ...prevUsersList,
            ];
        });
    }

    return (
        <Wrapper>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </Wrapper>
    );
}

export default App;

// endNote : we used all those core features and building blocks that are important for React. Components, props, state with the use State Hook, lifting state up and all of these things. 
// We used styling. We passed functions between the different components. 
// So all these core patterns and concepts which you basically need for every React application you're going to build, we have them all in here. And that's why this hopefully, was a great practice project