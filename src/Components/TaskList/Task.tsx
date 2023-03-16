import { Trash } from "phosphor-react";

export interface TaskType {
  id: string;
  text: string;
  isChecked: boolean;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (id: string) => void;
  onUpdateTask: (id: string) => void;
}

export function Task({
  task: { id, text, isChecked },
  onDeleteTask,
  onUpdateTask,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleChange() {
    onUpdateTask(id);
  }

  return (
    <article className="bg-gray-500 p-4 rounded-lg border-gray-400 border-[1px] w-[736px] flex justify-between">
      <div className="flex gap-3">
        <div className="flex items-center mb-2">
          <input
            checked={isChecked}
            type="checkbox"
            onChange={handleChange}
            className={`appearance-none relative p-1 h-[26px] before:inline-block before:w-[18px] before:p-1 before:h-[18px] before:bg-transparent before:absolute: before:left-0 before:rounded-full before:border-2 before:border-blue-500 before:transition before:duration-200 before:opacity-100 before:checked:opacity-0 after:inline-block after:w-[18px] after:h-[18px] after:left-[4px] after:top-[4px] after:checked:bg-purple-700 after:absolute after:rounded-full after:border-2 after:border-none after:transition after:duration-200 after:opacity-100 after:checked:opacity-100 after:checked:bg-checkmark after:checked:bg-no-repeat after:checked:bg-center after:checked:bg-auto`}
          />
        </div>

        <span
          className={`w-[632px] ${
            isChecked ? "text-gray-300 line-through" : "text-gray-100"
          }  `}
        >
          {text}
        </span>
      </div>
      <button className="h-fit hover:text-red-500" onClick={handleDeleteTask}>
        <Trash size={14} className="m-[5px] " />
      </button>
    </article>
  );
}
