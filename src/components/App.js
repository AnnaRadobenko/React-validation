import React, {useCallback, useState} from "react";
import First from "./First";
import Second from "./Second";

const validEmail = RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
}

const App = () => {
  const [fields, setFields] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    errors: {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
  });

  const onSubmit = (event) => {
    event.preventDefault();
    if(validateForm(fields.errors)){
      console.info('Valid form')
    } else {
      console.error('Invalid form')
    }
  }

  const handleChange = useCallback((event => {
    const {name, value} = event.target;
    let errors = fields.errors;

    switch (name) {
      case 'email':
        errors.email = validEmail.test(value) ? '' : 'Email is not valid';
        break;
      case 'password':
        errors.password = value.length < 8 ? 'Password must be at least 8 characters long' : '';
        break;
      case 'firstName':
        errors.firstName = value.length < 4 ? 'It must be longer' : '';
        break;
      case 'lastName':
        errors.lastName = value.length < 4 ? 'It must be longer' : '';
        break;
      default:
        break;
    }
    setFields({errors, [name]: value});
   
    setFields(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }))

  return (
    <form onSubmit={onSubmit}>
      <h2>Sing up</h2>
      <First
        email={fields.email}
        password={fields.password}
        handleChange={handleChange}
        error={fields.errors}
      />
      <p></p>
      <Second
        firstName={fields.firstName}
        lastName={fields.lastName}
        handleChange={handleChange}
        error={fields.errors}
      />
      <p></p>
      <button type="Submit">Send</button>
    </form>
  )
}

export default App;
