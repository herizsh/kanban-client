import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        boards: [],
        token: localStorage.getItem('token') || ''
    },
    mutations: {
        updateBoards(state, boards) {
            state.boards = boards
        },
        newBoard(state, board) {
            state.boards.push(board)
        },
        auth(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        logout(state) {
            state.token = ''
            localStorage.clear('token')
        },
        remove(state, id) {
            state.boards = this.state.boards.filter(i => i.id !== id)
        }
    },
    actions: {
        async getBoards({ commit }) {
            try {
                let response = await axios.get('http://localhost:3000/boards')
                commit('updateBoards', response.data.data)
            } catch (e) {
                console.log(e)
            }
        },
        async newBoard({ commit }, title) {
            try {
                const response = await axios.post(
                    'http://localhost:3000/boards',
                    {
                        title
                    }
                )
                commit('newBoard', response.data.data)
            } catch (e) {
                console.log(e)
            }
        },
        async getBoard({ commit }, id) {
            try {
                return axios.get(`http://localhost:3000/boards/${id}`)
            } catch (e) {
                console.log(e)
            }
        },
        async removeBoard({ commit }, id) {
            // delete disini a
            try {
                await axios.delete(`http://localhost:3000/boards/${id}`)
                commit('remove', id)
            } catch (e) {
                console.log(e)
            }
        },
        async register({ commit }, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:3000/users/register', data)
                    .then(response => {
                        axios.defaults.headers.common['Authorization'] =
                            response.data.token
                        commit('auth', response.data.token)
                        resolve('/')
                    })
                    .catch(e => {
                        reject(e)
                    })
            })
        },
        login({ commit }, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:3000/users/login', data)
                    .then(response => {
                        axios.defaults.headers.common['Authorization'] =
                            response.data.token
                        commit('auth', response.data.token)
                        resolve('/')
                    })
                    .catch(e => {
                        reject(e)
                    })
            })
        },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                resolve()
            })
        }
    },
    getters: {
        isAuthenticated: function(state) {
            return !!state.token || false
        }
    }
})
