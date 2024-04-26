import { Ingredient } from "./ingredient";
import { Recette } from "./recette";

export class IngredientDetail extends Ingredient {
    recettes: Recette[];
}