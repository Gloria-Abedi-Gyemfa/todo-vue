import { defineStore } from "pinia";

export const createTaskStore = defineStore({
  id: "form",
  state: () => ({
    formData: {
      taskTitle: "",
      taskDate: "",
      taskPriority: "Important",
      taskCategory: "Daily task",
      taskDescription: "",
    },
  }),
  actions: {
    setFormData(data: any) {
      this.formData = data;
    },
  },
});
