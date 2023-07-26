import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/publico', pathMatch: 'full' },
    {
        path: 'publico',
        loadChildren: () => import('./publico/publico.module').then(m => m.PublicoModule),
        data: { preload: true }
    },
    {
        path: 'app',
        loadChildren: () => import('./app/app.module').then(m => m.AppModule), 
        data: { preload: false }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class RootRoutingModule { }