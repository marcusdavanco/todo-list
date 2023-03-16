import { useState } from "react";
import { EmptyList } from "./EmptyList";
import { Header } from "./Header";
import { Task, TaskType } from "./Task";

export function TaskList() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: "1", text: "Walk the dog", isChecked: false },
    { id: "2", text: "Buy groceries", isChecked: true },
    { id: "3", text: "Do laundry", isChecked: false },
    { id: "4", text: "Clean the house", isChecked: true },
    { id: "5", text: "Pay bills", isChecked: false },
  ]);

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
