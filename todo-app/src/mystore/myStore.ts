import { defineStore } from "pinia";

export const toggleButton = defineStore({
    id:"toggleButton",
    state:()=>({
        toggleDialogue:false
    }),
    actions:{
        setToggleButton(data:boolean){
           this.toggleDialogue = data;
        }
    }
});