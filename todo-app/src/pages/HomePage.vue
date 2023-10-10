<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import { toggleButton } from "../mystore/myStore";
import Header from "../components/Header.vue";
import { taskHeader } from "../mystore/taskHeader";
import CreateTask from "../components/CreateTask.vue";
import AllTasks from "../components/AllTasks.vue";

const taskHeaderStore = taskHeader()

const toggle = toggleButton()

</script>

<template>
    <div class="bg-slate-50 h-screen overflow-x-hidden">
        <div class="">
            <Navbar/>
            <Sidebar v-if="toggle.toggleDialogue"/>
        </div>
        <div :class="{'ml-56' : toggle.toggleDialogue}" class=" mt-[100px]">
            <Header text="Add Task" v-if="taskHeaderStore.addTask"/>
            <Header text="All Task" v-else-if="taskHeaderStore.allTask"/>
            <Header text="Completed Task" v-else-if="taskHeaderStore.completedTask"/>                           
            <Header text="Dashboard" v-else/>

            <CreateTask v-if="taskHeaderStore.addTask"/>
            <AllTasks v-else-if="taskHeaderStore.allTask"/>
        </div>
    </div>
</template>
