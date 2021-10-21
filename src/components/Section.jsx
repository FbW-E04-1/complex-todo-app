import React from 'react';

//Import components
import TaskContainer from './TaskContainer';
import DoneContainer from './DoneContainer';

//Receive relevant props from the parent
//Send relevant props to the children
const Section = ({ tasks, tasksDone, handleTick, handleDelete }) => {
  return (
    <section>
      <TaskContainer
        tasks={tasks}
        handleTick={handleTick}
        handleDelete={handleDelete}
      />
      <DoneContainer
        tasksDone={tasksDone}
        handleTick={handleTick}
        handleDelete={handleDelete}
      />
    </section>
  );
};

export default Section;
