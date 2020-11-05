import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserserviceService } from '../service/userservice.service'

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private router: Router, private userservice: UserserviceService) {

    }
    canActivate(): boolean {
        
        if (!localStorage.getItem("tokendata")) {
            this.router.navigate(['/login'])
            return false
        } else {
            if (this.userservice.checkexpired() < 0) {
                localStorage.clear()
                this.router.navigate(['/login'])
            } else {
                setTimeout(() => {
                    localStorage.clear()
                    this.userservice.openDialog()
                }, this.userservice.checkexpired());
                return true;
            }

        }
    }

}