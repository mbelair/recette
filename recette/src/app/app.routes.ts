import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/recette', pathMatch: 'full' },
    { path: 'recette', loadComponent: () => import('./recette/recette.component').then(mod => mod.RecetteComponent) },
];

