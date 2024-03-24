export const bookColor = (bookNumber: number): string => {
    switch (bookNumber) {
        case 1: // "Gardens of the Moon"
        case 27: // "Blood and Bone"
            return "var(--teal700)";
        case 2: // "Deadhouse Gates"
        case 25: // "Stonewielder"
        case 30: // "Deadhouse Landing"
            return "var(--amber600)";
        case 3: // "Memories of Ice"
        case 24: // "Return of the Crimson Guard"
            return "var(--red700)";
        case 4: // "House of Chains"
        case 29: // "Dancer's Lament"
            return "var(--blue600)";
        case 5: // "Midnight Tides"
            return "var(--red400)";
        case 6: // "The Bonehunters"
        case 28: // "Assail"
            return "var(--gray500)";
        case 7: // "Reaper's Gale"
            return "var(--amber800)";
        case 8: // "Toll the Hounds"
        case 23: // "Night of Knives"
            return "var(--green600)";
        case 9: //  "Dust of Dreams"
        case 26: // "Orb Sceptre Throne"
            return "var(--violet700)";
        case 10: // "The Crippled God"
            return "var(--pink600)";
        default:
            return "";
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
