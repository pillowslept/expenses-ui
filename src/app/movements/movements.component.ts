import { Component, OnInit } from '@angular/core';
import {MovementsService} from "./shared/movements.service";
import {Movement} from "./shared/movement";

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {

  private movements: Movement[] = [];

  constructor(private movementsService: MovementsService) { }

  ngOnInit() {
    this.movementsService.getMovements()
      .subscribe(data => this.movements = data);
  }

}
