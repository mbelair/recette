import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, share, tap } from 'rxjs';
import { environment } from '../environments/environment';
import { IngredientList } from './models/IngredientList';
import { TagList } from './models/TagList';
import { Filters } from './models/filters';
import { Ingredient } from './models/ingredient';
import { IngredientDetail } from './models/ingredientDetail';
import { Recette } from './models/recette';
import { Tag } from './models/tag';
import { TagDetail } from './models/TagDetail';



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
  private tagsCall$: Observable<Tag[]> = null;

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
        return this.getAllRecettes().pipe(
          map(recettes => {
            const ingredients: Map<number, Ingredient> = new Map<number, Ingredient>();

            this.filterIngredients(search, recettes.flatMap(r => r.categorieIngredient.flatMap(ci => ci.ingredient.flatMap(ir => ir.ingredient))))

            recettes.flatMap(r => r.categorieIngredient.flatMap(ci => ci.ingredient.flatMap(ir => ir.ingredient))).forEach(i => {
              if (!ingredients.has(i.id)) {
                ingredients.set(i.id, i);
              }
            });

            return Array.from(ingredients.values());
          }),
          tap({
            next: (value) => {
              this.allIngredients.next(value);
            }
          }));
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

  getTagDetail(id: number): Observable<TagDetail> {
    return this.http.get<TagDetail>(this.url + "/Tag/" + id);
  }

  deleteIngredient(ingredient: Ingredient): Observable<void> {
    return this.http.delete<void>(this.url + "/Ingredient/" + ingredient.id).pipe(
      tap({
        next: () => {
          this.clearIngredientList();
        }
      }));
  }

  deleteTag(tag: Tag): Observable<void> {
    return this.http.delete<void>(this.url + "/Tag/" + tag.id).pipe(
      tap({
        next: () => {
          this.allTags.next(null);
        }
      }));
  }

  getAllTags(search: string): Observable<Tag[]> {
    if (!this.allTags.value) {
      if (this.isDev()) {
        if (this.tagsCall$ == null) {
          this.tagsCall$ = this.http.get<Tag[]>(this.url + "/Tag").pipe(
            tap({
              next: (value) => {
                this.allTags.next(value);
              }
            }),
            map((value) => {
              return this.filterTags(search, value);
            }),
            share()
          );
        }
        return this.tagsCall$;
      } else {
        return this.getAllRecettes().pipe(
          map(recettes => {
            const tags: Map<number, Tag> = new Map<number, Tag>();
            recettes.flatMap(r => r.tags).forEach(t => {
              if (!tags.has(t.id)) {
                tags.set(t.id, t);
              }
            });

            return Array.from(tags.values());
          }),
          tap({
            next: (value) => {
              this.allTags.next(value);
            }
          }));
      }
    } else {
      return of(this.filterTags(search, this.allTags.value));
    }
  }

  getAllTagsWithRecetteCount(): Observable<TagList[]> {
    return this.http.get<TagList[]>(this.url + "/Tag/list");
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
    let toReturn: Ingredient[];
    if (search) {
      const filterValue = this.normalize(search);

      toReturn = ingredients.filter(ingredient => this.normalize(ingredient.nom).includes(filterValue));
    } else {
      toReturn = ingredients;
    }
    return toReturn.sort((a, b) => {
      return a.nom.localeCompare(b.nom);
    })
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

  updateTag(tag: Tag): Observable<void> {
    return this.http.put<void>(this.url + "/Tag", tag).pipe(
      tap({
        next: () => {
          this.allTags.next(null);
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
    let recette$: Observable<Recette> = null;
    if (this.isDev()) {
      recette$ = this.http.get<Recette>(this.url + "/Recette/" + id);
    } else {
      recette$ = this.getAllRecettes().pipe(map(recettes => recettes.find(recette => recette.id == id)));
    }
    return recette$.pipe(
      map(value => {
        return Recette.fromRecette(value);
      })
    );
  }

}
