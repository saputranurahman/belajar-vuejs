<template>
    <div class="todo-list">
        <h1>Daftar Tugas</h1>
        <div class="add-todo">
            <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Tambahkan tugas....">
            <button @click="addTodo">Tambah</button>
        </div>
        <ul>
            <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }">
            <span @click="toggleTodoStatus(todo.id)">{{ todo.text }}</span>
            <button @click="deleteTodo(todo.id)">Hapus</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            newTodo: '',
        };
    },
    computed: {
        ...mapState(['todos']),
    },
    methods: {
        ...mapMutations(['addTodo', 'deleteTodo', 'toggleTodoStatus']),
    },
};
</script>

<style scoped>
    .todo-list {
        text-align: center;
    }
    ul{
        list-style-type: none;
        padding: 0;
    }
    li{
        margin: 10px 0;
        cursor: pointer;
    }
    .completed{
        text-decoration: line-through;
    }
    .add-todo input{
        padding: 5px;
        margin-right: 10px;
    }
</style>