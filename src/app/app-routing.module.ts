import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloginModule } from './prelogin/prelogin.module';
import { CoreModule } from './core/core.module';


const rootRoutes: Routes = [
  {
    path: 'core',
      loadChildren: () => import('./core/core.module').then(m => CoreModule)
    },
    {
      path: '',
      loadChildren: () => import('./prelogin/prelogin.module').then(p => PreloginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rootRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
