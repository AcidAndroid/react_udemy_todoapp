import React, { Component } from 'react';
import Card from '@material-ui/core/Card';

import Appcss from './App.css'

import IconButton from '@material-ui/core/IconButton';
import { Icon, Avatar } from '@material-ui/core';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

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
      localStorage.setItem('todo', JSON.stringify(newTodos))
      localStorage.setItem('id', JSON.stringify(prevState.id+1))

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
    localStorage.setItem('todo', JSON.stringify(this.state.todos))
  }


  onDragEnd= (result) =>{
    console.log('onDragEnd')
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.todos,
      result.source.index,
      result.destination.index
    );
    console.log(items)
    this.setState({
      todos:items,
    });

    localStorage.setItem('todo', JSON.stringify(this.state.todos))
  }


  componentDidMount(){
    const todos= JSON.parse(localStorage.getItem('todo')) || []
    const id= JSON.parse (localStorage.getItem('id'))||0
    this.setState({
      todos
      ,id
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
            handleDragEnd={this.onDragEnd}         
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
