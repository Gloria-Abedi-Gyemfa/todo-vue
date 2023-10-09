<script setup lang="ts">
import {ref, watchEffect} from 'vue';

import hamburger from "../assets/menuIcon.svg";
import notification from "../assets/bell.svg";
import moon from "../assets/moon.svg";
import person from "../assets/person.svg";
import {toggleButton} from '../mystore/myStore'

const toggle = toggleButton()

const toddleSidebar = ()=>{
    toggle.setToggleButton(!toggle.toggleDialogue);
}

</script>

<template>
    <div class="flex justify-between p-6 bg-white shadow w-screen fixed relative t0p-0">
        <img :src="hamburger" alt="hamburger icon" @click="toddleSidebar" class="cursor-pointer"/>
        <div class="flex gap-6">
            <img :src="notification" alt="notification icon"/>
            <img :src="moon" alt="moon icon for dark mode"/>
            <img :src="person" alt="person avatar"/>
        </div>
    </div>
</template>
../store/toggleStore