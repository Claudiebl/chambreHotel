// exporter ma class Employées 
export class Employe {
    #nom;
    #prenom;
    #branche;
    #salaire;
    
    constructor(nom, prenom, branche, salaire = 1500) {
        this.nom = nom;
        this.prenom = prenom;
        this.branche = branche;
        this.salaire = salaire;
    }

    get nom() {
        return this.#nom;
    }

    set nom(nouveauNom) {
        if (typeof nouveauNom === "string") {
            this.#nom = nouveauNom;
        }
    }

    get prenom() {
        return this.#prenom;
    }

    set prenom(nouveauPrenom) {
        if (typeof nouveauPrenom === "string") {
            this.#prenom = nouveauPrenom;
        }
    }

    get branche() {
        return this.#branche;
    }

    set branche(nouvelleBranche) {
        if (typeof nouvelleBranche === "string") {
            this.#branche = nouvelleBranche;
        }
    }

    get salaire() {
        return this.#salaire;
    }

    set salaire(nouveauSalaire) {
        if (typeof nouveauSalaire === "number" && nouveauSalaire > this.salaire);
        this.#salaire += nouveauSalaire;
    }

    salaireAnnuel() {
        this.salaireAnnuel = this.#salaire * 12;
    }

    affichageSalaire() {
        console.log(this.#salaire);
    }
}