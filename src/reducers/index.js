import { combineReducers } from 'redux';
import UserReducer from './reducer_users';
import FriendsReducer from './reducer_friends'

const rootReducer = combineReducers({
  users: UserReducer,
  friends: FriendsReducer
});

export default rootReducer;
