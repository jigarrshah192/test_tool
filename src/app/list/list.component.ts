import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../shared/services/crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public lists: any;

  constructor(private router: Router, private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getAllRecord().subscribe(res => {
      this.lists = res;
    })
  }

  goToManage() {
    this.router.navigate(['manage']);
  }

}
