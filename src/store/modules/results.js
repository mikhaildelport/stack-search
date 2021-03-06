import * as types from '../mutation-types'

const state = {
  searching: false,
  errors: null,
  items: []
}

const mutations = {
  [types.RESULTS_QUERY] (state) {
    state.searching = true
    state.errors = null
    state.items = []
  },

  [types.RESULTS_SUCCESS] (state, payload) {
    state.searching = false
    state.errors = null
    state.items = payload.items
  },

  [types.RESULTS_FAILURE] (state, payload) {
    state.searching = false
    state.errors = payload.message
  },

  [types.RESULTS_CLEAR] (state) {
    state.searching = false
    state.errors = null
    state.items = []
  }
}

export default {
  state,
  mutations
}
