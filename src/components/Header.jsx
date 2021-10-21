import React from 'react';

import logo from '../assets/logo.png'; //Import the Logo
import Form from './Form'; //Import the Form component

//Receive all relevant props from the parent component
//Send all relevant props to the child component
const Header = ({ task, setTask, handleSubmit, inputRef }) => {
  return (
    <header>
      <img src={logo} alt='logo' />
      <Form
        task={task}
        setTask={setTask}
        handleSubmit={handleSubmit}
        inputRef={inputRef}
      />
    </header>
  );
};

export default Header;
