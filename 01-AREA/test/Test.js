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

    testClassArea_UpdateInsideArea(){
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
        let point = new Point(1,0);
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

}

module.exports = Test;