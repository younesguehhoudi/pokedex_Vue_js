<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import PokemonCard from '@/components/PokemonCard.vue'
import SearchInput from '@/components/SearchInput.vue'
import { pokemons as pokemonsList } from '@/stores/pokemons.js'
import { usePokemonFavoritesStore } from '@/stores/pokemonFavorites.js'

const router = useRouter()
const search = ref('')
const favoritesStore = usePokemonFavoritesStore()
const showFavoritesOnly = ref(false)

const filteredPokemons = computed(() => {
  const q = search.value.trim().toLowerCase()
  let list = pokemonsList

  if (q) {
    list = list.filter(p => p.name.toLowerCase().includes(q))
  }

  if (showFavoritesOnly.value) {
    list = list.filter(p => favoritesStore.isFavorite(p.id))
  }

  return list
})

const handleSelect = (pokemon) => {
  router.push({ name: 'PokemonDetail', params: { id: pokemon.id } })
}
</script>

<template>
  <div class="pokemon-list-container">
    <SearchInput v-model="search" />
    <label class="favorites-toggle">
      <input type="checkbox" v-model="showFavoritesOnly" />
      Afficher seulement les favoris
    </label>

    <p class="result-count">{{ filteredPokemons.length }} résultat(s)</p>

    <div class="pokemon-list">
      <PokemonCard
        v-for="pokemon in filteredPokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
        @select="handleSelect"
      >
        <button
          v-if="!favoritesStore.isFavorite(pokemon.id)"
          class="fav-btn"
          @click.stop="favoritesStore.addFavorite(pokemon.id)"
        >
          Ajouter aux favoris
        </button>
        <button
          v-else
          class="fav-btn"
          @click.stop="favoritesStore.removeFavorite(pokemon.id)"
        >
          Retirer des favoris
        </button>
      </PokemonCard>
    </div>
  </div>
</template>

<style scoped>
.pokemon-list-container {
  padding: 30px;
  background: transparent;
}

.pokemon-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.favorites-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 10px 0 18px;
  font-weight: 600;
  color: #444;
}
.result-count {
  text-align: center;
  color: #6b7280;
  margin: 8px 0 20px;
}

.fav-btn {
  margin-top: 12px;
  padding: 6px 14px;
  border-radius: 14px;
  border: 1px solid #f3c2c7;
  background: #fde2e4;
  color: #d84367;
  font-weight: 600;
}

.fav-btn:hover {
  background: #fbd3d7;
}
</style>
