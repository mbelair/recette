import { IngredientRecette } from "./ingredientRecette";

export class CategorieIngredient {
    id: number;
    nom: string;
    ordre: number;
    ingredient: IngredientRecette[];
    isDefaultCategory: boolean = false;


    constructor(defaultValues = false) {
        if (defaultValues) {
            this.nom = "Aucune catégorie"
            this.ordre = 0;
            this.id = 0;
            this.isDefaultCategory = true;
        }
        this.ingredient = [];
    }

    equals(other: CategorieIngredient): boolean {
        return this.id === other.id && this.nom === other.nom && this.ordre === other.ordre && this.ingredient.length === other.ingredient.length && this.ingredient.map((value: IngredientRecette, index: number) => {
            return value === other.ingredient[index];
        }).reduce((accumulator, currentValue) => {
            return accumulator && currentValue;
        }, true);
    }
}

