import { combineReducers } from 'redux';
import groups from './fetchedPoem';
import searchResults from './searchResults';

export default combineReducers({
  groups,
  searchResults
});
