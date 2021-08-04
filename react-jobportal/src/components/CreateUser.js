import { useState } from "react";
import { useParams } from "react-router-dom";

const CreateUser = ({ status, callback }) => {

        const { id: eid } = useParams();
        const [id, setId] = useState("");
        const [name, setName] = useState("");
        const [company, setCompany] = useState("");
        const [contact, setContact] = useState("");
        const [username, setUsername] = useState('')
        const [pass, setPass] = useState('')
    

        const onSubmit = (e) => {
            e.preventDefault();
            if (!name) {
                alert('Please filup employe info')
                return
            }
            callback({ id: id, name: name, company: company, contact: contact, username: username, pass: pass});

  };
    return (
        <>
            <br />
            <h2> This is {status} Employee page  </h2>
            <form onSubmit={onSubmit}>
                ID: <input
                    type='text'
                    name='id'
                    value={id}
                    onChange={(e) => setId(e.target.value)} /><br />

                Name: <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} /> <br />


                Company: <input
                    type='text'
                    name='company'
                    value={company}
                    onChange={(e) => setCompany(e.target.value)} /> <br />
                
                Contact: <input
                    type='text'
                    name='contact'
                    value={contact}
                    onChange={(e) => setContact(e.target.value)} /><br />
                User Name: <input
                    type='text'
                    name='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} /><br />
                Password: <input
                    type='text'
                    name='pass'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)} /><br />

                <input type='submit' value={status === 'add' ? 'Create' : 'Update'} />
            </form>
        </>
    );
}

export default CreateUser;