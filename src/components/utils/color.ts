export const bookColor = (bookNumber: number): string => {
    switch (bookNumber) {
        case 1:
            return "var(--teal900)";
        case 2:
            return "var(--amber800)";
        default:
            return "";
    }
};
