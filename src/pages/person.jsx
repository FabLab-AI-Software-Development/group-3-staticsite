import React, { useEffect, useState } from "react";
import { fetchUsers, submitUserData } from "../routes/api";

const Person = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitUser = async (username, password ) => {
        console.log("submitUserData", username, password);
        const userData = {
            username: username,
            password: password,
        };
        try {
            await submitUserData(userData);
            console.log("User data submitted");
        } catch (error) {
            console.error("Error submitting user data:", error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedUsers = await fetchUsers();
                console.log("Users", fetchedUsers);
                setUsers(fetchedUsers);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Person</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your name" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
            <button onClick={() => submitUser(username, password)}>Submit</button>
            {users.length > 0 ? (
                users.map((user) => (
                    <p key={user.id}>{user.username} {user.password}</p>
                ))
            ) : (
                <p>No users found</p>
            )}
        </div>
    );
};

export { Person };