import React, { useState } from 'react';
import '../assets/css/Addtask.css';
import axios, { AxiosResponse } from "axios";


function Button() {

  const todoUrl = "http://localhost:3100/todo";
  type Todo = {
    id: number
    title: string
    status: string
    limit: number
  }

  const [todos, setTodos] = React.useState<Todo[]>([]);

  const fetchHtml = async () => {
    const response: AxiosResponse<Todo[]> = await axios.get(todoUrl);
    setTodos(response.data);
  };

  return (
    <>
      <button value="新規追加" id="addBtn" onClick={fetchHtml}>新規追加</button>
      {todos.length != 0 && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{`${todo.id} ${todo.title} ${todo.status}`}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Button;
