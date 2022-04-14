import { ACCESS_TOKEN_KEY, USER_ID_KEY } from "../constants";

export function setUserInfo(access_token, user_id) {
  localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
  localStorage.setItem(USER_ID_KEY, user_id);
}

export function getUserInfo() {
  const access_token = localStorage.getItem(ACCESS_TOKEN_KEY);
  const user_id = localStorage.getItem(USER_ID_KEY);

  if (access_token && user_id) return { access_token, user_id };
  return null;
}

export function deleteUserInfo() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(USER_ID_KEY);
}
