import {mount} from "@vue/test-utils";
import Counter from './Counter.vue'
import {nextTick} from "vue";

test('emits an event with count when clicked', async () => {
    const wrapper = mount(Counter)

    await wrapper.find('button').trigger('click')
    await wrapper.find('button').trigger('click')

    const incrementEvent = wrapper.emitted('increment')

    expect(incrementEvent).toHaveLength(2)

    if (incrementEvent) {
        expect(incrementEvent[0]).toEqual([
            {
                count: 1,
                isEven: false
            }
        ])

        expect(incrementEvent[1]).toEqual([
            {
                count: 2,
                isEven: true
            }
        ])

    }
    expect(wrapper.html()).toContain('Count: 2')

})
