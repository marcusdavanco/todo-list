import { EmptyList } from "./EmptyList";
import { Header } from "./Header";

export function TaskList() {
  return (
    <div className="gap-6">
      <Header />
      <EmptyList />
    </div>
  );
}
