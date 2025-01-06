export const bookColor = (bookNumber: number): string => {
    switch (bookNumber) {
        case 101: // "Gardens of the Moon"

        case 102: // "Deadhouse Gates"

        case 103: // "Memories of Ice"
        case 104: // "House of Chains"

        case 105: // "Midnight Tides"
        case 106: // "The Bonehunters"
        case 107: // "Reaper's Gale"
        case 108: // "Toll the Hounds"
        case 109: //  "Dust of Dreams"
        case 110: // "The Crippled God"
            return "var(--teal600)";

        case 201: // "Night of Knives"
        case 202: // "Return of the Crimson Guard"
        case 203: // "Stonewielder"
        case 204: // "Orb Sceptre Throne"
        case 205: // "Blood and Bone"
        case 206: // "Assail"
            return "var(--red700)";

        case 207: // "Dancer's Lament"
        case 208: // "Kellanved's Reach"
        case 209: // "Deadhouse Landing"
        case 210: // "Forge of the High Mage"
            return "var(--amber600)";

        default:
            return "white";
    }
};
export const seriesColor = (seriesName: string): string => {
    if (seriesName === "Steven Erikson") {
        return "var(--amber500)";
    } else {
        return "var(--gray500)";
    }
};

interface IColorCtyType {
    hex: string;
    hexOverlay: string;
    classname: string;
}
export const calculateColorCityType = (cityType: number): IColorCtyType => {
    const color = {
        hex: "#0f172a",
        hexOverlay: "#0f172a",
        classname: "cityDefault",
    };
    switch (cityType) {
        case 1:
            color.hex = "#181e2a";
            color.hexOverlay = "#161b26";
            color.classname = "cityOne";
            return color;
        case 2:
            color.hex = "#881337";
            color.hexOverlay = "#7d1132";
            color.classname = "cityTwo";
            return color;
        case 3:
            color.hex = "#115e59";
            color.hexOverlay = "#105752";
            color.classname = "cityThree";
            return color;
        case 4:
            color.hex = "#115e59";
            color.hexOverlay = "#105752";
            color.classname = "cityFour";
            return color;
        default:
            return color;
    }
};
