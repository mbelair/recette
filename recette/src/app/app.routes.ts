import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/recette', pathMatch: 'full' },
    { path: 'recette', loadComponent: () => import('./recette/recette.component').then(mod => mod.RecetteComponent) },
    { path: 'recette2', loadComponent: () => import('./recette2/recette2.component').then(mod => mod.Recette2Component) },
];

