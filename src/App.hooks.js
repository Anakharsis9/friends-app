import { ref } from "vue";

import { setUserInfo, getUserInfo, deleteUserInfo } from "./utils";

export function useAuthorization() {
  const userInfo = ref(getUserInfo());

  return {
    userInfo,
    authorize() {
      VK.Auth.login((sessionData) => {
        setUserInfo(sessionData.session.sid, sessionData.session.mid);
        userInfo.value = getUserInfo();
      }, VK.access.FRIENDS);
    },
    logout() {
      deleteUserInfo();
      userInfo.value = null;
    },
  };
}
