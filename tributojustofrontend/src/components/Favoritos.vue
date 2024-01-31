<template>
    <div class="hello">
      <br>
      <h3>Filmes</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Year</th>
          <th scope="col">Genre</th>
          <th scope="col">Director</th>
          <th scope="col">Writer</th>
          <th scope="col">Actors</th>
          <th scope="col">Plot</th>
          <th scope="col">Country</th>
          <th scope="col">ImdbRating</th>
          <th scope="col">Deletar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="filme in listaFavoritos.filmeViewModel" v-bind:key="filme.id">
          <th scope="row">1</th>
          <td>{{Title}}</td>
          <td>{{Year}}</td>
          <td>{{Genre}}</td>
          <td>{{Director}}</td>
          <td>{{Writer}}</td>
          <td>{{Actors}}</td>
          <td>{{Plot}}</td>
          <td>{{Country}}</td>
          <td>{{imdbRating}}</td>
          <td v-on:click="deletar(filme.id)">Deletar</td>
        </tr>
      </tbody>
    </table>
    </div>

    <br>
    <h3>Livros</h3>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Authors</th>
        <th scope="col">Categories</th>
        <th scope="col">Publisher</th>
        <th scope="col">PageCount</th>
        <th scope="col">Description</th>
        <th scope="col">Sale country</th>
        <th scope="col">Amount</th>
        <th scope="col">CurrencyCode</th>
        <th scope="col">Country</th>
        <th scope="col">Saleability</th>
        <th scope="col">Deletar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="livro in listaFavoritos.livroViewModel" v-bind:key="livro.id">
        <th scope="row">1</th>
        <td>{{title}}</td>
        <td>{{authors}}</td>
        <td>{{categories}}</td>
        <td>{{publisher}}</td>
        <td>{{pageCount}}</td>
        <td>{{description}}</td>
        <td>{{saleCountry}}</td>
        <td>{{amount}}</td>
        <td>{{currencyCode}}</td>
        <td>{{country}}</td>
        <td>{{saleability}}</td>
        <td v-on:click="deletar(livro.id)">Deletar</td>
      </tr>
    </tbody>
  </table>
  </template>

<script>
import axios from 'axios'
export default {
  name: 'FavoritoComponent',
  data: () => {
    return {
      listaFavoritos: [],
    }
  },
  methods: {
    favoritos: (scope) => {
      axios.get("https://localhost:7222/v1/Favoritos/", {
        usuarioId: "8cba5766-acea-46b3-934f-60354880e0e3" // guid qualquer para simular id do usuário logado
      }).then((res) => {
        scope.listaFavoritos = res.data
      });
    }
  },
  deletar: (id) => {
      axios.post("https://localhost:7222/v1/Favorito/Deletar/",{
        id: id,
      }).then(() => {

      })
    },
  created() {
    this.favoritos(this)
  }
}

</script>