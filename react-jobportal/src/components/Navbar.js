import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link> |
            <Link to="/create">Create New Employee</Link>|
            <Link to="/userlist">Employee List</Link>|
            <Link to="/createjob">Create New job</Link>|
            <Link to="/joblist">Job List</Link>
        </div>
    );
};

export default Navbar;