import React from 'react'; //Import useRef & useEffect from React
import uuid from 'uuid/v4'; //Use the uuid library to create unique id numbers

//Receive all relevant props from the parent component
const Form = ({ task, setTask, handleSubmit, inputRef }) => {
  return (
    <form>
      <label>Please enter your task</label>
      <input
        maxLength='40'
        ref={inputRef}
        type='text'
        value={task.task}
        onChange={
          (e) => setTask({ id: uuid(), task: e.target.value, done: false }) //Record our entered task
        }
      />
      <button onClick={handleSubmit}>Add</button>{' '}
      {/* Calls the submit function from the parent(App) */}
    </form>
  );
};

export default Form;
