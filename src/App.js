import './App.css';
import { Fragment } from 'react';
//components
import InputToDo from './components/input-ToDo'
function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputToDo />
      </div>
    </Fragment>
  );
}

export default App;
