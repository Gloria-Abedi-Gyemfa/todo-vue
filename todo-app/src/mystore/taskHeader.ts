import { defineStore } from "pinia";

export const taskHeader = defineStore({
  id: "taskHeader",
  state: () => ({
    dashboard: false,
    completedTask: false,
    addTask: false,
    allTask: false,
  }),
  actions: {
    setDashboardHeader(data: boolean) {
      this.dashboard = data;
      if (data) {
        (this.completedTask = false),
          (this.addTask = false),
          (this.allTask = false);
      }
    },
    setCompletedTaskHeader(data: boolean) {
      this.completedTask = data;
      if (data) {
        (this.dashboard = false),
          (this.addTask = false),
          (this.allTask = false);
      }
    },
    setAddTask(data: boolean) {
      this.addTask = data;
      if (data) {
        (this.completedTask = false),
          (this.dashboard = false),
          (this.allTask = false);
      }
    },
    setAllTask(data: boolean) {
      this.allTask = data;
      if (data) {
        (this.completedTask = false),
          (this.addTask = false),
          (this.dashboard = false);
      }
    },
  },
});
