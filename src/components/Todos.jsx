import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      <div className="grid gap-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-white p-2 rounded shadow flex items-center"
          >
            <span className="mr-2">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
