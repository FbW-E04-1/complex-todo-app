import React from 'react';
import Task from './Task'; //Import component

//Receive relevant props from the parent
//Map through the tasks array and send relevant props down to the task component
const TaskContainer = ({ tasks, handleTick, handleDelete }) => {
  return (
    <aside>
      <h3>Active Tasks</h3>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            tasks={tasks}
            handleTick={handleTick}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <h2>No tasks pending</h2>
      )}
    </aside>
  );
};

export default TaskContainer;
