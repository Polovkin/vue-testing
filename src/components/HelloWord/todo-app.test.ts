import {mount} from '@vue/test-utils'
import TodoApp from '@/components/HelloWord/TodoApp.vue'
import {TEST_NAMES} from "@/components/HelloWord/types";

function dataTest(name: string): string {
    return `[data-test="${name}"]`
}


const {TODO, NEW_TODO, FORM} = TEST_NAMES

const todoName = dataTest(TODO)
const newTodoName = dataTest(NEW_TODO)
const formName = dataTest(FORM)

test('renders a todo', () => {
    const wrapper = mount(TodoApp)

    const todo = wrapper.get(todoName)

    expect(todo.text()).toBe('Learn Vue.js 3')
})

test('creates a todo', async () => {
    const wrapper = mount(TodoApp)

    expect(wrapper.findAll(todoName)).toHaveLength(1)

    await wrapper.get(newTodoName).setValue('New todo')
    await wrapper.get(formName).trigger('submit')

    expect(wrapper.findAll(todoName)).toHaveLength(2)
})

test('completes a todo', async () => {
    const wrapper = mount(TodoApp)

    await wrapper.get('[data-test="todo-checkbox"]').setValue(true)

    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
})
