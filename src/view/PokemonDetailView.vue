<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { pokemons } from '@/stores/pokemons.js'

const route = useRoute()
const router = useRouter()

const pokemonId = computed(() => parseInt(route.params.id))

const pokemon = computed(() => {
  return pokemons.find(p => p.id === pokemonId.value)
})

const getColorByType = (type) => {
  return 'color-' + type
}

const goBack = () => {
  router.push({ name: 'PokemonList' })
}
</script>

<template>
  <div class="detail-container">
    <button @click="goBack" class="back-btn">← Retour à la liste</button>

    <div v-if="pokemon" class="pokemon-detail" :class="getColorByType(pokemon.type)">
      <div class="pokemon-header">
        <h1>{{ pokemon.name }}</h1>
        <span class="pokemon-id">#{{ pokemon.id }}</span>
      </div>

      <div class="pokemon-content">
        <div class="pokemon-image-section">
          <img :src="pokemon.lien" :alt="pokemon.name" class="pokemon-image" />
        </div>

        <div class="pokemon-info">
          <div class="info-card">
            <h2>Type</h2>
            <span :class="getColorByType(pokemon.type)" class="type-badge">{{ pokemon.type }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="not-found">
      <h2>Pokémon introuvable</h2>
      <p>Le Pokémon #{{ pokemonId }} n'existe pas dans notre base de données.</p>
      <button @click="goBack" class="back-btn">← Retour à la liste</button>
    </div>
  </div>
</template>

<style scoped>
.detail-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
}

.back-btn {
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  background-color: #6366f1;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.2s;
}

.back-btn:hover {
  background-color: #4f46e5;
}

.pokemon-detail {
  border-radius: 20px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.pokemon-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 20px;
}

.pokemon-header h1 {
  font-size: 2.5em;
  margin: 0;
  color: #1f2937;
}

.pokemon-id {
  font-size: 1.5em;
  color: #6b7280;
  font-weight: 600;
}

.pokemon-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.pokemon-image-section {
  text-align: center;
}

.pokemon-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15));
}

.pokemon-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  background-color: #f9fafb;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}

.info-card h2 {
  margin: 0 0 10px 0;
  font-size: 1.2em;
  color: #374151;
}

.type-badge {
  display: inline-block;
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: 600;
  color: white;
  font-size: 1.1em;
}


.not-found {
  text-align: center;
  padding: 60px 20px;
}

.not-found h2 {
  color: #ef4444;
  font-size: 2em;
  margin-bottom: 10px;
}

.not-found p {
  color: #6b7280;
  margin-bottom: 30px;
}

/* Couleurs par type */
.color-Plante {
  background: linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%);
}

.color-Plante .type-badge {
  background-color: #81c784;
}

.color-Feu {
  background: linear-gradient(135deg, #ffccbc 0%, #ffab91 100%);
}

.color-Feu .type-badge {
  background-color: #ff8a65;
}

.color-Eau {
  background: linear-gradient(135deg, #b3e5fc 0%, #81d4fa 100%);
}

.color-Eau .type-badge {
  background-color: #4fc3f7;
}

.color-Électrik {
  background: linear-gradient(135deg, #fff9c4 0%, #fff59d 100%);
}

.color-Électrik .type-badge {
  background-color: #ffe082;
  color: #555;
}

.color-Normal {
  background: linear-gradient(135deg, #f8bbd0 0%, #f48fb1 100%);
}

.color-Normal .type-badge {
  background-color: #f06292;
}

/* Responsive */
@media (max-width: 768px) {
  .pokemon-content {
    grid-template-columns: 1fr;
  }

  .pokemon-header h1 {
    font-size: 2em;
  }

  .detail-container {
    padding: 15px;
  }

  .pokemon-detail {
    padding: 20px;
  }
}
</style>
