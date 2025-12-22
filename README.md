## Chambre d’hôtel

Exercice pour **l'Orientation Objet**

# Exercice 1
Un hôtel possède 10 chambres, elles pourront simplement être rangées dans un tableau hotels[].

Créer la classe Chambre, une chambre est définie par une superficie, le nombre de personnes pouvant occuper la chambre, l’information libre ou occupée sera sauvegardée dans l’attribut « reservation ».

Les méthodes reserverChambre() et libererChambre() sont à créer. Attention Une chambre ne peut être réservée deux fois.

Créer une fonction dans le programme principal qui parcours le tableau et renvoie le nombre de chambres libres.

# Exercice 2

**Classe Employé**

1. Ecrivez un script permettant de définir une classe JavaScript « Employe » comportant :

·     l’attribut privé nom,
·     l’attribut privé prenom,
·     l’attribut privé branche,
·     l’attribut privé salaire, correspondant au salaire mensuel brut (vérifier que la valeur reçue est bien un nombre)
·     un constructeur d’initialisation qui affecte ces 4 informations
·     les getters et les setters pour chacun des attributs.
·    Le setter ‘salaire’ doit vérifier que le nouveau salaire est supérieur à l’ancien et que la valeur reçue est bien un nombre.
·     une méthode calculant le salaire annuel : getSalaireAnnuel()

2. Ecrivez le script entreprise.js exploitant cette Classe.

Dans un premier temps, écrivez simplement les instructions JavaScript permettant d’instancier deux objets Employe, par exemple pierre et paul. Les messages de trace seront simplement affichés en console du navigateur.

3. Utilisation de la Classe

Enrichissez le script permettant d’exploiter votre classe Employe.
Les deux objets « pierre » et  « paul » sont déjà instanciés. 
Affichez par de simples console.log() leurs nom, prenom, branche et salaire.

4. Ajoutez à la classe Employe, l’attribut privé « responsable », il fera référence à un autre employé.

Le responsable de Pierre est Paul.
Afficher les nom et prénom du chef de Pierre.
Faites une phrase dans le document HTML affichant cette information.
Afficher également le salaire annuel de Pierre.