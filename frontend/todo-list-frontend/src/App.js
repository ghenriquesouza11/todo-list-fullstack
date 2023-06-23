import TasksForm from './components/tasksForm/tasksForm';
import TasksTable from './components/tasksTable/tasksTable';
import './App.css';

function App() {
  return (
    <section className="tasks-section">
      <h1>Lista de tarefas</h1>
      <TasksForm />
      <TasksTable />
    </section>
  );
}

export default App;
