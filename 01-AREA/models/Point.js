class Point {

    //####################################################################################//
    //#################################### ATTRIBUTES ####################################//
    //####################################################################################//

    /** @var int x Abscisse */
    #x;

    /** @var int y Ordonnée */
    #y;

    /** @var int index (sert dans la grille) */
    #index;

    //####################################################################################//
    //#################################### CONSTRUCTOR ###################################//
    //####################################################################################//

    /**
     * Constructeur: Initialise une nouvelle instance de la classe "Point"
     * @param int _x Coordonnée horizontale du point (abscisse). Valeur négative acceptée
     * @param int _y Coordonnée verticale du point (ordonnée). Valeur négative acceptée
     */
    constructor(_x, _y) {
        this.setX(_x || 0);
        this.setY(_y || 0);
        this.setIndex(0);
    }

    //####################################################################################//
    //################################# GETTERS / SETTERS ################################//
    //####################################################################################//

    /**
     * Retourne la valeur de X
     * @returns int Abscisse
     */
    getX() {
        return this.#x;
    }

    /**
      * Retourne la valeur de Y
     * @returns int Ordonnée
     */
    getY() {
        return this.#y;
    }

    /**
      * Retourne la valeur de Index
     * @returns int Index
     */
    getIndex() {
        return this.#index;
    }

    /**
     * Définit une nouvelle valeur pour X
     * @param int _newX nouvelle valeur pour X 
     */
    setX(_newX) {
        _newX = parseInt(_newX || 0);
        this.#x = isFinite(_newX) ? _newX : 0;
    }

    /**
     * Définit une nouvelle valeur pour Y
     * @param int _newY nouvelle valeur pour Y
     */
    setY(_newY) {
        _newY = parseInt(_newY || 0);
        this.#y = isFinite(_newY) ? _newY : 0;
    }

    /**
     * Définit une nouvelle valeur pour index
     * @param int _newIndex nouvelle valeur pour index
     */
    setIndex(_newIndex) {
        _newIndex = parseInt(_newIndex || 0);
        this.#index = isFinite(_newIndex) ? _newIndex : 0;
    }

    //####################################################################################//
    //##################################### FUNCTIONS ####################################//
    //####################################################################################//

    /**
     * Retourne une représentation textuelle du Point
     * @return string Les coordonnées du Point
     */
    toString() {
        return (`(${this.#x},${this.#y})`);
    }

    /**
     * Repositionne le Point vers de nouvelles coordonnées
     * @param int _x Nouvelle valeur pour X
     * @param int _y Nouvelle valeur pour Y
     */
    move(_x, _y) {
        /**
         * @todo : Mettre cette fonction en prive car peut poser des problemes avec les index
         */
        this.setX(_x || 0);
        this.setY(_y || 0);
    }

    /**
     * Duplique le Point actuel dans une nouvelle instance
     * @returns Point La nouvelle instance de Point créée
     */
    duplicate() {
        let newPoint = new Point(this.#x, this.#y);
        newPoint.setIndex(this.#index);
        return (newPoint);
    }

    /**
      * Copie les coordonnées du "Point" fourni en argument dans l'instance actuelle
      * @param Point _point le point à copier
      * @returns true si tout s'est bien passé false dans le cas contraire
      */
    copy(_point) {
        if (!(_point instanceof Point))
            return (false);
        if (!(isFinite(_point.#x) && isFinite(_point.#y) && isFinite(_point.#index)))
            return (false);
        this.#x = _point.#x;
        this.#y = _point.#y;
        this.#index = _point.#index;
        return (true);
    }

    /**
      * Les coordonnées de l'instance actuelle et du "Point" fourni en argument sont échangées
      * @param Point _point Le point à échanger
      * @returns true si tout s'est bien passé false dans le cas contraire
      */
    rabbit(_point) {
        if (!(_point instanceof Point))
            return (false);
        let p = this.duplicate();
        this.copy(_point);
        _point.copy(p);
        return (true);
    }

    /**
     * Retourne la distance par rapport au point d'origine (0,0)
     * @returns int distance par rapport à la coordonnée (0,0)
     */
    distanceFromOrigin() {
        return (Math.abs(this.#x) + Math.abs(this.#y));
    }

}

module.exports = Point;