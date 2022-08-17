//imports
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, clearTodos } from "./features/todoSlice";

//functional component
function Todo() {
  //Call useSelector to obtain state value from store and reassign
  const todoItems = useSelector((state) => state.todo.items);
  //include useDispatch hook
  const dispatch = useDispatch();

  const [todoInput, setTodoInput] = useState("");

  const renderTodoItems = todoItems.map((todoItem, index) => {
    return (
      <li key={index} onClick={() => dispatch(removeTodo(index))}>
        {todoItem}
      </li>
    );
  });

  const newTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoInput));
  };

  return (
    <div className="todoList">
      <form onSubmit={(e) => newTodo(e)}>
        <input
          type="text"
          onChange={(e) => setTodoInput(e.target.value)}
        ></input>
        <button type="submit">Submit New Todo</button>
      </form>
      <ul>{renderTodoItems}</ul>
      <button onClick={() => dispatch(clearTodos())}>Clear All Todos</button>
    </div>
  );
}

//export
export default Todo;
