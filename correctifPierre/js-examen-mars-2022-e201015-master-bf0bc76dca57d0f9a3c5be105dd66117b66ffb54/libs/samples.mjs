export {sampleWords, sampleGameForSpy, sampleGameForOfficer}

let sampleWords = [
    "vin",
    "russie",
    "roi",
    "chance",
    "somme",
    "chance",
    "clé",
    "cartouche",
    "titre",
    "roudoudou",
    "essence",
    "maîtresse",
    "œuf",
    "géant",
    "vie",
    "cinéma",
    "flûte",
    "lien",
    "point",
    "bretelle",
    "poste",
    "manche",
    "fraise",
    "appareil",
    "tableau",
    "zéro",
    "centre",
    "chaîne",
    "botte",
    "fantôme",
    "jumelles",
    "charge",
    "rame",
    "recette",
    "siège",
    "bureau",
    "religieuse",
    "note",
    "éponge",
    "critique",
    "vague",
    "jet",
    "campagne",
    "bouton",
    "bougie",
    "tuile",
    "vaisseau",
    "court",
    "fer",
    "dinosaure",
    "roulette",
    "marron",
    "lettre",
    "passe",
    "canne",
    "police",
    "danse",
    "blé",
    "code",
    "ange",
    "scéne",
    "café",
    "magie",
    "avion",
    "bœuf",
    "eau",
    "bouteille",
    "reine",
    "papier",
    "lion",
    "banque",
    "pomme",
    "champagne",
    "chine",
    "souris",
    "anneau",
    "mode",
    "nain",
    "canon",
    "plat",
    "napoléon",
    "australie",
    "trou",
    "classe",
    "étoile",
    "table",
    "plante",
    "marque",
    "perle",
    "marche",
    "new-york",
    "alpes",
    "queue",
    "foyer",
    "poire",
    "boulet",
    "bouchon",
    "machine",
    "marin",
    "forêt",
    "jour",
    "main",
    "palme",
    "langue",
    "poison",
    "licorne",
    "ninja",
    "londres",
    "base",
    "pêche",
    "paille",
    "facteur",
    "cœur",
    "droite",
    "bateau",
    "pouce",
    "pile",
    "espace",
    "bar",
    "plante",
    "club",
    "cabinet",
    "air",
    "prise",
    "ampoule",
    "patron",
    "atout",
    "barre",
    "baquette",
    "afrique",
    "lentille",
    "asile",
    "grue",
    "enceinte",
    "solution",
    "chou",
    "angleterre",
    "pigeon",
    "résistance",
    "égypte",
    "voleur",
    "guerre",
    "princesse",
    "bière",
    "front",
    "rouleau",
    "vase",
    "droit",
    "échelle",
    "hiver",
    "vision",
    "pièce",
    "farce",
    "cycle",
    "araignée",
    "aile",
    "voiture",
    "docteur",
    "but",
    "radio",
    "tube",
    "lit",
    "course",
    "orange",
    "membre",
    "linge",
    "commerce",
    "talon",
    "nœud",
    "argent",
    "courant",
    "noir",
    "bouche",
    "soleil",
    "couronne",
    "carte",
    "filet",
    "colle",
    "amérique",
    "molière",
    "Allemagne",
    "schtroumpf",
    "bourse",
    "quartier",
    "baleine",
    "citrouille",
    "plage",
    "vert",
    "poisson",
    "livre",
    "toile",
    "couteau",
    "voile",
    "ensemble",
    "rouge",
    "corde",
    "formule",
    "fuite",
    "noël",
    "casino",
    "rose",
    "pilote",
    "carton",
    "moule",
    "bûche",
    "mort",
    "temps",
    "restaurant",
    "balle",
    "parachute",
    "tambour",
    "cellule",
    "camembert",
    "français",
    "verre",
    "cochon",
    "raie",
    "boïte",
    "luxe",
    "canada",
    "majeur",
    "sens",
    "piano",
    "ceinture",
    "pensée",
    "baie",
    "plume",
    "espion",
    "sirène",
    "bâton",
    "chausson",
    "pyramide",
    "arc",
    "cafard",
    "lumière",
    "astérix",
    "miel",
    "serpent",
    "vampire",
    "canard",
    "sept",
    "aiguille",
    "œil",
    "branche",
    "génie",
    "opéra",
    "terre",
    "laser",
    "coq",
    "Espagne",
    "banane",
    "phare",
    "page",
    "uniforme",
    "cirque",
    "millionnaire",
    "alien",
    "sorcière",
    "satellite",
    "kangourou",
    "grenade",
    "brique",
    "chocolat",
    "robot",
    "lune",
    "moustache",
    "opération",
    "planche",
    "chapeau",
    "feu",
    "sol",
    "chemise",
    "château",
    "requin",
    "tour",
    "champ",
    "physique",
    "avocat",
    "menu",
    "couverture",
    "partie",
    "poêle",
    "coton",
    "temple",
    "révolution",
    "rome",
    "numéro",
    "mousse",
    "pendule",
    "don",
    "gel",
    "garde",
    "guide",
    "banc",
    "héros",
    "pingouin",
    "pied",
    "journal",
    "herbe",
    "orange",
    "timbre",
    "coupe",
    "meuble",
    "figure",
    "microscope",
    "pirate",
    "lunettes",
    "sortie",
    "étude",
    "kiwi",
    "himalaya",
    "paris",
    "berlin",
    "indien",
    "vol",
    "chef",
    "hôpital",
    "chasse",
    "corne",
    "mineur",
    "ferme",
    "glace",
    "histoire",
    "jeu",
    "plateau",
    "bombe",
    "manège",
    "mémoire",
    "feuille",
    "gorge",
    "peste",
    "fort",
    "fou",
    "nuit",
    "pétrole",
    "neige",
    "ronde",
    "grain",
    "tennis",
    "oiseau",
    "tokyo",
    "grèce",
    "sardine",
    "remise",
    "science",
    "visage",
    "école",
    "lait",
    "rayon",
    "prêt",
    "rat",
    "pôle",
    "col",
    "ordre",
    "trait",
    "cuisine",
    "gauche",
    "règle",
    "éclair",
    "balance",
    "chat",
    "cercle",
    "fin",
    "pompe",
    "soldat",
    "ballon",
    "portable",
    "carrière",
    "place",
    "mouche",
    "vent",
    "cheval",
    "palais",
    "bande",
    "chevalier",
    "crochet",
    "maladie",
    "trésor",
    "esprit",
    "mars",
    "charme",
    "volume",
    "amour",
    "dragon",
    "bon",
    "liquide",
    "mine",
    "entrée",
    "carreau",
    "louche",
    "chien",
    "robe",
    "europe",
    "hollywood",
    "iris",
    "bête",
    "jungle",
    "hôtel",
    "égalité",
    "atlantique"
];

