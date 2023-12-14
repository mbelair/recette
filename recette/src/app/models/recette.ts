import { CategorieIngredient } from "./categorieIngredient";
import { CategoriePreparation } from "./categoriePreparation";
import { Tag } from "./tag";

export class Recette {
    id: number;
    nom: string;
    tempsPreparation: number;
    tempsCuisson: number;
    date_creation: Date;
    date_ouverture: Date;
    tags: Tag[];
    categoriePreparation: CategoriePreparation[];
    categorieIngredient: CategorieIngredient[];

    constructor(defaultValues = false) {
        this.categorieIngredient = [new CategorieIngredient(defaultValues)];
        this.categoriePreparation = [];
        this.tags = [];
    }
}