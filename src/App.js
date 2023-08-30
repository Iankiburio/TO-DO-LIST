import logo from './logo.svg';
import './App.css';
import Task from "./components/task"
import TaskList from './components/taskList';

function Header(){
  return (
    <div id="header">
      <div id="top-header">Logo</div>
      <div id="bottom-header">
        <button>Calender</button>
        <button>Calender</button>
        <button>Calender</button>
        <button>Calender</button>
        <button>Calender</button>
      </div>
      
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      
      <div id='task-container'>
        <div className='task-inner-container'>
          <Task />
          <TaskList />
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
