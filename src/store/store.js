import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 2    
    },
    getters: {
        doubleCounter: state => state.counter * 2,
        stringCounter: state => `${state.counter} clicks`,
        value: state => state.value
    },
    mutations: {
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        },
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    actions: {
        increment: ({ commit }, payload) => {
            commit('increment', payload);
        },
        decrement: ({ commit }, payload) => {
            commit('decrement', payload);
        },
        asyncIncrement: ({ commit }, { by, dur }) => {
            setTimeout(() => {
                commit('increment', by);
            }, dur)
        },
        asyncDecrement: ({ commit }, { by, dur }) => {
            setTimeout(() => {
                commit('decrement', by);
            }, dur)
        },
        updateValue: ({ commit }, payload) => {
            commit('updateValue', payload);
        }
    }
});