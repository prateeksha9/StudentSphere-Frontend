import React, { useState } from 'react';
// import { Post } from '.';
import { useEffect } from 'react';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import fetchGroups from '../action/fetchActions';
import { searchAction } from '../action/fetchActions';

function Displaygroups(props) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGroups());
      }, []);
  
//   const {name} = props.group;
const groups = useSelector((state) => state.groups);
const [searchTerm, setSearchTerm] = useState('');
const [searching, setSearching] = useState(false);
const searchResults = useSelector((state) => state.searchResults); // Assuming you have a searchResults state in your Redux store

const handleChange = (event) => {
  setSearchTerm(event.target.value);
  // if(searchTerm.length > 0){
  //   setSearching(true);
  // }
};

const handleSubmit = (event) => {
  event.preventDefault();
  if(searchTerm != ''){
    setSearching(true);
  }
  dispatch(searchAction(groups, searchTerm));
};

//   const groups = props.groups;
  console.log(groups, 'fromHome');
  return (
    <div>
      <h2>Join a Group!</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search your group"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>

      {searching ?    (<div>{searchResults.map((pos) => (
        <Post group={pos} key={pos._id} />
        
      ))} </div>):     (<div>{groups.map((pos) => (
        <Post group={pos} key={pos._id} />
        
      ))}</div>)}
      
    </div>
  );
}

export default Displaygroups;