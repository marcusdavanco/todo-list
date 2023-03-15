import { PlusCircle } from "phosphor-react";
export function Form() {
  return (
    <form className="flex gap-2 w-[736px] justify-center mt-[-27px]">
      <input
        className="flex rounded-lg p-4 text-gray-300 bg-gray-500 border-grat-700 w-full "
        placeholder="Adicione uma nova tarefa"
      ></input>
      <button className="flex items-center gap-2 bg-blue-700 border-blue-700 p-4 text-gray-200 font-bold rounded-lg hover:bg-blue-500 transition duration-200">
        Criar
        <PlusCircle weight="bold" />
      </button>
    </form>
  );
}
