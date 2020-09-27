import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : ""
  },

  getters: {
    isHaveToken(state) {
      return state.token !== ""
    }
  },

  mutations: {
    setToken(state, token) {
      state.token = token
    },

    clearToken(state) {
      state.token = ""
    },
  },

  actions: {
    initAuth({commit, dispatch}) {
      let token = localStorage.getItem('token');
      if(token) {
        commit("setToken", token)
        router.push('/dashboard')
      }else{
        router.push('/login')
        return false
      }
    },  

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
      return fetch('https://kampus-api.herokuapp.com/api/auth/login', {
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
          localStorage.setItem('token', result.access_token)
          console.log(result.access_token);
        })
        .catch(err => console.log(err)) 
    },

    // LOGOUT
    logout({commit, state}) {
        fetch('https://kampus-api.herokuapp.com/api/auth/logout', {
            method : 'GET',
            headers: {
        'Content-type' : 'application/json; charset=UTF-8',
        'Authorization': 'Bearer: ' + state.token,
        },
    })
    .then(data => data.json())
    .then(result => console.log(result))
    .catch(err => console.log(err))   
    commit("clearToken")
    localStorage.removeItem('token')
    
    }
  }
})
