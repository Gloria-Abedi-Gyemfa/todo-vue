import { defineStore } from "pinia";

const showModal = defineStore({
    id: "showModal",
    state:()=>({
        showTaskDetails: false,
    }),
    actions:{
        setTaskDetails(value: boolean){
            this.showTaskDetails = value;
    
    }
},

})