<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { usePokeApiStore } from '@/stores/pokeapi.js'

const store = usePokeApiStore()
const router = useRouter()

onMounted(() => {
  store.fetchPokemons()
})

const showDetails = (name) => {
  router.push({ name: 'ApiPokemonDetail', params: { name } })
}
</script>

<template>
  <div class="api-list-container">
    <h1>Pokémons depuis PokeAPI</h1>

    <div v-if="store.loading" class="loading">
      Chargement...
    </div>

    <div v-else-if="store.error" class="error">
      Erreur: {{ store.error }}
    </div>

    <div v-else class="pokemon-list">
      <div
        v-for="pokemon in store.pokemons"
        :key="pokemon.name"
        class="pokemon-item"
        @click="showDetails(pokemon.name)"
      >
        <p>{{ pokemon.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.api-list-container {
  padding: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.loading, .error {
  text-align: center;
  padding: 40px;
  font-size: 1.2em;
}

.error {
  color: #ef4444;
}

.pokemon-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.pokemon-item {
  padding: 20px;
  background: #f3f4f6;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
}

.pokemon-item:hover {
  background: #e5e7eb;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.pokemon-item p {
  margin: 0;
  font-weight: 600;
  text-transform: capitalize;
  color: #333;
}
</style>
