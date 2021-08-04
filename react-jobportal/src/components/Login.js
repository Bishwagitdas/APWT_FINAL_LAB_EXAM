import {Link} from 'react-router-dom';

const User = ({username, pass})=>{
    return(
        <>
            <br />
            <h2> Login page  </h2>
            <form onSubmit={onSubmit}>

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

                <input type='submit' value='Login'/>
            </form>
        </>
    );
}

export default User;