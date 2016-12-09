import { FETCH_FRIENDS } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_FRIENDS:
    return action.payload.data.friends;
  default:
    return state;
  }
}
