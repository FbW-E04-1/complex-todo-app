import React from 'react';

//Import icons from the react-icons library
import { BiArrowBack } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

//Receive relevant props from parent
const Done = ({ task, tasksDone, handleTick, handleDelete }) => {
  return (
    <div className='task-container'>
      <div className='tick'>
        <BiArrowBack
          style={{
            fontSize: '22px',
          }}
          onClick={() => handleTick(task.id, tasksDone)} //Handle the tick functionality
        />
      </div>
      <div className='task'>
        <p
          style={{
            textDecorationLine: 'line-through',
            textDecorationColor: 'red',
            textDecorationThickness: '2px',
            fontStyle: 'italic',
          }}>
          {task.task}
        </p>
      </div>
      <div className='bin'>
        <MdDelete
          style={{ fontSize: '22px' }}
          onClick={() => handleDelete(task.id, tasksDone)} //Handle the delete functionality
        />
      </div>
    </div>
  );
};

export default Done;
