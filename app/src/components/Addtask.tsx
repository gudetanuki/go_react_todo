import React from 'react';
import '../css/Addtask.css';
import Inputform from './Inputform';
import Limit from './Limit';
import Button from './Button';




function Addtask() {
  return (
    <div className="addTask">
      <Inputform />
      <Limit />
      <Button />
    </div>
  );
}

export default Addtask;
