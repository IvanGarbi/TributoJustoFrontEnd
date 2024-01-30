import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Cadastro from './components/Cadastro.vue'
import Filmes from './components/Filmes.vue'
import Livros from './components/Livros.vue'
import Login from './components/Login.vue'

const routes = [
  { path: "/Cadastro", component: Cadastro },
  { path: "/Filmes", component: Filmes },
  { path: "/Livros", component: Livros },
  { path: "/Login", component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

createApp(App).use(router).mount('#app')
