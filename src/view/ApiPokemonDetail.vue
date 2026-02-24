<script setup>
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePokeApiStore } from '@/stores/pokeapi.js'
import { useTeamStore } from '@/stores/team.js'

const route = useRoute()
const router = useRouter()
const store = usePokeApiStore()
const teamStore = useTeamStore()

const pokemonName = computed(() => route.params.name)

onMounted(() => {
  store.fetchPokemonDetails(pokemonName.value)
})

const goBack = () => {
  router.push({ name: 'ApiPokemonList' })
}

const capturer = () => {
  if (store.selectedPokemon) {
    const pokemon = {
      id: store.selectedPokemon.id,
      name: store.selectedPokemon.name,
      image: store.selectedPokemon.sprites.front_default,
      types: store.selectedPokemon.types.map(t => t.type.name)
    }
    teamStore.addToTeam(pokemon)
    alert(`${pokemon.name} a été capturé !`)
  }
}
</script>

<template>
  <div class="detail-container">
    <button @click="goBack" class="back-btn">← Retour</button>

    <div v-if="store.loading" class="loading">
      Chargement...
    </div>

    <div v-else-if="store.error" class="error">
      Erreur: {{ store.error }}
    </div>

    <div v-else-if="store.selectedPokemon" class="pokemon-detail">
      <h1>{{ store.selectedPokemon.name }}</h1>
      <img :src="store.selectedPokemon.sprites.front_default" :alt="store.selectedPokemon.name" />

      <div class="info">
        <p><strong>ID:</strong> {{ store.selectedPokemon.id }}</p>
        <p><strong>Taille:</strong> {{ store.selectedPokemon.height }}</p>
        <p><strong>Poids:</strong> {{ store.selectedPokemon.weight }}</p>
        <p><strong>Types:</strong>
          <span v-for="type in store.selectedPokemon.types" :key="type.type.name">
            {{ type.type.name }}
          </span>
        </p>
      </div>

      <button @click="capturer" class="capture-btn">
        Capturer ce Pokémon
      </button>
    </div>
  </div>
</template>

<style scoped>
.detail-container {
  padding: 30px;
  max-width: 600px;
  margin: 0 auto;
}

.back-btn {
  padding: 10px 20px;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 20px;
}

.back-btn:hover {
  background: #4f46e5;
}

.loading, .error {
  text-align: center;
  padding: 40px;
  font-size: 1.2em;
}

.error {
  color: #ef4444;
}

.pokemon-detail {
  text-align: center;
  background: #f9fafb;
  padding: 30px;
  border-radius: 12px;
}

h1 {
  text-transform: capitalize;
  color: #333;
  margin-bottom: 20px;
}

img {
  width: 200px;
  height: 200px;
}

.info {
  text-align: left;
  margin: 20px 0;
}

.info p {
  margin: 10px 0;
  font-size: 1.1em;
}

.info span {
  display: inline-block;
  background: #e5e7eb;
  padding: 4px 12px;
  border-radius: 6px;
  margin-left: 5px;
  text-transform: capitalize;
}

.capture-btn {
  padding: 12px 30px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1em;
  margin-top: 20px;
}

.capture-btn:hover {
  background: #059669;
}
</style>
