// exporter ma class Employées 
export class Employe {
    #nom;
    #prenom;
    #branche;
    #salaire;
    
    constructor(nomInit, prenomInit, brancheInit, salaireInit = 1500) {
        this.#nom = nomInit;
        this.#prenom = prenomInit;
        this.#branche = brancheInit;
        this.#salaire = salaireInit;
    }

    get nom() {
        return this.#nom
    }

    set nom(valeur) {
        if (valeur > 0) {
            this.#nom = valeur;
        }
    }

    get prenom() {
        return this.#prenom
    }

    get branche() {
        return this.#branche
    }

    get salaire() {
        return this.#salaire
    }

    augmentationSalaire(montant) {
        this.#salaire += montant
    }

    affichageSalaire() {
        console.log(this.#salaire)
    }
}