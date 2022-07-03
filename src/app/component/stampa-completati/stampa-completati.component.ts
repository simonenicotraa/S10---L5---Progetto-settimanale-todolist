import { Component, OnInit } from '@angular/core';
import { Interface } from 'src/app/interface/interface';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-stampa-completati',
  templateUrl: './stampa-completati.component.html',
  styleUrls: ['./stampa-completati.component.scss']
})
export class StampaCompletatiComponent implements OnInit {
  newList!: Interface[];
  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.newList = this.listService.gettodolist();
  }

}
