import { useSetAtom } from "jotai";
import { PlusCircle } from "phosphor-react";
import { FormEvent, InvalidEvent, ChangeEvent, useState } from "react";
import { taskList } from "../atoms/task";

export function Form() {
  const setTasks = useSetAtom(taskList);
  const [newTaskText, setNewTaskText] = useState<string>("");

  const isNewTaskEmpty = !!newTaskText;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (newTaskText) {
      return;
    }

    setTasks((taskList) => [
      ...taskList,
      {
        id: String(taskList.length + 1),
        text: newTaskText,
        isChecked: false,
      },
    ]);

    setNewTaskText("");
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  return (
    <form
      className="flex gap-2 w-[736px] justify-center mt-[-27px]"
      onSubmit={handleSubmit}
    >
      <input
        className="flex rounded-lg p-4 text-gray-100 placeholder:text-gray-300 bg-gray-500 border-grat-700 w-full "
        placeholder="Adicione uma nova tarefa"
        required
        onInvalid={handleNewTaskInvalid}
        value={newTaskText}
        onChange={handleNewTaskChange}
      ></input>
      <button
        className="flex items-center gap-2 bg-blue-700 border-blue-700 p-4 text-gray-200 font-bold rounded-lg hover:bg-blue-500 transition duration-200"
        disabled={isNewTaskEmpty}
      >
        Criar
        <PlusCircle weight="bold" />
      </button>
    </form>
  );
}
