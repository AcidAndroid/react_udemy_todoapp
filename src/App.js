import React, { Component } from 'react';
import Card from '@material-ui/core/Card';

import Appcss from './App.css'

import IconButton from '@material-ui/core/IconButton';
import { Icon, Avatar } from '@material-ui/core';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

class App extends Component {

  state={
    todos:[]
    ,id:0
    
  }
  addTodo = (todoName)=>{    
    
    this.setState(prevState =>{
      const newTodos = prevState.todos.slice()
      .concat({
        name:todoName
        ,id:prevState.id
              })
      return{
        todos:newTodos
        ,id:prevState.id+1
        
      }
    })

  }


  deleteTodo =(todoId)=>{    
    this.setState(prevState =>{
      const newTodos=prevState.todos.slice().filter( todo =>{
        return todo.id !==todoId
      })
      return{
        todos:newTodos        
      }
    })

  }



  render() {
    return (
      <div className="App">
        <Card className="main-container">

        
            <TodoInput handleKeyPress={this.addTodo} />

            <TodoList 
            data={this.state.todos} 
            handleClick={this.deleteTodo}          
            />

          {/* <ul>
            {this.state.todos.map((todo) => {            
              return <li key={todo.id}>{todo.name} <button onClick={()=>{this.deleteTodo(todo.id)}} >Delete Todo</button> </li>
            })}
          </ul> */}
       </Card>
      </div>
    );
  }
}

export default App;
