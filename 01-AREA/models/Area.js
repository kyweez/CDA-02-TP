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

    /** @var #insideArea : Index des cellules allant de (1,0) a la fin (tableau boolean) true si la cellule est pleine **/
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
        this.setFreeCellTab();
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
     * Nous definissons l'index de l'origine a 0. Attention aux autres tableaux qui debutent sans compter l'origine...
     * @param Point[] _table
     */
    setArea(_table) {
        if (!Array.isArray(_table))
            this.#area = new Array();
        this.#area = _table;
        this.#area[0] = new Point(0, 0);
        this.#area[0].setIndex(0);
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
    setFreeCellTab() {
        let freeCells = [];
        let bfs = new Bfs(this);
        let node;
        let index = 0;
        while (bfs.getQueue().length > 0) {
            node = bfs.removeFromQueue();
            if (this.isFreeCell(node)) {
                node.setIndex(index++);
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
        let finaleNode = node.duplicate();
        finaleNode.setX(finaleNode.getX() + 1);
        finaleNode.setIndex(finaleNode.getIndex() + 1);
        if (this.isFreeCell(finaleNode))
            freeCells.push(finaleNode);
        this.#freeCellTab = freeCells;
    }

    /**
     * Définit le nouveau tableau this.#insideArea (tableau vide initialement)
     * @param Point[] _table
     */
    setInsideArea() {
        this.#insideArea = new Array(this.#freeCellTab.length);
        /**
         * @todo : Pourquoi je n'y arrive pas avec un foreach ?
         */
        let i;
        for (i = 0; i < this.#insideArea.length; i++)
            this.#insideArea[i] = (false);
    }

    //####################################################################################//
    //##################################### FUNCTIONS ####################################//
    //####################################################################################//


    /**
     * Cette fonction verifie si le point passe en argument est une cellule vide de l'aire
     * Si la cellule est vide retourne true, sinon retourne false
     * @param Point _point
     * @returns boolean true/false
     */
    isFreeCell(_point) {
        if (!(_point instanceof Point))
            return (false);
        if ((this.#area.find(test => test.getX() === _point.getX() && test.getY() === _point.getY())) !== undefined)
            return (false);
        return (true);
    }

    /**
     * Ajoute un point dans l'aire
     * Le point peut etre en dehors de la zone
     * Les index sont reatribues (2 index 0 car origine dispose d'un index 0 egalement)
     * On ne decale pas l'indexage des points pour garder la coherence avec les tableaux annexes.
     * @param Point _point 
     * @returns Boolean true/false 
     */
    addPoint(_point) {
        if (!(_point instanceof Point))
            return (false);
        if (this.#area.length >= this.tabSize)
            return (false);
        if (!this.isFreeCell(_point)) {
            _point.copy(this.#freeCellTab[0]);
            this.updateFreeCellTab(_point);
            this.#insideArea[_point.getIndex()] = (true);
        }
        else if (this.isInside(_point)) {
            _point.setIndex(this.realIndex(_point));
            this.updateFreeCellTab(_point);
            this.#insideArea[_point.getIndex()] = (true);
        }
        else
            _point.setIndex(_point.distanceFromOrigin() * -1);
        this.#area.push(_point);
        this.#areaSize++;
        return true;
    }

    /**
     * Cette fonction met a jour this.#freeCellTab en supprimant le point passe en parametre
     * @param Point _point
     * @returns Boolean true/false (true en cas de succes)
     */
    updateFreeCellTab(_point) {
        if (!(_point instanceof Point))
            return (false);
        let index = this.#freeCellTab.findIndex(test => test.getX() === _point.getX() && test.getY() === _point.getY());
        if (index === -1)
            return (false);
        this.#freeCellTab.splice(index, 1);
        return (true);
    }

    /**
     * Cette fonction verifie en fonction de ses coordonnees si le point est dans la zone de jeu
     * @param Point _point
     * @returns boolean true/false
     */
    isInside(_point) {
        if (!(_point instanceof Point))
            return (false);
        /**
         * @todo : Comment differencier un vrai false d'un false a cause d'un objet corrompu ?
         */
        if (_point.getX() < 0 || _point.getY() < 0)
            return (false);
        if (_point.getX() >= this.#width || _point.getY() >= this.#height)
            return (false);
        return (true);
    }

    /**
     * Cette fonction verifie si le point passe en argument se situe dans la zone.
     * @param Point _point 
     * @returns boolean true/false
     */
    isInArea(_point) {
        if (!(_point instanceof Point))
            return (false);
        let index = this.#area.findIndex(test => test.getX() === _point.getX() && test.getY() === _point.getY());
        if (index === -1)
            return (false);
        return (true);
    }

    /**
     * Cette fonction recherche l'index reel d'un point pour lui assigner sa place dans le tableau Area
     * @param Point _point
     * @returns int : NaN if failed / realIndex if success
     */
    realIndex(_point) {
        if (!(_point instanceof Point))
            return (NaN);
        let index = this.#freeCellTab.findIndex(test => test.getX() === _point.getX() && test.getY() === _point.getY());
        if (index === -1)
            return (NaN);
        return (this.#freeCellTab[index].getIndex());
    }

    /**
     * Déplace un point existant dans la zone vers de nouvelles coordonnées
     * Les nouvelles coordonnées peuvent se trouver hors limites
     * @returns Boolean true en cas de succès, false en cas d'échec
     */
    movePoint(_point, x, y) {
        if (this.#area.length === this.#areaSize)
            return (false);
        if (!(_point instanceof Point))
            return (false);
        if (!(isFinite(x) && isFinite(y)))
            return (false);
        if (!this.isInArea(_point))
            return (false);
        if (_point === this.#area[0])
            return (false);
        // A FINIR : 
        // cas outside -> outside
        // cas outside -> inside freecell
        // cas outside -> inside !freecell
        // cas inside -> outside
        // cas inside -> inside freecell
        // cas inside -> inside !freecell
    }


}

module.exports = Area;

let area = new Area(3, 3);
let point1 = new Point(0, 0);
let point2 = new Point(0, 0);
let point3 = new Point(2, 2);
let point4 = new Point(3, 3);
let point5 = new Point(-1, -1);
area.addPoint(point1);
area.addPoint(point2);
area.addPoint(point3);
area.addPoint(point4);
area.addPoint(point5);

// console.log(area);
// console.log(area.getWidth());
// console.log(area.getHeight());
// console.log(area.getAreaSize());
// console.log(area.getArea());
// console.log(area.getArea()[0].toString());
// console.log(area.getFreeCellTab());
area.getArea().forEach(element => {
    console.log(element.toString());
    console.log(element.getIndex());
});
console.log(`#########`)
area.getFreeCellTab().forEach(element => {
    console.log(element.toString());
    console.log(element.getIndex());
});
// console.log('#########');
console.log(area.getInsideArea());
let i = 0;
for (i; i < area.getInsideArea().length; i++) {
    console.log(area.getInsideArea()[i]);
}