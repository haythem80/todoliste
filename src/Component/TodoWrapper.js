import React , {useState} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './Todo';
uuidv4();

export const TodoWrapper = () => {
    const [Todos , setTodos] = useState([]);

    const addTodo = todo =>{
        setTodos([...Todos , {id: uuidv4(), task: todo , completed:false ,isEditing:false }])
        
    }
  return (
    <div> 
    <h1 className="title"> Daily Plannig</h1>
    <TodoForm addTodo={addTodo}/> 
    {Todos.map((todo , index)=> (
      <Todo task={todo} key={index}/>
    ))}
    
    </div>
  )
}
