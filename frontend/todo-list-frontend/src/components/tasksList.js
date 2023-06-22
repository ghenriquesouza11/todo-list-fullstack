import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { fetchContext } from '../contexts/fetchContext';

function TasksList() {
  const { getTasks, tasks } = useContext(fetchContext);

  useEffect(() => {
    getTasks();
  }, [getTasks, tasks]);

  const deleteTask = (id) => {
    axios.delete(`http://localhost:3333/tasks/${id}`);
  };

  return (
    <ul>
      {
        tasks.map((task) => {
          const { title, id } = task;
          return (
            <li key={ id }>
              <h1>{title}</h1>
              <button
                onClick={ () => deleteTask(id) }
              >
                Apagar
              </button>
            </li>
          );
        })
      }
    </ul>
  );
}

export default TasksList;
