import { defineStore } from 'pinia'

export const usePokemonFavoritesStore = defineStore('pokemonFavorites', {
  state: () => ({
    favorites: []
  }),
  getters: {
    isFavorite: (state) => (id) => state.favorites.includes(id)
  },
  actions: {
    addFavorite(id) {
      if (!this.favorites.includes(id)) {
        this.favorites.push(id)
      }
    },
    removeFavorite(id) {
      this.favorites = this.favorites.filter(favId => favId !== id)
    },
    toggleFavorite(id) {
      if (this.favorites.includes(id)) {
        this.removeFavorite(id)
      } else {
        this.addFavorite(id)
      }
    }
  }
})
