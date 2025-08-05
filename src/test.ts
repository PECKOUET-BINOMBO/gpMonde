import { Aerienne } from "./Model/Aerienne";
import { Maritime } from "./Model/Maritime";
import { Routiere } from "./Model/Routiere";
import { Alimentaire } from "./Model/Alimentaire";
import { Chimique } from "./Model/Chimique";
import { Fragile } from "./Model/Fragile";
import { Incassable } from "./Model/Incassable";
import { Cargaison } from "./Model/Cargaison";
import { Produit } from "./Model/Produit";

// Création des produits
const produits: Produit[] = [
    new Alimentaire("Tomates", 50),
    new Chimique("Acide sulfurique", 100, 8),
    new Fragile("Verre", 30),
    new Incassable("Fer", 200)
];

// Création des cargaisons
const cargaisons: Cargaison[] = [
    new Aerienne(500),
    new Maritime(800),
    new Routiere(300)
];

// Ajout des produits aux cargaisons
cargaisons[0].ajouterProduit(produits[0]); // Tomates dans Aerienne
cargaisons[1].ajouterProduit(produits[1]); // Acide dans Maritime
cargaisons[2].ajouterProduit(produits[2]); // Verre dans Routiere
cargaisons[2].ajouterProduit(produits[3]); // Fer dans Routiere

// Affichage de la liste des produits
console.log("\nListe des produits :");
produits.forEach((p, i) => {
    console.log(`[${i}] ${p.info()}`);
});

// Affichage de la liste des cargaisons et leurs infos
cargaisons.forEach((c, i) => {
    console.log(`\nCargaison #${i} (${c.constructor.name})`);
    console.log(`  Distance : ${c.getDistance()} km`);
    console.log(`  Nombre de produits : ${c.nbProduit()}`);
    console.log(`  Produits :`);
    if (c.getProduits().length === 0) {
        console.log("    Aucun produit.");
    } else {
        c.getProduits().forEach((p, j) => {
            console.log(`    [${j}] ${p.info()}`);
        });
    }
    console.log(`  Total frais : ${c.sommeTotale()} F`);
});