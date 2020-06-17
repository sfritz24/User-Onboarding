import React from 'react';
import './App.css';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsofuse: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  termsofuse: false,
}

const initialMembers = []

const initialDisabled = true

function App() {
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
