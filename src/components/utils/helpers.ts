import characters, { ICharacter } from "../../data/characters";
import { eventIcons } from "../../data/icons";

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
        if (typeof element == "object") {
            element.forEach((inner: string) => {
                if (inner.toLocaleLowerCase().includes(searchParam.toLocaleLowerCase())) {
                    retValue = true;
                }
            });
        } else {
            if (element.toLocaleLowerCase().includes(searchParam.toLocaleLowerCase())) {
                retValue = true;
            }
        }
    });

    return retValue;
};

export const findRaceByName = (name: string): string => {
    switch (name) {
        case "human":
            return eventIcons.human;
        case "soultaken":
            return eventIcons.soultaken;
        case "Tiste Andii":
        case "Tiste Edur":
        case "tisti":
            return eventIcons.tisti;
        case "T'lan Imass":
        case "undead":
            return eventIcons.tlanimass;
        case "trell":
        case "Barghast":
        case "Teblor":
            return eventIcons.tribal;
        case "jaghurt":
            return eventIcons.jaghurt;
        case "ascended":
            return eventIcons.ascended;
        default:
            return eventIcons.warren;
    }
};

export const getCharacterIDByName = (names: string[]): number => {
    // only works for first name ATM
    const name = names[0];

    const currentHeadingKey: any = Object.keys(characters).find((id: any) => [characters[id]].some((n) => n.name[0] === name));
    return parseInt(currentHeadingKey);
};
