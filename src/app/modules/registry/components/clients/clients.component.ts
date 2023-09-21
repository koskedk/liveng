import {Component, OnInit} from '@angular/core';
import {ClientsService} from "../../services/clients.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit{
  constructor(readonly clientsService:ClientsService) {
  }
  ngOnInit(): void {
    this.clientsService.init();
  }

}
