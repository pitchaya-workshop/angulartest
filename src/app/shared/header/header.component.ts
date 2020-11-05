import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { UserserviceService } from '../../service/userservice.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('togicon', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 1
      })),
      transition('open => closed', [
        animate('0.3s', style({ transform: 'rotate(180deg)' })),

      ]),
      transition('closed => open', [
        animate('0.3s', style({ transform: 'rotate(180deg)' }))
      ]),
    ]),
  ],
})

export class HeaderComponent implements OnInit {
  head1: string;
  head2: string;
  isOpen = true;
  innerwidth: any;
  constructor(private userservice: UserserviceService) { }

  ngOnInit() {
    this.innerwidth = window.innerWidth;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerwidth = window.innerWidth;
    let sidebar = document.getElementsByClassName('sidebar');
    let layout = document.getElementsByClassName('layout')
    if (this.innerwidth <= 768) {
      this.isOpen = false
      sidebar[0].className = sidebar[0].className.replace(' active', '');
      layout[0].className = layout[0].className.replace(' activesidebar','')
      layout[0].className += ' activesidebar'
    } else {
      this.isOpen = true
      sidebar[0].className = sidebar[0].className.replace(' active','')
      sidebar[0].className += ' active';
      layout[0].className = layout[0].className.replace(' activesidebar', '');
    }

  }
  toggle() {
    this.isOpen = !this.isOpen;
    let sidebar = document.getElementsByClassName('sidebar');
    let layout = document.getElementsByClassName('layout')
    if (this.isOpen) {
      sidebar[0].className += ' active';
      layout[0].className = layout[0].className.replace(' activesidebar', '');
    } else {
      sidebar[0].className = sidebar[0].className.replace(' active', '');
      layout[0].className += ' activesidebar'
    }
  }
  logout() {
    this.userservice.logout()
  }
}
