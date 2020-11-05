import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router'
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})

export class UserserviceService {
  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog) {
  }

  Login(loginData) {
    let params = new URLSearchParams();
    params.append('username', loginData.username);
    params.append('password', loginData.password);
    params.append('grant_type', 'password');
    params.append('client_id', environment.client_id);
    let headers =
      new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Authorization': 'Basic ' + btoa(`${environment.client_id}:${environment.client_secret}`)
      });
    return this.http.post(environment.url_enpoint, params.toString(), { headers: headers })
  }
  checkexpired(){
    let datatoken = JSON.parse(localStorage.getItem('tokendata'))
    let timenow = new Date().getTime()
    let timeexpired = datatoken.expired
    return timeexpired - timenow
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      height:'auto',
      disableClose:true,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/login'])
    });
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}

