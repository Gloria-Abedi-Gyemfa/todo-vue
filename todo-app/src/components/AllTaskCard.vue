<script setup lang="ts">
import info from "../assets/information.svg";
import edit from "../assets/edit-grey.svg";
import deleteIcon from "../assets/delete.svg";

const retrieveTasks = JSON.parse(localStorage.getItem("createTask") || "[]");
</script>

<template>
    <div class="grid  grid-cols-2 gap-8" >
        <div v-for="task in retrieveTasks" :key="task.id">
            <div class="bg-[#006D77] w-[300px] rounded py-2 px-3 text-[#fff]">
                <div class="flex justify-between font-bold">
                    <p class="tracking-wider">{{task.taskTitle}}</p>
                    <img :src="info" class="cursor-pointer"/>
                </div>

                <div class="flex justify-between my-2">
                    <div class="flex">
                        <p>Start date: </p>
                        <p>{{task.taskDate}}</p>
                        </div>
                    <img :src="edit" class="cursor-pointer"/>
                </div>
        
                <div class="flex justify-between">
                    <div class="flex gap-1">
                        <input type="checkbox"/>
                        <p>Mark as completed</p>
                    </div>
                    <img :src="deleteIcon" class="cursor-pointer" @click="deleteTask"/>
                </div>
            </div>
        </div>
    </div>
</template>