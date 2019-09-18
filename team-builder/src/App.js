import React, {useState} from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Form from './components/Form';
import Forms from './components/FormStructure';

function App() {
  const [forms, setForms] = useState([{
    id: 1,
    name: "Name will display here",
    email: "Email will display here",
    role: "Role will display here"
  }]);

  const addNewForm = form => {
    const newForm = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      role: form.role
    };
    setForms([...forms, newForm]);
  };

  return (
    <div className="App">
     <h1>My Contacts</h1>
     <Form addNewForm={addNewForm} />
     <Forms forms={forms} />
    </div>
  );
}

export default App;
