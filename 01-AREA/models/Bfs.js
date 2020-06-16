const Point = require(`./Point.js`);

class Bfs {

    //####################################################################################//
    //#################################### ATTRIBUTES ####################################//
    //####################################################################################//

    /** @var #queue : Tableau de Point qui se trouve dans la queue pour la resolution du BFS **/
    #queue;

    /** @var #visited : Double tableau de boolean qui permet de savoir si la cellule a déja été "visitée par le BFS" **/
    #visited;

    //####################################################################################//
    //#################################### CONSTRUCTOR ###################################//
    //####################################################################################//

    /**
     * Constructeur : Construit un objet BFS qui permet d'executer l'algorithme sur un objet Area
     * BFS = Breadth First Search. Documentation dans le dossier Doc.
     * @param Area _area 
     */
    constructor(_area) {
        this.setQueue();
        this.setVisited(_area);
        this.insertInQueue(new Point(0, 0));
        this.#visited[0][0] = (true);
    }

    //####################################################################################//
    //################################# GETTERS / SETTERS ################################//
    //####################################################################################//

    /**
     * Retourne la valeur de this.#queue (retourne donc un tableau de Points)
     */
    getQueue() {
        return (this.#queue);
    }

    /**
     * Retourne la valeur de this.#visited (retourne donc un tableau de tableau de boolean)
     */
    getVisited() {
        return (this.#visited);
    }

    /**
     * Initialise un tableau vide
     */
    setQueue() {
        this.#queue = [];
    }

    /**
     * Initialise un double tableau de boolean.
     * Ce tableau possede Y lignes de X colonnes avec Y = _area.y et X = _area.x
     * @param Area _area
     * @returns boolean true/false (true si tout s'est bien passe)
     */
    setVisited(_area) {
        if (!(_area instanceof Area))
            return (false);
        this.#visited = (() => {
            let i, j, tab1D;
            let tab2D = [];
            for (i = 0; i < _area.getHeight(); i++) {
                tab2D.push((() => {
                    j = 0;
                    tab1D = [];
                    for (j; j < _area.getWidth(); j++)
                        tab1D.push(false);
                    return (tab1D);
                })());
            }
            return (tab2D);
        })();
        return (true);
    }

    //####################################################################################//
    //##################################### FUNCTIONS ####################################//
    //####################################################################################//

    /**
     * Cette fonction ajoute un element a la fin de la queue. (fonctionnement en FIFO)
     * @param Point _element (normalement une instance de Point)
     * @returns boolean true/false si tous s'est bien passe
     */
    insertInQueue(_element) {
        if (!(_element instanceof Point))
            return (false);
        this.#queue.push(_element);
        return (true);
    }

    /**
     * Cette methode enleve le premier element de la queue et le retourne. (methode shift)
     * @returns Point instance.
     */
    removeFromQueue() {
        return (this.#queue.shift());
    }
}

module.exports = Bfs;