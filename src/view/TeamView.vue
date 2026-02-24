<script setup>
import { onMounted } from 'vue'
import { useTeamStore } from '@/stores/team.js'

const store = useTeamStore()

onMounted(() => {
  store.fetchTeam()
})
</script>

<template>
  <div class="team-container">
    <h1>Ma Team de Pokémons Capturés</h1>

    <div v-if="store.loading" class="loading">
      Chargement...
    </div>

    <div v-else-if="store.error" class="error">
      Erreur: {{ store.error }}
      <p class="hint">Assurez-vous que json-server est lancé sur le port 3001</p>
    </div>

    <div v-else-if="store.team.length === 0" class="empty">
      Aucun Pokémon capturé pour l'instant.
      <p>Allez dans "Pokémons API" pour capturer vos premiers Pokémons !</p>
    </div>

    <div v-else class="team-grid">
      <div
        v-for="pokemon in store.team"
        :key="pokemon.id"
        class="pokemon-card"
      >
        <img :src="pokemon.image" :alt="pokemon.name" />
        <h3>{{ pokemon.name }}</h3>
        <div class="types">
          <span v-for="type in pokemon.types" :key="type" class="type-badge">
            {{ type }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team-container {
  padding: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.loading, .error, .empty {
  text-align: center;
  padding: 40px;
  font-size: 1.2em;
}

.error {
  color: #ef4444;
}

.hint {
  font-size: 0.9em;
  color: #6b7280;
  margin-top: 10px;
}

.empty {
  color: #6b7280;
}

.empty p {
  margin-top: 10px;
  font-size: 0.95em;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.pokemon-card {
  background: #f9fafb;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  border: 2px solid #e5e7eb;
}

.pokemon-card img {
  width: 120px;
  height: 120px;
}

.pokemon-card h3 {
  text-transform: capitalize;
  color: #333;
  margin: 10px 0;
}

.types {
  display: flex;
  gap: 5px;
  justify-content: center;
  flex-wrap: wrap;
}

.type-badge {
  background: #6366f1;
  color: white;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.85em;
  text-transform: capitalize;
}
</style>
