import { EAreas } from "./areas";
export interface ICities {
    name: string;
    loc: Array<number>;
    area: EAreas;
    type: number;
    wiki: string;
}

interface ICityData {
    [key: number]: ICities;
}

const cityData: ICityData = {
    1: {
        name: "Malaz City",
        loc: [237.0, 15.0, 123.0],
        area: EAreas.QuonTali,
        type: 1,
        wiki: "https://malazan.fandom.com/wiki/Malaz_City",
    },
    2: {
        name: "Pale",
        loc: [294.0, 15, 47.0],
        area: EAreas.Genabackis,
        type: 2,
        wiki: "https://malazan.fandom.com/wiki/Pale",
    },
    3: {
        name: "Darujhistan",
        loc: [295.0, 15, 57.0],
        area: EAreas.Genabackis,
        type: 2,
        wiki: "https://malazan.fandom.com/wiki/Darujhistan",
    },
    4: {
        name: "Unta",
        loc: [235.0, 15, 108.0],
        area: EAreas.QuonTali,
        type: 1,
        wiki: "https://malazan.fandom.com/wiki/Unta",
    },

    5: {
        name: "Raraku",
        loc: [223.0, 15, 34.0],
        area: EAreas.SevenCities,
        type: 4,
        wiki: "https://malazan.fandom.com/wiki/Raraku",
    },
    6: {
        name: "Aren",
        loc: [221.0, 15, 56.0],
        area: EAreas.SevenCities,
        type: 2,
        wiki: "https://malazan.fandom.com/wiki/Aren",
    },
    7: {
        name: "Itko Kan",
        loc: [221.0, 15, 117.0],
        area: EAreas.QuonTali,
        type: 2,
        wiki: "https://malazan.fandom.com/wiki/Itko_Kan",
    },
    8: {
        name: "Skullcup",
        loc: [245.0, 15, 34.0],
        area: EAreas.SevenCities,
        type: 3,
        wiki: "https://malazan.fandom.com/wiki/Skullcup",
    },
    9: {
        name: "Capustan",
        loc: [311.0, 15, 57.0],
        area: EAreas.Genabackis,
        type: 2,
        wiki: "https://malazan.fandom.com/wiki/Capustan",
    },
    10: {
        name: "Bastion",
        loc: [300.0, 15, 66.0],
        area: EAreas.Genabackis,
        type: 2,
        wiki: "https://malazan.fandom.com/wiki/Bastion",
    },
    11: {
        name: "Morn",
        loc: [296.0, 15, 92.0],
        area: EAreas.Genabackis,
        type: 4,
        wiki: "https://malazan.fandom.com/wiki/Morn_(location)",
    },
    12: {
        name: "Tesem Temple",
        loc: [234.0, 14, 34.0],
        area: EAreas.SevenCities,
        type: 3,
        wiki: "https://malazan.fandom.com/wiki/Tesem",
    },
    13: {
        name: "Coral",
        loc: [314.0, 15, 62.0],
        area: EAreas.Genabackis,
        type: 2,
        wiki: "https://malazan.fandom.com/wiki/Coral_(city)",
    },
    14: {
        name: "Y'Ghatan",
        loc: [208.0, 15, 36.0],
        area: EAreas.SevenCities,
        type: 2,
        wiki: "https://malazan.fandom.com/wiki/Y%27Ghatan_(city)",
    },
    15: {
        name: "Letheras",
        loc: [17.0, 15, 155.0],
        area: EAreas.Lether,
        type: 1,
        wiki: "https://malazan.fandom.com/wiki/Letheras",
    },
    16: {
        name: "Crystal City",
        loc: [85.0, 15, 160.0],
        area: EAreas.Lether,
        type: 4,
        wiki: "https://malazan.fandom.com/wiki/Icarias",
    },
    17: {
        name: "Kolanse",
        loc: [117.0, 15, 169.0],
        area: EAreas.Lether,
        type: 1,
        wiki: "https://malazan.fandom.com/wiki/Kolanse",
    },
    18: {
        name: "Li Heng",
        loc: [217.0, 15, 112.0],
        area: EAreas.QuonTali,
        type: 2,
        wiki: "https://malazan.fandom.com/wiki/Li_Heng",
    },
    19: {
        name: "Cabil",
        loc: [215.0, 15, 82.5],
        area: EAreas.QuonTali,
        type: 2,
        wiki: "https://malazan.fandom.com/wiki/Cabil",
    },
    20: {
        name: "Quon Tali",
        loc: [206.3, 15, 106.5],
        area: EAreas.QuonTali,
        type: 2,
        wiki: "https://malazan.fandom.com/wiki/Quon_Tali_(city)",
    },
    21: {
        name: "Seguleh Isle",
        loc: [285.0, 15, 89.0],
        area: EAreas.Genabackis,
        type: 4,
        wiki: "https://malazan.fandom.com/wiki/Seguleh",
    },
    22: {
        name: "Stormwall",
        loc: [237.0, 15, 138.0],
        area: EAreas.StratemKorelri,
        type: 4,
        wiki: "https://malazan.fandom.com/wiki/Stormwall",
    },
};

export { cityData };
