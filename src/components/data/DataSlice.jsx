import { createSlice } from "@reduxjs/toolkit";

let nextTodoId = 0;

const DataSlice = createSlice({
  name: "data",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { id, text } = action.payload;
        state.todos.push({ id, text });
      },
      prepare({ text }) {
        return { payload: { text, id: nextTodoId++ } };
      },
    },
    deleteTodo(state, action) {
      let index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(index, 1);
    },
  },
});

export const { addTodo, deleteTodo } = DataSlice.actions;
export const selectTodos = (state) => state.data.todos;

export default DataSlice.reducer;
