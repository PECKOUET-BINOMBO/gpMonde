import * as readline from "readline";
import { Aerienne } from "./Model/Aerienne";
import { Maritime } from "./Model/Maritime";
import { Routiere } from "./Model/Routiere";
import { Alimentaire } from "./Model/Alimentaire";
import { Chimique } from "./Model/Chimique";
import { Fragile } from "./Model/Fragile";
import { Incassable } from "./Model/Incassable";
import { Cargaison } from "./Model/Cargaison";
import { Produit } from "./Model/Produit";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const produits: Produit[] = [];
const cargaisons: Cargaison[] = [];

function menu() {
    console.log("\n=== MENU PRINCIPAL ===");
    console.log("1. Créer un produit");
    console.log("2. Créer une cargaison");
    console.log("3. Afficher la liste des produits");
    console.log("4. Afficher la liste des cargaisons");
    console.log("5. Ajouter un produit à une cargaison");
    console.log("0. Quitter");
    rl.question("Votre choix : ", (choix: string) => {
        switch (choix.trim()) {
            case "1":
                creerProduit();
                break;
            case "2":
                creerCargaison();
                break;
            case "3":
                afficherProduits();
                break;
            case "4":
                afficherCargaisons();
                break;
            case "5":
                ajouterProduitCargaison();
                break;
            case "0":
                rl.close();
                break;
            default:
                console.log("Choix invalide.");
                menu();
        }
    });
}

function creerProduit() {
    rl.question("Type de produit (alimentaire/chimique/fragile/incassable) : ", (type: string) => {
        rl.question("Libellé du produit : ", (libelle: string) => {
            rl.question("Poids du produit (kg) : ", (poidsStr: string) => {
                const poids = parseFloat(poidsStr);
                let produit: Produit | undefined;
                switch (type.trim().toLowerCase()) {
                    case "alimentaire":
                        produit = new Alimentaire(libelle, poids);
                        break;
                    case "chimique":
                        rl.question("Degré de toxicité (1-10) : ", (degreStr: string) => {
                            const degre = parseInt(degreStr);
                            produit = new Chimique(libelle, poids, degre);
                            produits.push(produit);
                            console.log("Produit chimique ajouté.");
                            menu();
                        });
                        return;
                    case "fragile":
                        produit = new Fragile(libelle, poids);
                        break;
                    case "incassable":
                        produit = new Incassable(libelle, poids);
                        break;
                    default:
                        console.log("Type de produit inconnu.");
                        menu();
                        return;
                }
                produits.push(produit);
                console.log("Produit ajouté.");
                menu();
            });
        });
    });
}

function creerCargaison() {
    rl.question("Type de cargaison (maritime/aerienne/routiere) : ", (type: string) => {
        rl.question("Distance en km : ", (distanceStr: string) => {
            const distance = parseInt(distanceStr);
            let cargaison: Cargaison | undefined;
            switch (type.trim().toLowerCase()) {
                case "maritime":
                    cargaison = new Maritime(distance);
                    break;
                case "aerienne":
                    cargaison = new Aerienne(distance);
                    break;
                case "routiere":
                    cargaison = new Routiere(distance);
                    break;
                default:
                    console.log("Type de cargaison inconnu.");
                    menu();
                    return;
            }
            if (produits.length === 0) {
                console.log("Aucun produit créé. Veuillez d'abord créer des produits.");
                cargaisons.push(cargaison);
                menu();
                return;
            }
            console.log("\nListe des produits disponibles :");
            produits.forEach((p, i) => {
                console.log(`  [${i}] ${p.info()}`);
            });
            rl.question("Entrez les index des produits à ajouter à la cargaison (séparés par des virgules, ex: 0,2,3) : ", (indexes: string) => {
                const idxs = indexes.split(",").map(s => parseInt(s.trim())).filter(n => !isNaN(n));
                idxs.forEach(idx => {
                    if (produits[idx]) {
                        cargaison.ajouterProduit(produits[idx]);
                    }
                });
                cargaisons.push(cargaison);
                console.log("Cargaison créée et produits ajoutés.");
                menu();
            });
        });
    });
}

function ajouterProduitCargaison() {
    if (cargaisons.length === 0) {
        console.log("Aucune cargaison disponible.");
        menu();
        return;
    }
    if (produits.length === 0) {
        console.log("Aucun produit disponible.");
        menu();
        return;
    }
    console.log("\nListe des cargaisons :");
    cargaisons.forEach((c, i) => {
        console.log(`  [${i}] ${c.constructor.name} - Distance: ${c.getDistance()} km - Produits: ${c.nbProduit()}`);
    });
    rl.question("Choisissez l'index de la cargaison : ", (idxStr: string) => {
        const idx = parseInt(idxStr);
        const cargaison = cargaisons[idx];
        if (!cargaison) {
            console.log("Index invalide.");
            menu();
            return;
        }
        console.log("\nListe des produits disponibles :");
        produits.forEach((p, i) => {
            console.log(`  [${i}] ${p.info()}`);
        });
        rl.question("Entrez l'index du produit à ajouter : ", (prodIdxStr: string) => {
            const prodIdx = parseInt(prodIdxStr);
            const produit = produits[prodIdx];
            if (!produit) {
                console.log("Index de produit invalide.");
                menu();
                return;
            }
            cargaison.ajouterProduit(produit);
            console.log("Produit ajouté à la cargaison.");
            menu();
        });
    });
}

function afficherProduits() {
    if (produits.length === 0) {
        console.log("Aucun produit créé.");
    } else {
        console.log("\nListe des produits :");
        produits.forEach((p, i) => {
            console.log(`[${i}] ${p.info()}`);
        });
    }
    menu();
}

function afficherCargaisons() {
    if (cargaisons.length === 0) {
        console.log("Aucune cargaison enregistrée.");
    } else {
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
    }
    menu();
}

menu();