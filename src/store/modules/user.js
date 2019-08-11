import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const SET_TOKEN = 'SET_TOKEN'
const SET_NAME = 'SET_NAME'
const SET_AVATAR = 'SET_AVATAR'
const SET_ROLES = 'SET_ROLES'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  roles: []
}

const mutations = {
  [SET_TOKEN](state, token) {
    state.token = token
  },
  [SET_NAME](state, name) {
    state.name = name
  },
  [SET_AVATAR](state, avatar) {
    state.avatar = avatar
  },
  [SET_ROLES](state, roles) {
    state.roles = roles
  }
}
const actions = {
  // user login
  login({ commit }, userInfo) {
    const { email, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ email: email.trim(), password: password })
        .then(response => {
          const { token } = response
          commit(SET_TOKEN, token)
          setToken(token)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then(response => {
          const { user } = response
          const { username, avatar } = user
          // const rolesArr = roles.map(role => role.name)
          // user.roles = rolesArr
          user.roles = user.roles.map(role => role.name)
          commit(SET_ROLES, user.roles)
          commit(SET_NAME, username)
          commit(SET_AVATAR, avatar)
          resolve(user)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // user logout
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout()
        .then(() => {
          commit(SET_TOKEN, '')
          commit(SET_ROLES, [])
          removeToken()
          resetRouter()
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit(SET_TOKEN, '')
      commit(SET_ROLES, [])
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
