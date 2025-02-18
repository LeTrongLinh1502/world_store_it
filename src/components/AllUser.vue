<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import UserList from "@/components/UserResponse/UserList.vue";

const users = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchUsers = async () => {
  try {
    const response = await axios.get("http://localhost:8085/api/v1/user");
    console.log("response day: " + response)
    users.value = response.data;
  } catch (err) {
    error.value = "Lỗi khi lấy dữ liệu!";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchUsers);
</script>

<template>

  <main>
    <RouterView />
    <UserList :users="users" :loading="loading" :error="error" />
  </main>

</template>