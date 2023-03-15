export function Header() {
  return (
    <header className="flex w-[736px] justify-between mb-6 box h-[19px]">
      <div className="flex gap-2">
        <span className="text-blue-500 font-bold text-sm">Tarefas criadas</span>
        <div className="flex font-gray-200 bg-gray-400 px-2 rounded-full text-[14px] items-center">
          0
        </div>
      </div>
      <div className="flex gap-2">
        <span className="text-blue-500 font-bold text-sm">Concluídas</span>
        <div className="flex font-gray-200 bg-gray-400 px-2 rounded-full text-[14px] items-center">
          0
        </div>
      </div>
    </header>
  );
}
