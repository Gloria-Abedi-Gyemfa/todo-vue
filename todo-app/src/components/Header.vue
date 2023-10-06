<script setup lang="ts">
import { defineProps} from 'vue';

const {text} = defineProps(["text"]);
</script>

<template>
    <div class="py-6 px-60 bg-[#83C5BE] w-fit rounded text-white text-2xl m-auto cursor-pointer mb-6">{{ text }}</div>
</template>