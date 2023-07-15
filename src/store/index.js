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
    errLogin:false,
    userInfo: {},
    userDetail: {},
    role: {}
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
    setUserDetail(state, data) {
      state.userDetail = data
    },
    setRole(state, data) {
      state.role = data
    },
    setToken(state, data) {
      state.token = data
    },
    setErr(state, data) {
      state.errLogin = data
    }
  },
  actions: {
    loginUser({ commit }, user) {
      axios.post('http://27.254.144.88:1337/api' + '/auth/local', {
        "identifier": user.email,
        "password": user.password
      }).then((resp) => {
        if (resp.data.jwt) {
          localStorage.setItem(
            "blog_token", resp.data.jwt
          )
        }
        fetch('http://27.254.144.88:1337/api/users/' + resp.data.user.id + '?populate=*')
          .then(response => response.json())
          .then((resp2) => {
            fetch('http://27.254.144.88:1337/api/org-roles/'+resp2.org_role.id+'?populate=*')
              .then(response => response.json())
              .then((resp3) => {
                setTimeout(() => {
                  commit('setRole', resp3.data.attributes.org_permission.data.attributes)
                }, 500)
              })
            setTimeout(() => {
              commit('setUserDetail', resp2)
            }, 500)
          })
        setTimeout(() => {
          commit('setUser', resp.data.user)
          commit('setToken', resp.data.jwt)
          commit('doLogin', true)
          localStorage.setItem("is_login", true)
          router.push({
            path: '/',
          })
        }, 500)
      }).catch((err)=>{
        commit('setErr', err? true:false)
      }).finally(() => {
      })
    },
    rolePerrmission({commit},idRole){
      fetch('http://27.254.144.88:1337/api/org-roles/'+idRole+'?populate=*')
      .then(response => response.json())
      .then((resp3) => {
        console.log(resp3);
        setTimeout(() => {
          commit('setRole', resp3.data.attributes.org_permission.data.attributes)
        }, 500)
      })
    }
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
