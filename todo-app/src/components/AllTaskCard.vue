<script setup lang="ts">
import info from "../assets/information.svg";
import edit from "../assets/edit-grey.svg";
import deleteIcon from "../assets/delete.svg"
</script>

<template>
    <div class="grid grid-cols-2">
        <div class="bg-[#006D77] w-[300px] rounded py-2 px-3 text-[#fff]">
            <div class="flex justify-between font-bold">
                <p class="tracking-wider">Learn Javascript</p>
                <img :src="info"/>
            </div>

            <div class="flex justify-between my-2">
                <div class="flex"><p>Start date: </p><p>10/7/2023</p></div>
                <img :src="edit"/>
            </div>
        
            <div class="flex justify-between">
                <div class="flex gap-1">
                    <input type="checkbox"/>
                    <p>Mark as completed</p>
                </div>
                <img :src="deleteIcon"/>
            </div>
        </div>
    </div>
</template>