import { Cargaison } from "./Cargaison";
import { Produit } from "./Produit";
import { Alimentaire } from "./Alimentaire";
import { Chimique } from "./Chimique";
import { Materiel } from "./Materiel";

export class Maritime extends Cargaison {
    calculerFrais(produit: Produit): number {
        let frais = 0;
        let autreFrais = 0;

        if (produit instanceof Alimentaire) {
            frais = 90 * produit.getPoids() * this.getDistance();
            autreFrais = 5000; 
        } else if (produit instanceof Chimique) {
            frais = 500 * produit.getPoids();
            autreFrais = 10000;
        } else if (produit instanceof Materiel) {
            frais = 400 * produit.getPoids();
            autreFrais = 0;
        }
        return frais + autreFrais;
    }
}