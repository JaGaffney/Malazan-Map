import { bookIcons } from "../data/icons";

interface IDefaultSeries {
    [key: string]: boolean;
}
export const defaultSeries: IDefaultSeries = {
    MBOTF: true,
    NOME: true,
    PATH: true,
    WITNESS: true,
    TALES: true,
    KHAR: true,
};

interface IBooks {
    [key: number]: IBook;
}
interface IBook {
    book: number;
    icon: string;
    name: string;
    abbreviation: string;
    author: string;
    series: string;
    publication: string;
    year: string;
}

const book: IBooks = {
    100: {
        book: 0,
        icon: bookIcons.historyIcon,
        name: "History",
        abbreviation: "H",
        author: "",
        series: "",
        publication: "",
        year: "",
    },
    101: {
        book: 1,
        icon: bookIcons.gardensOfTheMoon,
        name: "Gardens of the Moon",
        abbreviation: "GotM",
        author: "Steven Erikson",
        series: "Fallen",
        publication: "1999",
        year: "1154",
    },
    102: {
        book: 2,
        icon: bookIcons.deadhouseGates,
        name: "Deadhouse Gates",
        abbreviation: "DG",
        author: "Steven Erikson",
        series: "Fallen",
        publication: "2000",
        year: "1163",
    },
    103: {
        book: 3,
        icon: bookIcons.memoriesOfIce,
        name: "Memories of Ice",
        abbreviation: "MoI",
        author: "Steven Erikson",
        series: "Fallen",
        publication: "2001",
        year: "1164",
    },
    104: {
        book: 4,
        icon: bookIcons.houseOfChains,
        name: "House of Chains",
        abbreviation: "HoC",
        author: "Steven Erikson",
        series: "Fallen",
        publication: "2002",
        year: "1154",
    },
    105: {
        book: 5,
        icon: bookIcons.midnightTides,
        name: "Midnight Tides",
        abbreviation: "MT",
        author: "Steven Erikson",
        series: "Fallen",
        publication: "2004",
        year: "1159",
    },
    106: {
        book: 6,
        icon: bookIcons.theBonehunters,
        name: "The Bonehunters",
        abbreviation: "BH",
        author: "Steven Erikson",
        series: "Fallen",
        publication: "2006",
        year: "1164",
    },
    107: {
        book: 7,
        icon: bookIcons.reapersGale,
        name: "Reaper's Gale",
        abbreviation: "RG",
        author: "Steven Erikson",
        series: "Fallen",
        publication: "2007",
        year: "1166",
    },
    108: {
        book: 8,
        icon: bookIcons.tollTheHounds,
        name: "Toll the Hounds",
        abbreviation: "TtH",
        author: "Steven Erikson",
        series: "Fallen",
        publication: "2008",
        year: "1168",
    },
    109: {
        book: 9,
        icon: bookIcons.dustOfdreams,
        name: "Dust of Dreams",
        abbreviation: "DoD",
        author: "Steven Erikson",
        series: "Fallen",
        publication: "2009",
        year: "1167",
    },
    110: {
        book: 10,
        icon: bookIcons.theCrippledGod,
        name: "The Crippled God",
        abbreviation: "tGH",
        author: "Steven Erikson",
        series: "Fallen",
        publication: "2011",
        year: "1168",
    },
    201: {
        book: 1,
        icon: bookIcons.knightOfKnives,
        name: "Night of Knives",
        abbreviation: "NoK",
        author: "Ian C. Esslemont",
        series: "Novels",
        publication: "2004",
        year: "1154",
    },
    202: {
        book: 2,
        icon: bookIcons.returnOfTheCrimsonGuard,
        name: "Return of the Crimson Guard",
        abbreviation: "RotCG",
        author: "Ian C. Esslemont",
        series: "Novels",
        publication: "2008",
        year: "1166",
    },
    203: {
        book: 3,
        icon: bookIcons.stonewielder,
        name: "Stonewielder",
        abbreviation: "SW",
        author: "Ian C. Esslemont",
        series: "Novels",
        publication: "2010",
        year: "",
    },
    204: {
        book: 4,
        icon: bookIcons.orbSceptreThrone,
        name: "Orb Sceptre Throne",
        abbreviation: "OST",
        author: "Ian C. Esslemont",
        series: "Novels",
        publication: "2012",
        year: "",
    },
    205: {
        book: 5,
        icon: bookIcons.bloodAndBone,
        name: "Blood and Bone",
        abbreviation: "BaB",
        author: "Ian C. Esslemont",
        series: "Novels",
        publication: "2012",
        year: "",
    },
    206: {
        book: 6,
        icon: bookIcons.assail,
        name: "Assail",
        abbreviation: "Ass",
        author: "Ian C. Esslemont",
        series: "Novels",
        publication: "2014",
        year: "",
    },

    111: {
        book: 1,
        icon: bookIcons.defaultBookIcon,
        name: "Forge of Darkness",
        abbreviation: "FoD",
        author: "Steven Erikson",
        series: "Kharkanas",
        publication: "2012",
        year: "-300000",
    },
    112: {
        book: 2,
        icon: bookIcons.defaultBookIcon,
        name: "Fall of Light",
        abbreviation: "FoL",
        author: "Steven Erikson",
        series: "Kharkanas",
        publication: "2016",
        year: "-300000",
    },
    113: {
        book: 3,
        icon: bookIcons.defaultBookIcon,
        name: "Walk in Shadow",
        abbreviation: "WiS",
        author: "Steven Erikson",
        series: "Kharkanas",
        publication: "TBA",
        year: "-300000",
    },
    114: {
        book: 1,
        icon: bookIcons.defaultBookIcon,
        name: "The God is Not Willing",
        abbreviation: "tGsnW",
        author: "Steven Erikson",
        series: "Witness",
        publication: "2021",
        year: "1178",
    },
    115: {
        book: 2,
        icon: bookIcons.defaultBookIcon,
        name: "No Life Forsaken",
        abbreviation: "NLF",
        author: "Steven Erikson",
        series: "Witness",
        publication: "TBA",
        year: "",
    },
    116: {
        book: 3,
        icon: bookIcons.defaultBookIcon,
        name: "Book 3",
        abbreviation: "",
        author: "Steven Erikson",
        series: "Witness",
        publication: "TBA",
        year: "",
    },
    117: {
        book: 4,
        icon: bookIcons.defaultBookIcon,
        name: "Book 4",
        abbreviation: "",
        author: "Steven Erikson",
        series: "Witness",
        publication: "TBA",
        year: "",
    },
    207: {
        book: 1,
        icon: bookIcons.dancersLamnet,
        name: "Dancer's Lament",
        abbreviation: "DL",
        author: "Ian C. Esslemont",
        series: "Path",
        publication: "2016",
        year: "1057",
    },
    208: {
        book: 2,
        icon: bookIcons.deadhouseLanding,
        name: "Deadhouse Landing",
        abbreviation: "DHL",
        author: "Ian C. Esslemont",
        series: "Path",
        publication: "2017",
        year: "1058",
    },
    209: {
        book: 3,
        icon: bookIcons.kellanvedsReach,
        name: "Kellanved's Reach",
        abbreviation: "KR",
        author: "Ian C. Esslemont",
        series: "Path",
        publication: "2019",
        year: "1060",
    },
    210: {
        book: 4,
        icon: bookIcons.forgeOfTheHighMage,
        name: "Forge of the High Mage",
        abbreviation: "FotHM",
        author: "Ian C. Esslemont",
        series: "Path",
        publication: "2023",
        year: "1090",
    },
    211: {
        book: 5,
        icon: bookIcons.defaultBookIcon,
        name: "Book 5",
        abbreviation: "",
        author: "Ian C. Esslemont",
        series: "Path",
        publication: "2025",
        year: "",
    },
    212: {
        book: 6,
        icon: bookIcons.defaultBookIcon,
        name: "Book 6",
        abbreviation: "",
        author: "Ian C. Esslemont",
        series: "Path",
        publication: "TBA",
        year: "",
    },

    118: {
        book: 1,
        icon: bookIcons.bloodFollow,
        name: "Blood Follows",
        abbreviation: "BF",
        author: "Steven Erikson",
        series: "Tales",
        publication: "2002",
        year: "1154-",
    },
    119: {
        book: 2,
        icon: bookIcons.defaultBookIcon,
        name: "The Healthy Dead",
        abbreviation: "tHD",
        author: "Steven Erikson",
        series: "Tales",
        publication: "2004",
        year: "1158+",
    },
    120: {
        book: 3,
        icon: bookIcons.laughEnd,
        name: "The Lees of Laughter's End",
        abbreviation: "tLoLE",
        author: "Steven Erikson",
        series: "Tales",
        publication: "2007",
        year: "1154-",
    },
    121: {
        book: 4,
        icon: bookIcons.defaultBookIcon,
        name: "Crack'd Pot Trail",
        abbreviation: "CPT",
        author: "Steven Erikson",
        series: "Tales",
        publication: "2009",
        year: "1164+",
    },
    122: {
        book: 5,
        icon: bookIcons.defaultBookIcon,
        name: "The Wurms of Blearmouth",
        abbreviation: "tWoB",
        author: "Steven Erikson",
        series: "Tales",
        publication: "2012",
        year: "1164+",
    },
    123: {
        book: 6,
        icon: bookIcons.defaultBookIcon,
        name: "The Fiends of Nightmaria",
        abbreviation: "tFoN",
        author: "Steven Erikson",
        series: "Tales",
        publication: "2016",
        year: "1164+",
    },
    124: {
        book: 7,
        icon: bookIcons.defaultBookIcon,
        name: "Upon a Dark of Evil Overlords",
        abbreviation: "UaDoEO",
        author: "Steven Erikson",
        series: "Tales",
        publication: "2021",
        year: "1164+",
    },
};

export default book;
