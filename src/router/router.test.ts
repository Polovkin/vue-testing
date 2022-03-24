import {flushPromises, mount} from '@vue/test-utils'
import App from '../App.vue'
import {routes} from "@/router/indes";
import store from "@/store";
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

test('routing', async () => {
    await router.push('/')

    // After this line, router is ready
    await router.isReady()

    const wrapper = mount(App, {
        global: {
            plugins: [router, store]
        }
    })
    expect(wrapper.html()).toContain('Welcome to the blogging app')

    await wrapper.find('a').trigger('click')
    await flushPromises()
    expect(wrapper.html()).toContain('Testing Vue Router')
})
