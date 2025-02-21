<script setup>
import {onMounted, ref} from "vue";
import router from "@/router/index.js";
import { useRoute } from "vue-router";

const route = useRoute();

const newProduct = ref({
  id:"",
  name: "",
  main_image: "",
  secondary_image: "",
  price: "",
  original_price: "",
});

const loading = ref(true);
const error = ref(null);
async function addProduct() {
  if (!newProduct.value.name || !newProduct.value.price || !newProduct.value.original_price) {
    alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");
    return;
  }
  console.log("product info:", JSON.stringify(newProduct.value))
  try {
    const response = await fetch("http://tronglinhnevergiveup.online:8085/api/v1/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct.value)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("response data:", data);
    console.log('Product id: ', data.id);
    await router.push('/home');
  } catch (err) {
    error.value = "Lỗi khi lấy dữ liệu!";
    console.error(err);
  } finally {
    loading.value = false;
  }

  // Reset form
  newProduct.value = {
    id: "",
    name: "",
    main_image: "",
    secondary_image: "",
    price: "",
    original_price: "",
  };
}
onMounted(() => {
  if (history.state.productData) {
    console.log("Dữ liệu từ state:", history.state.productData);
    newProduct.value = history.state.productData;
  } else {
    // Nếu reload trang, lấy từ query params
    newProduct.value = {
      id: route.query.id || "",
      name: route.query.name || "",
      main_image: route.query.main_image || "",
      secondary_image: route.query.secondary_image || "",
      price: route.query.price || "",
      original_price: route.query.original_price || "",
    };
  }
});
</script>

<template>
  <div class="container">
    <h2>Thông tin Sản Phẩm</h2>
    <table>
      <tr v-if="newProduct.id">
        <td><label for="id">Id</label></td>
        <td><input id="id" v-model="newProduct.id" type="text" placeholder="Id sản phẩm" readonly/></td>
      </tr>
      <tr>
        <td><label for="name">Tên sản phẩm</label></td>
        <td><input id="name" v-model="newProduct.name" type="text" placeholder="Nhập tên sản phẩm" /></td>
      </tr>
      <tr>
        <td><label for="mainImage">Ảnh chính</label></td>
        <td><input id="mainImage" v-model="newProduct.main_image" type="text" placeholder="URL ảnh chính" /></td>
      </tr>
      <tr>
        <td><label for="secondaryImage">Ảnh phụ</label></td>
        <td><input id="secondaryImage" v-model="newProduct.secondary_image" type="text" placeholder="URL ảnh phụ" /></td>
      </tr>
      <tr>
        <td><label for="price">Giá</label></td>
        <td><input id="price" v-model="newProduct.price" type="number" placeholder="Nhập giá" /></td>
      </tr>
      <tr>
        <td><label for="originalPrice">Giá gốc</label></td>
        <td><input id="originalPrice" v-model="newProduct.original_price" type="number" placeholder="Nhập giá gốc" /></td>
      </tr>
      <tr>
        <td colspan="2" class="center">
          <button @click="addProduct">Lưu</button>
        </td>
      </tr>
    </table>

  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  font-family: Arial, sans-serif;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

td {
  padding: 8px;
  border: 1px solid #ddd;
}

.center {
  text-align: center;
}

button {
  background-color: #28a745;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>
