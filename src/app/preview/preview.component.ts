import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor(
    private router:Router
    ) {  
    
  }

  ngOnInit() {
    this.router.navigate(['/user'])
  }
}
