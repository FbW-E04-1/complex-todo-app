import React from 'react';

//Import icons from the react-icons library
import { TiTick } from 'react-icons/ti';
import { MdDelete } from 'react-icons/md';

//Receive relevant props from parent
const Task = ({ task, tasks, handleTick, handleDelete }) => {
  return (
    <div className='task-container'>
      <div className='tick'>
        <TiTick
          style={{
            fontSize: '22px',
          }}
          onClick={() => handleTick(task.id, tasks)} //Handle the tick functionality
        />
      </div>
      <div className='task'>
        <p>{task.task}</p>
      </div>

      <div className='bin'>
        <MdDelete
          style={{ fontSize: '22px' }}
          onClick={() => handleDelete(task.id, tasks)} //Handle the delete functionality
        />
      </div>
    </div>
  );
};

export default Task;
