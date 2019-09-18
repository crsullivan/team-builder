import React from 'react';

const Forms = props => {
    return (
        <>
            {props.forms.map(form => (
                <div className="form" key={form.id}>
                    <h2>{form.name}</h2>
                    <p>{form.email}</p>
                    <p>{form.role}</p>
                </div>
            ))}
        </>
    );
};

export default Forms