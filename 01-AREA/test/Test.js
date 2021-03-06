const Point = require(`../models/Point.js`);
const Area = require(`../models/Area.js`);

/**
 * Programme "Point"
 */
class Test {
    /**
     * Tests de la classe Point
     */
    testClassPoint() {
        console.log(`\x1b[31m\n####################################\x1b[0m`);
        console.log(`\x1b[31m####### CREATION DE 3 POINTS #######\x1b[0m`);
        console.log(`\x1b[31m####################################\n\x1b[0m`);
        console.log(`\x1b[36mlet p1 = new Point(0, 1);\x1b[0m`);
        console.log(`\x1b[36mlet p2 = new Point(2, 3);\x1b[0m`);
        console.log(`\x1b[36mlet p3 = new Point(4, 5);\x1b[0m`);
        let p1 = new Point(0, 1);
        let p2 = new Point(2, 3);
        let p3 = new Point(4, 5);
        console.log(`\x1b[33m\nAffichage des points :\x1b[0m`);
        console.log(`\x1b[32m${p1.toString()}\x1b[0m`);
        console.log(`\x1b[32m${p2.toString()}\x1b[0m`);
        console.log(`\x1b[32m${p3.toString()}\x1b[0m`);

        console.log(`\x1b[31m\n####################################\x1b[0m`);
        console.log(`\x1b[31m######## DUPLICATE FUNCTION ########\x1b[0m`);
        console.log(`\x1b[31m####################################\n\x1b[0m`);
        console.log(`\x1b[36mlet p4 = p3.duplicate();\x1b[0m`);
        let p4 = p3.duplicate();
        console.log(`\x1b[33m\nTest sur p3 & p4 :\x1b[0m`);
        console.log(`\x1b[36mconsole.log(p3 !== p4); // affiche: true\x1b[0m`);
        console.log(`\x1b[32m${p3 !== p4}\x1b[0m`);
        console.log(`\x1b[36m\nconsole.log(p3.toString()); // affiche (4,5)\x1b[0m`);
        console.log(`\x1b[32m${p3.toString()}\x1b[0m`);
        console.log(`\x1b[36m\nconsole.log(p4.toString()); // affiche (4,5)\x1b[0m`);
        console.log(`\x1b[32m${p4.toString()}\x1b[0m`);

        console.log(`\x1b[31m\n####################################\x1b[0m`);
        console.log(`\x1b[31m########### COPY FUNCTION ##########\x1b[0m`);
        console.log(`\x1b[31m####################################\n\x1b[0m`);
        console.log(`\x1b[36mp2.copy(p1);\x1b[0m`);
        p2.copy(p1);
        console.log(`\x1b[33m\nTest sur p1 & p2 :\x1b[0m`);
        console.log(`\x1b[36mconsole.log(p1 !== p2); // affiche: true\x1b[0m`);
        console.log(`\x1b[32m${p1 !== p2}\x1b[0m`);
        console.log(`\x1b[36m\nconsole.log(p1.toString()); // affiche:  (0,1)\x1b[0m`);
        console.log(`\x1b[32m${p1.toString()}\x1b[0m`);
        console.log(`\x1b[36m\nconsole.log(p2.toString()); // affiche:  (0,1)\x1b[0m`);
        console.log(`\x1b[32m${p2.toString()}\x1b[0m`);

        console.log(`\x1b[31m\n####################################\x1b[0m`);
        console.log(`\x1b[31m########## RABBIT FUNCTION #########\x1b[0m`);
        console.log(`\x1b[31m####################################\n\x1b[0m`);
        console.log(`\x1b[36mp1.rabbit(p3);\x1b[0m`);
        p1.rabbit(p3);
        console.log(`\x1b[33m\nTest sur p1 & p3 :\x1b[0m`);
        console.log(`\x1b[36mconsole.log(p1 !== p3); // affiche: true\x1b[0m`);
        console.log(`\x1b[32m${p1 !== p3}\x1b[0m`);
        console.log(`\x1b[36m\nconsole.log(p1.toString()); // affiche:  (4,5)\x1b[0m`);
        console.log(`\x1b[32m${p1.toString()}\x1b[0m`);
        console.log(`\x1b[36m\nconsole.log(p3.toString()); // affiche:  (0,1)\x1b[0m`);
        console.log(`\x1b[32m${p3.toString()}\x1b[0m`);
    }

