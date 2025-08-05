import { Cargaison } from "./Cargaison";
import { Produit } from "./Produit";
import { Alimentaire } from "./Alimentaire";
import { Chimique } from "./Chimique";
import { Materiel } from "./Materiel";

export class Routiere extends Cargaison {
    calculerFrais(produit: Produit): number {
        let frais = 0;
        
        if (produit instanceof Alimentaire) {
            frais = 100 * produit.getPoids() * this.getDistance();
        } else if (produit instanceof Materiel) {
            frais = 200 * produit.getPoids();
        }
        return frais;
    }
}