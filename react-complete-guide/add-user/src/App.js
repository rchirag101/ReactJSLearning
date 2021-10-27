import React, { useState } from "react";
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
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </div>
    );
}

export default App;
