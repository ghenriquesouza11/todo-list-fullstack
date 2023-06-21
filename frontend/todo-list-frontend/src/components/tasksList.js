import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TasksList() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios('http://localhost:3333/tasks')
      .then((response) => setTasks(response.data));
  }, []);
  return (
    <>
      {
        tasks.map((task) => (
          <h1 key={ task.id }>{task.title}</h1>
        ))
      }
    </>
  );
}

export default TasksList;
