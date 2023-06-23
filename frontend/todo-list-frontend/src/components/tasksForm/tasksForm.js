import React, { useContext, useState } from 'react';
import axios from 'axios';
import { fetchContext } from '../../contexts/fetchContext';
import './tasksForm.css';

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
    setTask('');
  };
  return (
    <form
      className="tasks-form"
      onSubmit={ (event) => postTask(event) }
    >
      <label>
        <input
          className="task-input"
          type="text"
          value={ task }
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
