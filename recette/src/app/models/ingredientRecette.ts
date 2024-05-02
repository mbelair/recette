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
        let toReturn = "";
        if (this.quantite) {
            toReturn += this.quantite + ' ';
        }

        let unitLabel = UniteMesure.fromTypeCode(this.unite).getFormatedLabel(this.quantite > 1);
        const imperialLabel = this.convertToImperial();
        if (imperialLabel) {
            unitLabel = `${unitLabel} (${imperialLabel})`;
        }

        return `${toReturn}${unitLabel} ${this.ingredient.nom} ${this.detail}`
    }

    convertToImperial() {
        const unite = UniteMesure.fromTypeCode(this.unite);
        if (unite === UniteMesure.ML) {
            if (this.quantite % 250 === 0) {
                const nombretasses = this.quantite / 250;
                return `${nombretasses} ${UniteMesure.TASSE.getFormatedLabel(nombretasses > 1)}`;
            }
            if (this.quantite % 125 === 0) {
                const nombretasses = this.quantite / 125;
                return `${nombretasses}/2 ${UniteMesure.TASSE.getFormatedLabel(nombretasses > 1)}`;
            }
            if (this.quantite % 80 === 0) {
                const nombretasses = this.quantite / 80;
                return `${nombretasses}/3 ${UniteMesure.TASSE.getFormatedLabel(nombretasses > 1)}`;
            }
            if (this.quantite % 60 === 0) {
                const nombretasses = this.quantite / 60;
                return `${nombretasses}/4 ${UniteMesure.TASSE.getFormatedLabel(nombretasses > 1)}`;
            }
            if (this.quantite % 15 === 0) {
                const nombretasses = this.quantite / 15;
                return `${nombretasses} ${UniteMesure.C_A_SOUPE.getFormatedLabel(nombretasses > 1)}`;
            }

            if (this.quantite % 5 === 0) {
                const nombretasses = this.quantite / 5;
                return `${nombretasses} ${UniteMesure.C_A_THE.getFormatedLabel(nombretasses > 1)}`;
            }


        } else if (unite === UniteMesure.G) {

        }
        return "";

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