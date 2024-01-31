<template>
    <div class="hello">
      <br>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Pesquisar Filme</label>
        <input type="text" class="form-control" id="nomeFilme" placeholder="Nome do filme">
        <button v-on:click="pesquisar()" class="btn btn-primary">Pesquisar</button>
      </div>
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
          <th scope="col">Favoritar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="filme in filmes" v-bind:key="filme.id">
          <th scope="row">1</th>
          <td id="title">{{Title}}</td>
          <td id="year">{{Year}}</td>
          <td id="genre">{{Genre}}</td>
          <td id="director">{{Director}}</td>
          <td id="writer">{{Writer}}</td>
          <td id="actors">{{Actors}}</td>
          <td id="plot">{{Plot}}</td>
          <td id="country">{{Country}}</td>
          <td id="imdbRating">{{imdbRating}}</td>
          <td v-on:click="favoritar(this)">Favoritar</td>
        </tr>
      </tbody>
    </table>
    </div>
  </template>

<script>
import axios from 'axios'
export default {
  name: 'FilmeComponent',
  data: () => {
    return {
      filmes: [],
    }
  },
  methods: {
    pesquisar: (scope) => {
      axios.post("https://localhost:7222/v1/Filmes/",{
        nomeFilme: document.getElementById("nomeFilme").value,
      }).then((res) => {
        scope.filmes = res.data;
      })
    },
    favoritar: () => {
      axios.post("https://localhost:7222/v1/Favorito/FavoritoarFilme/",{
        title: document.getElementById("title").value,
        year: document.getElementById("year").value,
        genre: document.getElementById("genre").value,
        director: document.getElementById("director").value,
        writer: document.getElementById("writer").value,
        actors: document.getElementById("actors").value,
        plot: document.getElementById("plot").value,
        country: document.getElementById("country").value,
        imdbRating: document.getElementById("imdbRating").value,
      }).then(() => {
        
      })
    }
  }
}

</script>