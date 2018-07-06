import React, { Component } from 'react';


class App extends Component {

  state={
    todos:[]
    ,id:0
    ,input:''
  }
  addTodo = (todoName)=>{

    this.setState(prevState =>{
      const newTodos = prevState.todos.slice().concat({
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


  saveTextTodo =(e)=>{
    const text = e.target.value
    console.log(text)

    this.setState({
      input:text
    })

  }

  render() {
    return (
      <div className="App">
        
        <input type="text" value={this.state.input} onChange={this.saveTextTodo} ></input>
        <button onClick={this.addTodo} >Add Todo</button>
        <ul>
          {this.state.todos.map((item) => {            
            return (<li key={item.id} ></li>)
          })}
        </ul>

      </div>
    );
  }
}

export default App;
