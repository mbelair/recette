import { Ingredient } from "./ingredient";

export class IngredientRecette {
    id: number;
    ingredient: Ingredient;
    quantite: number;
    unite: string;
    ordre: number;
    detail: string;
}