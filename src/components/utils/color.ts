export const bookColor = (bookNumber: number): string => {
    switch (bookNumber) {
        case 1:
            return "var(--teal900)";
        case 2:
            return "var(--amber800)";
        case 3:
            return "var(--red900)";
        default:
            return "";
    }
};
