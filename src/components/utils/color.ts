export const bookColor = (bookNumber: number): string => {
    switch (bookNumber) {
        case 1:
            return "var(--teal700)";
        case 2:
            return "var(--amber800)";
        case 3:
            return "var(--red700)";
        default:
            return "";
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

export const calculateColorOwner = (owner: string): IColorCtyType => {
    const color = {
        hex: "#f0fdf4",
        hexOverlay: "#0f172a",
        classname: "cityOwnerDefault",
    };
    switch (owner) {
        case "malazan":
            color.hex = "#b91c1c";
            color.classname = "cityOwnerRed";
            return color;
        case "Anomander Rake":
            color.hex = "#6d28d9";
            color.classname = "cityOwnerPurple";
            return color;
        case "Army of the Apocalpse":
            color.hex = "#d97706";
            color.classname = "cityOwnerOrange";
            return color;
        case "Pannion Domin":
        case "House of Chains":
            color.hex = "#718096";
            color.classname = "cityOwnerGray";
            return color;
        default:
            return color;
    }
};
