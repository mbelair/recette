import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, share, tap } from 'rxjs';
import { environment } from '../environments/environment';
import { IngredientList } from './models/IngredientList';
import { Ingredient } from './models/ingredient';
import { Recette } from './models/recette';
import { Tag } from './models/tag';
import { IngredientDetail } from './models/ingredientDetail';
import { Filters } from './models/filters';



@Injectable({
  providedIn: 'root'
})
export class AppService {
  public readonly url = '/api'

  allIngredients: BehaviorSubject<Ingredient[]> = new BehaviorSubject(null);
  allTags: BehaviorSubject<Tag[]> = new BehaviorSubject(null);
  private recettes: BehaviorSubject<Recette[]> = new BehaviorSubject(null);

  filters: BehaviorSubject<Filters> = new BehaviorSubject(null);

  constructor(private readonly http: HttpClient) {

  }

  isDev(): boolean {
    return !environment.production;
  }

  private ingredientCall$: Observable<Ingredient[]> = null;

  getAllIngredients(search: string): Observable<Ingredient[]> {
    if (!this.allIngredients.value) {
      if (this.isDev()) {
        if (this.ingredientCall$ == null) {
          this.ingredientCall$ = this.http.get<Ingredient[]>(this.url + "/Ingredient").pipe(
            tap({
              next: (value) => {
                this.allIngredients.next(value);
              }
            }),
            map((value) => {
              return this.filterIngredients(search, value);
            }),
            share()
          );
        }
        return this.ingredientCall$;
      } else {
        return this.getAllRecettes().pipe(map(recettes => this.filterIngredients(search, recettes.flatMap(r => r.categorieIngredient.flatMap(ci => ci.ingredient.flatMap(ir => ir.ingredient))))),
          tap({
            next: (value) => {
              this.allIngredients.next(value);
            }
          }),);
      }


    } else {
      return of(this.filterIngredients(search, this.allIngredients.value));
    }
  }

  clearIngredientList() {
    this.allIngredients.next(null);
    this.ingredientCall$ = null;
  }

  getAllIngredientsWithRecetteCount(): Observable<IngredientList[]> {
    return this.http.get<IngredientList[]>(this.url + "/Ingredient/list");
  }

  getIngredientDetail(id: number): Observable<IngredientDetail> {
    return this.http.get<IngredientDetail>(this.url + "/Ingredient/" + id);
  }

  deleteIngredient(ingredient: Ingredient): Observable<void> {
    return this.http.delete<void>(this.url + "/Ingredient/" + ingredient.id);
  }

  getAllTags(search: string): Observable<Tag[]> {
    if (!this.allTags.value) {
      return this.http.get<Tag[]>(this.url + "/Tag").pipe(
        tap({
          next: (value) => {
            this.allTags.next(value);
          }
        }),
        map((value) => {
          return this.filterTags(search, value);
        })
      );
    } else {
      return of(this.filterTags(search, this.allTags.value));
    }
  }


  filterTags(search: string, tags: Tag[]): Tag[] {
    if (search) {
      const filterValue = this.normalize(search);

      return tags.filter(tag => this.normalize(tag.nom).includes(filterValue));
    } else {
      return tags;
    }
  }

  filterIngredients(search: string, ingredients: Ingredient[]): Ingredient[] {
    if (search) {
      const filterValue = this.normalize(search);

      return ingredients.filter(ingredient => this.normalize(ingredient.nom).includes(filterValue));
    } else {
      return ingredients;
    }
  }

  normalize(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
  }

  createIngredient(ingredient: Ingredient): Observable<void> {
    return this.http.post<void>(this.url + "/Ingredient", ingredient).pipe(
      tap({
        next: () => {
          this.clearIngredientList();
        }
      })
    );
  }

  updateIngredient(ingredient: Ingredient): Observable<void> {
    return this.http.put<void>(this.url + "/Ingredient", ingredient).pipe(
      tap({
        next: () => {
          this.clearIngredientList();
        }
      })
    );
  }

  createRecette(recette: Recette): Observable<void> {
    return this.http.post<void>(this.url + "/Recette", recette).pipe(
      tap({
        next: () => {
          this.recettes.next(null);
        }
      })
    );
  }

  updateRecette(recette: Recette): Observable<void> {
    return this.http.put<void>(this.url + "/Recette", recette).pipe(
      tap({
        next: () => {
          this.recettes.next(null);
        }
      })
    );
  }

  getAllRecettes(): Observable<Recette[]> {
    if (!this.recettes.value) {
      let url = null;
      if (this.isDev()) {
        url = this.url + "/Recette";
      } else {
        url = 'assets/recettes.json';
      }
      return this.http.get<Recette[]>(url).pipe(
        tap({
          next: (value) => {
            this.recettes.next(value);
          }
        })
      );
    } else {
      return this.recettes;
    }

  }

  getRecette(id: number): Observable<Recette> {
    if (this.isDev()) {
      return this.http.get<Recette>(this.url + "/Recette/" + id);
    } else {
      return this.getAllRecettes().pipe(map(recettes => recettes.find(recette => recette.id == id)));
    }
  }

}
