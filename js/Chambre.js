// création de la classe Chambre
export class Chambre {

    /**
     * @param {number} m2 
     * @param {number} nbPax 
     * @param {boolean} reserver 
     */
    constructor(m2, nbPax, reserver = false){
        this.m2 = m2; // superficie en m²
        this.nbPax = nbPax; // capacité de personnes
        this.reserver = reserver ; // false = libre par défaut
    }

     // méthode pour réserver une chambre
    reserverChambre() {
        // si la chambre est déjà réservée
        if (this.reserver) {  
        }else {
        // sinon on la réserve
            this.reserver = true;
        }
    }

    // méthode pour libérer une chambre
    libererChambre() {
        // si la chambre est déjà libre
        if (this.reserver === false) {
        } else {
        // sinon on la libère
            this.reserver = false;
        }
    }
}
