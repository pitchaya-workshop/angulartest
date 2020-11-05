import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserserviceService } from '../service/userservice.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  head1: string;
  head2: string;
  login_form: FormGroup;
  error_login:string;
  constructor(
    private userservice: UserserviceService,
    private fb: FormBuilder,
    private router : Router
  ) { }

  ngOnInit() {
    this.head1 = environment.head1;
    this.head2 = environment.head2
    this.login_form = this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required)
    })
  }

  onLogin() {
    this.userservice.Login(this.login_form.value).subscribe(
      (data) => {
        this.error_login = ''
        let date = new Date()
        let expire = new Date(date.getTime() + 1000 * data['expires_in'])
        let displaycreateAt = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds()}`
        let displayExpired = `${expire.getDay()}/${expire.getMonth()}/${expire.getFullYear()} ${expire.getHours()}:${expire.getMinutes()}:${expire.getSeconds()<10?'0'+expire.getSeconds():expire.getSeconds()}`
        let userdata = {
          fullNameEn: data['fullName'],
          fullNameTh: data['fullNameTh'],
          roleEn: data['roleEn'],
          roleTh: data['roleTh'],
          branchEn: data['branchEn'],
          branchTh: data['branchTh'],
          sex:data['sex'],
          userId:data['userId']
        }
        let tokendata = {
          userId:data['userId'],
          access_token: data['access_token'],
          expired: expire.getTime(),
          displaycreateAt: displaycreateAt,
          displayExpired: displayExpired,
          scope: data['scope']
        }
        localStorage.setItem('userdata', JSON.stringify(userdata))
        localStorage.setItem('tokendata', JSON.stringify(tokendata))
        this.router.navigate(['/']);
      },
      (error) => {
        this.error_login = error.error.error_description
      }
    )
  }

  showPassword(event) {
    let inputpass = document.getElementById('password')
    if (event.type === "mousedown") {
      inputpass.setAttribute('type', 'text')
    } else if (event.type === "mouseup") {
      inputpass.setAttribute('type', 'password')
    }
  }
}
