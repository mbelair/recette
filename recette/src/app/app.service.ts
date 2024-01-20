import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { Ingredient, IngredientCategoryEnum } from './models/ingredient';
import { Recette } from './models/recette';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AppService {
  public readonly url = '/api'

  allIngredients: BehaviorSubject<Ingredient[]> = new BehaviorSubject(null);
  recettes: BehaviorSubject<Recette[]> = new BehaviorSubject([]);

  constructor(private readonly http: HttpClient) {

  }

  getAllIngredients(search: String): Observable<Ingredient[]> {
    if (!this.allIngredients.value) {
      return this.http.get<Ingredient[]>(this.url + "/Ingredient").pipe(
        tap({
          next: (value) => {
            this.allIngredients.next(value);
          }
        }),
        map((value) => {
          return this.filterIngredients(search, value);
        })
      );
    } else {
      return of(this.filterIngredients(search, this.allIngredients.value));
    }
  }

  filterIngredients(search: String, ingredients: Ingredient[]): Ingredient[] {
    if (search) {
      const filterValue = search.toLowerCase();

      return ingredients.filter(ingredient => ingredient.nom.toLowerCase().includes(filterValue));
    } else {
      return ingredients;
    }
  }

  createIngredient(ingredient: Ingredient): Observable<void> {
    return this.http.post<void>(this.url + "/Ingredient", ingredient).pipe(
      tap({
        next: () => {
          this.allIngredients.next(null);
        }
      })
    );
  }

  createRecette(recette: Recette): Observable<void> {
    return this.http.post<void>(this.url + "/Recette", recette);
  }

}
