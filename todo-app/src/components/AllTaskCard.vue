<script setup lang="ts">
import info from "../assets/information.svg";
import edit from "../assets/edit-grey.svg";
import deleteIcon from "../assets/delete.svg";
import { showModal } from "../mystore/showModal";
import { ref } from "vue";

const showInfo = showModal();
const retrieveTasks = ref(JSON.parse(localStorage.getItem("createTask") || "[]"))
console.log(retrieveTasks);

const handleEdit = () =>{
    retrieveTasks.value.find((task, index)=> )
    showInfo.setTaskDetails(true)
}

const deleteCard = (index:number) =>{
    retrieveTasks.value = retrieveTasks.value.filter((task, i)=>i !== index)
    retrieveTasks.value.splice(index, 0)
}
</script>

<template>
  <div class="grid grid-cols-2 gap-8">
    <div v-for="(task,index) in retrieveTasks" :key="task.taskTitle">
      <div class="bg-[#006D77] w-[300px] rounded py-2 px-3 text-[#fff]">
        <div class="flex justify-between font-bold">
          <p class="tracking-wider">{{ task.taskTitle }}</p>
          <img :src="info" class="cursor-pointer"  />
        </div>

        <div  class="capitalize" > {{ index+1}}</div>
        <div class="flex justify-between my-2">
          <div class="flex">
            <p>Start date: </p>
            <p>{{ task.taskDate }}</p>
          </div>
          <img :src="edit" class="cursor-pointer" />
        </div>

        <div class="flex justify-between">
          <div class="flex gap-1">
            <input type="checkbox" />
            <p>Mark as completed</p>
          </div>
          <img :src="deleteIcon" class="cursor-pointer"  @click="deleteCard(index)"/>
        </div>
      </div>
    </div>
  </div>
</template>
