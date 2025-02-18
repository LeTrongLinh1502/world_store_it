<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <button v-on:click="changeTitle">Thay đổi tiêu đề</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  // data() {
  //   return {
  //     isChanged: false
  //   };
  // },

  methods: {
    changeTitle() {
      // this.isChanged = !this.isChanged;
      // const newTitle = this.isChanged ? "Học VueJs" : "Hello VueJs";
      this.$emit("changeTitleEvent", "Tiêu đề mới ");
    }
  }
};
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 20px;
}
button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
