import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Interface } from 'src/app/interface/interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  txt: string = '';
  newList!: Interface[];
  count: number = 0;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.newList = this.listService.gettodolist();
  }

  getTxt(): void {
    this.count++;
    let obj: Interface = {
      id: this.count,
      title: this.txt,
      completed: false,
    };
    this.newList.push(obj);
    console.log(this.newList);
    this.txt = '';
  }
}
