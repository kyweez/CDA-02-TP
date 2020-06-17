const Point = require('./Point.js');
const Bfs = require(`./Bfs.js`);

class Area {

    //####################################################################################//
    //#################################### ATTRIBUTES ####################################//
    //####################################################################################//

    /** @var #width : Largeur de la zone de jeu **/
    #width;

    /** @var #height : Hauteur de la zone de jeu **/
    #height;

    /** @var #area : Zone totale (tableau de points) **/
    #area;

    /** @var #areaSize : Nombre de cellule maximum de la zone de jeu **/
    #areaSize;

    /** @var #freeCellTab : Coordonnees des cellules vides de la zone de jeu (tableau de points) **/
    #freeCellTab;

    /** @var #insideArea : Tableau des cellules allant de (1,0) a la fin (tableau boolean) true si la cellule est pleine **/
    #insideArea;

    //####################################################################################//
    //#################################### CONSTRUCTOR ###################################//
    //####################################################################################//

    /**
     * Constructeur: Initialise une nouvelle instance de la classe "Area"
     * La largeur et la hauteur définissent respectivement le nombre de colonnes et de lignes. 
     * @param int _width largeur de la zone
     * @param int _height hauteur de la zone
     */
    constructor(_width, _height) {
        this.setWidth(_width);
        this.setHeight(_height);
        this.setArea(new Array());
        this.setAreaSize();
        this.setFreeCellTab(_width, _height);
        this.setInsideArea();
    }

    //####################################################################################//
    //################################# GETTERS / SETTERS ################################//
    //####################################################################################//

