import clipboard from "../../assets/Clipboard.svg";

export function EmptyList() {
  return (
    <main className="flex flex-col items-center py-16 px-6 text-gray-300 text-center border-gray-300 border-t-[1px] rounded-lg">
      <img src={clipboard} alt="Clipboard icon" />
      <p className="font-bold mt-4">Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </main>
  );
}
