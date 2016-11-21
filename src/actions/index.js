import 'whatwg-fetch';

const API_KEY = '6a78596d062df78380eff5944c4e5567';
const ROOT_URL = `https://api.fitbit.com/1/user/`;
const CLIENT_ID = "227Y2J";

export const FETCH_USERS= 'FETCH_USERS';

export function fetchUsers(userId) {
  const url = `${ROOT_URL}{userId}/profile.json`;
  const request = fetch(url);

  return {
    type: FETCH_USERS,
    payload: request
  };
}
