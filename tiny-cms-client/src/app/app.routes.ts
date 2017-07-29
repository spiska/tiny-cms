import { BoardComponent } from './board/board.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';
import { Routes } from '@angular/router';
import { AuthenticationGuard } from './admin/authentication.guard';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';

export const AppRoutes: Routes = [{
    path: '',
    component: BoardComponent
},
{
    path: 'admin',
    component: AdminComponent,
    children: [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'panel'
        },
        {
            path: 'panel',
            component: AdminPanelComponent,
            canActivate: [AuthenticationGuard],
        },
        {
            path: 'login',
            component: AdminLoginComponent
        },
        {
            path: 'register',
            component: AdminRegisterComponent
        }]
},
{
    path: '**',
    component: PageNotFoundComponent
}
];
