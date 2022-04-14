<template>
  <div>
    <div class="d-flex flex-column bg-white rounded">
      <header class="non-content p-3 bg-gray rounded-top">
        <span class="text-uppercase fs-5 text-center">{{ title }}</span>
      </header>
      <div class="content row flex-column p-2">
        <div
          class="col drop-zone"
          @drop="onDrop($event, listId)"
          @dragover.prevent
          @dragenter.prevent
        >
          <FriendCard
            v-for="friend in list"
            :key="friend.id"
            :fullname="friend.first_name + ' ' + friend.last_name"
            :id="friend.id"
            :photo="friend.photo_100"
            @dragstart="startDrag($event, friend)"
            draggable="true"
            class="drag-el"
          />
        </div>
      </div>
      <footer class="non-content p-3 bg-gray rounded-bottom">
        <div class="d-grid col-lg-6 col-md-8 col-10">
          <slot name="footer"></slot>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import FriendCard from "./FriendCard.vue";

const props = defineProps({
  title: String,
  list: Array,
  listId: Number,
});

function startDrag(evt, friend) {
  evt.dataTransfer.dropEffect = "move";
  evt.dataTransfer.effectAllowed = "move";
  evt.dataTransfer.setData("friendId", friend.id);
}

const emit = defineEmits(["updateCardList"]);

function onDrop(evt, listNum) {
  const friendId = evt.dataTransfer.getData("friendId");
  emit("updateCardList", { friendId, listNum });
}
</script>

<style scoped>
.content {
  overflow-y: scroll;
  height: 75vh;
}

.bg-gray {
  background-color: #edeef0;
}

.non-content {
  display: flex;
  justify-content: center;
}
</style>
