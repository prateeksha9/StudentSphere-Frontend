import React, { useState } from 'react';
import { useEffect } from 'react';
import Register from "./Register";
import fetchGroups from '../action/fetchActions';
import Displaygroups from './Displaygroups';
import CreateGroup from "./Creategroup";
import { useDispatch, useSelector } from 'react-redux';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
            <Register></Register>
        </div>
        <div>
            <CreateGroup></CreateGroup>
        </div>
        <div>
            <Displaygroups />
        </div>
      </div>
    </div>
  );
}

export default App;
