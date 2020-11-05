import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewComponent } from './preview.component';
import { TokenComponent } from './token/token.component';
import { UserComponent  } from './user/user.component'
const routes: Routes = [
    {
        path: '', component: PreviewComponent,
        children: [
            {
                path: 'user',component:UserComponent
            },
            {
                path: 'token',component:TokenComponent
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PreviewRoutingModule { }
