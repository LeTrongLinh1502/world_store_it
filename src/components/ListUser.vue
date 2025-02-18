<template>
  <div class="list-user">
    <h2>Danh sách người dùng</h2>
    <ul>
      <li v-for="user in listUser" :key="user.id">
        <span :class="{ active: user.active }">{{ user.email }}</span>
        <button @click="deleteUser(user.id)">Xóa</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    listUser: Array
  },
  methods: {
    deleteUser(userId) {
      this.$emit("deleteUserEvent", userId);
    }
  }
};
</script>

<style scoped>
.list-user {
  padding: 10px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
.active {
  color: green;
}
</style>
