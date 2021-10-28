import React from "react";
import Card from "../UI/Card";
import classes from "./css/UsersList.module.css";

function UsersList(props) {
    if (props.users.length === 0) {
        return (
            <Card className={`${classes.users} ${classes.noUsersCard}`}>
                <center>
                    <h4>No Users found</h4>
                </center>
            </Card>
        );
    }

    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
}

export default UsersList;
