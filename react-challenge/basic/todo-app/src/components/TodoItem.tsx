import React from "react";
type Task = {
  id: number;
  name: string;
  status: "pending" | "doing" | "completed";
};
type TodoItemProps = {
  todo: Task;
  onStatusChange: (id: number, status: Task["status"]) => void;
};

const status = ["pending", "doing", "completed"];
const TodoItem = ({ todo,onStatusChange }: TodoItemProps) => {
    const [showOptions, setShowOptions] = React.useState(false);
    
    const handleStatusChange = ( status: Task["status"]) => {
        onStatusChange(todo.id, status);
        setShowOptions(false)
    }
  return (
    <li className="flex gap-4">
      <span>{todo.name}</span>
      <div className="relative">
        <span
          onClick={() => setShowOptions((prevState) => !prevState)}
          className="cursor-pointer"
        > 
          {todo.status}
        </span>
        {showOptions && (
          <div className="absolute flex flex-col gap-2 rounded-sm bg-white shadow top-6 -left-1">
            {status.map((item, index) => (
              <span
                className="cursor-pointer hover:bg-sky-500 hover:text-white px-2"
                    key={index}
                    onClick={() => handleStatusChange(item as Task["status"])}
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
