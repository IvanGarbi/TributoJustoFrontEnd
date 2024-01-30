<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h3>Tributo Justo Front End</h3>

  <a href="/login" class="btn btn-secundary">Fazer login</a>
  <a href="/cadastro" class="btn btn-secundary">Fazer cadastro</a>
  <a href="/livros" class="btn btn-secundary">Livro</a>
  <a href="/filmes" class="btn btn-secundary">Filmes</a>
  <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Home</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
