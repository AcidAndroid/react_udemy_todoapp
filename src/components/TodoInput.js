import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

export default class TodoInput extends Component {

    state={
        input:''
    }
  render() {
    return (
        <TextField
        id="textarea"
        className="todo_input"
        label="Write a to do"
        placeholder="What are you going to do?"          
        // className={classes.textField}
        margin="normal"

        value={this.state.input} 
        onChange={(e)=>{
                console.log(e.target.value)
                this.setState({input: e.target.value})
            }}
        onKeyPress={ e=>{
          if (e.key==='Enter') {
            this.props.handleKeyPress(this.state.input)
            this.setState({
                input:""
            })
          }
        }}
      />          
    )
  }
}
