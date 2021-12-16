import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {Todo} from './../model/Todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo : Todo[];
  constructor() { 
    this.todo = [
      {
        id:'111',
        title:"learn todo",
        isComplete: true,
        date:new Date(),
      },
      {
        id:'222',
        title:"learn Angular",
        isComplete: true,
        date:new Date(),
      },
      {
        id:'333',
        title:"learn Html",
        isComplete: false,
        date:new Date(),
      },
      {
        id:'444',
        title:"learn Mongodb",
        isComplete: true,
        date:new Date(),
      }
    ];
  }

  getTodos(){
    return of(this.todo)
  }

  addTodos(todo : Todo){
    this.todo.push(todo)
  }

  changeStatus(todo : Todo){
    this.todo.map(
      singleTodos => {
        if(singleTodos.id == todo.id)
        {
          todo.isComplete = !todo.isComplete;
        }
      }
    );
  }

  deleteTodo(todo : Todo)
  {
    const indexofTodo = this.todo.findIndex((currentObj) => currentObj.id === todo.id);
    this.todo.splice(indexofTodo,1);
  }



}
