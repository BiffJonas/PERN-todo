import './App.css';
import { Fragment } from 'react';
//components
import InputToDo from './components/input-ToDo'
import ListTodo from './components/List-ToDo'

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputToDo />
        <ListTodo />
      </div>
    </Fragment>
  );
}

export default App;
