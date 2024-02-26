export const bookColor = (bookNumber: number): string => {
    switch (bookNumber) {
        case 1:
            return "var(--teal700)";
        case 2:
            return "var(--amber600)";
        case 3:
            return "var(--red700)";
        case 4:
            return "var(--blue600)";
        case 5:
            return "var(--red400)";
        case 6:
            return "var(--gray500)";
        case 7:
            return "var(--amber800)";
        case 8:
            return "var(--green600)";
        case 9:
            return "var(--violet700)";
        case 10:
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
