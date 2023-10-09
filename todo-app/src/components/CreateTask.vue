<script setup lang="ts">
import edit from "../assets/edit.svg";
import { createTaskStore } from "../mystore/createTaskStore";

const {formData} = createTaskStore()
export interface formsInfo {
    taskTitle: string
      taskDate: string
      taskPriority: string
      taskCategory: string
      taskDescription: string
}

const handleForm = ():formsInfo =>{
    console.log(formData);
    const existingData:formsInfo[] = JSON.parse(localStorage.getItem("createTask") ||"[]");
    existingData.push(formData);
   localStorage.setItem("createTask", JSON.stringify(existingData));
   return formData;
}


</script>

<template>
    <form class="flex flex-col self-center" @submit.prevent="handleForm" >
        <div class="flex justify-evenly">
            <div class="self-center mt-6">
                <label class="text-[#006D77]">Task Title</label>
                <div class="flex border-2 border-[#006D77] w-fit py-1 px-2 bg-white rounded mt-3">
                    <input class="active:outline-none focus:outline-none pr-[25px]" placeholder="Task Title" type="text" v-model="formData.taskTitle"/>
                    <img :src="edit"/>
                </div>
            </div>
            <div class="self-center mt-6">
                <label class="text-[#006D77]">End date</label>
                <div class="flex border-2 border-[#006D77] w-fit py-1 px-2 bg-white rounded mt-3">
                    <input class="active:outline-none focus:outline-none cursor-pointer w-[250px] pr[20px] text-[#006D77]" placeholder="End date" type="date" v-model="formData.taskDate"/>
                </div>
            </div>
        </div>

        <div class="flex justify-evenly">
            <div class="self-center mt-6">
                <label class="text-[#006D77]">Priority level</label>
                <div class="flex border-2 border-[#006D77] w-fit py-1 px-2 bg-white rounded mt-3">
                    <select class="focus:outline-none cursor-pointer w-[250px]" v-model="formData.taskPriority">
                        <option value="important">
                            Important
                        </option>
                        <option value="slightly important">
                            Slightly Important
                        </option>
                        <option value="fairly important">
                            Fairly important
                        </option>
                    </select>
                </div>
            </div>
            <div class="self-center mt-6">
                <label class="text-[#006D77]">Category</label>
                <div class="flex border-2 border-[#006D77] w-fit py-1 px-2  gap-20 bg-white rounded mt-3">
                    <select class="focus:outline-none cursor-pointer w-[250px]" v-model="formData.taskCategory">
                        <option value="Daily task" >
                            Daily task
                        </option>
                        <option value="Weekly task">
                            Weekly task
                        </option>
                        <option value="Monthly task">
                            Monthly task
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <div class="self-center mt-6 mb-6">
            <label class="text-[#006D77]">Task Decription</label>
            <div>
                <textarea placeholder="Write important notes" class="flex border-2 border-[#006D77] h-[100px] pt-1 pl-3 pr-16 bg-white rounded mt-3 w-[710px]" v-model="formData.taskDescription"/>
            </div>
        </div>
        <button class="self-center bg-[#006D77] rounded text-white w-fit py-1 px-6"  type="submit">Add to List</button>
    </form>
</template>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("../assets/down-arrow.svg") no-repeat right center;
  padding-right: 20px; 

}
</style>