<template>
  <div class="hello">
    <br>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Pesquisar Livros</label>
        <input type="text" class="form-control" id="nomeLivro" placeholder="Nome do livro">
        <button v-on:click="pesquisar()" class="btn btn-primary">Pesquisar</button>
      </div>
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
        <th scope="col">Favoritar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="livro in livros" v-bind:key="livro.id">
        <th scope="row">1</th>
        <td id="title">{{title}}</td>
        <td id="authors">{{authors}}</td>
        <td id="categories">{{categories}}</td>
        <td id="publisher">{{publisher}}</td>
        <td id="pageCount">{{pageCount}}</td>
        <td id="description">{{description}}</td>
        <td id="saleCountry">{{saleCountry}}</td>
        <td id="amount">{{amount}}</td>
        <td id="currencyCode">{{currencyCode}}</td>
        <td id="country">{{country}}</td>
        <td id="saleability">{{saleability}}</td>
        <td v-on:click="favoritar(this)">Favoritar</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LivroComponent',
  data: () => {
    return {
      livros: [],
    }
  },
  methods: {
    pesquisar: (scope) => {
      axios.post("https://localhost:7222/v1/Livros/",{
        nomeLivro: document.getElementById("nomeLivro").value,
      }).then((res) => {
        scope.livros = res.data;
      })
    },
    favoritar: () => {
      axios.post("https://localhost:7222/v1/Favorito/FavoritoarLivro",{
        title: document.getElementById("title").value,
        authors: document.getElementById("authors").value,
        categories: document.getElementById("categories").value,
        publisher: document.getElementById("publisher").value,
        pageCount: document.getElementById("pageCount").value,
        description: document.getElementById("description").value,
        countrySale: document.getElementById("saleCountry").value,
        amount: document.getElementById("amount").value,
        currencyCode: document.getElementById("currencyCode").value,
        country: document.getElementById("country").value,
        saleability: document.getElementById("saleability").value,
      }).then(() => {

      })
    }
  }
}

</script>