    /**
     * Retourne la valeur de width
     * @returns int width
     */
    getWidth() { return (this.#width); }

    /**
     * Retourne la valeur de height
     * @returns int height
     */
    getHeight() { return (this.#height); }

    /**
     * Retourne le tableau area
     * @returns Point[] area
     */
    getArea() { return (this.#area); }

    /**
     * Retourne la valeur de areaSize
     * @returns int areaSize
     */
    getAreaSize() { return (this.#areaSize); }

    /**
     * Retourne le tableau freeCellTab
     * @returns Point[] freeCellTab
     */
    getFreeCellTab() { return (this.#freeCellTab); }

    /**
     * Retourne le tableau insideArea
     * @returns Point[] insideArea
     */
    getInsideArea() { return (this.#insideArea); }


    /**
     * Définit une nouvelle valeur pour width
     * @param int _width nouvelle valeur pour this.#width 
     */
    setWidth(_width) {
        _width = parseInt(_width || 0);
        this.#width = isFinite(_width) ? _width : 0;
    }

    /**
     * Définit une nouvelle valeur pour height
     * @param int _height nouvelle valeur pour this.#height 
     */
    setHeight(_height) {
        _height = parseInt(_height || 0);
        this.#height = isFinite(_height) ? _height : 0;
    }

    /**
     * Définit le nouveau tableau this.#area et place le point d'oirigine
     * Nous definissons l'ID de l'origine a 0. Attention aux autres tableaux qui debutent sans compter l'origine...
     * @param Point[] _table
     */
    setArea(_table) {
        if (!Array.isArray(_table))
            this.#area = new Array();
        this.#area = _table;
        this.#area[0] = new Point(0, 0);
        this.#area[0].setID(0);
    }

    /**
     * Définit la taille de la zone de jeu this.#areaSize
     */
    setAreaSize() {
        this.#areaSize = this.#width * this.#height;
    }

    /**
     * Définit un tableau des cellules disponibles dans l'air de jeu.
     * Le tableau est trie dans le la case la plus proche de l'origine vers la case la plus eloignée.
     * @param Point[] _table
     */
    setFreeCellTab(_width, _height) {
        let freeCells = [];
        let bfs = new Bfs(_width, _height);
        let node, finalNode;
        let id = 1;
        while (bfs.getQueue().length > 0) {
            node = bfs.removeFromQueue();
            if (!this.isBusyCell(node)) {
                node.setID(id++);
                freeCells.push(node);
            }
            if (node.getX() + 1 < this.#width && node.getY() + 1 < this.#height) {
                if (!bfs.getVisited()[node.getY()][node.getX() + 1]) {
                    bfs.insertInQueue(new Point(node.getX() + 1, node.getY()));
                    bfs.getVisited()[node.getY()][node.getX() + 1] = (true);
                }
                if (!bfs.getVisited()[node.getY() + 1][node.getX()]) {
                    bfs.insertInQueue(new Point(node.getX(), node.getY() + 1));
                    bfs.getVisited()[node.getY() + 1][node.getX()] = (true);
                }
            }
        }
        finalNode = node.duplicate();
        finalNode.setX(finalNode.getX() + 1);
        finalNode.setID(finalNode.getID() + 1);
        freeCells.push(finalNode);// A PROTEGER SI ON SE SERT DE LA FONCTION EN DEHORS DU CONSTRUCTEUR (CF PREMIERS COMMITS)
        this.#freeCellTab = freeCells;
    }

    /**
     * Définit le nouveau tableau this.#insideArea (tableau vide initialement)
     * @param Point[] _table
     */
    setInsideArea() {
        this.#insideArea = new Array(this.#areaSize);

        let i;
        for (i = 0; i < this.#insideArea.length; i++)
            this.#insideArea[i] = (false);
        this.#insideArea[0] = (true);
    }

    //####################################################################################//
    //##################################### FUNCTIONS ####################################//
    //####################################################################################//

    /**
     * Ajoute un point dans l'aire
     * Le point peut etre en dehors de la zone
     * Les ID sont reatribues (2 ID 0 car origine dispose d'un ID 0 egalement)
     * On ne decale pas les ID des points pour garder la coherence avec les tableaux annexes.
     * @param Point _point 
     * @returns Boolean true/false 
     */
    addPoint(_point) {
        if (!(_point instanceof Point))
            return (false);
        if (this.#area.length >= this.tabSize)
            return (false);
        if (this.isBusyCell(_point))
            this.addPointToFirstFreeCell(_point);
        else {
            this.setNewPointId(_point);
            this.updateArea(_point);
        }
        return true;
    }

    addPointToFirstFreeCell(_point) {
        if (!(_point instanceof Point))
            return (false);
        if (this.#freeCellTab.length === 0)
            return (false);
        if (this.#area.length === this.#areaSize)
            return (false);
        _point.copy(this.#freeCellTab[0]);
        this.updateArea(_point);
        return (true);
    }

    /**
     * Cette fonction verifie si les coordonnees du point passe en parametre font partie de la zone de jeu
     * @param Point _point
     * @returns boolean true/false (true si les coordonnees du point font partie de la zone de jeu)
     */
    coordinatesInGameArea(_point) {
        if (!(_point instanceof Point))
            return (false);
        if ((_point.getX() < 0) || (_point.getY() < 0))
            return (false);
        if ((_point.getX() >= this.#width) || (_point.getY() >= this.#height))
            return (false);
        return (true);
    }

    /**
     * Cette fonction verifie si le point passe en argument est une deja occupee
     * Si la cellule est vide retourne false, sinon retourne true
     * @param Point _point
     * @returns boolean true/false (true si la cellule est deja occupee)
     */
    isBusyCell(_point) {
        if (!(_point instanceof Point))
            return (false);
        if ((this.#area.find(test => test.getX() === _point.getX() && test.getY() === _point.getY())) === undefined)
            return (false);
        return (true);
    }

    /**
     * Déplace un point existant dans la zone vers de nouvelles coordonnées
     * Les nouvelles coordonnées peuvent se trouver hors limites
     * @returns Boolean true en cas de succès, false en cas d'échec
     */
    movePoint(_point, _x, _y) {
        if (!(_point instanceof Point))
            return (false);
        if (_point.getX() === 0 && _point.getY() === 0)
            return (false);
        if (_x === null || _y === null)
            return (false);
        if (!(isFinite(_x)) || !(isFinite(_y)))
            return (false);
        if (!this.isBusyCell(_point))
            return (false);
        let tempPoint = new Point(_x, _y);
        if (this.isBusyCell(tempPoint))
            this.moveToFirstFreeCell(_point);
        else{
            this.updateArea(_point.duplicate())
            _point.copy(tempPoint);
            this.setNewPointId(_point);
            this.updateArea(_point);
        }
        return (true);
    }


    /**
     * Cette fonction bouge un point existant vers la cellule disponible la plus proche de l'origine
     * Update les tableaux en meme temps
     * Si bouger un point libere une case de maniere a "creer un trou", operation impossible.
     * Bouger l'origine est impossible.
     * @param Point _point
     * @returns boolean true/false (true si tout s'est bien passe)
     */
    moveToFirstFreeCell(_point) {
        if (!(_point instanceof Point))
            return (false);
        if (this.#freeCellTab.length === 0)
            return (false);
        let id = _point.getID()
        if ((id >= 0) && (id < this.#freeCellTab[0].getID()))
            return (false);
        /**
         * Comme on va reassigner le point, on doit envoyer un duplicate en parametre 
         * pour travaille sur les valeurs du tableau mais pas sur la reference du point
         */
        this.updateArea(_point.duplicate());
        _point.copy(this.#freeCellTab[0]);
        this.updateArea(_point);
        return (true);
    }

    /**
     * Cette fonction met a jour le nouvel identifiant a attribuer lors de l'ajout d'un point
     * @param Point _point
     * @returns int newID
     */
    setNewPointId(_point) {
        if (!(_point instanceof Point))
            return (false);
        if (this.isBusyCell(_point))
            return (false);
        if (this.coordinatesInGameArea(_point)) {
            let index = this.#freeCellTab.findIndex(test => test.getX() === _point.getX() && test.getY() === _point.getY());
            _point.setID(this.#freeCellTab[index].getID());
        }
        else
            _point.setID((_point.distanceFromOrigin() * -1));
        return (true);
    }

    /**
     * Cette fonction prend un point en argument et met a jour le tableau Area
     * Si ce point existe, il le supprime, sinon il l'ajoute
     * Si ce point se situe dans la zone de jeu, la fonction met a jour les tableaux annexes
     * @param Point _point
     * @returns boolean true/false (true si tout s'est bien passe)
     */
    updateArea(_point) {
        if (!(_point instanceof Point))
            return (false);
        if ((_point.getX() === 0) && (_point.getY() === 0))
            return (false);
        let index = this.#area.findIndex(test => test.getX() === _point.getX() && test.getY() === _point.getY());
        if (index === -1) {
            if (this.#area.length === this.#areaSize)
                return (false);
            this.#area.push(_point);
            this.#area.sort((point1, point2) => point1.getID() - point2.getID());
        }
        else
            this.#area.splice(index, 1);
        if (this.coordinatesInGameArea(_point)) {
            this.updateInsideArea(_point);
            this.updateFreeCellTab(_point);
        }
        return (true);
    }

    /**
     * Cette fonction met a jour this.#freeCellTab en supprimant le point passe en argument s'il existe 
     * ou en l'ajoutant s'il n'existe pas. 
     * @param Point _point
     * @returns Boolean true/false (true en cas de succes)
     */
    updateFreeCellTab(_point) {
        if (!(_point instanceof Point))
            return (false);
        let index = this.#freeCellTab.findIndex(test => test.getX() === _point.getX() && test.getY() === _point.getY());
        if (index === -1) {
            if ((!this.coordinatesInGameArea(_point)) || ((_point.getX() === 0) && (_point.getY() === 0)))
                return (false);
            this.#freeCellTab.push(_point);
            this.#freeCellTab.sort((point1, point2) => point1.getID() - point2.getID());
            return (true);
        }
        else
            this.#freeCellTab.splice(index, 1);
        return (true);
    }

    /**
     * Cette fonction recoit un point en argumen et update insideArea. (inverse le boolean de l'index correspondant a l'ID du point)
     * @param Point _point 
     */
    updateInsideArea(_point) {
        if (!(_point instanceof Point))
            return (false);
        if (_point === this.#area[0])
            return (false);
        if (!this.coordinatesInGameArea(_point))
            return (false);
        let index = _point.getID();
        if ((index <= 0) || (index >= this.#areaSize))
            return (false);
        if (this.#insideArea[index] === false)
            this.#insideArea[index] = (true);
        else
            this.#insideArea[index] = (false);
        return (true);
    }

}

module.exports = Area;