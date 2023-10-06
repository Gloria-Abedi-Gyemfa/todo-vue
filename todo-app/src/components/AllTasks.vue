<script setup lang="ts">
    import SearchTask from "./SearchTask.vue";
    import AllTaskCard from "./AllTaskCard.vue";
    import downArrow from "../assets/downChevron.svg";
    import upArrow from "../assets/upChevron.svg";
</script>
<template>
    <div class="flex flex-col justify-center">
        <div class="flex justify-evenly">
            <div class="flex gap-4">
                <div class="bg-[#006D77] text-[#FFF] rounded pt-1 px-1 flex gap-1">
                    <p>By category</p>
                    <div class="flex flex-col justify-center">
                        <img :src="upArrow"/>
                        <img :src="downArrow"/>
                    </div>
                </div>
                <div class="bg-[#006D77] text-[#FFF] rounded pt-1 px-1 flex gap-1">
                    <p>By priority</p>
                    <div class="flex flex-col justify-center">
                        <img :src="upArrow"/>
                        <img :src="downArrow"/>
                    </div>
                </div>
            </div>
            <SearchTask/>
        </div>
        
        <div class="my-6 flex  self-center">
            <AllTaskCard/>
        </div>
        <button class="border-2 border-[#006D77] rounded text-[#006D77] w-fit py-1 px-6 self-center">Load More</button>
    </div>
</template>