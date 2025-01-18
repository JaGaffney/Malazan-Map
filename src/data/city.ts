import { EAreas } from "./areas";
export interface ICities {
    name: string;
    loc: Array<number>;
    area: EAreas;
    type: number;
}

interface ICityData {
    [key: number]: ICities;
}

const cityData: ICityData = {
    1: {
        name: "Malaz City",
        loc: [237.0, 15.0, 121.0],
        area: EAreas.QuonTali,
        type: 1,
    },
    2: {
        name: "Pale",
        loc: [294.0, 15, 49.0],
        area: EAreas.Genabackis,
        type: 2,
    },
    3: {
        name: "Darujhistan",
        loc: [295.0, 15, 55.0],
        area: EAreas.Genabackis,
        type: 2,
    },
    4: {
        name: "Unta",
        loc: [235.0, 15, 108.0],
        area: EAreas.QuonTali,
        type: 1,
    },

    5: {
        name: "Raraku",
        loc: [225.0, 15, 34.0],
        area: EAreas.SevenCities,
        type: 4,
    },
    6: {
        name: "Aran",
        loc: [221.0, 15, 56.0],
        area: EAreas.SevenCities,
        type: 2,
    },
    7: {
        name: "Itko Kan",
        loc: [221.0, 15, 117.0],
        area: EAreas.QuonTali,
        type: 2,
    },
    8: {
        name: "Skullcup",
        loc: [245.0, 15, 34.0],
        area: EAreas.SevenCities,
        type: 4,
    },
    9: {
        name: "Capustan",
        loc: [311.0, 15, 57.0],
        area: EAreas.Genabackis,
        type: 2,
    },
    10: {
        name: "Bastion",
        loc: [300.0, 15, 66.0],
        area: EAreas.Genabackis,
        type: 2,
    },
    11: {
        name: "Morn",
        loc: [294.0, 15, 89.0],
        area: EAreas.Genabackis,
        type: 4,
    },
    // 12: {
    //     name: "Tesem Temple",
    //     loc: [231.0, 15, 34.0],
    //     area: EAreas.SevenCities,
    //     type: 4,
    // },
    13: {
        name: "Coral",
        loc: [310.0, 15, 62.0],
        area: EAreas.Genabackis,
        type: 2,
    },
    14: {
        name: "Y'Ghatan",
        loc: [208.0, 15, 36.0],
        area: EAreas.SevenCities,
        type: 2,
    },
    15: {
        name: "Letheras",
        loc: [17.0, 15, 155.0],
        area: EAreas.Lether,
        type: 1,
    },
    16: {
        name: "Crystal City",
        loc: [85.0, 15, 160.0],
        area: EAreas.Lether,
        type: 4,
    },
    17: {
        name: "Kolanse",
        loc: [117.0, 15, 169.0],
        area: EAreas.Lether,
        type: 1,
    },
    18: {
        name: "Li Heng",
        loc: [217.0, 15, 112.0],
        area: EAreas.QuonTali,
        type: 1,
    },
    19: {
        name: "Cabil",
        loc: [215.0, 15, 82.5],
        area: EAreas.QuonTali,
        type: 1,
    },
};

export { cityData };
