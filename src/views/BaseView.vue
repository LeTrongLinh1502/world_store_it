<!--<script setup>-->
<!--import { ref } from 'vue'-->

<!--const count = ref(0)-->

<!--function increment() {-->
<!--  count.value++-->
<!--}-->
<!--</script>-->

<!--<template>-->
<!--  <button @click="increment">-->
<!--    {{ count }}-->
<!--  </button>-->
<!--</template>-->
<script setup>
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
</script>

<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</template>