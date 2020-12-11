import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        something: [],
    }, 
    mutations: {
        addSomethingToSomething(state, paramsToAddToState) {
            state.something.push(paramsToAddToState);
        }
    },
    getters: {
        somethingToGet(state) {
            return state.something.filter();
        }
    },
    actions: {
        getSomething({ commit }) {
            axios.get()
            .then(result => this.commit('something', result.data))
            .catch(console.error);
        }
    }
});