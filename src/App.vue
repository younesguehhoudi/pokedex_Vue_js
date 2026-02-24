<script setup>
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/pokemons">Pokémons</router-link>
      <router-link to="/api">Pokémons API</router-link>
      <router-link to="/team">Ma Team</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

nav {
  background-color: #f3f4f6;
  padding: 20px;
}

nav a {
  margin-right: 20px;
  text-decoration: none;
  color: #333;
  font-weight: 600;
}

nav a:hover {
  color: #667eea;
}

nav a.router-link-active {
  color: #667eea;
  border-bottom: 2px solid #667eea;
}

</style>
