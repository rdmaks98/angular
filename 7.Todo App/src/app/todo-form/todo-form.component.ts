import { Component, OnInit } from '@angular/core';
import {Todo} from './../model/Todo';
import {TodoService} from './../service/todo.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoTitle= "";
  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
  }

  handleAdd(){
    const newTodo: Todo = {
      id: "1234",
      title: this.todoTitle,
      isComplete:true,
      date : new Date(),
    };

    this.todoService.addTodos(newTodo);
    this.todoTitle = "";
  }
}
