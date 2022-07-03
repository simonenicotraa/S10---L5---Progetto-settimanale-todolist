import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Interface } from '../interface/interface';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  todolist: Interface[] = [ ];

  constructor() {}

  gettodolist(): Interface[] {
    return this.todolist;
  }
}
