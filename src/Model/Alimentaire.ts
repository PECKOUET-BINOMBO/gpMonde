import { Produit } from "./Produit";

export class Alimentaire extends Produit
{
    constructor(libelle: string, poids: number) {
        super(undefined, libelle, poids);
    }

    info(): string 
    {
        return `Alimentaire: ${this.__libelle}`;
    }
}