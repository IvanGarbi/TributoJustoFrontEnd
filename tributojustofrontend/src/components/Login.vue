<template>
  <div class="hello">
    <br>
    <h3>Login</h3>
    <div class="container">
      <form>
      <div class="form-group">
        <label for="exampleInputEmail1">E-mail</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Senha</label>
        <input type="password" class="form-control" id="senha" placeholder="Senha">
      </div>
      <button v-on:click="salvar()" class="btn btn-primary">Entrar</button>
    </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginComponent',
  methods: {
    salvar: () => {
      axios.post("https://localhost:7222/v1/Auth/Login",{
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
      }).then(() => {
        self.$router.push('/');
      })
    }
  }
}

</script>


