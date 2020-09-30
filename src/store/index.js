import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : "",
    announces : [],
    schoolAnnounce : [],
    departmentAnnounce : [],
    userDepartment : "",
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

    setDepartment(state, department) {
      state.userDepartment = department
    },

    clearToken(state) {
      state.token = ""
    },

    setAnnounce(state, announces) {
      console.log('setAnnounce çalıştı..')
      state.announces = [];
      state.schoolAnnounce = [];
      state.departmentAnnounce = [];
      state.userDepartment = localStorage.getItem('userDepartment');


      console.log(announces);
      console.log(`User Department : ${state.userDepartment}`);
      
      announces.map(res => {
        state.announces.push(res)
        res.tag == 'okul' ? state.schoolAnnounce.push(res) : null
        res.tag == state.userDepartment ? state.departmentAnnounce.push(res) : null
        
      })      
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
          commit("setDepartment", result.data.tag)
          localStorage.setItem('userDepartment', result.data.tag)         
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
    localStorage.removeItem('userDepartment')
    
    },

    // SHARE ANNOUNCE
    shareAnnounce({commit, state}, payload) {
      return fetch('https://kampus-api.herokuapp.com/api/announce/share', {
        method : 'POST',
        body : JSON.stringify({

          title : payload.title,
          content : payload.content,     
          tag : payload.tag     
        }),
        headers: {
          'Content-type' : 'application/json; charset=UTF-8',
          'Authorization': 'Bearer: ' + state.token,
        }
        })
        .then(data => data.json())
        .then(result => console.log(result))
        .catch(err => console.log(err)) 
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
