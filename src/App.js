import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './todos.json';

class App extends Component 
{
  constructor()
  {
    super();
    this.state = 
    {
      todos
    }
  }
  render() 
  {
    const cards = this.state.todos.map((todo,i)=>{
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">{todo.priority}</span>
            </div>
            <div className="card-body">
              <p>{todo.descripcion}</p>
              <p>{todo.responsable}</p>
            </div>
          </div>
        </div>
      )
    });
    return(
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="text-white" href="#">Tasks<span className="badge badge-pill badge-light ml-2">{this.state.todos.length}</span></a>
        </nav> 
        <div className="container">
          <div class="row mt-4">
            { cards }
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div> 
    );
  }
}
export default App;
