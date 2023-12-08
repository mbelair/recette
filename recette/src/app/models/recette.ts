import { CategorieIngredient } from "./categorieIngredient";
import { CategoriePreparation } from "./categoriePreparation";
import { Tag } from "./tag";

export interface Recette {
    id: number;
    nom: string;
    tempsPreparation: number;
    tempsCuisson: number;
    date_creation: Date;
    date_ouverture: Date;
    tags: Tag[];
    categoriePreparation: CategoriePreparation[];
    categorieIngredient: CategorieIngredient[];
}