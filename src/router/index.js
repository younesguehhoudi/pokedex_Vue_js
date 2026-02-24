import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../view/HomeView.vue';
import PokemonListView from '../view/PokemonListView.vue';
import ApiPokemonList from '../view/ApiPokemonList.vue';
import ApiPokemonDetail from '../view/ApiPokemonDetail.vue';
import TeamView from '../view/TeamView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/pokemons', name: 'PokemonList', component: PokemonListView },
  { path: '/pokemons/:id', name: 'PokemonDetail', component: () => import('../view/PokemonDetailView.vue') },
  { path: '/api', name: 'ApiPokemonList', component: ApiPokemonList },
  { path: '/api/:name', name: 'ApiPokemonDetail', component: ApiPokemonDetail },
  { path: '/team', name: 'Team', component: TeamView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
