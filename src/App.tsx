import { Form } from "./Components/Form";
import { Header } from "./Components/Header";
import { TaskList } from "./Components/TaskList";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center gap-16 w-full">
        <Form />
        <TaskList />
      </div>
    </>
  );
}

export default App;
