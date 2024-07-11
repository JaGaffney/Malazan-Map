export const tileToPosition = (tileX: number, tileY: number): Array<number> => {
    return [(tileX + (tileY % 2) * 0.5) * 1.77, tileY * 1.535];
};

export const validFilterQuery = (item: string, searchParam: string): boolean => {
    let retValue: boolean = false;
    if (searchParam.trim() === "") {
        return true;
    }
    if (item.toLocaleLowerCase().includes(searchParam.toLocaleLowerCase())) {
        retValue = true;
    }
    return retValue;
};

export const validFilterQueryArray = (item: Array<string | any>, searchParam: string): boolean => {
    let retValue: boolean = false;
    if (searchParam.trim() === "") {
        return true;
    }
    item.forEach((element) => {
        if (element.toLocaleLowerCase().includes(searchParam.toLocaleLowerCase())) {
            retValue = true;
        }
    });

    return retValue;
};
