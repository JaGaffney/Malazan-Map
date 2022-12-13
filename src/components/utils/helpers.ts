export const tileToPosition = (tileX: number, tileY: number): Array<number> => {
    return [(tileX + (tileY % 2) * 0.5) * 1.77, tileY * 1.535];
};
