import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    isLogged:false,
    user:null,
    token:'',
    email:'',
    password:''
  },
  mutations: {
    // set or update any properties of state
    setState(state, payload){
      state[payload[0]] = payload[1]
    }
  },
  actions: {}
})
