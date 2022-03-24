import store from "@/store";
import {mount} from "@vue/test-utils";
import StoreCounter from "@/components/StoreCounter/StoreCounter.vue";

test('vuex', async () => {
    const wrapper = mount(StoreCounter, {
        global: {
            plugins: [store]
        }
    })
    const button = await wrapper.find('button')

    await button.trigger('click')
    await button.trigger('click')

    expect(wrapper.html()).toContain('Count: 2')
})
