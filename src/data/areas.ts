export interface IAreas {
    loc: Array<number>;
    name: string;
}

export const enum EAreas {
    Genabackis = "Genabackis",
    SevenCities = "Seven Cities",
    QuonTali = "Quon Tali",
    Jacuruku = "Jacuruku",
    StratemKorelri = "Stratem and Korelri",
    Lether = "Lether",
    Bael = "Bael",
    Genostel = "Genostel",
}

const AREAS: IAreas[] = [
    {
        loc: [530.0, 15, 70.0],
        name: EAreas.Genabackis,
    },
    {
        loc: [380.0, 15, 75.0],
        name: EAreas.SevenCities,
    },
    {
        loc: [390.0, 15, 150.0],
        name: EAreas.QuonTali,
    },
    {
        loc: [330.0, 15, 250.0],
        name: EAreas.Jacuruku,
    },
    {
        loc: [470.0, 15, 250.0],
        name: EAreas.StratemKorelri,
    },
    {
        loc: [45.0, 15, 250.0],
        name: EAreas.Lether,
    },
    {
        loc: [580.0, 15, 200.0],
        name: EAreas.Bael,
    },
    {
        loc: [750.0, 15, 50.0],
        name: EAreas.Genostel,
    },
];

export default AREAS;
