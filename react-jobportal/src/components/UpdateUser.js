import { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = ({ status, callback }) => {
    const { id: eid } = useParams();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        callback({ id: id, name: name, contact: contact, username:username, pass:pass });
    };
    return (
        <div>
            <h2>
                This is {status} user emoloyee id: {eid} ,put this  {eid} on id field for updating info.
            </h2>
            <form onSubmit={onSubmit}>
                <label>
                    Id:
                    <input
                        type="number"
                        name="name"
                        value={id}

                        onChange={(e) => setId(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Contact:
                    <input
                        type="text"
                        name="name"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    User Name:
                    <input
                        type="text"
                        name="name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="text"
                        name="name"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateUser;