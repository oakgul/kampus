import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : "",
    announce : {
      userID : [],
      title : [],
      content : [],
      date : [],
      slug : [],
      id :[]
    }
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

    setAnnounce(state, announces) {
      console.log(announces);
      announces.map(res => {
        state.announce.userID.push(res.user)
        state.announce.title.push(res.title)
        state.announce.content.push(res.content)
        state.announce.date.push(res.createdAt)
        state.announce.slug.push(res.slug)
        state.announce.id.push(res.id)   
      })
      console.log(state.announce.userID);
      console.log(state.announce.title);
      console.log(state.announce.content);
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
      return fetch('https://kampus-api.herokuapp.com/api/auth/register', {
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
    
    },

    // GET ALL ANNOUNCE
    getAnnounce({commit, state}) {
      fetch('https://kampus-api.herokuapp.com/api/announce', {
            method : 'GET',
            headers: {
                'Content-type' : 'application/json; charset=UTF-8',
                'Authorization': 'Bearer: ' + state.token,
                }
            })
        .then(data => data.json())
        .then(result => {
          commit("setAnnounce", result.data)
        })
        .catch(err => console.log(err))
    },
  }
})
