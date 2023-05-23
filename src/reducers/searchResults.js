import { SEARCH_RESULTS} from '../action/actionType';

export default function searchResults(state = [], action) {
  switch (action.type) {
    case SEARCH_RESULTS:
        return action.filteredItems;

    default:
      return state;
  }
}
