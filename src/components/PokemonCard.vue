<script setup>
const props = defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['select'])

const getColorByType = (type) => {
  return 'color-' + type
}

const handleClick = () => {
  emit('select', props.pokemon)
}
</script>

<template>
  <div :class="getColorByType(pokemon.type)" class="card-wrapper" @click="handleClick">
    <div class="card">
      <img :src="pokemon.lien" :alt="pokemon.name" />
      <h2>{{ pokemon.name }}</h2>
      <p :class="getColorByType(pokemon.type)">{{ pokemon.type }}</p>
      <slot />
    </div>
  </div>
</template>
<style scoped>
.card-wrapper {
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  border-radius: 16px;
  overflow: hidden;
}

.card-wrapper:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card {
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);
}

.card img {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  display: block;
}

.card h2 {
  margin: 15px 0 10px;
  font-size: 1.2em;
  color: #333;
  font-weight: 600;
}

.card p {
  margin: 0 auto;
  font-size: 0.9em;
  font-weight: 500;
  display: inline-block;
}

.color-Plante {
  background: linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%);
}

.color-Plante p {
  background-color: #81c784;
  color: white;
  padding: 6px 16px;
  border-radius: 12px;
}

.color-Feu {
  background: linear-gradient(135deg, #ffccbc 0%, #ffab91 100%);
}

.color-Feu p {
  background-color: #ff8a65;
  color: white;
  padding: 6px 16px;
  border-radius: 12px;
}

.color-Eau {
  background: linear-gradient(135deg, #b3e5fc 0%, #81d4fa 100%);
}

.color-Eau p {
  background-color: #4fc3f7;
  color: white;
  padding: 6px 16px;
  border-radius: 12px;
}

.color-Électrik {
  background: linear-gradient(135deg, #fff9c4 0%, #fff59d 100%);
}

.color-Électrik p {
  background-color: #ffe082;
  color: #555;
  padding: 6px 16px;
  border-radius: 12px;
}

.color-Normal {
  background: linear-gradient(135deg, #f8bbd0 0%, #f48fb1 100%);
}

.color-Normal p {
  background-color: #f06292;
  color: white;
  padding: 6px 16px;
  border-radius: 12px;
}
</style>
