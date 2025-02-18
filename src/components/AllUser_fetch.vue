<script setup>
import { ref, onMounted } from "vue";
import UserList from "@/components/UserResponse/UserList.vue";

const users = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchUsers = async () => {
  try {
    const response = await fetch("http://tronglinhnevergiveup.online:8085/api/v1/user");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("response data:", data);
    users.value = data;
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
