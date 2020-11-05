import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userdata:any;
  constructor() { }

  ngOnInit() {
    this.userdata = JSON.parse(localStorage.getItem('userdata'))
  }

}
