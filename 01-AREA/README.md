# TP AREA
## Types de "Point"

Un Point représente une position.

Nous avons besoin de représenter plusieurs types de Point :
* Un mur (Wall) possédant
    * un attribut supplémentaire avec accesseur et sans mutateur
        * material : string
* Une porte (Door) possédant
    * un attribut supplémentaire avec accesseur et sans mutateur
        * isOpen : bool
    * une méthode supplémentaire
        * openClose() : bool
* Un chemin (Path) possédant
    * 2 attributs supplémentaires avec accesseur et mutateur
        * player : bool
        * nbPassages : int
* Une arrivée (Goal) possédant
    * 1 attribut supplémentaire avec accesseur et sans mutateur
        * success : bool


Travail à réaliser

Créer un nouveau projet.
Dans ce projet, créer un répertoire "models".
La classe Point est réécrite en respectant le principe d'encapsulation (attributs privés + accesseurs pour x et y)
En utilisant l'héritage, implémenter les classes "Wall", "Door", "Path" et "Goal" décrites ci-dessus.
Toutes ces classes héritent de Point (directement ou indirectement).
 
