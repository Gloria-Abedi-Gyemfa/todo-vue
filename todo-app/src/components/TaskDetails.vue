<script setup lang="ts">
const retrieveTask = localStorage.getItem("createTask")
</script>

<template>
    <div class="bg-[#006D77]">
        <div class="text-white" v-for="task in retrieveTask" :key="task.id">
            <h2>{{ task.taskTitle }}</h2>
            <p>{{ task.taskDate }}</p>
            <p>{{ task.taskDescription }}</p>
            <p>{{ task.taskPriority }}</p>
        </div>
    </div>
</template>