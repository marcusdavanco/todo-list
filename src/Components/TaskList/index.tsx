import { useAtom } from "jotai";
import { EmptyList } from "./EmptyList";
import { Header } from "./Header";
import { Task } from "./Task";
import { taskList } from "../../atoms/task";

export function TaskList() {
  const [tasks, setTasks] = useAtom(taskList);

  function deleteTask(taskToDelete: string) {
    setTasks(tasks.filter((task) => task.id !== taskToDelete));
  }

  function updateTaskStatus(taskToUpdate: string) {
    const taskIndex = tasks.findIndex((task) => task.id === taskToUpdate);

    const updatedTask = {
      ...tasks[taskIndex],
      isChecked: !tasks[taskIndex].isChecked,
    };

    const updatedTasks = [...tasks];
    updatedTasks[taskIndex] = updatedTask;

    setTasks(updatedTasks);
  }

  return (
    <div className="gap-6">
      <Header tasks={tasks} />

      {tasks.length === 0 ? (
        <EmptyList />
      ) : (
        <div className="flex flex-col gap-3">
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                onDeleteTask={deleteTask}
                onUpdateTask={updateTaskStatus}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
