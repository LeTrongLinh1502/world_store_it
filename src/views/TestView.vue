<!--<script>-->
<!--export default {-->
<!--  name: "Lifecycle",-->
<!--  data () {-->
<!--    return {-->
<!--      message: "hello",-->
<!--      create: '',-->
<!--    }-->
<!--  },-->
<!--  beforeCreate() {-->
<!--    this.message = "xin chao 1"-->
<!--    this.message2 = "xin chao 2";-->

<!--  },-->
<!--  created() {-->
<!--    console.log(this.message);-->
<!--    console.log(this.message2);-->
<!--    this.create = "xin chao 3"-->
<!--  },-->
<!--}-->
<!--</script>-->
<!--<script>-->
<!--export default {-->
<!--  name: "Lifecycle",-->
<!--  data () {-->
<!--    return {-->
<!--      message: "hello"-->
<!--    }-->
<!--  },-->
<!--  beforeCreate() {-->
<!--    console.log(this.message);-->
<!--  }-->
<!--}-->
<!--</script>-->
<script>
import { ref, onBeforeMount } from 'vue';

export default {
  name: "Lifecycle",
  setup() {
    const message = ref("hello");

    // Thay thế beforeCreate bằng onBeforeMount
    onBeforeMount(() => {
      console.log(message.value);
    });

    return { message };
  }
}
</script>

<template>
  <p>{{ message }}</p>
</template>

<!--<script>-->
<!--import {ref} from "vue";-->
<!--export default {-->
<!--  name: "demo",-->
<!--  props: {-->
<!--    user: {-->
<!--      type: String,-->
<!--      required: true-->
<!--    }-->
<!--  },-->
<!--  setup(props, context) {-->
<!--    const val = ref("hello");-->
<!--    console.log(props.user);-->
<!--    console.log(context.attrs)-->

<!--    // Slots (Non-reactive object)-->
<!--    console.log(context.slots)-->

<!--    // Emit Events (Method)-->
<!--    console.log(context.emit)-->

<!--    return {-->
<!--      val-->
<!--    }-->
<!--  }-->
<!--}-->

<!--</script>-->

