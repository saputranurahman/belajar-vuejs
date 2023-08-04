import { createStore } from "vuex";

const todos = createStore({
    state: {
        todos: [],
    },
    mutations: {
        addTodo(state, todo) {
            state.todos.push(todo);
        },
        deleteTodo(state, todoId) {
            state.todos = state.todos.filter((todo) => todo.id !== todoId);
        },
        toggleTodoStatus(state, todoId) {
            const todo = state.todos.find((todo) => todoId == todoId);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
    actions: {},
    getters: {
        getAllTodos: (state) => {
            return state.todos;
        },
        getCompletedTodos: (state) => {
            return state.todos.filter((todo) =>  todo.completed);
        },
        getActiveTodos: (state) => {
            return state.todos.filter((todo) => !todo.completed) 
        }
    },
});

export default todos;