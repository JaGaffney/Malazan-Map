import { v4 as uuidv4 } from "uuid";

import { eventIcons } from "../data/icons";

const timelineData = {
    1161: {
        1: {
            id: uuidv4(),
            name: "Sorry is born",
            icon: eventIcons.assassin,
            description: "Sorry is born, Lorn and Parnn investiage, Sorry enlists in nearby garrison",
            char: [1, 2],
            loc: [0, 0],
        },
        2: {
            id: uuidv4(),
            name: "Paran travels the imperial warren",
            icon: eventIcons.warren,
            description: "Topper brings Paran through the imperail warren and arrive at Mocks's Hold inront of Empress Lassen",
            char: [1],
            loc: [0, 0],
        },
        3: {
            id: uuidv4(),
            name: "Paran goes home",
            icon: eventIcons.city,
            description: "Paran goes home to Unta where he meets Tavore Paran but Felisin Paran isnt there",
            char: [1],
            loc: [0, 0],
        },
    },
    1163: {
        1: { id: uuidv4(), name: "Battle for Pale", icon: eventIcons.battle, description: "", char: [2, 3], loc: [27.435, 56.794999999999995] },
        2: {
            id: uuidv4(),
            name: "Paran arrives on Genabackis",
            icon: eventIcons.travelHorse,
            description: "",
            char: [1],
            loc: [23.895, 19.955],
        },
        3: {
            id: uuidv4(),
            name: "Paran arrives at Pale as captain of the Bridgeburners",
            icon: eventIcons.death,
            description: "",
            char: [1, 2, 3],
            loc: [28.32, 58.33],
        },
        4: {
            id: uuidv4(),
            name: "Darujhistan",
            icon: eventIcons.city,
            description: "",
            char: [],
            loc: [30.975, 69.075],
        },
    },
};

export default timelineData;
