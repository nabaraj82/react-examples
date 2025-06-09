import React from "react";
import TodoItem from "./TodoItem";

type Task = {
  id: number;
  name: string;
  status: "pending" | "doing" | "completed";
};

const todos: Task[] = [
  {
    id: 1,
    name: "My First Task",
    status: "completed",
  },
];

const TodoList = () => {
  const [task, setTask] = React.useState("");
  const [tasks, setTasks] = React.useState((): Task[] => todos);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodo: Task = {
      id: tasks[tasks.length - 1].id + 1,
      name: task,
      status: "pending",
    };

    setTasks((prevState) => {
      const newTasks = [...prevState, newTodo];
      return newTasks;
    });
  };

  const handleChangeStatus = (id: number, status: Task["status"]) => {
    setTasks((pervState) => {
      const todo = pervState.find((item) => item.id === id);
      if (todo) {
        const updatedTodo = { ...todo, status };
        const updatedTasks = pervState.map((item) =>
          item.id === id ? updatedTodo : item
        );
        return updatedTasks;
      } else {
        return pervState;
      }
    });
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <section className="w-50% mx-auto flex flex-col">
        <div className="flex gap-4">
          <input
            type="text"
            onChange={handleInputChange}
            value={task}
            className="border border-gray-600 rounded-sm p-2 focus:outline-amber-200"
          />{" "}
          <button
            type="button"
            className="border border-gray-600 rounded-sm focus:border-amber-200 focus:border-2 p-2"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
        <ul className="border mt-4 p-2 rounded-sm border-amber-200">
          {tasks.map((item) => (
            <TodoItem key={item.id} todo={item} onStatusChange={handleChangeStatus} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TodoList;
