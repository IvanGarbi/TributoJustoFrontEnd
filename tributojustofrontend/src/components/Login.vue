<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <form>
      <div class="form-group">
        <label for="exampleInputEmail1">E-mail</label>
        <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Senha</label>
        <input type="password" class="form-control" id="Senha" placeholder="Senha">
      </div>
      <button type="submit" class="btn btn-primary">Entrar</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  props: {
    msg: String
  }
}

</script>


