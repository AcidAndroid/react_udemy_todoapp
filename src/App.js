import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Appcss from './App.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import { Icon, Avatar } from '@material-ui/core';

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
        <Card className="main-container">

        <TextField
          id="textarea"
          className="todo_input"
          label="Write a to do"
          placeholder="What are you going to do?"          
          // className={classes.textField}
          margin="normal"

          value={this.state.input} 
          onChange={this.saveTextTodo}
          onKeyPress={ e=>{
            if (e.key==='Enter') {
              this.addTodo(this.state.input)
            }
          }}
        />          


            <List>

            {this.state.todos.map((todo) =>             
                // return <li key={todo.id}>{todo.name} <button onClick={()=>{this.deleteTodo(todo.id)}} >Delete Todo</button> </li>
                <ListItem key={todo.id}>
                   
                     
                        <Icon>drag_handle</Icon>
                     
                    
                    <ListItemText
                      primary={todo.name}                      
                    />
                    <ListItemSecondaryAction>
                      <IconButton 
                      aria-label="Delete"
                      onClick={()=>{this.deleteTodo(todo.id)}}
                      >
                        <Icon>delete</Icon>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
              )}                
            </List>

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
