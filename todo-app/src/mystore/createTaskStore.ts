import { defineStore } from "pinia";

export const createTaskStore = defineStore({
    id: "form",
    state: () => ({
        formData:{
        taskTitle: "",
        taskDate: "",
        taskPriority: "",
        taskCategory: "",
            taskDescription: ""
        },
        
    }),
    actions: {
        setFormData(data: any) {
            this.formData = data;
        }
    }
})