import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { fetchContext } from '../../contexts/fetchContext';

function TasksList() {
  const { getTasks, tasks } = useContext(fetchContext);

  useEffect(() => {
    getTasks();
  }, [getTasks, tasks]);

  const deleteTask = (id) => {
    axios.delete(`http://localhost:3333/tasks/${id}`);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Tarefa</th>
          <th>Criada em</th>
          <th>Status</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {
          tasks.map((task) => {
            const { id, title, status } = task;
            return (
              <tr key={ id }>
                <td>{title}</td>
                <td>{ task.created_at }</td>
                <td>{ status }</td>
                <td>
                  <button
                    onClick={ () => deleteTask(id) }
                  >
                    Excluir

                  </button>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

export default TasksList;
