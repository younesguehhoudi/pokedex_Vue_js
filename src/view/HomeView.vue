<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home-container">
    <h1>Bienvenue sur le Pokédex</h1>
    <p class="description">Explorez le monde des Pokémons</p>

    <div class="links">
      <RouterLink to="/pokemons" class="btn"> Liste Pokémon </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 600px;
  margin: 80px auto;
  text-align: center;
  padding: 40px;
}

h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 15px;
}

.description {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 40px;
}

.links {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.btn {
  padding: 15px 30px;
  background: #6366f1;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1em;
  transition: all 0.2s;
}

.btn:hover {
  background: #4f46e5;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
}
</style>
