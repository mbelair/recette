import { Ingredient } from "./ingredient";
import { UniteMesure } from "./uniteMesure";

export class IngredientRecette {
    ingredient_Id: number;
    ingredient: Ingredient;
    quantite: number;
    unite: string;
    ordre: number;
    detail: string;

    getLabel(): string {
        const unitLabel = UniteMesure.fromTypeCode(this.unite).getFormatedLabel(this.quantite > 1);
        return `${this.quantite} ${unitLabel} ${this.ingredient.nom} ${this.detail}`
    }


    static fromIngredientRecette(i: IngredientRecette): IngredientRecette {
        const toReturn = new IngredientRecette();
        toReturn.ingredient_Id = i.ingredient_Id;
        toReturn.ingredient = Ingredient.fromIngredient(i.ingredient);
        toReturn.quantite = i.quantite;
        toReturn.unite = i.unite;
        toReturn.ordre = i.ordre;
        toReturn.detail = i.detail;
        return toReturn;
    }
}