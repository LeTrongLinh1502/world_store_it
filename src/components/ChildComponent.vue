<template>
  <div class="child">
    <p>Đây là Child Component.</p>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  beforeUnmount() {
    // Log thông tin với props title nhận từ component cha
    console.log('beforeUnmount',document.querySelector('.container .child')?.innerText);
  },
  unmounted() {
    // Log thông tin với props title nhận từ component cha
    console.log('unmounted', document.querySelector('.container .child')?.innerText);
  }
};
</script>

<style scoped>
.child {
  padding: 10px;
  background-color: lightblue;
  margin-top: 10px;
}
</style>
