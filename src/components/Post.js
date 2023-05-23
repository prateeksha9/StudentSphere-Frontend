import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addMember } from '../action/fetchActions';
import { sendOtp } from '../action/fetchActions';

function Post(props) {
  const { name, _id, admin } = props.group;
  const [memberEmail, setMemberEmail] = useState('')
  const [recepient, setRecepient] = useState(admin.phoneNumber);
  const dispatch = useDispatch();
//   console.log(props.groups._id)
  const joinGroup = (e) => {
      e.preventDefault()
      console.log(_id, "fduhv")
    dispatch(addMember(_id, memberEmail));
  }
  const sendmessage = () => {
    // actions triggered to send OTP and to update OTP list when SEND button is clicked
    dispatch(sendOtp(name, recepient, memberEmail));
  };
  return (
    <div>
        <form onSubmit={joinGroup}>
      <label>
        {name}
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={memberEmail}
          onChange={(e) => setMemberEmail(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Join</button>
      <button onClick={() => sendmessage()}>Contact Admin</button>
    </form>
    </div>
  );
}

export default Post;