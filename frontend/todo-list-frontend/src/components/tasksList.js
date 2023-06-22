import React, { useContext, useEffect } from 'react';
import { fetchContext } from '../contexts/fetchContext';

function TasksList() {
  const { getTasks, tasks } = useContext(fetchContext);
  useEffect(() => {
    getTasks();
  }, [getTasks, tasks]);
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
