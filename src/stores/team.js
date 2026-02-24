import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = 'http://localhost:3001/team'

export const useTeamStore = defineStore('team', {
  state: () => ({
    team: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchTeam() {
      this.loading = true
      this.error = null

      try {
        const response = await axios.get(API_URL)
        this.team = response.data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async addToTeam(pokemon) {
      this.loading = true
      this.error = null

      try {
        const response = await axios.post(API_URL, pokemon)
        this.team.push(response.data)
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    }
  }
})
