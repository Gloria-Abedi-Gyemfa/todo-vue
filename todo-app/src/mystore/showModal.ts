import { defineStore } from "pinia";

export const showModal = defineStore({
  id: "showModal",
  state: () => ({
    showTaskDetails: false,
  }),
  actions: {
    setTaskDetails(value: boolean) {
      this.showTaskDetails = value;
    },
  },
});
