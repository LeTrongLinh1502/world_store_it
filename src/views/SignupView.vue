<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


import '@/assets/css/css.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/style.css'
import '@/assets/css/style2.css'
import '@/assets/css/owl.carousel.min.css'

const username = ref('');
const password = ref('');
const router = useRouter();
const loading = ref(true);
const error = ref(null);
const showPassword = ref(false);

const handleSignUp = async () => {
  try {
    const user = {
      user_name: username.value,
      password: password.value
    };
    console.log("user info: ", JSON.stringify(user))
    const response = await fetch("http://tronglinhnevergiveup.online:8085/api/v1/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("response data:", data);
    console.log('Signup in with:', username.value, password.value);
    router.push('/home');
  } catch (err) {
    error.value = "Lỗi khi lấy dữ liệu!";
    console.error(err);
  } finally {
    loading.value = false;
  }

};


onMounted(() => {
  const scripts = [
    'https://preview.colorlib.com/theme/bootstrap/login-form-03/js/jquery-3.3.1.min.js',
    'https://preview.colorlib.com/theme/bootstrap/login-form-03/js/popper.min.js',
    'https://preview.colorlib.com/theme/bootstrap/login-form-03/js/bootstrap.min.js',
    'https://preview.colorlib.com/theme/bootstrap/login-form-03/js/main.js'
  ];

  scripts.forEach(src => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;  // Đảm bảo chạy theo thứ tự
    document.body.appendChild(script);
  });

  // Thêm Cloudflare Insights Script
  const cfScript = document.createElement('script');
  cfScript.defer = true;
  cfScript.src = "https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015";
  cfScript.setAttribute("integrity", "sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==");
  cfScript.setAttribute("data-cf-beacon", '{"rayId":"911c22ab8e61978a","serverTiming":{"name":{"cfExtPri":true,"cfL4":true,"cfSpeedBrain":true,"cfCacheStatus":true}},"version":"2025.1.0","token":"cd0b4b3a733644fc843ef0b185f98241"}');
  cfScript.crossOrigin = "anonymous";
  document.body.appendChild(cfScript);
});
</script>

<template>
  <div class="half">
    <div class="bg order-1 order-md-2"
         style="background-image: url('https://cellphones.com.vn/sforum/wp-content/uploads/2022/06/40.jpg');"></div>
    <div class="contents order-2 order-md-1">

      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-6">
            <div class="form-block">
              <div class="text-center mb-5">
                <h3>Signup to <strong>World Store IT</strong></h3>
              </div>
              <form @submit.prevent="handleSignUp">
                <div class="form-group first">
                  <label for="username">Username</label>
                  <input v-model="username" type="text" class="form-control" placeholder="your-email@gmail.com"
                         id="username">
                </div>
                <div class="form-group last mb-3 position-relative">
                  <label for="password">Password</label>
                  <input v-model="password" :type="showPassword ? 'text' : 'password'" class="form-control pr-5"
                         placeholder="Your Password" id="password">
                  <span class="btn-show-pass" @click="showPassword = !showPassword">
                    <i class="zmdi" :class="showPassword ? 'zmdi-eye-off' : 'zmdi-eye'"></i>
                  </span>
                </div>

                <input type="submit" value="Signup" class="btn btn-block btn-primary">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.position-relative {
  position: relative;
}

.btn-show-pass {
  position: absolute;
  right: 10px;
  top: 65%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #777;
}
</style>