    /**function puissanceMain(main){

        if (main.length == 0) throw new Error("Main vide");
        let sum = main.reduce((x, y) => x + getValue(y.valeur), 0);

        return {
            total: sum,
            meilleure: getHighestCard(main),
        }
    }

    function getHighestCard(main) {
        let max = {valeur: 0};
        for (let currentCard of main) {
            let currentValue = getValue(currentCard.valeur);
            if (currentValue >= max.valeur) {
                max = JSON.parse(JSON.stringify(currentCard));
            }
        }
        return max;
    }

    function getValue(value) {

        if (value === 'Roi' || value === 'Valet' || value === 'Dame') {
            return 10;
        } else if (value === 'As') {
            return 11;
        } else {
            return parseInt(value);
        }
    }**/

    /**function chaineMain(main){
        console.log(main.valueOf());
        if (main === undefined || main.length == 0) return "";
        let data = Array.from(new Set(main.map(JSON.stringify))).map(JSON.parse);

        let secondSorted = data.sort((carteA, carteB) => getValue(carteA.valeur) - getValue(carteB.valeur));

        let firstSorted = secondSorted.sort((typeA, typeB) => typeA.couleur.localeCompare(typeB.couleur));


        let finalMap = firstSorted.map(e => `${e.valeur} de ${e.couleur}`).join(', ');
        console.log(finalMap.valueOf())
    }


    function getValue(value) {
        if (value === 'Roi' || value === 'Valet' || value === 'Dame') {
            return 10;
        } else if (value === 'As') {
            return 11;
        } else {
            return parseInt(value);
        }
    }**/


    /**
     * retire(): qui reçoit le nom du groupe et un ou plusieurs étudiants à retirer dans le groupe;
     *          si le groupe n'existe pas ou si l'étudiant n'existe pas ou n'est pas présent dans le groupe,
     *          le retrait est simplement sans impact sur la répartition.
     *          si le groupe ne contient plus d'étudiant, il est supprimé.
     *          Exemple d'appel: retire('G8', 'e253570', 'm232414', 'azref427');
     *     - etudiants(): qui reçoit le nom du groupe et retourne une chaine contenant les matricules des
     *          étudiants membres du groupe, triés par ordre alphabétique et séparés par des virgules.
     *          Si le groupe n'existe pas ou s'il ne contient aucun étudiant, la chaine retournée est alors '---'.
     *          Exemple d'appel: etudiants('G9');  // retourne 'a135756,x573212'
     * @type {Map<any, any>}
     */
    let repartition = new Map();

        //complétez la signature de la fonction
        function attribue(groupName, ...students) {
            if(repartition.has(groupName)) {
                let currentValue;
                currentValue = repartition.get(groupName);
                for (let student of students) {
                    deleteStudentInOtherGroups(student);
                }
                repartition.set(groupName, currentValue.add(...students));
            } else {
                let allStudents = new Set();
                if (students.length !== 0) repartition.set(groupName, allStudents.add(...students));
            }
        }

        function deleteStudentInOtherGroups(student){
            let z = repartition.entries();
            for (let currentElement of z)
                currentElement[1].delete(student);
        }

        //complétez la signature de la fonction
        function retire(groupName, ...students) {

            if(!repartition.has(groupName) || repartition.get(groupName) === undefined) return;

            for (let currentStudent of students)
                repartition.get(groupName).delete(currentStudent);

            if (repartition.get(groupName).length === 0)
                repartition.delete(groupName);
        }

        function etudiants(groupe){
            if (!repartition.has(groupe) || repartition.get(groupe).length === 0) return "---";


            let array = Array.from(repartition.get(groupe).values());
            let sortedArray = array.sort((studentA, studentB) => studentA.localeCompare(studentB));


            return sortedArray.map(e => `${e}`).join(', ')
        }




