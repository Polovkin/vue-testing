import {mount} from "@vue/test-utils";
import Form from './Form.vue';

test('submits the form', async () => {
    const wrapper = mount(Form)

    const email = 'name@mail.com'
    const description = 'Lorem ipsum dolor sit amet'
    const city = 'moscow'

    await wrapper.find('input[type=email]').setValue(email)
    await wrapper.find('textarea').setValue(description)
    await wrapper.find('select').setValue(city)
    await wrapper.find('input[type=checkbox]').setValue()
    await wrapper.find('input[type=radio][value=monthly]').setValue()

    await wrapper.find('form').trigger('submit.prevent')


    // @ts-ignore
    expect(wrapper.emitted('submit')[0][0]).toStrictEqual({
        email,
        description,
        city,
        subscribe: true,
        interval: 'monthly'
    })
})
