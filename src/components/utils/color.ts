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
