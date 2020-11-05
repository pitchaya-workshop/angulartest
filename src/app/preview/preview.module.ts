import { NgModule } from '@angular/core';
import { PreviewComponent } from './preview.component';
import { PreviewRoutingModule } from './preview-routing.module';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component'
import { UserComponent } from './user/user.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TokenComponent } from './token/token.component'
@NgModule({
    declarations: [
        PreviewComponent, 
        HeaderComponent,
        UserComponent,
        SidebarComponent,
        HeaderComponent,
        TokenComponent
    ],
    imports: [PreviewRoutingModule,MatIconModule,MatButtonModule],
    providers: []
})
export class PreviewModule { }
