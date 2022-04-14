<template>
  <div class="container p-2">
    <div class="row gx-4 gy-3 pb-3 px-1 mt-lg-2 bg-light rounded">
      <ListColumn
        :list="friendsList"
        :listId="1"
        @updateCardList="updateCardList"
        title="Friend List"
        class="col-12 col-sm-6"
      >
        <template v-if="!userInfo" #footer>
          <a class="btn btn-primary" :href="authUrl"> Login with VK </a>
        </template>
        <template v-else #footer>
          <button class="btn btn-primary" @click="logout">Logout</button>
        </template>
      </ListColumn>

      <ListColumn
        :list="selectedList"
        :listId="2"
        @updateCardList="updateCardList"
        title="Selected friends"
        class="col-12 col-sm-6"
      >
        <template #footer>
          <button @click="exportConsole" class="btn btn-primary">Export to console</button>
        </template>
      </ListColumn>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import axios from "axios";

import ListColumn from "../components/ListColumn.vue";
import { getUserInfo, deleteUserInfo } from "../utils";

// Authentication
const clientId = "8136588";
const protectedKey = "DpJYSIP4hegE1E5j6wvJ";
const redirectUri =
  window.location.origin + "/vk-oauth2" || "https://oauth.vk.com/blank.html";
const authUrl = `https://oauth.vk.com/authorize?client_id=${clientId}&display=page&redirect_uri=${redirectUri}&scope=friends&response_type=token&v=5.81`;

const userInfo = ref(getUserInfo());
const friends = ref([]);
getFriends().then((result) => {
  friends.value = result.map((friend) => ({
    ...friend,
    list: 1,
  }));
});

const friendsList = computed(() => {
  return friends.value.filter((friend) => friend.list === 1);
});

const selectedList = computed(() => {
  return friends.value.filter((friend) => friend.list === 2);
});

function updateCardList({ friendId, listNum }) {
  const friend = friends.value.find((friend) => friend.id == friendId);
  friend.list = listNum;
}

function exportConsole() {
  console.log(selectedList.value);
}

async function getFriends() {
  if (!userInfo.value) return [];

  const { data } = await axios.get(
    `https://api.vk.com/method/friends.get`,
    {
      params: {
        v: "5.131",
        access_token: userInfo.value.access_token,
        user_id: userInfo.value.user_id,
        order: "name",
        // count: 5,
        fields: "first_name,last_name,photo_100,nickname",
      },
    }
  );

  return data?.response?.items || [];
}

function logout() {
  deleteUserInfo();
  userInfo.value = null;
  friends.value = [];
}
</script>

<style scoped></style>
