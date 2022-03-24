import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'
import PostList from './PostList.vue'

const mockPostList = [
    { id: 1, title: 'title1' },
    { id: 2, title: 'title2' }
]

// Following lines tell Jest to mock any call to `axios.get`
// and to return `mockPostList` instead
jest.spyOn(axios, 'get').mockResolvedValue(mockPostList)

test('displays loading state on button click', async () => {
    const wrapper = mount(PostList)

    // Notice that we run the following assertions before clicking on the button
    // Here, the component should be in a "not loading" state.
    expect(wrapper.find('[role="alert"]').exists()).toBe(false)
    expect(wrapper.get('button').attributes()).not.toHaveProperty('disabled')

    // Now let's trigger it as usual.
    await wrapper.get('button').trigger('click')

    // We assert for "Loading state" before flushing all promises.
    expect(wrapper.find('[role="alert"]').exists()).toBe(true)
    expect(wrapper.get('button').attributes()).toHaveProperty('disabled')

    // As we did before, wait until the DOM updates.
    await flushPromises()

    // After that, we're back at a "not loading" state.
    expect(wrapper.find('[role="alert"]').exists()).toBe(false)
    expect(wrapper.get('button').attributes()).not.toHaveProperty('disabled')
})
