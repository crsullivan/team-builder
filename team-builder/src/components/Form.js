import React, {useState} from 'react';

const Form = props => {
    const [form, setForm] = useState({
       name: "",
       email: "",
       role: "" 
    });
    
    const handleChanges = e => {
        setForm ({
            ...form, [e.target.id]: e.target.value
        });
        console.log(form);
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewForm(form);
        setForm ({
            name: "",
            email: "",
            role: ""
        });
        console.log(e.target.value);
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                value={form.name}
            />
            <label htmlFor="email">email</label>
            <input
                id="email"
                type="text"
                name="email"
                onChange={handleChanges}
                value={form.email}
            />
             <label htmlFor="role">Role</label>
            <input
                id="role"
                type="text"
                name="role"
                onChange={handleChanges}
                value={form.role}
            />
            <button type="submit">Submit Form</button>
        </form>
    );
};

export default Form;