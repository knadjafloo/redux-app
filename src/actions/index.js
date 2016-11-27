import 'whatwg-fetch';
import axios from 'axios';

export const FETCH_USERS= 'FETCH_USERS';

export function fetchUsers(at) {
  const url = 'https://api.fitbit.com/1/user/-/profile.json';
  // const request = fetch(url, {
  //   headers: {
  //     'Authorization': 'Bearer ' + at,
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json',
  //     'Origin': ''
  //   },
  //   mode: 'cors',
  //   method: 'GET'
  // });

    const request = axios.get(url, {
      headers: {
        'Authorization': 'Bearer ' + at,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': ''
      }      
    });

  return {
    type: FETCH_USERS,
    payload: request
  };
}