    testClassArea_Creation() {
        console.log(`\x1b[31m\n##########################################\x1b[0m`);
        console.log(`\x1b[31m####### CREATION D'UNE ZONE DE JEU #######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36mlet area = new Area(2, 2);\x1b[0m`);
        let area = new Area(2, 2);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\n\x1b[0m`);
        print();

        function print() {
            console.log(`width : \x1b[32m${area.getWidth()}\x1b[0m`);
            console.log(`width : \x1b[32m${area.getHeight()}\x1b[0m`);
            console.log(`areaSize : \x1b[32m${area.getAreaSize()}\x1b[0m`);
            console.log(`\x1b[35m\narea :\x1b[32m`);
            for (let i = 0; i < area.getArea().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getArea()[i].toString()} / id = ${area.getArea()[i].getID()}`);
            }
            console.log(`\x1b[35m\nfreeCellTab :\x1b[32m`);
            for (let i = 0; i < area.getFreeCellTab().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getFreeCellTab()[i].toString()} / id = ${area.getFreeCellTab()[i].getID()}`);
            }
            console.log(`\x1b[35m\ninsideArea :\x1b[32m`);
            for (let i = 0; i < area.getInsideArea().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getInsideArea()[i]}`);
            }
            console.log(`\x1b[0m`);
        }
    }

    testClassArea_UpdateInsideArea() {
        console.log(`\x1b[31m\n##########################################\x1b[0m`);
        console.log(`\x1b[31m####### CREATION D'UNE ZONE DE JEU #######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36mlet area = new Area(2, 2);\x1b[0m`);
        let area = new Area(2, 2);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\n\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m############ AJOUT D'UN POINT ############\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36mlet point = new Point(1,0);\x1b[0m`);
        console.log(`\x1b[36mpoint.setID(1);\x1b[0m`);
        console.log(`\x1b[36marea.getArea()[1] = point;\x1b[0m`);
        let point = new Point(1, 0);
        point.setID(1);
        area.getArea()[1] = point;
        console.log(`\x1b[33m\nAffichage des attributs de Area :\n\x1b[0m`);
        print();
        console.log(`\x1b[31minsideArea toujours pas update !!\n`);
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m############ UPDATE INSIDEAREA ###########\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36marea.updateInsideArea(point);\x1b[0m`);
        area.updateInsideArea(point);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\n\x1b[0m`);
        print();
        console.log(`\x1b[32minsideArea bien update !!\n`);
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m## NEW UPDATE INSIDEAREA  (SUPPRESSION) ##\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36marea.updateInsideArea(point);\x1b[0m`);
        area.updateInsideArea(point);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\n\x1b[0m`);
        print();
        console.log(`\x1b[32minsideArea bien update !!\n`);
        function print() {
            console.log(`\x1b[35m\narea :\x1b[32m`);
            for (let i = 0; i < area.getArea().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getArea()[i].toString()} / id = ${area.getArea()[i].getID()}`);
            }
            console.log(`\x1b[35m\ninsideArea :\x1b[32m`);
            for (let i = 0; i < area.getInsideArea().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getInsideArea()[i]}`);
            }
            console.log(`\x1b[0m`);
        }
    }

    testClassArea_UpdateFreeCellTab() {
        console.log(`\x1b[31m\n##########################################\x1b[0m`);
        console.log(`\x1b[31m####### CREATION D'UNE ZONE DE JEU #######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36mlet area = new Area(2, 2);\x1b[0m`);
        let area = new Area(2, 2);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\n\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m############ AJOUT D'UN POINT ############\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36mlet point = new Point(1,0);\x1b[0m`);
        console.log(`\x1b[36mpoint.setID(1);\x1b[0m`);
        console.log(`\x1b[36marea.getArea()[1] = point;\x1b[0m`);
        let point = new Point(1, 0);
        point.setID(1);
        area.getArea()[1] = point;
        console.log(`\x1b[33m\nAffichage des attributs de Area :\n\x1b[0m`);
        print();
        console.log(`\x1b[31mfreeCellTab toujours pas update !!\n`);
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m#### UPDATE FREECELLTAB (SUPPRESSION) ####\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36marea.updateFreeCellTab(point);\x1b[0m`);
        area.updateFreeCellTab(point);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\n\x1b[0m`);
        print();
        console.log(`\x1b[32mfreeCellTab bien update !!\n`);
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m##### NEW UPDATE FREECELLTAB  (AJOUT) ####\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36marea.updateFreeCellTab(point);\x1b[0m`);
        area.updateFreeCellTab(point);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\n\x1b[0m`);
        print();
        console.log(`\x1b[32mfreeCellTab bien update !!\n`);
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m########## TEST AVEC POINT(0, 0) #########\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36marea.updateFreeCellTab(new Point(0,0));\x1b[0m`);
        area.updateFreeCellTab(new Point(0, 0));
        console.log(`\x1b[33m\nAffichage des attributs de Area :\n\x1b[0m`);
        print();
        console.log(`\x1b[32mfreeCellTab a bien PAS update !!\n`);
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m######### TEST AVEC POINT(-1, 1) #########\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36marea.updateFreeCellTab(new Point(-1,1));\x1b[0m`);
        area.updateFreeCellTab(new Point(-1, 1));
        console.log(`\x1b[33m\nAffichage des attributs de Area :\n\x1b[0m`);
        print();
        console.log(`\x1b[32mfreeCellTab a bien PAS update !!\x1b[0m\n`);
        function print() {
            console.log(`\x1b[35m\narea :\x1b[32m`);
            for (let i = 0; i < area.getArea().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getArea()[i].toString()} / id = ${area.getArea()[i].getID()}`);
            }
            console.log(`\x1b[35m\nfreeCellTab :\x1b[32m`);
            for (let i = 0; i < area.getFreeCellTab().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getFreeCellTab()[i].toString()} / id = ${area.getFreeCellTab()[i].getID()}`);
            }
            console.log(`\x1b[0m`);
        }
    }

    testClassArea_UpdateArea() {
        console.log(`\x1b[31m\n##########################################\x1b[0m`);
        console.log(`\x1b[31m####### CREATION D'UNE ZONE DE JEU #######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36mlet area = new Area(2, 2);\x1b[0m`);
        let area = new Area(2, 2);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m############ AJOUT D'UN POINT ############\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36mlet point = new Point(1,0);\x1b[0m`);
        console.log(`\x1b[36mpoint.setID(1);\x1b[0m`);
        console.log(`\x1b[36marea.updateArea(point);\x1b[0m`);
        let point = new Point(1, 0);
        point.setID(1);
        area.updateArea(point);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m## AJOUT D'UN POINT(0,0) / PAS POSSIBLE ##\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36mlet point2 = new Point(0,0);\x1b[0m`);
        console.log(`\x1b[36mpoint2.setID(0);\x1b[0m`);
        console.log(`\x1b[36marea.updateArea(point2);\x1b[0m`);
        let point2 = new Point(0, 0);
        point2.setID(0);
        area.updateArea(point2);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m## AJOUT D'UN POINT(-1,0) POSSIBLE MAIS ##\x1b[0m`);
        console.log(`\x1b[31m##    PAS UPDATE DES TABLEAUX ANNEXES   ##\x1b[0m`);
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[36mlet point3 = new Point(-1,0);\x1b[0m`);
        console.log(`\x1b[36mpoint3.setID(-1);\x1b[0m`);
        console.log(`\x1b[36marea.updateArea(point3);\x1b[0m`);
        let point3 = new Point(-1, 0);
        point3.setID(-1);
        area.updateArea(point3);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m## SUPPRESSION POINT(-1,0) POSSIBLE MAIS #\x1b[0m`);
        console.log(`\x1b[31m##    PAS UPDATE DES TABLEAUX ANNEXES    #\x1b[0m`);
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[36mlet point4 = new Point(-1,0);\x1b[0m`);
        console.log(`\x1b[36mpoint4.setID(-1);\x1b[0m`);
        console.log(`\x1b[36marea.updateArea(point4);\x1b[0m`);
        let point4 = new Point(-1, 0);
        point4.setID(-1);
        area.updateArea(point4);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m## SUPPRESSION POINT(1,0) POSSIBLE MAIS ##\x1b[0m`);
        console.log(`\x1b[31m##   AVEC UPDATE DES TABLEAUX ANNEXES   ##\x1b[0m`);
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[36mlet point5 = new Point(1,0);\x1b[0m`);
        console.log(`\x1b[36mpoint5.setID(1);\x1b[0m`);
        console.log(`\x1b[36marea.updateArea(point5);\x1b[0m`);
        let point5 = new Point(1, 0);
        point5.setID(1);
        area.updateArea(point5);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();


        function print() {
            console.log(`\x1b[35m\narea :\x1b[32m`);
            for (let i = 0; i < area.getArea().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getArea()[i].toString()} / id = ${area.getArea()[i].getID()}`);
            }
            console.log(`\x1b[35m\nfreeCellTab :\x1b[32m`);
            for (let i = 0; i < area.getFreeCellTab().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getFreeCellTab()[i].toString()} / id = ${area.getFreeCellTab()[i].getID()}`);
            }
            console.log(`\x1b[35m\ninsideArea :\x1b[32m`);
            for (let i = 0; i < area.getInsideArea().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getInsideArea()[i]}`);
            }
            console.log(`\x1b[0m`);
        }
    }

    testClassArea_moveToFirstFreeCell() {
        console.log(`\x1b[31m\n##########################################\x1b[0m`);
        console.log(`\x1b[31m####### CREATION D'UNE ZONE DE JEU #######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36mlet area = new Area(3, 2);\x1b[0m`);
        let area = new Area(3, 2);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m############ AJOUT DE 3 POINTS ###########\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`Un point a cote de l'origine :`);
        console.log(`\x1b[36mlet point_1 = new Point(1,0);\x1b[0m`);
        console.log(`\x1b[36mpoint_1.setID(1);\x1b[0m`);
        console.log(`\x1b[36marea.updateArea(point_1);\x1b[0m`);
        let point_1 = new Point(1, 0);
        point_1.setID(1);
        area.updateArea(point_1);
        console.log(`\nUn point en dehors de l'aire :`);
        console.log(`\x1b[36mlet point_2 = new Point(4,5);\x1b[0m`);
        console.log(`\x1b[36mpoint_2.setID(-9);\x1b[0m`);
        console.log(`\x1b[36marea.updateArea(point_2);\x1b[0m`);
        let point_2 = new Point(4, 5);
        point_2.setID(-9);
        area.updateArea(point_2);
        console.log(`\nUn point dans la zone de jeu :`);
        console.log(`\x1b[36mlet point_3 = new Point(1,1);\x1b[0m`);
        console.log(`\x1b[36mpoint_3.setID(3);\x1b[0m`);
        console.log(`\x1b[36marea.updateArea(point_3);\x1b[0m`);
        let point_3 = new Point(1, 1);
        point_3.setID(3);
        area.updateArea(point_3);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m########## MOVETOFIRSTFREECELL 1 #########\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`Deplacement du point exterieur (point_2) :`);
        console.log(`\x1b[36marea.moveToFirstFreeCell(point_2);\x1b[0m`);
        area.moveToFirstFreeCell(point_2);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m########## MOVETOFIRSTFREECELL 2 #########\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`Deplacement du point d'origine (0,0) : // IMPOSSIBLE NORMALEMENT`);
        console.log(`\x1b[36marea.moveToFirstFreeCell(area.getArea()[0]);\x1b[0m`);
        area.moveToFirstFreeCell(area.getArea()[0]);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m########## MOVETOFIRSTFREECELL 3 #########\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`Deplacement du point (0,1) pour creer un trou : // IMPOSSIBLE NORMALEMENT`);
        console.log(`\x1b[36marea.moveToFirstFreeCell(point_2);\x1b[0m`);
        console.log(`Valeur de point_2 : ${point_2.toString()} et id = ${point_2.getID()}`);
        area.moveToFirstFreeCell(point_2);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m########## MOVETOFIRSTFREECELL 4 #########\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`Deplacement du point (1,1) : // UPDATE TOUS LES TABLEAUX`);
        console.log(`\x1b[36marea.moveToFirstFreeCell(point_3);\x1b[0m`);
        console.log(`Valeur de point_3 : ${point_3.toString()} et id = ${point_3.getID()}`);
        area.moveToFirstFreeCell(point_3);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        function print() {
            console.log(`\x1b[35m\narea :\x1b[32m`);
            for (let i = 0; i < area.getArea().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getArea()[i].toString()} / id = ${area.getArea()[i].getID()}`);
            }
            console.log(`\x1b[35m\nfreeCellTab :\x1b[32m`);
            for (let i = 0; i < area.getFreeCellTab().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getFreeCellTab()[i].toString()} / id = ${area.getFreeCellTab()[i].getID()}`);
            }
            console.log(`\x1b[35m\ninsideArea :\x1b[32m`);
            for (let i = 0; i < area.getInsideArea().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getInsideArea()[i]}`);
            }
            console.log(`\x1b[0m`);
        }
    }

    testClassArea_addPoint() {
        console.log(`\x1b[31m\n##########################################\x1b[0m`);
        console.log(`\x1b[31m####### CREATION D'UNE ZONE DE JEU #######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36mlet area = new Area(2, 2);\x1b[0m`);
        let area = new Area(2, 2);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m# AJOUT DE 1 POINT SUR UN POINT EXISTANT #\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36marea.addPoint(new Point(0,0));\x1b[0m`);
        area.addPoint(new Point(0, 0));
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m#  AJOUT DE 1 POINT DANS LA ZONE DE JEU  #\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36marea.addPoint(new Point(1,1));\x1b[0m`);
        area.addPoint(new Point(1, 1));
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m#  AJOUT DE 1 POINT HORS LA ZONE DE JEU  #\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36marea.addPoint(new Point(2,2));\x1b[0m`);
        area.addPoint(new Point(2, 2));
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m#    POINT SUPPLEMENTAIRE IMPOSSIBLE  1  #\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36marea.addPoint(new Point(0,1));\x1b[0m`);
        area.addPoint(new Point(0, 1));
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m#    POINT SUPPLEMENTAIRE IMPOSSIBLE  2  #\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36marea.addPoint(new Point(0,0));\x1b[0m`);
        area.addPoint(new Point(0, 0));
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m#    POINT SUPPLEMENTAIRE IMPOSSIBLE  3  #\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36marea.addPoint(new Point(4,4));\x1b[0m`);
        area.addPoint(new Point(0, 1));
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        function print() {
            console.log(`\x1b[35m\narea :\x1b[32m`);
            for (let i = 0; i < area.getArea().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getArea()[i].toString()} / id = ${area.getArea()[i].getID()}`);
            }
            console.log(`\x1b[35m\nfreeCellTab :\x1b[32m`);
            for (let i = 0; i < area.getFreeCellTab().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getFreeCellTab()[i].toString()} / id = ${area.getFreeCellTab()[i].getID()}`);
            }
            console.log(`\x1b[35m\ninsideArea :\x1b[32m`);
            for (let i = 0; i < area.getInsideArea().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getInsideArea()[i]}`);
            }
            console.log(`\x1b[0m`);
        }
    }

    testClassArea_movePoint() {
        console.log(`\x1b[31m\n##########################################\x1b[0m`);
        console.log(`\x1b[31m####### CREATION D'UNE ZONE DE JEU #######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36mlet area = new Area(2, 2);\x1b[0m`);
        let area = new Area(2, 2);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m############ AJOUT DE 3 POINTS ###########\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`Un point a cote de l'origine :`);
        console.log(`\x1b[36mlet point_1 = new Point(1,0);\x1b[0m`);
        console.log(`\x1b[36mpoint_1.setID(1);\x1b[0m`);
        console.log(`\x1b[36marea.updateArea(point_1);\x1b[0m`);
        let point_1 = new Point(1, 0);
        point_1.setID(1);
        area.updateArea(point_1);
        console.log(`\nUn point en dehors de l'aire :`);
        console.log(`\x1b[36mlet point_2 = new Point(4,5);\x1b[0m`);
        console.log(`\x1b[36mpoint_2.setID(-9);\x1b[0m`);
        console.log(`\x1b[36marea.updateArea(point_2);\x1b[0m`);
        let point_2 = new Point(4, 5);
        point_2.setID(-9);
        area.updateArea(point_2);
        console.log(`\nUn point dans la zone de jeu :`);
        console.log(`\x1b[36mlet point_3 = new Point(1,1);\x1b[0m`);
        console.log(`\x1b[36mpoint_3.setID(3);\x1b[0m`);
        console.log(`\x1b[36marea.updateArea(point_3);\x1b[0m`);
        let point_3 = new Point(1, 1);
        point_3.setID(3);
        area.updateArea(point_3);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m#####  MOVE 1 INSIDE TO BUSY CELL   ######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`Move du point (1,0) vers (4,5) : deplacement impossible car peut creer un trou`);
        console.log(`\x1b[36marea.movePoint(point_1, 4, 5);\x1b[0m`);
        area.movePoint(point_1, 4, 5);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m#####  MOVE 2 INSIDE TO BUSY CELL 2  #####\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`Move du point (1,1) vers (4,5) : devrait atterir en (0,1)`);
        console.log(`\x1b[36marea.movePoint(point_3, 4, 5);\x1b[0m`);
        console.log(`\x1b[36mconsole.log(point_3.toString());\x1b[0m`);
        console.log(point_3.toString());
        area.movePoint(point_3, 4, 5);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m#######  MOVE 3 INSIDE TO INSIDE   #######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`Move du point (1,0) vers (1,1) : devrait atterir en (1,1)`);
        console.log(`\x1b[36marea.movePoint(point_1, 1, 1);\x1b[0m`);
        console.log(`\x1b[36mconsole.log(point_1.toString());\x1b[0m`);
        console.log(point_1.toString());
        area.movePoint(point_1, 1, 1);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m#######  MOVE 4 INSIDE TO OUTSIDE   #######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`Move du point (1,1) vers (-1,0) : devrait atterir en (-1,0)`);
        console.log(`\x1b[36marea.movePoint(point_1, -1, 0);\x1b[0m`);
        console.log(`\x1b[36mconsole.log(point_1.toString());\x1b[0m`);
        console.log(point_1.toString());
        area.movePoint(point_1, -1, 0);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m######  MOVE 5 OUTSIDE TO OUTSIDE   ######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`Move du point (-1,0) vers (6,6) : devrait atterir en (6,6)`);
        console.log(`\x1b[36marea.movePoint(point_1, 6, 6);\x1b[0m`);
        console.log(`\x1b[36mconsole.log(point_1.toString());\x1b[0m`);
        console.log(point_1.toString());
        area.movePoint(point_1, 6, 6);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m#######  MOVE 6 OUTSIDE TO INSIDE  #######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`Move du point (6,6) vers (1,1) : devrait atterir en (1,1)`);
        console.log(`\x1b[36marea.movePoint(point_1, 1, 1);\x1b[0m`);
        console.log(`\x1b[36mconsole.log(point_1.toString());\x1b[0m`);
        console.log(point_1.toString());
        area.movePoint(point_1, 1, 1);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m#######  MOVE 7 OUTSIDE TO INSIDE  #######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`Move du point (4,5) vers (1,1) : devrait atterir en (1,0) care deja occupee`);
        console.log(`\x1b[36marea.movePoint(area.getArea()[0], 1, 1);\x1b[0m`);
        console.log(`\x1b[36mconsole.log(area.getArea()[0].toString());\x1b[0m`);
        console.log(area.getArea()[0].toString());
        area.movePoint(area.getArea()[0], 1, 1);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m##########################################\x1b[0m`);
        console.log(`\x1b[31m#######  MOVE 8 ORIGINE TO OUTSIDE  ######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`Move du point (0,0) vers (2,2) : devrait rien faire...`);
        console.log(`\x1b[36marea.movePoint(area.getArea()[0], 2, 2);\x1b[0m`);
        console.log(`\x1b[36mconsole.log(area.getArea()[0].toString());\x1b[0m`);
        console.log(area.getArea()[0].toString());
        area.movePoint(area.getArea()[0], 2, 2);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        function print() {
            console.log(`\x1b[35m\narea :\x1b[32m`);
            for (let i = 0; i < area.getArea().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getArea()[i].toString()} / id = ${area.getArea()[i].getID()}`);
            }
            console.log(`\x1b[35m\nfreeCellTab :\x1b[32m`);
            for (let i = 0; i < area.getFreeCellTab().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getFreeCellTab()[i].toString()} / id = ${area.getFreeCellTab()[i].getID()}`);
            }
            console.log(`\x1b[35m\ninsideArea :\x1b[32m`);
            for (let i = 0; i < area.getInsideArea().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getInsideArea()[i]}`);
            }
            console.log(`\x1b[0m`);
        }
    }

    testClassArea_needAllInside() {
        console.log(`\x1b[31m\n##########################################\x1b[0m`);
        console.log(`\x1b[31m####### CREATION D'UNE ZONE DE JEU #######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`\x1b[36mlet area = new Area(3, 3);\x1b[0m`);
        let area = new Area(3, 3);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m\n##########################################\x1b[0m`);
        console.log(`\x1b[31m####### AJOUT DE 5 POINTS  OUTSIDE #######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        area.addPoint(new Point(-51, 235));
        area.addPoint(new Point(61, 532));
        area.addPoint(new Point(-72, 425));
        area.addPoint(new Point(8, 5242));
        area.addPoint(new Point(9, -53));
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m\n##########################################\x1b[0m`);
        console.log(`\x1b[31m####### TEST FONCTION NEEDALLINSIDE ######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`${area.needAllInside()} points ont ete remis a l'interieur`);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m\n##########################################\x1b[0m`);
        console.log(`\x1b[31m###### AJOUT DE 3 POINTS  IN & OUT #######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        area.addPoint(new Point(-51, 235));
        area.addPoint(new Point(61, 532));
        area.addPoint(new Point(2, 2));
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();
        console.log(`\x1b[31m\n##########################################\x1b[0m`);
        console.log(`\x1b[31m####### TEST FONCTION NEEDALLINSIDE ######\x1b[0m`);
        console.log(`\x1b[31m##########################################\n\x1b[0m`);
        console.log(`${area.needAllInside()} points ont ete remis a l'interieur`);
        console.log(`\x1b[33m\nAffichage des attributs de Area :\x1b[0m`);
        print();

        function print() {
            console.log(`\x1b[35m\narea :\x1b[32m`);
            for (let i = 0; i < area.getArea().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getArea()[i].toString()} / id = ${area.getArea()[i].getID()}`);
            }
            console.log(`\x1b[35m\nfreeCellTab :\x1b[32m`);
            for (let i = 0; i < area.getFreeCellTab().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getFreeCellTab()[i].toString()} / id = ${area.getFreeCellTab()[i].getID()}`);
            }
            console.log(`\x1b[35m\ninsideArea :\x1b[32m`);
            for (let i = 0; i < area.getInsideArea().length; i++) {
                console.log(`\x1b[0mIndex ${i} : \x1b[32m${area.getInsideArea()[i]}`);
            }
            console.log(`\x1b[0m`);
        }
    }

    benchmark() {
        console.log(`\n\x1b[33m########## DEBUT BENCHMARK ##########\x1b[0m\n`)
        //Declaration area et variable pour instancier les points
        let area = new Area(100, 100);
        let i = 0;
        let x = -1;
        let y = -1;


        console.log(`Taille totale d'area : \x1b[32m${area.getAreaSize()}\x1b[0m\n`);

        console.log(`___________________________________________________`);
        let heureDebutGenerationPoint = new Date();
        console.log(`Debut de la generation des points : \x1b[32m${heureDebutGenerationPoint.toISOString().substring(11, 19)}\x1b[0m`);
        while (i < 9999) {
            if (area.getArea().length === 1)
                console.log(`\x1b[35m\nDebut generation Tableau (dans la boucle)\x1b[0m`);
            area.addPoint(new Point(x, y));
            x--;
            y--;
            i++;
            if (area.getArea().length === 10000)
                console.log(`\x1b[35mFin generation Tableau (dans la boucle)\x1b[0m\n`);
        }
        let heureFinGenerationPoint = new Date();
        console.log(`Fin de la generation des points   : \x1b[32m${heureFinGenerationPoint.toISOString().substring(11, 19)}\x1b[0m`);
        console.log(`Temps de generation des points    : \x1b[32m${(heureFinGenerationPoint.getTime() - heureDebutGenerationPoint.getTime()) / 1000}\x1b[0m secondes`);
        console.log(`___________________________________________________\n`);

        let heureDebutNeedAll = new Date();
        console.log(`Debut de needAllInside     : \x1b[32m${heureDebutNeedAll.toISOString().substring(11, 19)}\x1b[0m`);
        let nbMovedCell = area.needAllInside();
        let heureFinNeedAll = new Date();
        console.log(`Fin de needAllInside       : \x1b[32m${heureFinNeedAll.toISOString().substring(11, 19)}\x1b[0m`);
        console.log(`Temps de execution needAll : \x1b[32m${(heureFinNeedAll.getTime() - heureDebutNeedAll.getTime()) / 1000}\x1b[0m secondes`)
        console.log(`___________________________________________________\n`);

        console.log(`Points deplacés : \x1b[32m${nbMovedCell}\x1b[0m`);
        console.log(`\n\x1b[33m########### FIN BENCHMARK ##########\x1b[0m`)
    }

    benchmarkHardcoreMode() {
        console.log(`\n\x1b[33m########## DEBUT BENCHMARK ##########\x1b[0m\n`)
        //Declaration area et variable pour instancier les points
        let area = new Area(1000, 1000);
        let i = 0;
        let x = -1;
        let y = -1;


        console.log(`Taille totale d'area : \x1b[32m${area.getAreaSize()}\x1b[0m\n`);

        console.log(`___________________________________________________`);
        let heureDebutGenerationPoint = new Date();
        console.log(`Debut de la generation des points : \x1b[32m${heureDebutGenerationPoint.toISOString().substring(11, 19)}\x1b[0m`);
        while (i < 999999) {
            if (area.getArea().length === 1)
                console.log(`\x1b[35m\nDebut generation Tableau (dans la boucle)\x1b[0m`);
            area.addPoint(new Point(x, y));
            x--;
            y--;
            i++;
            if (area.getArea().length === 1000000)
                console.log(`\x1b[35mFin generation Tableau (dans la boucle)\x1b[0m\n`);
        }
        let heureFinGenerationPoint = new Date();
        console.log(`Fin de la generation des points   : \x1b[32m${heureFinGenerationPoint.toISOString().substring(11, 19)}\x1b[0m`);
        console.log(`Temps de generation des points    : \x1b[32m${(heureFinGenerationPoint.getTime() - heureDebutGenerationPoint.getTime()) / 1000}\x1b[0m secondes`);
        console.log(`___________________________________________________\n`);

        let heureDebutNeedAll = new Date();
        console.log(`Debut de needAllInside     : \x1b[32m${heureDebutNeedAll.toISOString().substring(11, 19)}\x1b[0m`);
        let nbMovedCell = area.needAllInside();
        let heureFinNeedAll = new Date();
        console.log(`Fin de needAllInside       : \x1b[32m${heureFinNeedAll.toISOString().substring(11, 19)}\x1b[0m`);
        console.log(`Temps de execution needAll : \x1b[32m${(heureFinNeedAll.getTime() - heureDebutNeedAll.getTime()) / 1000}\x1b[0m secondes`)
        console.log(`___________________________________________________\n`);

        console.log(`Points deplacés : \x1b[32m${nbMovedCell}\x1b[0m`);
        console.log(`\n\x1b[33m########### FIN BENCHMARK ##########\x1b[0m`)
    }

}

module.exports = Test;