import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state: any) {
            state.count += 1
        }
    }
})

export default store
