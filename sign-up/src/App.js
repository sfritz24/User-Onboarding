import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import formSchema from './components/FormSchema';
import * as yup from 'yup';
import Form from './components/Form';
import Member from './components/Member';
import { v4 as uuid } from 'uuid';

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

  const [members, setMembers] = useState(initialMembers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getMembers = () =>{
    axios.get('https://reqres.in/api/users')
    .then(response =>{
      setMembers(response.data.data)
    })
    .catch(error =>{
      console.log('this is the error:', error)
    })
  }

  const addNewMember = () =>{
    axios.post('https://reqres.in/api/users')
    .then(response =>{
      setMembers([...members, response.data])
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
    const {name, checked} = event.target.value

    yup
      .reach(formSchema, name)
      .validate(checked)
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
      [name]: checked
    })
  }

  const onSubmit = (event) =>{
    event.preventDefault()

    const newMember = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      termsOfUse: formValues.termsOfUse,
      id: uuid(),
    }

    addNewMember(newMember)
  }

  useEffect(() =>{
    formSchema.isValid(formValues).then(valid =>{
      setDisabled(!valid);
    })
  }, [formValues])

  return (
    <div className="App">
      <header><h1>Please Sign-Up!</h1></header>
      <div>
        <Form
        values={formValues}
        onInputChange={onInputChange}
        checkBoxChange={checkBoxChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={formErrors}
        />
        {
          members.map(member =>{
            return (<Member key={member.id} details={member}/>)
          })
        }
      </div>
    </div>
  );
}

export default App;