let sampleGameForOfficer = {
    "user": "p150107",
    "idGame": "piSPiSgCC6LruV6PEEuc",
    "turn": 3,
    "keyCard": [],
    "keyCardColor": "red",
    "wordCells": [
        {
            "position": 0,
            "color": "red",
            "_word": "PALME"
        },
        {
            "position": 1,
            "color": "unknown",
            "_word": "PIANO"
        },
        {
            "position": 2,
            "color": "blue",
            "_word": "CHAT"
        },
        {
            "position": 3,
            "color": "unknown",
            "_word": "MANCHE"
        },
        {
            "position": 4,
            "color": "unknown",
            "_word": "CROCHET"
        },
        {
            "position": 5,
            "color": "unknown",
            "_word": "SIRÈNE"
        },
        {
            "position": 6,
            "color": "unknown",
            "_word": "AILE"
        },
        {
            "position": 7,
            "color": "unknown",
            "_word": "BASE"
        },
        {
            "position": 8,
            "color": "unknown",
            "_word": "MILLIONNAIRE"
        },
        {
            "position": 9,
            "color": "unknown",
            "_word": "FUITE"
        },
        {
            "position": 10,
            "color": "blue",
            "_word": "LIT"
        },
        {
            "position": 11,
            "color": "unknown",
            "_word": "CHARGE"
        },
        {
            "position": 12,
            "color": "unknown",
            "_word": "FIGURE"
        },
        {
            "position": 13,
            "color": "unknown",
            "_word": "FACTEUR"
        },
        {
            "position": 14,
            "color": "red",
            "_word": "RESTAURANT"
        },
        {
            "position": 15,
            "color": "red",
            "_word": "BÛCHE"
        },
        {
            "position": 16,
            "color": "unknown",
            "_word": "ASILE"
        },
        {
            "position": 17,
            "color": "unknown",
            "_word": "MALADIE"
        },
        {
            "position": 18,
            "color": "neutral",
            "_word": "BÂTON"
        },
        {
            "position": 19,
            "color": "unknown",
            "_word": "VISAGE"
        },
        {
            "position": 20,
            "color": "unknown",
            "_word": "CIRQUE"
        },
        {
            "position": 21,
            "color": "unknown",
            "_word": "PLANCHE"
        },
        {
            "position": 22,
            "color": "unknown",
            "_word": "MEMBRE"
        },
        {
            "position": 23,
            "color": "red",
            "_word": "CHANCE"
        },
        {
            "position": 24,
            "color": "unknown",
            "_word": "COUPE"
        }
    ],
    "clue": "NAGEOIRE",
    "clueNbr": 2
};

