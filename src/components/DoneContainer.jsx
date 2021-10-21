import React from 'react';
import Done from './Done'; //Import component

//Receive the relevant props from parent
//Map through the tasksDone array and send relevant props to the child component
const DoneContainer = ({ tasksDone, handleTick, handleDelete }) => {
  return (
    <aside>
      <h3>Completed Tasks</h3>
      {tasksDone.length > 0 ? (
        tasksDone.map((task) => (
          <Done
            key={task.id}
            task={task}
            tasksDone={tasksDone}
            handleTick={handleTick}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <h2>No done tasks</h2>
      )}
    </aside>
  );
};

export default DoneContainer;
