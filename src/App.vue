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
          <button @click="authorize" class="btn btn-primary">
            Login with VK
          </button>
        </template>
        <template v-else #footer>
          <button @click="onLogout" class="btn btn-primary">Logout</button>
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
          <button @click="exportConsole" class="btn btn-primary">
            Export to console
          </button>
        </template>
      </ListColumn>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

import ListColumn from "./components/ListColumn.vue";
import { useAuthorization } from "./App.hooks";

const friends = ref([]);

const { authorize, logout, userInfo } = useAuthorization();

function onLogout() {
  logout();
  friends.value = [];
}

watch(
  userInfo,
  () => {
    getFriends().then((result) => {
      friends.value = result.map((friend) => ({
        ...friend,
        list: 1,
      }));
    });
  },
  { immediate: true }
);

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

  return new Promise((res) => {
    VK.Api.call(
      "friends.get",
      {
        v: "5.131",
        user_id: userInfo.value.user_id,
        access_token: userInfo.value.access_token,
        order: "name",
        fields: "first_name,last_name,photo_100,nickname",
        count: 20,
      },
      function (r) {
        if (r.response) {
          return res(r.response.items);
        }
        res([]);
      }
    );
  });
}
</script>

<style>
#app {
  min-height: 100vh;
  background-color: #edeef0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
