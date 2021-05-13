import { Component, OnInit } from '@angular/core';
import { TodoService} from 'src/app/service/todo.service';
import { Todo } from './../model/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todo : Todo[]= [];
  constructor(private todoSerivce : TodoService) { }

  ngOnInit(): void {
    this.todoSerivce.getTodos().subscribe(todo => {
      this.todo = todo; 
    });
  }

  changeTodoStatus(todo : Todo)  {
    this.todoSerivce.changeStatus(todo);
  }

  deleteTodo(todo:Todo)
  {
    this.todoSerivce.deleteTodo(todo);
  }

}
