import {mount} from "@vue/test-utils";
import CustomInput from './CustomInput.vue'

test('fills in the form', async () => {
    const wrapper = mount(CustomInput)
    const input = wrapper.find('input')
    await input.setValue('text')

    expect(input.element.value).toBe('text')
})
