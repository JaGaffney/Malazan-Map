export interface ICharacter {
    name: Array<string>;
    race: string;
    role: string;
    series: Array<string>; //MBOTF, NOME, PATH, WITNESS, TALES, KHAR
    affiliation: Array<string>;
}

interface ICharacters {
    [key: number]: ICharacter;
}
const characters: ICharacters = {
    1: {
        name: ["Ganoes Paran"],
        race: "human",

        role: "Soldier",
        series: ["MBOTF"],
        affiliation: ["Malazan Empire", "Bonehunters"],
    },
    2: {
        name: ["Apsala", "Sorry"],
        race: "ascended",

        role: "Assassin",
        series: ["MBOTF"],
        affiliation: ["Malazan Empire"],
    },
    3: {
        name: ["Tattersail", "Silverfox"],
        race: "ascended",

        role: "Mage",
        series: ["MBOTF", "NOME", "PATH"],
        affiliation: ["Malazan Empire", "Imass"],
    },
    4: {
        name: ["Quick Ben"],
        race: "human",

        role: "Mage",
        series: ["MBOTF"],
        affiliation: ["Malazan Empire", "Bonehunters"],
    },
    5: {
        name: ["Whiskeyjack", "Jack", "Iskar Jarak"],
        race: "human",

        role: "Soldier",
        series: ["MBOTF", "PATH"],
        affiliation: ["Malazan Empire"],
    },
    6: {
        name: ["Hairlock"],
        race: "human",

        role: "Mage",
        series: ["MBOTF", "PATH"],
        affiliation: ["Malazan Empire"],
    },
    7: {
        name: ["Toc the Younger", "Toc Anaster"],
        race: "human",

        role: "Soldier",
        series: ["MBOTF", "PATH"],
        affiliation: ["Malazan Empire"],
    },
    8: {
        name: ["Anomander Rake", "Anomandaris Purake"],
        race: "Tiste Andii",

        role: "Mage",
        series: ["MBOTF", "NOME", "PATH", "KHAR"],
        affiliation: ["High House Dark"],
    },
    9: {
        name: ["Caladan Brood"],
        race: "ascended",

        role: "Warlord",
        series: ["MBOTF", "NOME", "KHAR"],
        affiliation: [""],
    },
    10: {
        name: ["Laseen", "Surly"],
        race: "human",

        role: "Empress",
        series: ["MBOTF", "NOME", "PATH"],
        affiliation: ["Malazan Empire"],
    },
    11: {
        name: ["Kalam Mekhar"],
        race: "human",

        role: "Assassin",
        series: ["MBOTF"],
        affiliation: ["Malazan Empire", "Bonehunters"],
    },
    12: {
        name: ["Fiddler", "Strings"],
        race: "human",

        role: "Soldier",
        series: ["MBOTF"],
        affiliation: ["Malazan Empire", "Bonehunters"],
    },
    13: {
        name: ["Dujek Onearm"],
        race: "human",

        role: "Soldier",
        series: ["MBOTF", "PATH"],
        affiliation: ["Malazan Empire"],
    },
    14: {
        name: ["Crone"],
        race: "soultaken",

        role: "Mage",
        series: ["MBOTF"],
        affiliation: [],
    },
    15: {
        name: ["Crokus Younghand", "Cutter"],
        race: "human",

        role: "Thief",
        series: ["MBOTF"],
        affiliation: [],
    },
    16: {
        name: ["Kruppe"],
        race: "ascended",

        role: "Mage",
        series: ["MBOTF"],
        affiliation: [],
    },
    17: {
        name: ["Lorn"],
        race: "human",

        role: "Adjunct",
        series: ["MBOTF"],
        affiliation: ["Malazan Empire"],
    },
    18: {
        name: ["Onos T'oolan", "Tool"],
        race: "T'lan Imass",

        role: "Soldier",
        series: ["MBOTF", "PATH"],
        affiliation: ["Malazan Empire", "Logros T'lan Imass"],
    },
    19: {
        name: ["Felisin Paran", "Sha'ik"],
        race: "human",

        role: "Nobel",
        series: ["MBOTF"],
        affiliation: ["Malazan Empire", "Army of the Whirlwind"],
    },
    20: {
        name: ["Heboric"],
        race: "human",

        role: "Priest",
        series: ["MBOTF", "PATH"],
        affiliation: ["Malazan Empire"],
    },
    21: {
        name: ["Baudin"],
        race: "human",

        role: "Assassin",
        series: ["MBOTF", "PATH"],
        affiliation: ["Malazan Empire"],
    },
    22: {
        name: ["Tavore Paran"],
        race: "human",

        role: "Adjunct",
        series: ["MBOTF"],
        affiliation: ["Malazan Empire", "Bonehunters"],
    },
    23: {
        name: ["Mappo Runt"],
        race: "trell",

        role: "Guard",
        series: ["MBOTF"],
        affiliation: ["Nameless Ones"],
    },
    24: {
        name: ["Icarium"],
        race: "jaghurt",

        role: "Wanderer",
        series: ["MBOTF", "KHAR"],
        affiliation: [],
    },
    25: {
        name: ["Duiker"],
        race: "human",

        role: "Historian",
        series: ["MBOTF"],
        affiliation: ["Malazan Empire"],
    },
    26: {
        name: ["Coltaine"],
        race: "human",

        role: "Soldier",
        series: ["MBOTF", "NOME", "WITNESS"],
        affiliation: ["Malazan Empire", "Wikans"],
    },
    28: {
        name: ["Iskaral Pust"],
        race: "soultaken",

        role: "Priest",
        series: ["MBOTF"],
        affiliation: ["High House Shadow"],
    },
    29: {
        name: ["Kallor"],
        race: "human",

        role: "King",
        series: ["MBOTF", "NOME", "PATH", "KHAR"],
        affiliation: [],
    },
    30: {
        name: ["Gruntle"],
        race: "human",

        role: "Guard",
        series: ["MBOTF"],
        affiliation: [],
    },
    31: {
        name: ["K'rull"],
        race: "ascended",

        role: "God",
        series: ["MBOTF", "NOME", "PATH", "KHAR"],
        affiliation: [],
    },
    32: {
        name: ["Bauchelain"],
        race: "soletaken",

        role: "Mage",
        series: ["MBOTF", "TALES"],
        affiliation: [],
    },
    35: {
        name: ["Korbal Broach"],
        race: "soultaken",

        role: "Mage",
        series: ["MBOTF", "TALES"],
        affiliation: [],
    },
    33: {
        name: ["Lady Envy"],
        race: "ascended",

        role: "God",
        series: ["MBOTF", "NOME", "KHAR"],
        affiliation: [],
    },
    34: {
        name: ["Hetan"],
        race: "Barghast",

        role: "Soldier",
        series: ["MBOTF"],
        affiliation: [],
    },
    36: {
        name: ["Itkovian"],
        race: "human",

        role: "Soldier",
        series: ["MBOTF"],
        affiliation: [],
    },
    37: {
        name: ["Korlat"],
        race: "soultaken",

        role: "Mage",
        series: ["MBOTF", "KHAR"],
        affiliation: ["High House Dark"],
    },
    38: {
        name: ["Trull Sengar"],
        race: "tisti",

        role: "Warrior",
        series: ["MBOTF"],
        affiliation: [],
    },
    39: {
        name: ["Karsa Orlong"],
        race: "Teblor",

        role: "Warrior",
        series: ["MBOTF", "WITNESS"],
        affiliation: [],
    },
    40: {
        name: ["Admiral Nok"],
        race: "human",

        role: "Soldier",
        series: ["MBOTF", "PATH", "NOME"],
        affiliation: ["Malazan Empire"],
    },
    41: {
        name: ["Pearl"],
        race: "human",

        role: "Assassin",
        series: ["MBOTF"],
        affiliation: ["Malazan Empire"],
    },
    42: {
        name: ["Lostara Yil"],
        race: "human",

        role: "Assassin",
        series: ["MBOTF"],
        affiliation: ["Malazan Empire", "Bonehunters"],
    },
    43: {
        name: ["Gesler and Stormy"],
        race: "ascended",

        role: "Soldier",
        series: ["MBOTF"],
        affiliation: ["Malazan Empire", "Bonehunters"],
    },
    44: {
        name: ["Bottle"],
        race: "human",

        role: "Mage",
        series: ["MBOTF"],
        affiliation: ["Malazan Empire", "Bonehunters"],
    },
    45: {
        name: ["Smiles"],
        race: "human",

        role: "Soldier",
        series: ["MBOTF"],
        affiliation: ["Malazan Empire", "Bonehunters"],
    },
    46: {
        name: ["Sinn"],
        race: "human",

        role: "Mage",
        series: ["MBOTF"],
        affiliation: ["Malazan Empire", "Bonehunters"],
    },
    47: {
        name: ["Braven Tooth"],
        race: "human",

        role: "Solider",
        series: ["MBOTF", "PATH", "NOME"],
        affiliation: ["Malazan Empire"],
    },
    49: {
        name: ["Felisin Younger"],
        race: "human",

        role: "Slave",
        series: ["MBOTF"],
        affiliation: ["Army of the Whirlwind"],
    },
    50: {
        name: ["Leoman of the Flails"],
        race: "human",

        role: "Solider",
        series: ["MBOTF"],
        affiliation: ["Army of the Whirlwind"],
    },
    51: {
        name: ["L'oric"],
        race: "ascended",

        role: "Solider",
        series: ["MBOTF", "NOME"],
        affiliation: ["Army of the Whirlwind"],
    },
    52: {
        name: ["Scillara"],
        race: "human",

        role: "Slave",
        series: ["MBOTF"],
        affiliation: ["Army of the Whirlwind"],
    },
    53: {
        name: ["Corabb Bhilan Thenu'alas"],
        race: "human",

        role: "Solider",
        series: ["MBOTF"],
        affiliation: ["Army of the Whirlwind", "Bonehunters"],
    },
    54: {
        name: ["Onrack T'emlava"],
        race: "T'lan Imass",

        role: "Solider",
        series: ["MBOTF"],
        affiliation: ["Logros T'lan Imass"],
    },
    55: {
        name: ["Dassem Ultor", "Traveller"],
        race: "human",

        role: "Solider",
        series: ["MBOTF", "PATH", "NOME"],
        affiliation: ["Malazan Empire", "Dassem's First Sword"],
    },
    56: {
        name: ["Fear Sengar"],
        race: "tisti",

        role: "Warrior",
        series: ["MBOTF"],
        affiliation: [],
    },
    57: {
        name: ["Rhulad Sengar"],
        race: "tisti",

        role: "Emperor",
        series: ["MBOTF"],
        affiliation: [],
    },
    58: {
        name: ["Udinaas"],
        race: "human",

        role: "Slave",
        series: ["MBOTF"],
        affiliation: [],
    },
    59: {
        name: ["Feather Witch"],
        race: "human",

        role: "Mage",
        series: ["MBOTF"],
        affiliation: [],
    },
    60: {
        name: ["Tehol Beddict"],
        race: "human",

        role: "King",
        series: ["MBOTF"],
        affiliation: ["Kingdom of Lether"],
    },
    61: {
        name: ["Brys Beddict"],
        race: "human",

        role: "Soldier",
        series: ["MBOTF"],
        affiliation: ["Kingdom of Lether"],
    },
    62: {
        name: ["Seren Pedac"],
        race: "human",

        role: "Diplomat",
        series: ["MBOTF"],
        affiliation: ["Kingdom of Lether"],
    },
    63: {
        name: ["Yan Tovis", "Twilight"],
        race: "human",

        role: "Solider",
        series: ["MBOTF"],
        affiliation: [],
    },
    64: {
        name: ["Mael", "Bugg"],
        race: "ascended",

        role: "God",
        series: ["MBOTF", "NOME", "PATH", "KHAR"],
        affiliation: [],
    },
    65: {
        name: ["Shurq Elalle"],
        race: "undead",

        role: "Pirate",
        series: ["MBOTF"],
        affiliation: [],
    },
    66: {
        name: ["Withal", "Foreigner"],
        race: "human",

        role: "Blacksmith",
        series: ["MBOTF"],
        affiliation: [],
    },
    67: {
        name: ["Silchas Ruin"],
        race: "soletaken",

        role: "God",
        series: ["MBOTF", "KHAR"],
        affiliation: ["High House Dark"],
    },
    68: {
        name: ["Nimander"],
        race: "soletaken",

        role: "Wanderer",
        series: ["MBOTF", "KHAR"],
        affiliation: ["High House Dark"],
    },
    69: {
        name: ["Gothos"],
        race: "Jaghut",

        role: "Author",
        series: ["MBOTF", "NOME", "PATH", "KHAR"],
        affiliation: [],
    },
    70: {
        name: ["Rud Elalle"],
        race: "soletaken",

        role: "Traveller",
        series: ["MBOTF"],
        affiliation: [],
    },
    71: {
        name: ["Iron Bars", "Bars"],
        race: "human",

        role: "Mercenary",
        series: ["MBOTF", "NOME"],
        affiliation: ["Crimson Guard"],
    },
    72: {
        name: ["Kilava Onass"],
        race: "T'lan Imass",

        role: "Mage",
        series: ["MBOTF", "NOME"],
        affiliation: ["Logros T'lan Imass"],
    },
    73: {
        name: ["Samar Dev"],
        race: "human",

        role: "Inventor",
        series: ["MBOTF"],
        affiliation: [],
    },
    74: {
        name: ["Kellanved", "Wu", "Shadowthrone", "Ammanas"],
        race: "ascended",

        role: "Emperor",
        series: ["MBOTF", "NOME", "PATH"],
        affiliation: ["Malazan Empire", "High House Shadow"],
    },
    75: {
        name: ["Dancer", "Cotillion", "Dorin Rav", "The Rope"],
        race: "ascended",

        role: "Assassin",
        series: ["MBOTF", "NOME", "PATH"],
        affiliation: ["Malazan Empire", "High House Shadow"],
    },
    76: {
        name: ["Hellian"],
        race: "human",

        role: "Solider",
        series: ["MBOTF"],
        affiliation: ["Malazan Empire", "Bonehunters"],
    },
    77: {
        name: ["Barathol Mekhar"],
        race: "human",

        role: "Blacksmith",
        series: ["MBOTF"],
        affiliation: [],
    },
    78: {
        name: ["Lady Spite"],
        race: "ascended",

        role: "God",
        series: ["MBOTF", "NOME", "KHAR"],
        affiliation: [],
    },
    79: {
        name: ["Telorast and Curdle"],
        race: "ascended",

        role: "Mage",
        series: ["MBOTF", "PATH", "KHAR"],
        affiliation: [],
    },
    80: {
        name: ["Draconus"],
        race: "ascended",

        role: "God",
        series: ["MBOTF", "NOME", "PATH", "KHAR"],
        affiliation: ["High House Dark"],
    },
    81: {
        name: ["Hood"],
        race: "ascended",

        role: "God",
        series: ["MBOTF", "NOME", "PATH", "KHAR"],
        affiliation: ["High House Death"],
    },
    82: {
        name: ["Torrent"],
        race: "human",

        role: "Solider",
        series: ["MBOTF"],
        affiliation: [],
    },
    83: {
        name: ["Tayschrenn"],
        race: "human",

        role: "Mage",
        series: ["MBOTF", "NOME", "PATH"],
        affiliation: ["Malazan Empire"],
    },
    84: {
        name: ["Mallick Rel"],
        race: "human",

        role: "Advisor",
        series: ["MBOTF", "NOME", "PATH"],
        affiliation: ["Malazan Empire"],
    },
    85: {
        name: ["Greymane", "Orjin Samarr"],
        race: "human",

        role: "Soldier",
        series: ["MBOTF", "NOME", "PATH", "WITNESS"],
        affiliation: ["Malazan Empire", "Crimson Guard"],
    },
    86: {
        name: ["Silk"],
        race: "human",
        intro: "",
        role: "Mage",
        series: ["NOME", "PATH"],
        affiliation: ["Malazan Empire", "Li Heng"],
    },
    87: {
        name: ["Ho"],
        race: "soultaken",
        intro: "",
        role: "Mage",
        series: ["NOME", "PATH"],
        affiliation: ["Li Heng"],
    },
    88: {
        name: ["Ullara", "Bird Mother"],
        race: "human",
        intro: "",
        role: "Mage",
        series: ["NOME", "PATH"],
        affiliation: ["Li Heng"],
    },
    89: {
        name: ["Shimmer", "Iko"],
        race: "human",
        intro: "",
        role: "Mercenary",
        series: ["MBOTF", "NOME", "PATH"],
        affiliation: ["Crimson Guard"],
    },
    90: {
        name: ["Blues", "Gregar Bluenth"],
        race: "human",
        intro: "",
        role: "Mage",
        series: ["MBOTF", "NOME", "PATH"],
        affiliation: ["Crimson Guard"],
    },
    91: {
        name: ["Hessa"],
        race: "human",
        intro: "",
        role: "Pirate",
        series: ["PATH"],
        affiliation: ["Malazan Empire"],
    },
    92: {
        name: ["Kiska", "Kiskatia"],
        race: "human",
        intro: "",
        role: "Mage",
        series: ["NOME"],
        affiliation: ["Malazan Empire"],
    },
    93: {
        name: ["Redmask"],
        race: "human",

        role: "War Leader",
        series: ["MBOTF"],
        affiliation: ["Awl"],
    },
};

export default characters;
