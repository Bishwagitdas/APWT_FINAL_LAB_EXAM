import { useState } from "react";
import UserList from "./components/UserList";
import Navbar from "./components/Navbar";
import CreateUser from "./components/CreateUser";
import CreateJob from "./components/CreateJob";
import { users } from "./usersData";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    const [myuser, setUsers] = useState(users);

    const addUsers = (newUser) => {
        setUsers([...myuser, newUser]);
    };

    const editUsers = (newUser) => {
        const data = myuser.filter((user) => user.id !== newUser.id);
        setUsers([...data, newUser]);
    };
    const deleteCallback = (id) => {
        const data = myuser.filter((user) => user.id !== id);
        setUsers(data);
    };

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <h2>Welcome Home</h2>
                </Route>
                <Route path="/userlist">
                    <div>
                        <UserList list={myuser} callback={deleteCallback} />
                    </div>
                </Route>
                <Route path="/Create">
                    <CreateUser status="add" callback={addUsers} />
                </Route>
                <Route path="/edit/:id">
                    <UpdateUser status="edit" callback={editUsers} />
                </Route>
                <Route path="*">
                    <h3>404 not found</h3>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;