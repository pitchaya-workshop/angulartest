import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../service/userservice.service'
@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {
  tokendata: any;
  constructor(private userservice: UserserviceService) { }

  ngOnInit() {
    this.tokendata = JSON.parse(localStorage.getItem('tokendata'))    
    setInterval(function() {
      let now = new Date().getTime()
      let countdowntime = JSON.parse(localStorage.getItem('tokendata'))
      let timeleft = countdowntime.expired - now
      let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      document.getElementById("days").innerHTML = days + "d "
      document.getElementById("hours").innerHTML = hours + ":" 
      document.getElementById("mins").innerHTML = minutes + ":" 
      document.getElementById("secs").innerHTML = seconds + "" 
      if (timeleft < 0) {
        clearInterval();
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
    }
    }, 1000)
    
  }

  logout() {
    this.userservice.logout()
  }

}
