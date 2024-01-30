<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
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
          <th scope="col">imdbRating</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="livro in livros" v-bind:key="livro.id">
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
        </tr>
      </tbody>
    </table>
    </div>
  </template>

<script>
export default {
  name: 'FilmeComponent',
  props: {
    msg: String
  }
}

</script>