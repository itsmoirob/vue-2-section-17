const state = {
    counter: 0,
};

const getters = {
    doubleCounter: state => state.counter * 2,
    stringCounter: state => `${state.counter} clicks`
};

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    },
};

const actions = {
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
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
