import { defineStore } from 'pinia'
import axios from 'axios'

export const usePokeApiStore = defineStore('pokeapi', {
  state: () => ({
    pokemons: [],
    selectedPokemon: null,
    loading: false,
    error: null
  }),

  actions: {
    async fetchPokemons() {
      this.loading = true
      this.error = null

      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
        this.pokemons = response.data.results
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async fetchPokemonDetails(name) {
      this.loading = true
      this.error = null

      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        this.selectedPokemon = response.data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    }
  }
})
