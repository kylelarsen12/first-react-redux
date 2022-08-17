//import
import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
  items: [],
};

//create slice
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //use spread to get all aray items and add payload to it
    addTodo: (state, action) => {
      return { items: [...state.items, action.payload] };
    },
    //use spread to get all array items, determine which index of array to remove, use splice to remove that specific element
    removeTodo: (state, action) => {
      console.log(action);
      let todoList = [...state.items];
      let itemIndex = action.payload;
      todoList.splice(itemIndex, 1);
      return { items: todoList };
    },
    //return an empty array
    clearTodos: () => {
      return { items: [] };
    },
  },
});

//exports
export const { addTodo, removeTodo, clearTodos } = todoSlice.actions;

export default todoSlice.reducer;
