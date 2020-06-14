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

    /** @var #area : Zone de jeu (tableau de points) **/
    #area;

    /** @var #areaSize : Nombre de cellule maximum de la zone de jeu **/
    #areaSize;

    /** @var #freeCellTab : Coordonnees des cellules vides de la zone de jeu (tableau de points) **/
    #freeCellTab;

    /** @var #outsideArea : Coordonnees des cellules en dehors de la zone de jeu (tableau de points) **/
    #outsideArea;

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
        this.setOusideArea();
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
     * Retourne le tableau outsideArea
     * @returns Point[] outsideArea
     */
    getOutsideArea() { return (this.#outsideArea); }


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
     * @param Point[] _table
     */
    setArea(_table) {
        if (!Array.isArray(_table))
            this.#area = new Array();
        this.#area = _table;
        this.#area[0] = new Point(0, 0);
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
        while (bfs.getQueue().length > 0) {
            node = bfs.removeFromQueue();
            if (this.isFreeCell(node))
                freeCells.push(node);
            if (node.getX() + 1 < this.#width && node.getY() + 1 < this.#height) {
                console.log(`NODE : ${node.toString()}`);
                console.log(`QUEUE : ${bfs.getQueue()}`);
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
        if (this.isFreeCell(finaleNode))
            freeCells.push(finaleNode);
        this.#freeCellTab = freeCells;
    }

    /**
     * Définit le nouveau tableau this.#outsideArea (tableau vide initialement)
     * @param Point[] _table
     */
    setOutsideArea(_table) {
        if (!Array.isArray(_table))
            this.#outsideArea = new Array();
        this.#outsideArea = _table;
    }

    //####################################################################################//
    //##################################### FUNCTIONS ####################################//
    //####################################################################################//


    /**
     * Cette fonction verifie si le point passe en argument est une cellule vide de l'aire de jeu
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

}

module.exports = Area;

let area = new Area(3, 3);
console.log(area);
console.log(area.getWidth());
console.log(area.getHeight());
console.log(area.getAreaSize());
console.log(area.getArea());
console.log(area.getArea()[0].toString());
console.log(area.getFreeCellTab());
area.getFreeCellTab().forEach(element => {
    console.log(element.toString());
});