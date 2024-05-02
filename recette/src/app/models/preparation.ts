export class Preparation {
    id: number;
    text: string;
    ordre: number;

    static fromPreparation(p: Preparation): Preparation {
        const toReturn = new Preparation();
        toReturn.id = p.id;
        toReturn.text = p.text;
        toReturn.ordre = p.ordre;
        return toReturn;
    }

}
