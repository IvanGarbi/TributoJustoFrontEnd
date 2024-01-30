<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">title</th>
        <th scope="col">authors</th>
        <th scope="col">categories</th>
        <th scope="col">publisher</th>
        <th scope="col">pageCount</th>
        <th scope="col">description</th>
        <th scope="col">Sale country</th>
        <th scope="col">amount</th>
        <th scope="col">currencyCode</th>
        <th scope="col">country</th>
        <th scope="col">saleability</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="livro in livros" v-bind:key="livro.id">
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
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: 'LivroComponent',
  props: {
    msg: String
  }
}

</script>