let sampleGameForSpy = {
    "user": "p150107",
    "idGame": "piSPiSgCC6LruV6PEEuc",
    "idSpy": "B8zXJt",
    "turn": 3,
    "keyCard": [
        {
            "position": 0,
            "color": "red"
        },
        {
            "position": 1,
            "color": "red"
        },
        {
            "position": 2,
            "color": "blue"
        },
        {
            "position": 3,
            "color": "red"
        },
        {
            "position": 4,
            "color": "neutral"
        },
        {
            "position": 5,
            "color": "blue"
        },
        {
            "position": 6,
            "color": "blue"
        },
        {
            "position": 7,
            "color": "red"
        },
        {
            "position": 8,
            "color": "neutral"
        },
        {
            "position": 9,
            "color": "neutral"
        },
        {
            "position": 10,
            "color": "blue"
        },
        {
            "position": 11,
            "color": "blue"
        },
        {
            "position": 12,
            "color": "neutral"
        },
        {
            "position": 13,
            "color": "blue"
        },
        {
            "position": 14,
            "color": "red"
        },
        {
            "position": 15,
            "color": "red"
        },
        {
            "position": 16,
            "color": "neutral"
        },
        {
            "position": 17,
            "color": "blue"
        },
        {
            "position": 18,
            "color": "neutral"
        },
        {
            "position": 19,
            "color": "red"
        },
        {
            "position": 20,
            "color": "neutral"
        },
        {
            "position": 21,
            "color": "blue"
        },
        {
            "position": 22,
            "color": "red"
        },
        {
            "position": 23,
            "color": "red"
        },
        {
            "position": 24,
            "color": "killer"
        }
    ],
    "keyCardColor": "red",
    "wordCells": [
        {
            "position": 0,
            "color": "red",
            "_word": "PALME"
        },
        {
            "position": 1,
            "color": "unknown",
            "_word": "PIANO"
        },
        {
            "position": 2,
            "color": "blue",
            "_word": "CHAT"
        },
        {
            "position": 3,
            "color": "unknown",
            "_word": "MANCHE"
        },
        {
            "position": 4,
            "color": "unknown",
            "_word": "CROCHET"
        },
        {
            "position": 5,
            "color": "unknown",
            "_word": "SIRÈNE"
        },
        {
            "position": 6,
            "color": "unknown",
            "_word": "AILE"
        },
        {
            "position": 7,
            "color": "unknown",
            "_word": "BASE"
        },
        {
            "position": 8,
            "color": "unknown",
            "_word": "MILLIONNAIRE"
        },
        {
            "position": 9,
            "color": "unknown",
            "_word": "FUITE"
        },
        {
            "position": 10,
            "color": "blue",
            "_word": "LIT"
        },
        {
            "position": 11,
            "color": "unknown",
            "_word": "CHARGE"
        },
        {
            "position": 12,
            "color": "unknown",
            "_word": "FIGURE"
        },
        {
            "position": 13,
            "color": "unknown",
            "_word": "FACTEUR"
        },
        {
            "position": 14,
            "color": "red",
            "_word": "RESTAURANT"
        },
        {
            "position": 15,
            "color": "red",
            "_word": "BÛCHE"
        },
        {
            "position": 16,
            "color": "unknown",
            "_word": "ASILE"
        },
        {
            "position": 17,
            "color": "unknown",
            "_word": "MALADIE"
        },
        {
            "position": 18,
            "color": "neutral",
            "_word": "BÂTON"
        },
        {
            "position": 19,
            "color": "unknown",
            "_word": "VISAGE"
        },
        {
            "position": 20,
            "color": "unknown",
            "_word": "CIRQUE"
        },
        {
            "position": 21,
            "color": "unknown",
            "_word": "PLANCHE"
        },
        {
            "position": 22,
            "color": "unknown",
            "_word": "MEMBRE"
        },
        {
            "position": 23,
            "color": "red",
            "_word": "CHANCE"
        },
        {
            "position": 24,
            "color": "unknown",
            "_word": "COUPE"
        }
    ],
    "clue": "NAGEOIRE",
    "clueNbr": 2
}