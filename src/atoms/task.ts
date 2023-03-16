import { atom } from "jotai";

export const taskList = atom([
  { id: "1", text: "Walk the dog", isChecked: false },
  { id: "2", text: "Buy groceries", isChecked: true },
  { id: "3", text: "Do laundry", isChecked: false },
  { id: "4", text: "Clean the house", isChecked: true },
  { id: "5", text: "Pay bills", isChecked: false },
]);
