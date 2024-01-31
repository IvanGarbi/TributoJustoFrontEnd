<template>
  <div class="hello">
    <br>
    <h3>Cadastrar</h3>
    <div class="container">
      <form>
          <div class="form-group">
          <label for="Nome">Nome</label>
          <input type="text" class="form-control" id="nome" aria-describedby="emailHelp" placeholder="Enter Nome">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">E-mail</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Senha</label>
          <input type="password" class="form-control" id="senha" placeholder="Senha">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Confirmar Senha</label>
          <input type="password" class="form-control" id="confirmarSenha" placeholder="Confirmar Senha">
        </div>
        <button v-on:click="salvar()" class="btn btn-primary">Cadastrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CadastroComponent',
  methods: {
    salvar: () => {
      axios.post("https://localhost:7222/v1/Auth/Registrar",{
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        confirmarSenha: document.getElementById("confirmarSenha").value
      }).then(() => {
        self.$router.push('/Login');
      })
    }
  }
}

</script>


