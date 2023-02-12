import React from 'react';
import '../assets/css/Addtask.css';

function Limit() {
  return (
    <>
      <label htmlFor="limit">期限:
        <input type="date" id="limit" />
      </label>
    </>
  );
}

export default Limit;
