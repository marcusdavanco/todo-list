import { TaskType } from "./Task";

interface TaskHeaderProps {
  tasks: TaskType[];
}

export function Header({ tasks }: TaskHeaderProps) {
  const finishedTasks = tasks.reduce((acc, task) => {
    if (task.isChecked) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <header className="flex w-[736px] justify-between mb-6 box h-[19px]">
      <div className="flex gap-2">
        <span className="text-blue-500 font-bold text-sm">Tarefas criadas</span>
        <div className="flex font-gray-200 bg-gray-400 px-2 rounded-full text-[14px] items-center">
          {tasks.length}
        </div>
      </div>
      <div className="flex gap-2">
        <span className="text-blue-500 font-bold text-sm">Concluídas</span>
        <div className="flex font-gray-200 bg-gray-400 px-2 rounded-full text-[14px] items-center">
          {finishedTasks}
        </div>
      </div>
    </header>
  );
}
