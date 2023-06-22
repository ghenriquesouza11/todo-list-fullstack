import React, { useContext, useState } from 'react';
import axios from 'axios';
import { fetchContext } from '../contexts/fetchContext';

function TasksForm() {
  const { getTasks } = useContext(fetchContext);
  const [task, setTask] = useState('');
  const postTask = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3333/tasks', {
      title: task,
      status: 'pendente',
    });
    getTasks();
  };
  return (
    <form onSubmit={ (event) => postTask(event) }>
      <label>
        <input
          type="text"
          onChange={ ({ target }) => setTask(target.value) }
        />
      </label>
      <button
        type="submit"
      >
        Adicionar Tarefa

      </button>
    </form>
  );
}

export default TasksForm;
