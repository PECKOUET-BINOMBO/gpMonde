import { Produit } from "./Produit";
import { GenererMatricule } from "./GenererMatricule";

export abstract class Materiel extends Produit {
    constructor(matricule:number = GenererMatricule.genererMatricule(), libelle:string, poids:number) {
        super(matricule, libelle, poids);
    }

    
    abstract info(): string;
}