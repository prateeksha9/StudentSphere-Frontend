import React, { useState } from 'react';
import { getFormBody } from '../helpers/utils';
import { useDispatch } from 'react-redux';
import { createGroup } from '../action/fetchActions';

function CreateGroup() {
    const [groupName, setGroupName] = useState('');
    const [adminEmail, setAdminEmail] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${groupName} ${adminEmail}`)
        dispatch(createGroup(groupName, adminEmail))
      };
  return (
    <div >
      <h2>Create a Group!</h2>
      <form onSubmit={handleSubmit}>
      <label>
        Group Name:
        <input
          type="text"
          name="groupName"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Your email:
        <input
          type="email"
          name="email"
          value={adminEmail}
          onChange={(e) => setAdminEmail(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>

    </div>
  );
}

export default CreateGroup;