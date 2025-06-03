import React, { useState } from 'react'

function TaskItem({ item, tasks, setTasks }) {
    const [edit, setEdit] = useState(false);
  const [editedTask, setEditedTask] = useState(item.title);
  

    const editTask = (id) => {
        const updateTasks = tasks.map((item) => item.id === id ? { ...item, title: editedTask } : item)
        setTasks(updateTasks);
        setEdit(false)
  }
  
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  }

  const updateStatus = (e, id) => {
    const updatedTasks = tasks.map((task) => {
   return task.id === id ? { ...task, completed: e.target.checked } : task;
    });
    setTasks(updatedTasks);
  }
  return (
    <tr>
      <td>{item.id}</td>
      <td>
        {edit ? (
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
        ) : (
          item.title
        )}
      </td>
      <td>
        <input type="checkbox" checked={item.completed} onChange={(e) => updateStatus(e,item.id)} />
      </td>
      <td>
        {edit ? (
          <button type="button" onClick={() => editTask(item.id)}>
            save
          </button>
        ) : (
          <button type="button" onClick={() => setEdit(true)}>
            Edit
          </button>
        )}
      </td>
      <td>
        <button type="button" onClick={()=> deleteTask(item.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default TaskItem