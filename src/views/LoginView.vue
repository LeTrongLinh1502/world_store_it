<script setup>
import {onMounted} from 'vue';
import {ref} from 'vue';
import {useRouter} from 'vue-router';


import '@/assets/css/css.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/style.css'
import '@/assets/css/style2.css'
import '@/assets/css/owl.carousel.min.css'

const username = ref('');
const password = ref('');
const rememberMe = ref(false);
const loading = ref(true);
const error = ref(null);
const router = useRouter();
const errorMessage = ref('');
const showPassword = ref(false);

const handleLogin = async () => {
  try {
    const user = {
      user_name: username.value,
      password: password.value
    };
    console.log("Logging in with: ", JSON.stringify(user))
    const response = await fetch("http://tronglinhnevergiveup.online:8085/api/v1/user/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })

    if (!response.ok) {
      console.log("Response status: ", response.status);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("response data:", data);
    // Nếu cần sử dụng giá trị từ API, bạn có thể kiểm tra như sau:
    if (data.status === true) {
      console.log("Login successful");
      router.push('/home');
    } else {
      errorMessage.value = "Invalid username or password.";
      console.log("Login failed");
    }

  } catch (err) {
    error.value = "Lỗi khi lấy dữ liệu!";
    console.error(err);
  } finally {
    loading.value = false;
  }

};
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
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
                <h3>Login to <strong>World Store IT</strong></h3>
              </div>
              <form @submit.prevent="handleLogin">
                <div class="form-group first">
                  <label for="username">Username</label>
                  <input v-model="username" type="text" class="form-control" placeholder="your-email@gmail.com" id="username">
                </div>
                <div class="form-group last mb-3">
                  <span class="btn-show-pass">
							<i class="zmdi zmdi-eye"></i>
						</span>
                  <label for="password">Password</label>
                  <input v-model="password" :type="showPassword ? 'text' : 'password'" class="form-control" placeholder="Your Password" id="password">
                </div>

                <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>

                <div class="d-sm-flex mb-5 align-items-center">
                  <label class="control control--checkbox mb-3 mb-sm-0">
                    <span class="caption">Remember me</span>
                    <input type="checkbox" v-model="rememberMe">
                    <div class="control__indicator"></div>
                  </label>
                  <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span>
                </div>

                <input type="submit" value="Log In" class="btn btn-block btn-primary">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn-show-pass {
  font-size: 15px;
  color: #999999;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  padding-right: 5px;
  cursor: pointer;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}
</style>