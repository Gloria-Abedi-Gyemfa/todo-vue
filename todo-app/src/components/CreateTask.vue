<script setup>
import calendar from '../assets/calendar.svg'
import downArrow from "../assets/down-arrow.svg"
import edit from "../assets/edit.svg"
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
                    <input class="active:outline-none focus:outline-none" placeholder="End date"/>
                    <img :src="calendar"/>
                </div>
            </div>
        </div>

        <div class="flex justify-evenly">
            <div class="self-center mt-6">
                <label class="text-[#006D77]">Priority level</label>
                <div class="flex border-2 border-[#006D77] w-fit py-1 px-2 bg-white rounded mt-3">
                    <input class="active:outline-none focus:outline-none" placeholder="Important"/>
                    <img :src="downArrow"/>
                </div>
            </div>
            <div class="self-center mt-6">
                <label class="text-[#006D77]">Category</label>
                <div class="flex border-2 border-[#006D77] w-fit py-1 px-2  gap-20 bg-white rounded mt-3">
                    <select >
                        <option placeholder="">
                            Daily task
                        </option>
                        <option placeholder="">
                            Weekly task
                        </option>
                        <option placeholder="">
                            Monthly task
                        </option>
                    </select>
                    <img :src="downArrow"/>
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