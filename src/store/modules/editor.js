const editor = {
    namespaced: true,
    state: {
        isLoading: false,
    },
    mutations: {
        MUT_SET_LOADING(state, payload) {
            state.isLoading = payload.isLoading
        },
    },
    actions: {
        setLoading({commit}, payload) {
            commit("MUT_SET_LOADING", payload);
        },
    },
    getters: {
        isLoading: (state) => {
            return state.isLoading
        },
    },
}

export default editor