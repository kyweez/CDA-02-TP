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

## Class Area
Un "Point" est un objet représentant des coordonnées (x,y) dans un espace à 2 dimensions  
Une "Area" est un objet représentant une zone à 2 dimensions (coïncidence?)  
Une "Area" est obligatoirement définie par une largeur (nombre de colonnes) et une hauteur (nombre de lignes) pour former une grille.  
On peut ajouter, déplacer et supprimer des "Point" à l'intérieur d'une Area (1 seul "Point" par coordonnée).  
Une "Area" ne peut contenir plus de "Point" que de coordonnées disponibles dans la zone.  
(une zone 4x4 est limitée à 16 points)  
Les "Point" ajoutés peuvent se situer en dehors des limites de la zone (la limite du nombre de point par zone ne peut pas être dépassée !).  
Le "Point" d'origine (0,0) d'une "Area" est situé au coin supérieur gauche   
Le "Point" d'origine existe toujours (créé dans le constructeur) et ne peut être supprimé   
A partir du "Point" d'origine, la zone s'étend vers la droite pour les abscisses et vers le bas pour les ordonnées

## Coordonnées dans un espace à 2 dimensions type "fenêtre"
CONSIGNES : 
1. Lisez la description de la classe "Area"
2. Implémentez le code nécessaire à son bon fonctionnement en suivant les indications dans sa descirption
3. Implémentez ensuite le programme suivant :
    1. Créer 2 "Area"
        * Area 1 : 4 lignes x 4 colonnes
        * Area 2 : 8 lignes x 6 colonnes
    2. Dans la 1ère "Area", ajouter 8 "Point" (coordonnées au choix, 5 dans les limites de la zone et 3 hors limites)
    3. Dans la 2nde "Area", ajouter 6 "Point" (coordonnées au choix, tous en dehors des limites)
    4. Créer ensuite 2 "Point" distincts ayant les mêmes coordonnées
    5. Les ajouter dans chacune des zones (1 "Point" par zone)
    6. Pour chaque zone : 
        * Afficher tous les points qui se trouvent hors des limites de la zone
        * Exécuter la méthode "needAllInside"
        * Afficher tous les points
        * Afficher le nombre d'emplacements libres
