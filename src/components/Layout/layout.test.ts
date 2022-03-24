import {mount} from "@vue/test-utils";
import Layout from './Layout.vue'

test('layout default slot', () => {
    const header = '<div>Header</div>'
    const main = '<div>Main Content</div>'
    const footer = '<div>Footer</div>'

    const wrapper = mount(Layout, {
        slots: {
            header,
            main,
            footer
        }
    })

    expect(wrapper.html()).toContain(header)
    expect(wrapper.html()).toContain(main)
    expect(wrapper.html()).toContain(footer)
})
