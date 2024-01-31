<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Tributo Justo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login">Fazer login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/cadastro">Fazer cadastro</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/livros">Livro</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/filmes">Filmes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/favoritos">Favoritos</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <button v-on:click="signOut()"  class="btn btn-outline-success">LogOut</button>
      </form>
    </div>
  </div>
</nav>

<img alt="Vue logo" src="./assets/logo.png">
  <h3>Tributo Justo Front End</h3>
  <router-view></router-view>
  <div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Home</a></li>
    </ul>
    <p class="text-center text-body-secondary">© 2023 Tributo Justo, Inc</p>
  </footer>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AppComponent',
  methods: {
    signOut: () => {
      axios.delete("https://localhost:7222/v1/Auth/SignOut").then(() => {
        self.$router.push('/');
      });
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>


