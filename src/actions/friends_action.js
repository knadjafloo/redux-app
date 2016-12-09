import axios from 'axios';

export const FETCH_FRIENDS= 'FETCH_FRIENDS';

export function fetchFriends(at) {
  const url = 'https://api.fitbit.com/1/user/-/friends.json';
    const request = axios.get(url, {
      headers: {
        'Authorization': 'Bearer ' + at,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': ''
      }
    });

  return {
    type: FETCH_FRIENDS,
    payload: request
  };
}
