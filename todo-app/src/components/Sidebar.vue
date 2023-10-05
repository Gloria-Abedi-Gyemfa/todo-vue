<script setup lang="ts">
import dashboard from '../assets/dashboard.svg'
import task from '../assets/task.svg'
import complete from '../assets/tick.svg'
import add from '../assets/add.svg'

import {taskHeader} from "../mystore/taskHeader"

const taskHeaderStore = taskHeader()




</script>

<template>
    <section class="bg-white w-fit h-screen shadow py-4 px-6 fixed transition ease-in-out">
        <div class="flex gap-6 cursor-pointer" @click="taskHeaderStore.setDashboardHeader(true)">
            <img :src="dashboard" alt="dashboard icon"/>
            <p class="text-lg text-[#006D77]">Dashboard</p>
        </div>
        <div class="flex gap-6 my-6 cursor-pointer" @click="taskHeaderStore.setAllTask(true)">
            <img :src="task" alt="task icon"/>
            <p class="text-lg text-[#006D77]">All Tasks</p>
        </div>
        <div class="flex gap-6 cursor-pointer" @click="taskHeaderStore.setCompletedTaskHeader(true)">
            <img :src="complete" alt="correct icon" />
            <p class="text-lg text-[#006D77]">Completed Tasks</p>
        </div>
        <div class="flex gap-6 my-6 cursor-pointer" @click="taskHeaderStore.setAddTask(true)">
            <img :src="add" alt="add icon" />
            <p class="text-lg text-[#006D77]">Add A Task</p>
        </div>
    </section>
</template>
