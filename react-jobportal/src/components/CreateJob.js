import { useState } from "react";
import { useParams } from "react-router-dom";

const CreateJob = ({ status, callback }) => {

    const { id: eid } = useParams();
    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState('')
    const [salary, setSalary] = useState('')


    const onSubmit = (e) => {
        e.preventDefault();
        if (!company) {
            alert('Please filup job info')
            return
        }
        callback({company: company, title: title, location: location, salary: salary});

};
    return (
        <>
            <br />
            <h2> This is {status} Employee page  </h2>
            <form onSubmit={onSubmit}>
                Company: <input
                    type='text'
                    name='company'
                    value={company}
                    onChange={(e) => setCompany(e.target.value)} /><br />
                Title: <input
                    type='text'
                    name='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} /><br />

                Salary: <input
                    type='text'
                    name='salary'
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)} /> <br />


                Location: <input
                    type='text'
                    name='location'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} /> <br />
                
                

                <input type='submit' value={status === 'add' ? 'Create' : 'Update'} />
            </form>
        </>
    );
}

export default CreateJob;