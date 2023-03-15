import { EmptyList } from "./EmptyList";
import { Header } from "./Header";
import { Task } from "./Task";

export function TaskList() {
  const tasks = [1, 2, 3, 4, 5];

  return (
    <div className="gap-6">
      <Header />
      {/* <EmptyList /> */}
      <div className="flex flex-col gap-3">
        {tasks.map((task) => {
          return <Task />;
        })}
      </div>
    </div>
  );
}
