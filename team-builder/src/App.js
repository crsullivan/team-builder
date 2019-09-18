import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Forms from './components/FormStructure';
import "./App.css";
// import styled from "styled-components";

// const H1 = styled.h1 `
// margin:3%;
// `

function App() {
  const [forms, setForms] = useState([]);

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
