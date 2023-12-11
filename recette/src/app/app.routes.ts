import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/recette', pathMatch: 'full' },
    { path: 'recette', loadComponent: () => import('./recette/recette.component').then(mod => mod.RecetteComponent) },
    { path: 'recette-detail/:id', loadComponent: () => import('./recette-detail/recette-detail.component').then(mod => mod.RecetteDetailComponent) },
    { path: 'create-recette', loadComponent: () => import('./create-recette/create-recette.component').then(mod => mod.CreateRecetteComponent) },

];

