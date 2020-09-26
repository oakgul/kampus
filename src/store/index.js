import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : ""
  },
  getters: {
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },

    clearToken(state) {

    },
  },
  actions: {
    register({commit}, payload) {
      fetch('https://kampus-api.herokuapp.com/api/auth/register', {
        method : 'POST',
        body : JSON.stringify({
          
            name : payload.name,
            surname : payload.surname,
            email : payload.email,
            password : payload.password,
            gender : payload.gender,
            department :payload.department,
            role : payload.role
        }),
        headers: {
            'Content-type' : 'application/json; charset=UTF-8'
        }
    })
    .then(data => data.json())
    .then(result => console.log(result))
    .catch(err => console.log(err))
    },

    // LOGIN
    login({commit}, payload) {
      fetch('https://kampus-api.herokuapp.com/api/auth/login', {
        method : 'POST',
        body : JSON.stringify({
          email : payload.email,
          password : payload.password     
        }),
        headers: {
          'Content-type' : 'application/json; charset=UTF-8'
        }
        })
        .then(data => data.json())
        .then(result => {
          console.log(result);
          commit("setToken", result.access_token)
          console.log(result.access_token);
        })
        .catch(err => console.log(err)) 
    }
  }
})
