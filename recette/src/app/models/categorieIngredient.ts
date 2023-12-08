import { Ingredient } from "./ingredient";

export interface CategorieIngredient {
    id: number;
    nom: string;
    ordre: number;
    ingredient: Ingredient[];
}