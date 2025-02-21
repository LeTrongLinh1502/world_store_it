<script setup>
import { RouterLink, RouterView } from 'vue-router'
import "@fortawesome/fontawesome-free/css/all.min.css";

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <div class="greetings">
        <h1 class="green">Welcome to World Store IT</h1>
      </div>
      <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">Categories</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/user/get-all">Pages</RouterLink>
        <RouterLink to="/user/get-all-fetch">Blog</RouterLink>
        <RouterLink to="/user/get-all-fetch">Contact</RouterLink>
      </nav>
    </div>

    <div class="col-6 col-lg-3 text-right">
      <RouterLink to="/login" class="small mr-3">
        <i class="fa-solid fa-lock"></i> Login
      </RouterLink>
      <RouterLink to="/signup" class="small">
        <i class="fa-solid fa-user"></i> SignUp
      </RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background: #10707f;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
  .icon-lock:before {
    content: "\f023";
  }
  .icon-person:before {
    content: "\e7fd";
  }
}
</style>
