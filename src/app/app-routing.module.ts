import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [{ path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) }, { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) }, { path: 'admin', loadChildren: () => import('./features/gestionnaire/gestionnaire.module').then(m => m.GestionnaireModule) }, { path: 'gestionnaire', loadChildren: () => import('./features/gestionnaire/gestionnaire.module').then(m => m.GestionnaireModule) }, { path: 'client', loadChildren: () => import('./features/client/client.module').then(m => m.ClientModule) }];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
