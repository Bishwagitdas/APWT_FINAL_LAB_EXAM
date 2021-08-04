 import {Link} from 'react-router-dom';
import './User.css';

const User = ({id, name, company, contact, username, pass, deletecallback})=>{
    return(
        <div className='user' style={{color:'red'}}>
            <p>Name: {name}</p>
            <p>ID: {id}</p>
            <p>Company: {company}</p>
            <p>Contact: {contact}</p>
            <p>User Name: {username}</p>
            <p>Password: {pass}</p>
            <button onClick={()=>deletecallback(id)}>Delete</button>
            <Link to={`/edit/${id}`}> Update </Link>
        </div>
    );
}

export default User;