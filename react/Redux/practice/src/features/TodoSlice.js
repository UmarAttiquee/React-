import { createSlice  , nanoid} from "@reduxjs/toolkit";

const initialState = {
  todos: [{id : 1 , text: "Hello World" , completed : true}]
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addData: (state , action)=>{
       const todo = {
        id: nanoid(),
        text: action.payload,
      }
      
      state.todos.push(todo)
    },

    removeData:(state , action)=>{
      state.todos = state.todos.filter((data) =>(data.id != action.payload))
    },

    updateData :(state , action)=>{
      state.todos = state.todos.map((todo)=>(todo.id===action.payload.id ? {...todo , ...action.payload} : todo ))
    },

    toggleData : (state , action)=>{
      state.todos = state.todos.map((todo)=>(todo.id===action.payload.id ? {...todo , ...action.payload} : todo ))
    },
  }
});
export const  {addData , removeData , updateData , toggleData} =  TodoSlice.actions
export default  TodoSlice.reducer