# TP AREA

## Définition d'un "Point"
CONSIGNES : 
1. Lisez la description et étudiez la classe "Point" ci-dessous (celle-ci est partiellement implémentée)
2. Implémentez les méthodes suivantes:
   * move(int x, int y)    : définit de nouvelles coordonnées (x=abscisses, y=ordonnées)
   * duplicate()           : retourne une nouvelle instance de "Point" avec les mêmes coordonnées que l'instance actuelle
   * copy(Point _point)    : copie les coordonnées du "Point" fourni en argument dans l'instance actuelle
   * rabbit(Point _point)  : Les coordonnées de l'instance actuelle et du "Point" fourni en argument sont échangées

RESTRICTIONS :
  Le corps de la méthode "rabbit" ne peut contenir que 3 instructions au maximum et ne doit pas impliquer la création d'autres fonctions !


## Héritage de "Point"
Nous avons besoin de représenter plusieurs types de Point :
1. Un mur (Wall) possédant
    * un attribut supplémentaire avec accesseur et sans mutateur
      * material : string
2. Une porte (Door) possédant
    * un attribut supplémentaire avec accesseur et sans mutateur
        * isOpen : bool
    * une méthode supplémentaire
        * openClose() : bool
3. Un chemin (Path) possédant
    * 2 attributs supplémentaires avec accesseur et mutateur
        * player : bool
        * nbPassages : int
4. Une arrivée (Goal) possédant
    * 1 attribut supplémentaire avec accesseur et sans mutateur
        * success : bool
