import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/recette', pathMatch: 'full' },
    { path: 'recette', loadComponent: () => import('./recette/recette.component').then(mod => mod.RecetteComponent) },
    { path: 'recette-detail/:id', loadComponent: () => import('./recette-detail/recette-detail.component').then(mod => mod.RecetteDetailComponent) },
    { path: 'create-recette', loadComponent: () => import('./create-recette/create-recette.component').then(mod => mod.CreateRecetteComponent) },
    { path: 'edit-recette/:id', loadComponent: () => import('./create-recette/create-recette.component').then(mod => mod.CreateRecetteComponent) },
    { path: 'ingredients', loadComponent: () => import('./ingredient-list/ingredient-list.component').then(mod => mod.IngredientListComponent) },

];

