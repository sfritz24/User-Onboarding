import React, {useState, useEffect} from 'react';
import './App.css';

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  termsofuse: false,
}

const initialFormErrors = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  termsOfUse: false,
}

const initialMembers = []

const initialDisabled = true

function App() {

  const {members, setMembers} = useState(initialMembers)
  const {formValues, setFormValues} = useState(initialFormValues)
  const {formErrors, setFormErrors} = useState(initialFormErrors)
  const {disabled, setDisabled} = useState(initialDisabled)

  return (
    <div className="App">
      <header><h1>Please Sign-Up!</h1></header>
      <div>
        <div>Form</div>
        <div>Card</div>
      </div>
    </div>
  );
}

export default App;
