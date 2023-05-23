// import React from 'react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFormBody } from '../helpers/utils';
import { registerStudent } from '../action/fetchActions';

function Register() {
        

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [username, setUsername] = useState('');
        const [education, setEducation] = useState('');
        const [aspiration, setAspiration] = useState('');
        const dispatch = useDispatch();

          const handleSubmit = (e) => {
            e.preventDefault();
            console.log(`${firstName} ${lastName} ${email} ${phoneNumber} ${username}`)
            dispatch(registerStudent(firstName, lastName, email, phoneNumber, username, education, aspiration))
          };
  return (
    <div >
      <h2>Register Yourself!</h2>
      <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Education:
        <input
          type="text"
          name="education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
      </label>
      <br />
      <label>
        Aspiration:
        <input
          type="text"
          name="aspiration"
          value={aspiration}
          onChange={(e) => setAspiration(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <br />
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>

    </div>
  );
}

export default Register;