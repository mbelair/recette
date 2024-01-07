import { BaseCategorie } from "./BaseCategorie";
import { IngredientRecette } from "./ingredientRecette";

export class CategorieIngredient extends BaseCategorie {
    ingredient: IngredientRecette[];


    constructor(defaultValues = false) {
        super(defaultValues);
        this.ingredient = [];
    }

    static fromBase(base: BaseCategorie) {
        const category = new CategorieIngredient();
        category.id = base.id;
        category.isDefaultCategory = base.isDefaultCategory;
        category.nom = base.nom;
        category.ordre = base.ordre;
        category.ingredient = [];
        return category;
    }

    override  equals(other: CategorieIngredient): boolean {
        return super.equals(other) &&
            this.ingredient.length === other.ingredient.length && this.ingredient.map((value: IngredientRecette, index: number) => {
                return value === other.ingredient[index];
            }).reduce((accumulator, currentValue) => {
                return accumulator && currentValue;
            }, true);
    }
}

