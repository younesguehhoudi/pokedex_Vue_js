<script setup>
const modelValue = defineModel({
  type: String,
  default: ''
})
</script>

<template>
  <div class="search-input">
    <input
      v-model="modelValue"
      type="text"
      placeholder="Rechercher un Pokémon"
      aria-label="Rechercher un Pokémon"
    />
  </div>
</template>

<style scoped>
.search-input {
  width: 100%;
  max-width: 420px;
  margin: 0 auto 24px;
}

.search-input input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-input input:focus {
  border-color: #42a5f5;
  box-shadow: 0 0 0 3px rgba(66, 165, 245, 0.2);
}
</style>
