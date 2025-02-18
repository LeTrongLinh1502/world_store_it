

<template>
  <div id="app">
    <div class="container">
      <comp-header
          v-bind:title="title"
          v-on:changeTitleEvent="handleChangeTitle"
      />
      <list-user
          ref="listUserComponent"
          v-on:deleteUserEvent="handleDeleteUser"
          v-bind:listUser="listUser"
      />
      <button v-on:click="removeComponent">Gỡ bỏ Component</button>
      <child-component v-if="showChild" :title="title2"/>
    </div>
  </div>
</template>
<script>

import ListUser from '@/components/ListUser.vue';
import CompHeader from '@/components/CompHeader.vue';
import { ref } from 'vue';
import ChildComponent from '@/components/ChildComponent.vue';
export default {
  name: 'app',
  data () {
    return {
      title: 'Hello VueJs',
      listUser: [
        {id: 100, email: 'test1@gmail.com', active: true},
        {id: 101, email: 'test2@gmail.com', active: false},
        {id: 102, email: 'test3@gmail.com', active: true},
        {id: 103, email: 'test4@gmail.com', active: true},
        {id: 104, email: 'test5@gmail.com', active: false},
        {id: 105, email: 'test6@gmail.com', active: true},
        {id: 106, email: 'test7@gmail.com', active: false},
      ],
      previousTitle: ''// Lưu giá trị cũ
    }
  },
  components: {
    CompHeader,
    ListUser,
    ChildComponent,
  },
  setup() {
    const title2 = ref('Hello Vue');
    const showChild = ref(true);

    const removeComponent = () => {
      console.log('Before:', showChild.value);
      showChild.value = false;
      console.log('After:', showChild.value);
    };
    return {title2, showChild, removeComponent};
  },


  methods: {
    handleChangeTitle(newTitle) {
      this.previousTitle = this.title; // Lưu giá trị cũ trước khi thay đổi
      this.title = newTitle;
    },
    handleDeleteUser(userId) {
      this.listUser = this.listUser.filter(user => user.id !== userId);
    }
  },
// End methods
  beforeCreate() {
    console.log('beforeCreate', this.title, document.querySelector('.container'));
  },
  created() {
    // Thường để gọi API, Call Ajax
    console.log('created', this.title, document.querySelector('.container'));
  },
  beforeMount() {
    console.log('beforeMount', this.title, document.querySelector('.container'));
  },
  mounted() {
    // Nếu muốn sử dụng jQuery -> chỉ truy xuất DOM được trong mounted
    console.log('mounted', this.title, document.querySelector('.container'));
    // console.log('mounted', this.title, document.querySelector('.container').classList);
  },
  beforeUpdate() {
    console.log('beforeUpdate - Giá trị cũ:', this.previousTitle);
    console.log('beforeUpdate - DOM hiện tại:', document.querySelector('.header h1')?.innerText,
        this.$refs.listUserComponent ? this.$refs.listUserComponent.$el.innerText : 'Không có nội dung');
    // console.log('beforeUpdate', this.oldTitle, this.listUser);
  },
  updated() {
    console.log('updated - Giá trị mới:', this.title);
    console.log('updated - DOM sau khi cập nhật:', document.querySelector('.header h1')?.innerText,
        this.$refs.listUserComponent ? this.$refs.listUserComponent.$el.innerText : 'Không có nội dung');
    // console.log('updated', this.title, this.listUser);
  }
  // ,
  // beforeUnmount() {
  //   console.log('beforeUnmount', this.title, document.querySelector('.container'));
  // },
  // unmounted() {
  //   console.log('unmounted', this.title, document.querySelector('.container'));
  // }
}

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