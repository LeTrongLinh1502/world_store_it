<script setup>
// eslint-disable-next-line no-undef
defineProps({
  users: Array,
  loading: Boolean,
  error: String,
});
</script>

<template>
  <div>
    <h2>Danh sách người dùng</h2>
    <div v-if="loading">Đang tải...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        <strong>ID:</strong> {{ user.id }} <br />
        <strong>Tên:</strong> {{ user.userName }} <br />
        <strong>Email:</strong> {{ user.email }} <br />
        <strong>Ngày tạo:</strong> {{ new Date(user.created).toLocaleString() }}
        <hr />
      </li>
    </ul>

    <p v-else>Nếu không có dữ liệu, hãy kiểm tra API.</p>
  </div>
</template>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
</style>
