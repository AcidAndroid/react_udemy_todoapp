import React, { Component } from 'react';


class App extends Component {

  state={
    todos:[]
    ,id:0
    ,input:''
  }
  addTodo = (todoName)=>{    
    console.log(todoName)
    this.setState(prevState =>{
      const newTodos = prevState.todos.slice()
      .concat({
        name:todoName
        ,id:prevState.id
              })
      return{
        todos:newTodos
        ,id:prevState.id+1
        ,input:''
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


  saveTextTodo =(e)=>{
    
    const text = e.target.value
    // console.log(text)

    this.setState({
      input:text
    })

  }

  render() {
    return (
      <div className="App">
        
        <input type="text" value={this.state.input} onChange={this.saveTextTodo} ></input>
        <button onClick={()=>{this.addTodo(this.state.input)}} >Add Todo</button>
        <ul>
          {this.state.todos.map((todo) => {            
            return <li key={todo.id}>{todo.name} <button onClick={()=>{this.deleteTodo(todo.id)}} >Delete Todo</button> </li>
          })}
        </ul>

      </div>
    );
  }
}

export default App;
