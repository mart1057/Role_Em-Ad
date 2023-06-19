import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    is_login: false,
    drawer: false,
    token: '',
    role: '',
    userInfo: {

    }
  },
  getters: {

  },
  mutations: {
    doLogin(state, data) {
      state.is_login = data
    },
    doLogout(state, data) {
    },
    changeDrawer(state, data) {
      state.drawer = data;
    },
    setUser(state, data) {
      state.userInfo = data
    },
    setToken(state, data) {
      state.token = data
    },
    setRole(state, data) {
      state.role = data
    }
  },
  actions: {
    loginUser({ commit, state }, user) {
      axios.post('http://27.254.144.88:1337/api' + '/auth/local?populate=*', {
        "identifier": user.email,
        "password": user.password
      }).then((resp) => {
        if (resp.data.jwt) {
          localStorage.setItem(
            "blog_token", resp.data.jwt
          )
        }
        fetch('http://27.254.144.88:1337/api' + '/users/' + resp.data.user.id + '?populate=*')
          .then(response => response.json())
          .then((resp) => {
            console.log(resp.role.name);
            commit('setRole', resp.role.name)
          })
        setTimeout(() => {
          commit('setUser', resp.data.user)
          commit('setToken', resp.data.jwt)
          commit('doLogin', true)
          localStorage.setItem("is_login", true)
          if (state.role == 'Admin') {
            router.push({
              path: '/',
            })
          }
          else {
            router.push({
              path: '/DashBoardEm',
            })
          }

        }, 500)


      }).finally(() => { 
        setTimeout(()=>{
           console.log(state.role)
        },700)
        })
    },
    // logOut({commit}){
    //   localStorage.clear
    // }
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
