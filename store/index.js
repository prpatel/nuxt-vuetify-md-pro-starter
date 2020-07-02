export const types = {
  SET_EXAMPLE_STATE: 'SET_EXAMPLE_STATE'
}

export const state = () => ({
  exampleState: null,
  barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
  barImage:
    'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg',
  drawer: null
})

export const getters = {
  getExampleState(state) {
    return state.exampleState
  }
}

export const mutations = {
  [types.SET_EXAMPLE_STATE](state, payload) {
    state.exampleState = payload
  },
  SET_BAR_IMAGE(state, payload) {
    state.barImage = payload
  },
  SET_DRAWER(state, payload) {
    state.drawer = payload
  },
  SET_SCRIM(state, payload) {
    state.barColor = payload
  }
}

export const actions = {
  [types.SET_EXAMPLE_STATE]({ commit }, payload) {
    commit(types.SET_EXAMPLE_STATE, payload)
  }
}
