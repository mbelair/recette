import { Ingredient } from "./ingredient";

export class CategorieIngredient {
    id: number;
    nom: string;
    ordre: number;
    ingredient: Ingredient[];


    constructor(defaultValues = false) {
        if (defaultValues) {
            this.nom = "Aucune catégorie"
            this.ordre = -1;
        }
        this.ingredient = [];
    }

    equals(other: CategorieIngredient): boolean {
        return this.id === other.id && this.nom === other.nom && this.ordre === other.ordre && this.ingredient.length === other.ingredient.length && this.ingredient.map((value: Ingredient, index: number) => {
            return value === other.ingredient[index];
        }).reduce((accumulator, currentValue) => {
            return accumulator && currentValue;
        }, true);
    }
}

