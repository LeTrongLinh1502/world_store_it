<template>
  <div id="app">
    <div class="container">
      <h1>{{ title }}</h1>
      <button v-on:click="removeComponent">Gỡ bỏ Component</button>
      <child-component v-if="showChild" :title="title"/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import ChildComponent from '@/components/ChildComponent.vue';

export default {
  name: 'test1',
  components: {
    ChildComponent,
  },
  setup() {
    const title = ref('Hello Vue');
    const showChild = ref(true);

    const removeComponent = () => {
      console.log('Before:', showChild.value);
      showChild.value = false;
      console.log('After:', showChild.value);
    };
    return {title, showChild, removeComponent};
  },

};
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: lightgray;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
