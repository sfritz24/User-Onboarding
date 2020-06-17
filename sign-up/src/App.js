import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import formSchema from './components/FormSchema';
import * as yup from 'yup';

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

  const getMembers = () =>{
    axios.get('https://reqres.in/api/users')
    .then(response =>{
      setMembers(response.data.data)
    })
    .catch(error =>{
      console.log('this is the error:', error)
    })
  }

  const newMember = () =>{
    axios.post('https://reqres.in/api/users')
    .then(response =>{
      setMembers([...members, response.data.data])
    })
    .catch(error =>{
      console.log('this is the error:', error)
    })
    .finally(() =>{
      setFormValues(initialFormValues)
    })
  }

  const onInputChange = (event) =>{
    const {name, value} = event.target
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() =>{
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(error =>{
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const checkBoxChange = (event) =>{
    const {name, checked} = event.target

    setFormValues({
      ...formValues,
      [name]: checked
    })
  }

  const onSubmit = (event) =>{
    event.preventDefault()

    const newMember = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      termsOfUse: formValues.termsOfUse,
    }

    newMember(newMember)
  }

  useEffect(() =>{
    getMembers()
  }, [])

  useEffect(() =>{
    formSchema.isValid(formValues).then(valid =>{
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className="App">
      <header><h1>Please Sign-Up!</h1></header>
      <div>
        <div>Form</div>
        <div>Member</div>
      </div>
    </div>
  );
}

export default App;
