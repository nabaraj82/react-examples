import React, { useState } from 'react'

function TaskForm({tasks, setTasks}) {
    const [newTask, setNewTask] = useState('');

    const addNewTask = () => {
        const nextId = tasks.length+1;
        setTasks([
          ...tasks,
          {
            userId: 1,
              id: nextId,
              title: newTask,
            completed: false
          }
        ]);
    }
  return (
      <div>
          <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <button onClick={addNewTask} >Add task</button>
    </div>
  )
}

export default TaskForm