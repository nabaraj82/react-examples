import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

function TaskList() {
  const [tasks, setTasks] = useState([]);
    const [sorted, setSorted] = useState("asc");
    const [filter, setFilter] = useState('all');
    const [filteredTasks, setFilteredTasks] = useState(tasks);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTasks(data.slice(0, 20));
      };
      fetchData();
  }, []);

useEffect(() => {
    const newFilteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed;
        if (filter === 'incomplete') return !task.completed;
        return true;
    }).sort((a, b) => {
      if (a.title < b.title) return sorted === 'asc' ? -1 : 1;
      if (a.title > b.title) return sorted === 'asc' ? 1 : -1;
      return 0;
    })
    setFilteredTasks(newFilteredTasks);
}, [filter, tasks, sorted])

  return (
    <div>
      <TaskForm tasks={filteredTasks} setTasks={setFilteredTasks} />
      <div style={{ display: "flex" }}>
        <div>
          <label>Filter:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>

        <div>
          <label>Sort By:</label>
          <select value={sorted} onChange={(e) => setSorted(e.target.value)}>
            <option value="asc">Asc</option>
            <option value="des">Des</option>
          </select>
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <th>s.n</th>
            <th>title</th>
            <th>completed</th>
          </tr>
          {filteredTasks.map((item) => (
            <TaskItem
              key={item.id}
              item={item}
              tasks={filteredTasks}
              setTasks={setFilteredTasks}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
