<template></template>

<script setup>
import { useRouter } from "vue-router";

import { setUserInfo } from "../utils";

const router = useRouter();
const props = defineProps({
  hash: {
    type: String,
    default: "",
  },
});

const params = props.hash
  .slice(1)
  .split("&")
  .reduce((o, item) => {
    const [key, value] = item.split("=");
    return {
      ...o,
      [key]: value,
    };
  }, {});

const { access_token, user_id } = params;

if (access_token && user_id) {
  setUserInfo(access_token, user_id);
}

router.replace("/");
</script>

<style></style>
