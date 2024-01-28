import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div
      className="flex flex-col
     justify-center items-center h-screen"
    >
      <div
        className="flex flex-col
     justify-center"
      >
        <Todos></Todos>
        <AddTodo></AddTodo>
      </div>
    </div>
  );
}

export default App;
