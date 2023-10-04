<template>
    <div class="flex justify-between p-6 bg-white shadow">
        <img :src="hamburger" alt="hamburger icon"/>
        <div class="flex gap-6">
            <img :src="notification" alt="notification icon"/>
            <img :src="moon" alt="moon icon for dark mode"/>
            <img :src="person" alt="person avatar"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import hamburger from '../assets/menuIcon.svg' 
import notification from '../assets/bell.svg'
import moon from '../assets/moon.svg'
import person from '../assets/person.svg'

</script>