import store from "@/store/index";

test('increment mutation', () => {


    store.commit('increment')

    expect(store.state.count).toBe(1)
})
