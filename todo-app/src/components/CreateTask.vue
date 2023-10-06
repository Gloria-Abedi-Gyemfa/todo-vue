<script setup lang="ts">
import calendar from "../assets/calendar.svg";
import downArrow from "../assets/down-arrow.svg";
import edit from "../assets/edit.svg";

</script>

<template>
    <form class="flex flex-col self-center">
        <div class="flex justify-evenly">
            <div class="self-center mt-6">
                <label class="text-[#006D77]">Task Title</label>
                <div class="flex border-2 border-[#006D77] w-fit py-1 px-2 bg-white rounded mt-3">
                    <input class="active:outline-none focus:outline-none" placeholder="Task Title"/>
                    <img :src="edit"/>
                </div>
            </div>
            <div class="self-center mt-6">
                <label class="text-[#006D77]">End date</label>
                <div class="flex border-2 border-[#006D77] w-fit py-1 px-2 bg-white rounded mt-3">
                    <input class="active:outline-none focus:outline-none cursor-pointer w-[250px] date" placeholder="End date" type="date"/>
                </div>
            </div>
        </div>

        <div class="flex justify-evenly">
            <div class="self-center mt-6">
                <label class="text-[#006D77]">Priority level</label>
                <div class="flex border-2 border-[#006D77] w-fit py-1 px-2 bg-white rounded mt-3">
                    <select class="focus:outline-none cursor-pointer w-[250px]">
                        <option>
                            Important
                        </option>
                        <option>
                            Normal
                        </option>
                        <option>
                            Not important
                        </option>
                    </select>
                </div>
            </div>
            <div class="self-center mt-6">
                <label class="text-[#006D77]">Category</label>
                <div class="flex border-2 border-[#006D77] w-fit py-1 px-2  gap-20 bg-white rounded mt-3">
                    <select class="focus:outline-none cursor-pointer w-[250px]">
                        <option>
                            Daily task
                        </option>
                        <option>
                            Weekly task
                        </option>
                        <option>
                            Monthly task
                        </option>
                    </select>
                </div>
            
            </div>
        </div>

        <div class="self-center mt-6 mb-6">
            <label class="text-[#006D77]">Priority level</label>
            <div>
                <textarea placeholder="Write important notes" class="flex border-2 border-[#006D77] h-[100px] pt-1 pl-3 pr-16 bg-white rounded mt-3 w-[710px]"/>
            </div>
        </div>
        <button class="self-center bg-[#006D77] rounded text-white w-fit py-1 px-6">Add to List</button>
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
.date{
  background: url("../assets/calendar.svg") no-repeat right center;
  padding-right: 20px; 
}

</style>