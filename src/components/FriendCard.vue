<template>
  <div class="friend-card p-2 mb-3 mx-0 border-bottom rounded-0">
    <div class="row g-0 ">
      <div class="col-3">
        <img :src="photo" class="img-fluid rounded-circle" alt="" />
      </div>
      <div class="col-8">
        <div class="card-body">
          <h5 class="card-title">{{fullname}}</h5>
          <p class="card-text">
            <small class="text-muted">{{id}}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  fullname: String,
  photo: String,
  id: Number,
});

</script>

<style scoped>
.friend-card {
  border: none;
  max-height: 120px;
}
</style>
