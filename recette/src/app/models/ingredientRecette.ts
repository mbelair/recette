import { Ingredient } from "./ingredient";
import { UniteMesure } from "./uniteMesure";

export class IngredientRecette {
    ingredient_Id: number;
    ingredient: Ingredient;
    quantite: number;
    unite: string;
    ordre: number;
    detail: string;

    getLabel(scale: number): string {
        let toReturn = "";

        if (this.quantite) {
            toReturn += (this.quantite * scale) + ' ';
        }

        let unitLabel = UniteMesure.fromTypeCode(this.unite).getFormatedLabel((this.quantite * scale) > 1);
        const imperialLabel = this.convertToImperial(scale);
        if (imperialLabel) {
            unitLabel = `${unitLabel} (${imperialLabel})`;
        }

        return `${toReturn}${unitLabel} ${this.ingredient.nom} ${this.detail}`
    }

    convertToImperial(scale: number) {
        const unite = UniteMesure.fromTypeCode(this.unite);
        const scaledQuantite = this.quantite * scale;
        if (unite === UniteMesure.ML) {
            if (scaledQuantite % 250 === 0) {
                const nombretasses = scaledQuantite / 250;
                return `${nombretasses} ${UniteMesure.TASSE.getFormatedLabel(nombretasses > 1)}`;
            }
            if (scaledQuantite % 125 === 0) {
                let nombreTasses = 0;
                let nombreDemiTasses = scaledQuantite / 125;
                while (nombreDemiTasses > 1) {
                    nombreTasses++;
                    nombreDemiTasses -= 2;
                }
                const formatted = nombreTasses === 0 ? `\u00BD` : `${nombreTasses} \u00BD`;
                return `${formatted} ${UniteMesure.TASSE.getFormatedLabel(nombreTasses > 1)}`;
            }
            if (scaledQuantite % 80 === 0) {
                let nombreTasses = 0;
                let nombreTiersTasses = scaledQuantite / 80;
                while (nombreTiersTasses > 2) {
                    nombreTasses++;
                    nombreTiersTasses -= 3;
                }
                let unicode = "";
                if (nombreTiersTasses === 1) {
                    unicode = '\u2153';
                } else if (nombreTiersTasses === 2) {
                    unicode = '\u2154';
                }
                const formatted = nombreTasses === 0 ? unicode : `${nombreTasses} ${unicode}`;
                return `${formatted} ${UniteMesure.TASSE.getFormatedLabel(nombreTasses > 1)}`;
            }
            if (scaledQuantite % 60 === 0) {
                let nombreTasses = 0;
                let nombreQuarttasses = scaledQuantite / 60;
                while (nombreQuarttasses > 3) {
                    nombreTasses++;
                    nombreQuarttasses -= 4;
                }
                let unicode = "";
                if (nombreQuarttasses === 1) {
                    unicode = '\u00BC';
                } else if (nombreQuarttasses === 2) {
                    unicode = '\u00BD';
                } else if (nombreQuarttasses === 3) {
                    unicode = '\u00BE';
                }
                const formatted = nombreTasses === 0 ? unicode : `${nombreTasses} ${unicode}`;
                return `${formatted} ${UniteMesure.TASSE.getFormatedLabel(nombreTasses > 1)}`;
            }
            if (scaledQuantite % 30 === 0) {
                let nombreTasses = 0;
                let nombreHuitiemeTasses = scaledQuantite / 30;
                while (nombreHuitiemeTasses > 7) {
                    nombreTasses++;
                    nombreHuitiemeTasses -= 8;
                }
                let unicode = "";
                if (nombreHuitiemeTasses === 1) {
                    unicode = '\u215B';
                } else if (nombreHuitiemeTasses === 2) {
                    unicode = '\u00BC';
                } else if (nombreHuitiemeTasses === 3) {
                    unicode = '\u215C';
                } else if (nombreHuitiemeTasses === 4) {
                    unicode = '\u00BD';
                } else if (nombreHuitiemeTasses === 5) {
                    unicode = '\u215D';
                } else if (nombreHuitiemeTasses === 6) {
                    unicode = '\u00BE';
                } else if (nombreHuitiemeTasses === 7) {
                    unicode = '\u215E';
                }

                const formatted = nombreTasses === 0 ? unicode : `${nombreTasses} ${unicode}`;
                return `${formatted} ${UniteMesure.TASSE.getFormatedLabel(nombreTasses > 1)}`;
            }


            if (scaledQuantite % 15 === 0) {
                const nombretasses = scaledQuantite / 15;
                return `${nombretasses} ${UniteMesure.C_A_SOUPE.getFormatedLabel(nombretasses > 1)}`;
            }

            if (scaledQuantite % 5 === 0) {
                const nombretasses = scaledQuantite / 5;
                return `${nombretasses} ${UniteMesure.C_A_THE.getFormatedLabel(nombretasses > 1)}`;
            }


        } else if (unite === UniteMesure.G) {
            const lbs = scaledQuantite / 450;
            return `${Intl.NumberFormat("fr-CA", { maximumSignificantDigits: 2 }).format(lbs)} ${UniteMesure.LB.getFormatedLabel(lbs > 1)}`;
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