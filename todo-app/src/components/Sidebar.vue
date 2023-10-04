<template>
    <section>
        <div class="flex gap-4">
            <img :src="dashboard" alt="dashboard icon"/>
            <p>Dashboard</p>
        </div>
        <div class="flex gap-4">
            <img :src="task" alt="task icon"/>
            <p>All Tasks</p>
        </div>
        <div class="flex gap-4">
            <img :src="complete" alt="correct icon"/>
            <p>Completed Tasks</p>
        </div>
        <div class="flex gap-4">
            <img :src="add" alt="add icon"/>
            <p>Add A Task</p>
        </div>
    </section>
</template>
<script lang="ts" setup>
import dashboard from '../assets/dashboard.svg'
import task from '../assets/task.svg'
import complete from '../assets/tick.svg'
import add from '../assets/add.svg'

</script>