<script setup>
import searchLens from "../assets/search.svg"
</script>

<template>
    <div class="border-2 border-[#006D77] rounded flex w-fit p-1 bg-[#ffffff]">
        <input placeholder="Search by name" class="focus: outline-none"/>
        <img :src="searchLens"/>
    </div>
</template>