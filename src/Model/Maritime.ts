import { Cargaison } from "./Cargaison";
import { Produit } from "./Produit";
import { Alimentaire } from "./Alimentaire";
import { Chimique } from "./Chimique";
import { Materiel } from "./Materiel";

export class Maritime extends Cargaison {
    calculerFrais(produit: Produit): number {
        let frais = 0;
        if (produit instanceof Alimentaire) {
            frais = 90 * produit.getPoids() * this.getDistance();
        } else if (produit instanceof Chimique) {
            frais = 1000 * produit.getPoids();
        } else if (produit instanceof Materiel) {
            frais = 1000 * produit.getPoids();
        }
        return frais;
    }
}