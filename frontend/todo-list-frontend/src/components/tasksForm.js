import React, { useState } from 'react';
import axios from 'axios';

function TasksForm() {
  const [task, setTask] = useState('');
  const postTask = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3333/tasks', {
      title: task,
      status: 'pendente',
    });
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
