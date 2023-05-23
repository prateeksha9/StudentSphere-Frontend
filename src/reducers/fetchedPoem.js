import { FETCH_GROUPS } from '../action/actionType';

export default function groups(state = [], action) {
  switch (action.type) {
    case FETCH_GROUPS:
      return action.groups.reverse();

    default:
      return state;
  }
}
