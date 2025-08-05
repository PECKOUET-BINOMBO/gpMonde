import { Aerienne } from "./Model/Aerienne";
import { Maritime } from "./Model/Maritime";
import { Routiere } from "./Model/Routiere";
import { Alimentaire } from "./Model/Alimentaire";
import { Chimique } from "./Model/Chimique";
import { Fragile } from "./Model/Fragile";
import { Incassable } from "./Model/Incassable";

// Création des cargaisons
const cargaisonAerienne = new Aerienne(500);
const cargaisonMaritime = new Maritime(800);
const cargaisonRoutiere = new Routiere(300);

// Création des produits
const tomates = new Alimentaire("Tomates", 50);
const acide = new Chimique("Acide sulfurique", 100, 8);
const verre = new Fragile("Verre", 30);
const fer = new Incassable("Fer", 200);

// Ajout des produits
cargaisonAerienne.ajouterProduit(tomates);
cargaisonMaritime.ajouterProduit(acide);
cargaisonRoutiere.ajouterProduit(verre);
cargaisonRoutiere.ajouterProduit(fer);

// Affichage des résultats
console.log("=== Liste Cargaisons ===");
console.log(`Aérienne - Total: ${cargaisonAerienne.sommeTotale()} F, Produits: ${cargaisonAerienne.nbProduit()}`);
console.log(`Maritime - Total: ${cargaisonMaritime.sommeTotale()} F, Produits: ${cargaisonMaritime.nbProduit()}`);
console.log(`Routière - Total: ${cargaisonRoutiere.sommeTotale()} F, Produits: ${cargaisonRoutiere.nbProduit()}`);