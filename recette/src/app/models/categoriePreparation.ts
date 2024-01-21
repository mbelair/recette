import { BaseCategorie } from "./baseCategorie";
import { Preparation } from "./preparation";

export class CategoriePreparation extends BaseCategorie {
    preparation: Preparation[];

    constructor(defaultValues = false) {
        super(defaultValues);
        this.preparation = [];
    }

    static fromBase(base: BaseCategorie) {
        const category = new CategoriePreparation();
        category.id = base.id;
        category.isDefaultCategory = base.isDefaultCategory;
        category.nom = base.nom;
        category.ordre = base.ordre;
        category.preparation = [];
        return category;
    }

    override  equals(other: CategoriePreparation): boolean {
        return super.equals(other) &&
            this.preparation.length === other.preparation.length && this.preparation.map((value: Preparation, index: number) => {
                return value === other.preparation[index];
            }).reduce((accumulator, currentValue) => {
                return accumulator && currentValue;
            }, true);
    }
}
