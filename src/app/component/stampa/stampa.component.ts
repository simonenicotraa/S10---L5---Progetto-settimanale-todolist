import { Component, OnInit } from '@angular/core';
import { Interface } from 'src/app/interface/interface';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-stampa',
  templateUrl: './stampa.component.html',
  styleUrls: ['./stampa.component.scss']
})
export class StampaComponent implements OnInit {
  newList!: Interface[];
  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.newList = this.listService.gettodolist();
  }

    removeTask(task: Interface): void {
     /*  setTimeout(() => { */
    let index = this.newList.indexOf(task);
    this.newList.splice(index, 1)/* },2000); */
}
}
