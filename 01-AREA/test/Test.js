const Point = require(`../models/Point.js`);

/**
 * Programme "Point"
 */
class Test{
    test1(){
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
}

module.exports = Test;