import { CategorieIngredient } from "./categorieIngredient";
import { CategoriePreparation } from "./categoriePreparation";
import { IngredientRecette } from "./ingredientRecette";
import { Preparation } from "./preparation";
import { Tag } from "./tag";

export class Recette {
    id: number;
    nom: string;
    tempsPreparation: number;
    tempsCuisson: number;
    nombrePortion: number;
    date_creation: Date;
    date_ouverture: Date;
    tags: Tag[];
    categoriePreparation: CategoriePreparation[];
    categorieIngredient: CategorieIngredient[];
    typeRepas: string[];

    constructor(defaultValues = false) {
        this.categorieIngredient = [new CategorieIngredient(defaultValues)];
        this.categoriePreparation = [new CategoriePreparation(defaultValues)];
        this.tags = [];
    }

    static fromRecette(r: Recette): Recette {
        const toReturn = new Recette();
        toReturn.id = r.id;
        toReturn.nom = r.nom;
        toReturn.tempsPreparation = r.tempsPreparation;
        toReturn.tempsCuisson = r.tempsCuisson;
        toReturn.nombrePortion = r.nombrePortion;
        toReturn.date_creation = r.date_creation;
        toReturn.date_ouverture = r.date_ouverture;


        toReturn.tags = [];
        r.tags.forEach(t => toReturn.tags.push(Tag.fromTag(t)));


        toReturn.categoriePreparation = [];
        r.categoriePreparation.forEach(c => {
            let cp = CategoriePreparation.fromBase(c);
            toReturn.categoriePreparation.push(cp);
            c.preparation.forEach(p => cp.preparation.push(Preparation.fromPreparation(p)));
            cp.preparation.sort((a, b) => a.ordre - b.ordre);
        });
        r.categoriePreparation.sort((a, b) => a.ordre - b.ordre);

        toReturn.categorieIngredient = [];
        r.categorieIngredient.forEach(c => {
            let ci = CategorieIngredient.fromBase(c);
            toReturn.categorieIngredient.push(ci);
            c.ingredient.forEach(i => ci.ingredient.push(IngredientRecette.fromIngredientRecette(i)));
            ci.ingredient.sort((a, b) => a.ordre - b.ordre);
        });
        r.categorieIngredient.sort((a, b) => a.ordre - b.ordre);


        toReturn.typeRepas = r.typeRepas;


        return toReturn;
    }
}