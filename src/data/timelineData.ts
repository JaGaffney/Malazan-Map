import { v4 as uuidv4 } from "uuid";

import { eventIcons, bookIcons } from "../data/icons";

// x: 343, y: 6
export interface ITimelinePoint {
    id: string;
    book: number;
    name: string;
    icon: any;
    description: Array<string>;
    citation: string;
    char: Array<number>;
    loc: Array<number>;
}
interface ITimePeroid {
    [key: number]: ITimelinePoint;
}
interface ITimelineData {
    [key: number]: ITimePeroid | any;
}
const timelineData: ITimelineData = {
    [-298655]: [
        {
            id: uuidv4(),

            book: 103,
            name: "Start of Book 3 - Memories of Ice",
            icon: eventIcons.old,
            description: [
                "The end of the 33rd Jaghut War. The Ritual of Tellann was performed at the First Gathering 298,665 years before Burn's Sleep by the Imass Bonecaster, Olar Ethil, transforming most of the Imass people into the T'lan Imass. It was the binding of the Tellann Warren to each and every Imass.",
            ],
            citation: "Prologue - Section 1",
            char: [72],
            loc: [522.65, 136.47],
        },
    ],
    [-119739]: [
        {
            id: uuidv4(),

            book: 103,
            name: "The Fall of the Crippled God",
            icon: eventIcons.warren,
            description: [
                "Eight Jacuruku mages rebelled against their tyrant, Kallor, by dragging a god into their realm. The god's shattered body rained down on the continent killing the mages, and nothing to Kallor himself",
                "Various gods gathered to chain the Crippled God to Burn's flesh so he would not escape or basically destroy the world. Was repeated several times.",
            ],
            citation: "",
            char: [14],
            loc: [207.9, 259.4],
        },
    ],
    [-119736]: [
        {
            id: uuidv4(),

            book: 103,
            name: "3 years after the Fall of the Crippled God",
            icon: eventIcons.warren,
            description: [
                "High King Kallor destroys the entire continent of Jacuruku, K'rul, Draconus and Sister of Cold Nights curse Kallor to immortality, he in turn curses each of them. K'rul creates the Imperial Warren by sweeping the devastation from the land into the new Warren so that the land might heal.",
            ],
            citation: "Prologue - Section 2",
            char: [29, 31],
            loc: [315.06, 251.73],
        },
    ],
    [-835]: [
        {
            id: uuidv4(),

            book: 100,
            name: "Darujhistan is founded",
            icon: eventIcons.city,
            description: [
                "The City of Cities, is the largest, most influential, and last of the Free Cities on the continent of Genabackis. It's renowned for its vibrant culture and is located on the southern shore of Lake Azur.",
            ],
            citation: "",
            char: [],
            loc: [522.65, 84.28],
        },
    ],
    1057: [
        {
            id: uuidv4(),

            book: 207,
            name: "Book 1 - Dancer's Lament",
            icon: eventIcons.assassin,
            description: [
                "Timeline unknown",
                "A Young Dancer (Dorin) meets Kellanved (Wu), and a young Daseem Ultor in Li-Heng",
                "Majority of the events in this book happen inside the city or just outside the city.",
            ],
            citation: "",
            char: [74, 75, 55],
            loc: [384.0, 172.0],
        },
    ],
    1058: [
        {
            id: uuidv4(),

            book: 208,
            name: "Book 2 - Path of Ascendancy",
            icon: eventIcons.city,
            description: ["Majority of the events in this book happen inside the city or just outside the city."],
            citation: "",
            char: [74, 75, 10, 3, 55, 83, 5, 6, 13],
            loc: [420.0, 185.59],
        },
        {
            id: uuidv4(),

            book: 100,
            name: "Malazan Empire is founded",
            icon: eventIcons.city,
            description: ["Malazan Empire is founded"],
            citation: "",
            char: [74, 75, 10, 55, 83, 5, 6, 13],
            loc: [420.0, 185.59],
        },
    ],
    1060: [
        {
            id: uuidv4(),

            book: 209,
            name: "Bloorien League vs Gris",
            icon: eventIcons.battle,
            description: ["The stonemason Gregar Bluenth joins the battle between the Bloorien and Gris. After the battle is over he joins the Crimson Guard under the name 'Blues'."],
            citation: "",
            char: [90],
            loc: [410.0, 164.0],
        },
        {
            id: uuidv4(),

            book: 209,
            name: "Purge war",
            icon: eventIcons.travelHorse,
            description: ["Orjin Samarr's mercenary unit is left behind and decides to partisan. They are betryed from their employeers and are forced to flee and join the Malazan Empire."],
            citation: "",
            char: [85],
            loc: [365.0, 165.0],
        },
        {
            id: uuidv4(),

            book: 209,
            name: "Crimson Guard Citadel",
            icon: eventIcons.tribal,
            description: ["Ullara leaves Li Heng and heads north where she meets a Crimson Guard outpost. She then heads north towards the Fenn Range"],
            citation: "",
            char: [88],
            loc: [396.0, 152.0],
        },
        {
            id: uuidv4(),

            book: 209,
            name: "Nappan Isle",
            icon: eventIcons.travelBoat,
            description: ["The Malazan forces take Napan Isle while Kellandved gains some control of the T'lan Imass"],
            citation: "",
            char: [74, 75, 10, 55, 83, 5, 6, 13, 18],
            loc: [401.0, 181.0],
        },
        {
            id: uuidv4(),

            book: 209,
            name: "The Malazan Empire.",
            icon: eventIcons.city,
            description: ["Events that take place in Li Heng throughout the book"],
            citation: "",
            char: [74, 75, 10, 55, 20, 6, 83, 86, 87, 20, 18],
            loc: [384.0, 172.0],
        },
    ],
    1090: [
        {
            id: uuidv4(),

            book: 210,
            name: "Book 4 - Forge of the High Mage",
            icon: eventIcons.travelBoat,
            description: ["TBA"],
            citation: "",
            char: [74, 75, 10, 55],
            loc: [400.0, 135.59],
        },
    ],
    1154: [
        {
            id: uuidv4(),

            book: 201,
            name: "Book 1 - Night of Knives",
            icon: eventIcons.travelBoat,
            description: ["The start of Book one for Novels of the Malazan Empire.", "Everything that happens during the book happens on Malaz Isle or in the Sea just south of the city."],
            citation: "",
            char: [74, 75, 10, 83, 91],
            loc: [420.0, 185.59],
        },
        {
            id: uuidv4(),

            book: 101,
            name: "Start of Book 1 - Gardens of the Moon",
            icon: eventIcons.city,
            description: ["The start of book one.", "Emperor Kalandred is missing presumed dead and Lasseen takes up the mantle as Empress as the city burns."],
            citation: "Prologue",
            char: [1, 5, 10, 13, 3, 74, 75],
            loc: [420.0, 185.59],
        },
        {
            id: uuidv4(),

            book: 118,
            name: "Book 1 - Blood Follows",
            icon: eventIcons.death,
            description: [
                "In the port city of Lamentable Moll, a diabolical killer stalks the streets and panic grips the citizens like a fever.",
                "As Emancipor Reese's legendary ill luck would have it, his previous employer is the unknown killer's latest victim. But two strangers have come to town, and they have posted in Fishmonger's Round a note, reeking of death-warded magic, requesting the services of a manservant.",
            ],
            citation: "",
            char: [32, 35],
            loc: [449.0, 203.0],
        },
        {
            id: uuidv4(),

            book: 120,
            name: "Book 3 - The Lees of Laughter's End",
            icon: eventIcons.travelBoat,
            description: [
                "After their blissful sojourn in Lamentable Moll, the sorcerers Bauchelain and Korbal Broach — along with their manservant, Emancipor Reese — set out on the open seas aboard the sturdy ship Suncurl.",
                "Alas, there's more baggage in the hold than meets the beady eyes of the crew, and unseemly terrors awaken. For Bauchelain and Korbal Broach, and Emancipor Reese, it is just one more night on the high seas, on a journey without end.",
            ],
            citation: "",
            char: [32, 35],
            loc: [490.0, 168.59],
        },
    ],
    1159: [
        {
            id: uuidv4(),

            book: 104,
            name: "Start of Book 4 - House of Chains",
            icon: eventIcons.tribal,
            description: ["Karsa sets off on his journey. (This should happen in 1162-1163 Burn's Sleep although it doesn't really matter to the story)"],
            citation: "Chapter 1 - Section 2",
            char: [39],
            loc: [532.77, 30.7],
        },
        {
            id: uuidv4(),
            book: 105,
            name: "Start of Book 5 - Midnight Tides",
            icon: eventIcons.tribal,
            description: ["Introduction to the Sengar family and the way of life of the Tiste Edur and how they follow Father Shadow and the human slaves Udinaas and Feather Witch."],
            citation: "Chapter 1 - Section 2",
            char: [38, 56, 57, 58, 59],
            loc: [10.815, 213.3],
        },
        {
            id: uuidv4(),
            book: 105,
            name: "Hiroth Moutains",
            icon: eventIcons.travelCart,
            description: [
                "Seren Pedac and Buruk are sitting at their campfire, Hull Beddict approaches from the wild and joins them. They being talking about a 'Great Meeting' between the Lether and the Edur in order to create a treaty.",
                "Hull tells Seren he intends to incite the Edur into war with Letheras",
            ],
            citation: "Chapter 2 - Section 2",
            char: [62],
            loc: [19.5, 215.3],
        },
        {
            id: uuidv4(),
            book: 105,
            name: "Lether",
            icon: eventIcons.city,
            description: ["Introduction to the residents of Lether City"],
            citation: "Chapter 2 - Section 3",
            char: [60, 61, 64, 65],
            loc: [30.97, 237.9],
        },
        {
            id: uuidv4(),
            book: 105,
            name: "Stone Bowl",
            icon: eventIcons.soultaken,
            description: [
                "The Tiste Edur King Hannan Mosag sends the Sengar brothers off to the Stone Bowl in order to find a relic for him.",
                "They discover a giant skeleton dragon head with a smashed skull that looks like someone punched it, in the center of the stone bowl they discover 'Kaschan Ritual' and imploding warren they will eventually consume everything.",
            ],
            citation: "Chapter 3 - Section 6",
            char: [38, 56, 57],
            loc: [24.815, 210.3],
        },
        {
            id: uuidv4(),
            book: 105,
            name: "Ice Fields",
            icon: eventIcons.death,
            description: [
                "The Sengar brothers discover a crevasse in the moutains, the bottom of the crevasse looked like a seabed, with pools inhabited by shrimps and barnacles, also has a greenish glow where they find a two handed mottled sword.",
                "The group is attacked by a group of Jheck, Rhulad uses the sword and kills some of the attackers although is killed in the process. Trull easily defends against the attack. The brothers vow to bring back his body as a hero, although they cannot remove the sword from his hand.",
            ],
            citation: "Chapter 8 - Section 1",
            char: [38, 56, 57],
            loc: [38.815, 208.3],
        },
        {
            id: uuidv4(),
            book: 105,
            name: "Coins",
            icon: bookIcons.midnightTides,
            description: [
                "Hannan Mosag believes the Sengars brothers failed and betrayed him by using the sword that was meant for him and due to the Edur culture he is unable to take the sword as his own.",
                "Udinaas performs the cermony of Rhulads body which includes melting gold coins over his skin. Rhulad then wakes up screaming in pain.",
                "Rhulad claims Hannan Mosag had united the pathetic six Edur tribes, but now it’s Rhulad who will lead them to become an empire. Trull witnesses the Edur including Hannan Mosag kneel before Emperor Rhulad, and notes it sounds like a spine breaking.",
            ],
            citation: "Chapter 11 - Section 3",
            char: [38, 56, 57, 58, 59, 62],
            loc: [10.815, 213.3],
        },
        {
            id: uuidv4(),
            book: 105,
            name: "Twilight",
            icon: eventIcons.travelBoat,
            description: [
                "Atri-Preda Yan Tovis, aka Twilight, stands with a local Finadd on the north coast of Fent Reach watching the Edur sail to begin their invasion.",
                "800-900 raider ships and 400 transport ships carry about 300,000 Edur as well as The shadow of the enslaved demon spirit-god swimming beneath them. Then a third Edur fleet appeared in the Katter Sea. She surrenders Fent Reach.",
            ],
            citation: "Chapter 15 - Section 9",
            char: [63],
            loc: [8.5, 225.3],
        },
        {
            id: uuidv4(),
            book: 105,
            name: "Trate",
            icon: eventIcons.rally,
            description: [
                "Seren Pedac and Buruk the Pale walk and reach a trail summit and notice that Shadow wraiths have been following them. Buruk is depressed about failing the negotions and ends up killing himself.",
                "Seren Pedac is depressed about Buruks death and drinks heavily as the city begins to turn to choas at the Edur invasion.",
                "Iron Bars, a blue-eyed Crimson Guard soldier that landed in Letheras from Assail, offers to take Seren away from the Empire but she declines.",
                "Two days later the Edur have taken over the city, Seren woke up in the dark cellar of the tavern after having been raped, her armor, weapons, and possessions stolen, and staggers out into the street with Trate in panic over the Edur attack. Iron Bars appears in his blood-red surcoat, saying he’s been looking for Seren for the past two days.",
                "Rhulad and his army are slaughtering Letherii, Iron Bars appears and kills four Edur, then engages with Rhulad and easily kills him and then leaves. Udinaas sits next to Rhulad waiting for him to wake up.",
            ],
            citation: "Chapter 16 - Section 3",
            char: [62, 71, 38, 56, 57, 58, 59],
            loc: [13.5, 231.3],
        },
        {
            id: uuidv4(),
            book: 105,
            name: "High Fort",
            icon: eventIcons.rally,
            description: ["Around 60,000 Edur warriors attack High Fort and use demon wraith sorcery to defeat the Letherii much to Trulls disgust."],
            citation: "Chapter 18 - Section 4",
            char: [38],
            loc: [27.0, 224.3],
        },
        {
            id: uuidv4(),
            book: 105,
            name: "Lether City",
            icon: eventIcons.city,
            description: ["The events that happen inside and outside Lether City"],
            citation: "Chapter 20 to the end of the book",
            char: [38, 56, 57, 58, 59, 60, 61, 64, 65],
            loc: [30.97, 237.9],
        },
    ],

    1160: [
        {
            id: uuidv4(),

            book: 100,
            name: "Siege of Pale",
            icon: eventIcons.battle,
            description: ["The Siege of Pale begins."],
            citation: "",
            char: [],
            loc: [520.8, 75.0],
        },
    ],
    1161: [
        {
            id: uuidv4(),

            book: 101,
            name: "Sorry",
            icon: eventIcons.assassin,
            description: [
                "Cotillion, the Patron God of Assassins seizes control of a young fishergirl's body from a coastal village in Itko Kan and bestows upon her the name 'Sorry'.",
                "Meanwhile, Lorn, the Empress's Adjunct, and Captain Ganoes Paran are tasked with investigating the mysterious massacre at Itko Kan.",
                "Sorry enlists in a nearby garrison, embedding herself within the Malazan military forces. Her enlistment is no mere coincidence; it is a calculated move by Cotillion to place her within the ranks of the Bridgeburners, a legendary unit of the Malazan army.",
            ],
            citation: "Chapter 1 - Section 1",
            char: [1, 2, 17, 74, 75],
            loc: [391.67, 179.45],
        },
        {
            id: uuidv4(),

            book: 101,
            name: "Empress Laseen",
            icon: eventIcons.warren,
            description: [
                "Clawmaster Topper escorts Ganoes Paran, through the arcane pathways of the Imperial Warren, a magical dimension used for rapid travel across vast distances. Their destination is Unta, the heart of the empire, where Paran is to present himself before Empress Laseen.",
                "After he returns home to see his sister Tavore Paran.",
            ],
            citation: "Chapter 1 - Section 4",
            char: [1, 10, 17, 22],
            loc: [415.57, 165.64],
        },
    ],
    1163: [
        {
            id: uuidv4(),

            book: 101,
            name: "Conquest of Pale",
            icon: eventIcons.battle,
            description: [
                "Anomander Rake, Commanding the floating fortress Moon's Spawn he engages in a fierce battle against the Malazan Empire's forces. However, the conflict takes a dire turn when Moon's Spawn sustains significant damage, compelling Rake to make the decision to withdraw from the battlefield.",
                "Amidst the chaos, the Bridgeburners, an elite squad of the Malazan army known for their resilience and camaraderie, find themselves trapped within the city's underground tunnels.",
                "The battle also sees the fall of High Mage Nightchill, and the mage Hairlock receives is damaged and whose soul is then implanted inside a puppet.",
            ],
            citation: "Chapter 2 - Section 1",
            char: [2, 3, 4, 5, 6, 7, 8, 11, 12, 14],
            loc: [520.88, 75.07],
        },
        {
            id: uuidv4(),

            book: 104,
            name: "Karsa trapped",
            icon: eventIcons.tribal,
            description: [
                "Karsa is captured where meets Torvald Nom (cousin of Rallick Nom) in the slave pits. There also some other Thelomen from neighbouring tribes here who are broken which annoys Karsa as he believes his people shouldn't be so weak.",
                "Karsa manages to escape and frees Torvals Nom. Karsa goes on another killing spree but is caputred again by the Malazans who are going to use him as a slave in the Otataral mines.",
                "Torvald convinces the guards that Karsa may be brain dead from the shovel so they don't kill him. Torvald looks after Karsa while he waits to plan his revenge where he makes a vow (one of his many) against all Malazans.",
            ],
            citation: "Chapter 2 - Section 5",
            char: [39],
            loc: [519.495, 35.305],
        },
        {
            id: uuidv4(),

            book: 101,
            name: "New Captain of the Bridgeburners",
            icon: eventIcons.death,
            description: ["Paran arrives to Pale as the new Captain of the Bridgeburners, after his introduction he is killed by Sorry."],
            citation: "Chapter 3 - Section 4",
            char: [1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 74, 75],
            loc: [520.88, 75.07],
        },
        {
            id: uuidv4(),

            book: 101,
            name: "Darujhistan",
            icon: eventIcons.city,
            description: ["Intoduction of the characters of Darajhistan."],
            citation: "Chapter 5 - Section 1",
            char: [15, 16, 14],
            loc: [522.65, 84.28],
        },
        {
            id: uuidv4(),

            book: 101,
            name: "Bridgeburners arrive north of Darujhistan",
            icon: eventIcons.travelBoat,
            description: ["The Bridgeburners find a boat to sail accross to Darujhistan where Sorry reveals she knows how to sail."],
            citation: "Chapter 8 - Section 1",
            char: [2, 4, 5, 11, 12],
            loc: [522.65, 81],
        },
        {
            id: uuidv4(),

            book: 104,
            name: "Escape to the mainland",
            icon: eventIcons.slave,
            description: [
                "Karsa boat is trapped inside the flooded warren Nascent, Torbald Nom manages to free Karsa from his bindings and they being to look for an escape. Where they find the Silanda. They are attacked by some Tiste Edur but Karsa easily kills them all.",
                "Eventually with the help the slaver Silgar, Damisk, and Borugg. Karsa and Torvald Nom escape the warren. They 2 groups go there seperate ways. Karsas group find a tower where a Napan man named Keeper is putting together a giant fossil. Karsa attempts to attack Keeper is knocked out with ease. Upon awakening Karsa is humbled and agrees to help out.",
                "They make there way to Ehrlitan but are attacked by slavers and kidnapped.",
            ],
            citation: "Chapter 3 Section 5",
            char: [39],
            loc: [407.87, 48.12],
        },

        {
            id: uuidv4(),

            book: 101,
            name: "Adjunct Lorn arrives at Pale",
            icon: eventIcons.city,
            description: ["Lorn confronts Tattersail on her killing of her family. Dujek reminds her that her duty is to the Empire and not herself."],
            citation: "Chapter 9 - Section 4",
            char: [1, 3, 6, 7, 13, 17, 18],
            loc: [520.88, 75.07],
        },
        {
            id: uuidv4(),

            book: 101,
            name: "Crone meets Caladin brood",
            icon: eventIcons.travelFly,
            description: [""],
            citation: "Chapter 9 - Section 9",
            char: [14, 9],
            loc: [530.62, 52.05],
        },
        {
            id: uuidv4(),

            book: 101,
            name: "Conflagration",
            icon: eventIcons.warren,
            description: [
                "Tattersail attacks Bellurdan but due to being near Tool it explodes killing her.",
                "Paran and Toc finder Tattersail and Bellurdans remains, although the body of Nightchill that Bellurdan was carrying is missing.",
            ],
            citation: "Chapter 10 - Section 2",
            char: [3, 17, 18, 1, 7],
            loc: [530.62, 79.67],
        },
        {
            id: uuidv4(),

            book: 101,
            name: "Crone is attacked",
            icon: eventIcons.travelFly,
            description: ["Hairlock attacks Crone and other crows."],
            citation: "Chapter 10 - Section 6",
            char: [6, 14],
            loc: [528.85, 76.61],
        },
        {
            id: uuidv4(),

            book: 101,
            name: "Gadrobi Hills",
            icon: eventIcons.jaghurt,
            description: [
                "Lorn attacks Kruppes group and then awakens the Jaghurt Tyrant.",
                "The Jaghut Tyrant's Raest awakens and fights 4 black dragons and the red dragon Silanah and defeats them at the cost of his physical body.",
                "Raest enters Kruppes dream and meets K'rul, Tool destorys his dream body but he escapes into a new body",
            ],
            citation: "Chapter 14 - Section 1",
            char: [17, 18, 2, 15, 16, 1, 6, 7, 8, 14, 3],
            loc: [529.73, 84.28],
        },
        {
            id: uuidv4(),

            book: 101,
            name: "Battle over Darujhistan",
            icon: eventIcons.seed,
            description: ["The Finnest grows into a Azath House, and the Tyrant attacks the city. But is stopped by Kruppe in the dream world and with a Cusser from Fiddler in the real world."],
            citation: "Chapter 18 - Section 1",
            char: [1, 2, 4, 5, 8, 11, 12, 14, 15, 16, 17, 18],
            loc: [522.65, 84.28],
        },
        {
            id: uuidv4(),

            book: 104,
            name: "Thelomen Tartheno Toblakai",
            icon: eventIcons.tribal,
            description: [
                "Karsa and Leomen of the Flails are rescued by Tovald Nom.",
                "Karsa along with Leomen attack and kill the slavers that captured them and the 2 of them make there way to Raraku to meet Sha'ik.",
            ],
            citation: "Chapter 4 - Section 5",
            char: [39, 50],
            loc: [398.25, 52.19],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Start of Book 2 - Deadhouse Gates",
            icon: eventIcons.death,
            description: ["The Nobles of Unta are culled and Felisin is enslaved by her sister."],
            citation: "Prologue",
            char: [19, 20, 22],
            loc: [415.57, 165.64],
        },
    ],
    1164: [
        {
            id: uuidv4(),

            book: 103,
            name: "Crater",
            icon: eventIcons.travelCart,
            description: ["A caravan of merchants heading eastward towards Darujhistan are blocked by a river whose bridge was destroyed."],
            citation: "Chapter 1 - Section 1",
            char: [30, 31, 32, 35],
            loc: [529.73, 84.28],
        },
        {
            id: uuidv4(),

            book: 103,
            name: "The tower",
            icon: eventIcons.warren,
            description: ["Toc the Younger wakes up after being spat out of the warren of Choas, Tool finds him and they make their way to Lady Envy's tower"],
            citation: "Chapter 1 - Section 2",
            char: [7, 18, 33],
            loc: [522.655, 136.475],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Coltain arrives",
            icon: eventIcons.travelHorse,
            description: ["Coltain is made Fist of the 7th Malazan army"],
            citation: "Chapter 1 - Section 2",
            char: [25, 26],
            loc: [424.42, 58.19],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "The Holy book",
            icon: eventIcons.prayer,
            description: ["Kalam takes the holy book and Fiddler goes his seperate way in order to complete their intitial goal."],
            citation: "Chapter 2 - Section 4",
            char: [2, 11, 12, 15],
            loc: [408.49, 48.98],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Panpot'sun Odhan",
            icon: eventIcons.ruins,
            description: ["Mappo and Icarium meet Iskaral Pust and Servant."],
            citation: "Chapter 2 - Section 5",
            char: [23, 24, 28],
            loc: [406.95, 52.05],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Slave",
            icon: eventIcons.slave,
            description: ["Felisin sells her body to try and make a better life for Herboric and Baudin even though they don't care."],
            citation: "Chapter 3 - Section 1",
            char: [19, 20],
            loc: [433.27, 52.05],
        },
        {
            id: uuidv4(),

            book: 103,
            name: "Meeting",
            icon: eventIcons.rally,
            description: ["Dujek meets with Caladin Brood, Anomander Rake, Kallor and Silverfox outside Pale to discuss the attack on the Pannion Domin. Paran is made master of the Deck of Dragons."],
            citation: "Chapter 3 - Section 2",
            char: [1, 3, 4, 5, 8, 9, 13, 14, 16, 29],
            loc: [523.54, 73.53],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Tesem Temple",
            icon: eventIcons.ruins,
            description: ["Mappo and Icarium explore."],
            citation: "Chapter 3 - Section 7",
            char: [23, 24, 28],
            loc: [404.3, 53.25],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Solo",
            icon: eventIcons.assassin,
            description: ["Kalam rests from his travels but is pursed by the Red Blade Captain Lostara Yil."],
            citation: "Chapter 4 - Section 2",
            char: [11],
            loc: [402.3, 53.59],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "The poor disguise",
            icon: eventIcons.fete,
            description: ["Fiddlers group pretend to be newly weds in order to travel the 3 citys and the group work out that Dancer is now Cotillion."],
            citation: "Chapter 5 - Section 1",
            char: [2, 12, 15],
            loc: [405.84, 56.65],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Sha'ik",
            icon: eventIcons.prayer,
            description: ["Kalam hands the holy book over to Sha'ik and leaves with the Aptorian. Sha'ik is assisanated"],
            citation: "Chapter 5 - Section 3",
            char: [11, 39, 50],
            loc: [398.75, 53.58],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "The Whirlwind begins",
            icon: eventIcons.whirlwind,
            description: ["The Whirlwind begins, which casues Duiker and Kulp to be split up from each other and Coltaines warband."],
            citation: "Chapter 6 - Section 4",
            char: [25],
            loc: [423.54, 56.65],
        },
        {
            id: uuidv4(),

            book: 103,
            name: "Accross Lamatath Plains",
            icon: eventIcons.travelFoot,
            description: [
                "Toc the Younger groups are heading north towards a distabance in the warrens.",
                "The Seguleh want to fight Tool as he is strong and the weakest of the Seguleh, Thurule’s is easily defeated by Tool. The Seguleh claim that Anamanda Rake is rank 7th among them although he has yet to claim his title.",
                "Lady Envy denies any more duels for the night and demands dinner to be set up, and flirts again with Toc.",
            ],
            citation: "Chapter 5 - Section 1",
            char: [7, 18, 33],
            loc: [530.655, 130.475],
        },
        {
            id: uuidv4(),

            book: 103,
            name: "The new card?",
            icon: eventIcons.card,
            description: [
                "Anamanda Rake meets with the aliance where Kallor calls for Anomander Rake to slay Silverfox as she is dangerous and he draws Dragonipur. Whiskeyjack stands in front of Silverfox, and plants his sword between him and Rake and says ‘I stand here’. A fight almost breaks out until Kruppe appears hanging by his leg on the flying map table with pastries falling from him which resembles the new card in the deck of dragons appears bearing Parans appereance.",
                "Paran enters the Finnest House where he is told he is the master of the deck",
            ],
            citation: "Chapter 5 - Section 11",
            char: [1, 3, 4, 5, 8, 9, 13, 14, 16, 29],
            loc: [523.54, 73.53],
        },
        {
            id: uuidv4(),

            book: 103,
            name: "To Capustan",
            icon: eventIcons.tlanimass,
            description: ["Gruntles caravans are attacked by undead K'Chain Che'Malle on the way to Capustan and then rescued by T'lan Imass and the Mortal Swords Itkovians forces"],
            citation: "Chapter 6 - Section 7",
            char: [30, 31, 32, 35, 36],
            loc: [543.39, 82.89],
        },

        {
            id: uuidv4(),

            book: 102,
            name: "Army of the Apocalypse",
            icon: eventIcons.rally,
            description: [
                "Duiker returns to Hissar to see the chaos and pretends to be member of the Apocalypse with a deathwish of revenge, Coltaine is attemping to bring the refugses back to Aran",
            ],
            citation: "Chapter 6 - Section 5",
            char: [25],
            loc: [424.42, 58.19],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Into the Whirlwind",
            icon: eventIcons.whirlwind,
            description: ["Fiddler's Crew enter the great Whirlwind to escape pursuit."],
            citation: "Chapter 6 - Section 7",
            char: [2, 12, 15],
            loc: [400.53, 53.59],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Unexpected saviour",
            icon: eventIcons.assassin,
            description: ["Kalam is attacked by D'ivers but the demon Apt protects him but sustains damage."],
            citation: "Chapter 6 - Section 8",
            char: [11],
            loc: [398.76, 56.65],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Freedom?",
            icon: eventIcons.travelFoot,
            description: ["The group travels the desert and almost die but the Boar cult god Fener heals Herboric but is brought into the mortal world."],
            citation: "Chapter 7 - Section 2",
            char: [19, 20],
            loc: [431.5, 48.98],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Happenstance",
            icon: eventIcons.diverLand,
            description: ["Mappo and Icarium save Fiddlers group."],
            citation: "Chapter 7 - Section 4",
            char: [2, 12, 15, 23, 24],
            loc: [400.53, 53.59],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Nascent",
            icon: eventIcons.warren,
            description: ["Felisins group are on their last legs, and then Kulp appears asking for their help from an insane mage who brings them into the flodded warren Nascent."],
            citation: "Chapter 8 - Section 3",
            char: [19, 20],
            loc: [427.96, 48.98],
        },
        {
            id: uuidv4(),

            book: 103,
            name: "Lamatath Plain continued",
            icon: eventIcons.travelFoot,
            description: ["Tocs group travel towards Bastion, Toc meets Tools living sister who refused to become a bone T'lan, Toc comforts Tool and is given a new name by the Seguleh"],
            citation: "Chapter 7 - Section 4",
            char: [7, 18, 33, 72],
            loc: [524.805, 121.265],
        },
        {
            id: uuidv4(),

            book: 103,
            name: "Callows",
            icon: eventIcons.warren,
            description: [
                "Lady Envy meets K'rul at the city Callows who says the main threat isn't the Pannion Domin but the one controlling them. The Crippled God. She also learns about the origins of the Warrens, K'ruls body. And that the Crippled God is killing him.",
            ],
            citation: "Chapter 7 - Section 7",
            char: [33],
            loc: [512.415, 115.125],
        },
        {
            id: uuidv4(),

            book: 103,
            name: "Vision Mountains",
            icon: eventIcons.travelFly,
            description: ["Black Moranth transport Captain Paran and the Bridgeburners to the Vision Mountains in order to meet up with the Barhgast tribes"],
            citation: "Chapter 8 - Section 7",
            char: [1],
            loc: [544.275, 87.49],
        },

        {
            id: uuidv4(),

            book: 103,
            name: "Fear",
            icon: eventIcons.death,
            description: ["Toc runs away from Tool and Lady Envy after witnessing a battle realising if he stays, he will die. He then joins the Pannion Domin in order to live."],
            citation: "Chapter 9 - Section 4",
            char: [7, 18, 33],
            loc: [531, 101.3],
        },
        {
            id: uuidv4(),

            book: 103,
            name: "Capustan surrounded",
            icon: eventIcons.slave,
            description: ["Capustan has been surrounded by over 100,000 cultists."],
            citation: "Chapter 10 - Section 1",
            char: [30, 31, 32, 35, 36],
            loc: [551.355, 87.49],
        },
        {
            id: uuidv4(),

            book: 103,
            name: "Barghast Camp",
            icon: eventIcons.campfire,
            description: ["Quick Ben attempts to meet Captain Paran but is pulled into a Warren, Trotts becomes the new clan leader of the Bridgeburners "],
            citation: "Chapter 11 - Section 1",
            char: [1, 4],
            loc: [544.275, 87.49],
        },
        {
            id: uuidv4(),

            book: 103,
            name: "The Seer’s Tower",
            icon: eventIcons.jaghurt,
            description: ["Toc meets the leader of the Pannion Domin the Pannion Seer who is a Jaghurt, Toc is captured by a K'Chain Che'Malle Materon and is tortured while being constantly healed."],
            citation: "Chapter 12 - Section 1",
            char: [7],
            loc: [545, 104.3],
        },
        {
            id: uuidv4(),

            book: 103,
            name: "The journey to Capustan",
            icon: eventIcons.travelCart,
            description: [
                "Whiskeyjacks forces make there way to Capustan although they believe they will not make it in time.",
                "Kallor is contacted by the Crippled god to be High king of the House of Chains, which he accepts.",
            ],
            citation: "Chapter 13 - Section 1",
            char: [3, 5, 9, 13, 14, 16, 29, 37],
            loc: [531, 76.75],
        },
        {
            id: uuidv4(),

            book: 103,
            name: "Battle of Capustan",
            icon: eventIcons.battle,
            description: ["All of the events that occur during and after the attack on Capustan from the Pannin Domin"],
            citation: "Chapters 14 to 20",
            char: [1, 3, 4, 5, 9, 13, 14, 16, 29, 30, 31, 32, 34, 35, 36, 37, 81],
            loc: [551.355, 87.49],
        },

        {
            id: uuidv4(),

            book: 102,
            name: "Tesem Temple",
            icon: eventIcons.ruins,
            description: ["Fiddler recovers and Aspala leaves with her father who was Servant and the group go after her."],
            citation: "Chapter 8 - Section 6",
            char: [23, 24, 28, 2, 12, 15],
            loc: [404.3, 53.25],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Kalams renown",
            icon: eventIcons.assassin,
            description: ["Kalam saves a group from bandits and join forces with them heading for Aren."],
            citation: "Chapter 9 - Section 2",
            char: [11],
            loc: [398.76, 59.72],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Chain of Dogs - I",
            icon: eventIcons.dog,
            description: ["Duiker rejoins Coltaines army."],
            citation: "Chapter 10 - Section 1",
            char: [25, 26],
            loc: [420.0, 59.72],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Back to the desert?",
            icon: eventIcons.warren,
            description: ["Felisins group and Kulp escape the warren due to an giant undead dragon making a hole in the warren and end up on the mainland."],
            citation: "Chapter 11 - Section 2",
            char: [19, 20],
            loc: [235, 33],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Imperial Warren",
            icon: eventIcons.warren,
            description: ["Kalam's group travel the Imperial warren aiming for Aren."],
            citation: "Chapter 11 - Section 7",
            char: [11],
            loc: [398.76, 59.72],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Chain of Dogs - II",
            icon: eventIcons.dog,
            description: ["Duiker joins a skirmish on the enemy camp."],
            citation: "Chapter 12 - Section 1",
            char: [25, 26],
            loc: [406.72, 64.33],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "The First Empire",
            icon: eventIcons.ruins,
            description: ["Felisins group find remnants of the first empire. Felisins group leave the city but are attacked by the Rat D'ivers, Kulp and Baudin die."],
            citation: "Chapter 12 - Section 4",
            char: [19, 20],
            loc: [399.64, 52.05],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Tracking",
            icon: eventIcons.whirlwind,
            description: ["Fiddler groups trys to find Apsalar and her father."],
            citation: "Chapter 12 - Section 8",
            char: [23, 24, 28, 2, 12, 15],
            loc: [400.53, 53.59],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Chain of Dogs - III",
            icon: eventIcons.dog,
            description: ["Duiker joins a skirmish on the enemy camp."],
            citation: "Chapter 13 - Section 1",
            char: [25, 26],
            loc: [406.72, 64.33],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Chain of Dogs - IV",
            icon: eventIcons.dog,
            description: ["Battle of Gelor Ridge."],
            citation: "Chapter 13 - Section 3",
            char: [25, 26],
            loc: [403.18, 64.33],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Imperial Warren - Aren",
            icon: eventIcons.city,
            description: ["Kalam group exit the Imperial Warren at Aren."],
            citation: "Chapter 13 - Section 6",
            char: [11],
            loc: [390.79, 85.82],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Sha'ik Reborn",
            icon: eventIcons.prayer,
            description: ["Felisin finds Sha'ik body still being guarded by the Telobakai and Leoman where they believe she is Sha'ik Reborn."],
            citation: "Chapter 14 - Section 5",
            char: [19, 20, 39, 50],
            loc: [398.76, 53.59],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Set sail",
            icon: eventIcons.travelBoat,
            description: ["Kalam is on the boat Ragstopper heading towards the capital city of the Malazan empire Unta."],
            citation: "Chapter 15 - Section 1",
            char: [11, 41],
            loc: [404.95, 90.15],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Chain of Dogs - V",
            icon: eventIcons.dog,
            description: ["Onwards to Aren"],
            citation: "Chapter 15 - Section 3",
            char: [25, 26],
            loc: [396.98, 62.79],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Tremorlor",
            icon: eventIcons.ruins,
            description: ["The group enters Tremorlor."],
            citation: "Chapter 15 - Section 8",
            char: [23, 24, 28, 2, 12, 15],
            loc: [396.1, 52.05],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Chain of Dogs - VI",
            icon: eventIcons.dog,
            description: ["The Silanda returns"],
            citation: "Chapter 16 - Section 3",
            char: [25, 26],
            loc: [396.99, 65.86],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Storm",
            icon: eventIcons.travelBoat,
            description: ["Kalam and the crew of the Ragstopper are trapped inside a Warren and are blown of course towards Malaz City."],
            citation: "Chapter 17 - Section 1",
            char: [11, 41],
            loc: [418.93, 106.75],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Chain of Dogs - VII",
            icon: eventIcons.dog,
            description: ["The Trygalle Trade Guild arrive bringing needed supplies."],
            citation: "Chapter 19 - Section 9",
            char: [25, 26],
            loc: [385.48, 73.53],
        },

        // after capustan
        {
            id: uuidv4(),

            book: 103,
            name: "Over the water",
            icon: eventIcons.travelBoat,
            description: ["Lady Envys group is going to Coral to save Toc and defeat the Seer"],
            citation: "Chapter 20 - Section 8",
            char: [18, 33],
            loc: [546.045, 96.705],
        },
        {
            id: uuidv4(),

            book: 103,
            name: "Setta",
            icon: eventIcons.travelCart,
            description: ["Whiskeyjacks and Dujek’s army head towards the city Setta."],
            citation: "Chapter 21 Section 6",
            char: [3, 5, 13, 16],
            loc: [548.7, 89.03],
        },

        {
            id: uuidv4(),

            book: 103,
            name: "Lest",
            icon: eventIcons.travelCart,
            description: ["Caladin broods army heads towards Lest"],
            citation: "Chapter 22 - Section 3",
            char: [9, 14, 29, 37, 36, 30],
            loc: [546.7, 89.03],
        },

        {
            id: uuidv4(),

            book: 103,
            name: "Attack on Coral city",
            icon: eventIcons.battle,
            description: [
                "The final fight for Coral city.",
                "Itkovian accepts the pain of the T'lain Imass and dies as a result.",
                "Whiskeyjack is killed by Kallor, who flees.",
                "Toc the Younger dies from his wounds and is reborn as Toc Anaster. Tool dies in a duel by the rank 3 Seguleh Mok. A majority of the Bridgeburners are killed.",
                "Moonspawn is damaged beyond repair and sunk into the sea. Anomander Rake decides to remain Coral, now known as Black Coral as the new home of the Tistii Andi.",
                "The remaining Bridgeburners are retired out of the army and head to Darujistan and open a bar.",
            ],
            citation: "Chapter 24 to end of Book",
            char: [1, 4, 3, 5, 13, 16, 9, 14, 29, 37, 36, 30, 18, 33, 72],
            loc: [546.045, 93.63],
        },

        {
            id: uuidv4(),

            book: 102,
            name: "Chain of Dogs - VIII",
            icon: eventIcons.dog,
            description: [
                "Coltaine has decided to send Duiker ahead with Nether and Nil and a Wickan troop to deliver the refugees to Aren",
                "the remaining army will stay back to defend against Korbolo Dom.",
            ],
            citation: "Chapter 20 - Section 5",
            char: [25],
            loc: [385.48, 79.67],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Chain of Dogs - IX",
            icon: eventIcons.dog,
            description: [
                "Duiker and the refugees enter Aren. High Fist Pormqual refuses to help and the rest of Coltaines army is slain outside the walls as he has an aliance with the Army of the Apoclopyse.",
            ],
            citation: "Chapter 21 - Section 2",
            char: [25, 26, 84],
            loc: [390.79, 85.82],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Malaz city ",
            icon: eventIcons.assassin,
            description: ["Kalam arrives in Malaz City but is hunted by the Claw but Kalam does Kalam kills any assassin that comes after him."],
            citation: "Chapter 22 - Section 1",
            char: [11],
            loc: [420.0, 185.6],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Chain of Dogs - X",
            icon: eventIcons.dog,
            description: ["Duiker is betrayed and crucified outside Aren with the rest of the army."],
            citation: "Chapter 22 - Section 9",
            char: [25, 26, 84],
            loc: [390.79, 85.82],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Deadhouse",
            icon: eventIcons.city,
            description: [
                "Kalam speaks to Empress Lassen and is persuaded by her that Dujeks exile is part of her plan and Tayschrenn tried to protect the Bridgeburners and that Kellanved as a bad ruler and she did all the work anyway.",
                "Fiddlers group end up in Malaz City by using the Tremalore as a gate to the Deadhouse in Malaz city and meetup with Kalam and then are saved by Shadowthrone.",
            ],
            citation: "Chapter 23 - Section 4",
            char: [11, 2, 12, 15, 10],
            loc: [420.0, 185.6],
        },
        {
            id: uuidv4(),

            book: 102,
            name: "Sha'ik Reborn - end of Book 2.",
            icon: eventIcons.whirlwind,
            description: [
                "Felisin uses the whirlwind to teleport to Aren gathers her rebellion army and returns to Raraku. Mappo and Icarium end up outside Aren and meet the Silandra crew who are seraching for Duikers body which they can't find.",
            ],
            citation: "Chapter 24 - Section 1",
            char: [19, 20, 23, 24, 39, 50],
            loc: [416.8, 50.6],
        },
        {
            id: uuidv4(),

            book: 104,
            name: "Bones",
            icon: eventIcons.city,
            description: ["Adjunct Tavores army heads off to destory the Shai'ik Army and to get revenge on Pormqual."],
            citation: "Chapter 5",
            char: [12, 22, 40, 41, 41, 43, 44, 45, 46],
            loc: [390.79, 85.82],
        },
        {
            id: uuidv4(),

            book: 104,
            name: "Cutter",
            icon: eventIcons.assassin,
            description: ["Apsalar returns home but realises this isn't her life anymore. Cotillion sends them on a quest to protect the Throne of Shadow."],
            citation: "Chapter 6 - Section 1",
            char: [2, 15, 74, 75],
            loc: [389.67, 180.45],
        },
        {
            id: uuidv4(),

            book: 104,
            name: "Sha’ik’s Encampment",
            icon: eventIcons.city,
            description: [
                "Sha'ik Encampment have multiple factions that are working under her but are not really aligned in the same goals as they all want power of their own. Felisin is becoming more possed by the spirit of Shai'ik.",
            ],
            citation: "Chapter 7",
            char: [19, 20, 39, 49, 50, 51, 52, 53],
            loc: [398.25, 52.19],
        },
        {
            id: uuidv4(),

            book: 104,
            name: "New Mount",
            icon: eventIcons.travelHorse,
            description: [
                "Karasa leaves Shai'ik encampent but claims he will return and he begings to travels to the Jhag Odhan to get a new horse. On the way he meet Icarium and Mappo runt, he challenges Icarium to a duel but Mappo attacks him from behind and then they leave him. When he wakes up he keeps traveling West and confronts his Stone Gods who were just T'lan Imass, he creates a new sword made out of flint",
            ],
            citation: "Chapter 10 - Section 3",
            char: [39, 23, 24],
            loc: [327.45, 85.96],
        },
        {
            id: uuidv4(),

            book: 104,
            name: "Drift Avalii",
            icon: eventIcons.warren,
            description: [
                "The Throne of Shadow is attacked by the Tiste Edur, Traveller and Cotilion protect it with the help of Apsalar. Traveller remains to stand guard as Crokus and Apsalar leave to Seven Cities.",
            ],
            citation: "Chapter 12 - Section 1",
            char: [2, 15, 74, 75, 55],
            loc: [353.0, 200.0],
        },
        {
            id: uuidv4(),

            book: 104,
            name: "Rivers in a Desert",
            icon: eventIcons.battle,
            description: ["Everything that happens in Raraku which then results in it being flooded"],
            citation: "Chapter 18 to end of the book",
            char: [4, 11, 12, 19, 20, 22, 38, 39, 40, 41, 42, 43, 44, 45, 46, 49, 50, 51, 52, 53, 54, 74, 75],
            loc: [398.25, 52.19],
        },
        {
            id: uuidv4(),

            book: 106,
            name: "Start of Book 6 - The Bonehunters",
            icon: eventIcons.ascended,
            description: [
                "Kartool Island, formerly a major outpost for the religion of D'rek which Kellanved sent Dancer and Surly to eliminate the D'rek sorcerers, with the help of Tayschrenn, the former Demidrek that the grand temple ousted in an internal coup (find out more in Paths to Ascendancy series). Sergeant Hellian investigates the temple of D'rek after disturbing reports only to find everyone inside dead.",
            ],
            citation: "Prologue - Section 1",
            char: [76],
            loc: [428.34, 171.92],
        },
        {
            id: uuidv4(),

            book: 106,
            name: "Dejim Nebrahl",
            icon: eventIcons.dog,
            description: [
                "A dozen Nameless Ones carry out a ritual to release Dejim Nebrahl.",
                "The 12th Nameless One, Sister Spite, makes sure Dejim Nebrahl agrees to their task before freeing him. After he is free he kills all of The Nameless Ones apart form her.",
            ],
            citation: "Prologue - Section 2",
            char: [78],
            loc: [398.25, 52.19],
        },
        {
            id: uuidv4(),

            book: 106,
            name: "Blacksmith Barathol",
            icon: eventIcons.tlanimass,
            description: [
                "The village was once renowned across the Seven Cities continent for its lumber used for sarcophagi, farmed into extinction the village had been reduced to 18 villagers, a wayside stop for Malazan travelers on the road",
                "Barathol Mekhar is a taciturn black smith, onyx skinned, the only resident not native to the village and its unofficial leader",
                "Barathol recognizes five T’lan Imass approaching and tells the villagers to prepare weapons and hide",
            ],
            citation: "Prologue - Section 4",
            char: [77],
            loc: [422.145, 53.7],
        },
        {
            id: uuidv4(),

            book: 106,
            name: "Remnants of the Apocalypse",
            icon: eventIcons.whirlwind,
            description: ["Leoman's army, the last force of the Army of the Apocalypse that still has the Holy Book of Dryjhna, uses a sandstorm as cover to escape Tavore's pursuing army"],
            citation: "Chapter 1 - Scene 2",
            char: [50, 53],
            loc: [394.0, 56.0],
        },
        {
            id: uuidv4(),
            book: 106,
            name: "Karsa saves Samar Dev",
            icon: eventIcons.travelCart,
            description: [
                "Samar Dev was stranded in the plains when she took an investor out to test her invention, a wagon that moves using two levers. The investor died, she broke her foot kicking the wheel out of frustration, and slowly succumbs to dehydration",
                "Karsa Orlong appears, giving her a flask to drink and offers to save her if she can help him enter the city beneath notice to purchase supplies.",
            ],
            citation: "Chapter 1 - Scene 3",
            char: [39, 73],
            loc: [370.815, 59.864],
        },
        {
            id: uuidv4(),
            book: 106,
            name: "Telorast & Curdle",
            icon: eventIcons.assassin,
            description: [
                "Apsalar has left Dujek's Army and Crokus and is attacked inside a bar which she easily defeats. She crys in her room for abandoning Crokus, feeling undeserving of his love and not wanting him to follow her path",
                "Apsalar rescues Telorast & Curdle who are trapped in the realm of Shadow in the city Ehrlitan.",
            ],
            citation: "Chapter 1 - Scene 4",
            char: [2, 79],
            loc: [408.87, 49.12],
        },
        {
            id: uuidv4(),
            book: 106,
            name: "Path'Apur Mountains",
            icon: eventIcons.travelFoot,
            description: ["Crokus was tasked by Cotillion to protect Felisin Younger. Thus he travels with her, Scillara, Heboric, and Greyfrog "],
            citation: "Chapter 2 - Scene 5",
            char: [15, 20, 49, 52],
            loc: [413.0, 51.0],
        },
        {
            id: uuidv4(),
            book: 106,
            name: "Pursuit",
            icon: eventIcons.bridgeBurners,
            description: [
                "Tavores army is on the hunt for the rest of the Army of the Apocalpse and are just a few days behind them.",
                "A Meeting takes place between High Fists and High Mages in the Malazan Army.",
            ],
            citation: "Chapter 2 - Scene 6",
            char: [4, 11, 12, 13, 22, 42, 43, 44, 45, 46, 83],
            loc: [397.0, 57.0],
        },
        {
            id: uuidv4(),
            book: 106,
            name: "Chasam",
            icon: eventIcons.jaghurt,
            description: [
                "Mappo and Icarium discover a Chasam which Icarium can sense Omtose Phellack ice below. They explore the Chasam and discover an abandoned K'Chain Che'Malle Skykeep (like Moonspawn) which Icarium believes he has been here before",
                "Deeper inside, they reach a vast chamber with a dragon nailed by its throat to a black wooden cruciform, recently melted, fist-sized aquamarine blood still dripping down, Icarium recognizes the dragon as Sorrit, aspected to Serc, the human Path of the Sky.",
            ],
            citation: "Chapter 4 - Scene 6",
            char: [23, 24],
            loc: [387.0, 53.0],
        },
        {
            id: uuidv4(),
            book: 106,
            name: "New forms",
            icon: eventIcons.ruins,
            description: [
                "Aspalar and the ghosts travel the Shadow Warren eastwards out of Ehrlitan and joining with the traders track that led to the coastline, Apsalar keeps walking and reaches Bai’enrok/Keeper’s tower on the coast",
                "Apsalar knocks on the door and immediately recognizes the Napan man as Urko Crust, who slams the door as soon as she mention Dancer but let’s her in anyways. Urko knows the real Apsalar, Mistress of Thieves, as Imass",
                "Telorast and Curdle possess crow-sized skeletons, but with fanged snouts instead of beaks. Urko is elated to see how the bones actually fit, having them stand upright like a meerkat instead of leaning forward like a dinosaur",
                "Urko tells Apsalar that she can trust that Cotillion keeps his word, affirms that Cotillion will leave her alone when she’s done ",
            ],
            citation: "Chapter 4 - Scene 7",
            char: [2, 79],
            loc: [407.87, 48.12],
        },
        {
            id: uuidv4(),
            book: 106,
            name: "Y'Ghatan",
            icon: eventIcons.whirlwind,
            description: ["Leoman and his Army have taken over the city of Y'Ghatan and prepare for the attack form Tavores Malazan Army"],
            citation: "Chapter 4 - Scene 11",
            char: [50, 53],
            loc: [368.16, 55.26],
        },
        {
            id: uuidv4(),
            book: 106,
            name: "Unexpected meeting",
            icon: eventIcons.travelBoat,
            description: [
                "Apsalar and the ghosts travel through a Tiste Edur forest in the Shadow warren fragment, Ganoes Paran appears into the Shadow warren himself to greet Apsalar, and invites her to shift back into the mortal realm to have wine and food in his cabin",
            ],
            citation: "Chapter 5 - Scene 14",
            char: [1, 2, 79],
            loc: [403.87, 48.12],
        },
        {
            id: uuidv4(),
            book: 106,
            name: "To Jhag Odhan",
            icon: eventIcons.tribal,
            description: ["Karsa Orlong and Samar Dev leave Ugarat and head towards the Jhag Odhan"],
            citation: "Chapter 5 - Scene 16",
            char: [39, 73],
            loc: [360.815, 65.864],
        },
        {
            id: uuidv4(),
            book: 106,
            name: "To Jhag Odhan",
            icon: eventIcons.jaghurt,
            description: [
                "Mappo and Icarium pass through several caves used as refuge, storage, paintings, and funeral ceramics on the escarpment dating to the First Empire",
                "Dejim Nebrahl attacked Mappo and swarmed Icarium in its d'ivers form of multiple t'rohlbarahl, Mappo punches one of them as a second chokes Mappo from behind. A third claws across his chest. Mappo jumped back against the wall, crushing the t’rohlbarahl on his back. Then he grabbed the one in front him him and crushes its head in his hands",
                "Icarium collapses under the swarm, Mappo stumbled forward and falls off the cliff, dragging one of the t’rohlbarahl with him",
            ],
            citation: "Chapter 6 - Scene 15",
            char: [23, 24],
            loc: [365.815, 60.864],
        },
        {
            id: uuidv4(),
            book: 106,
            name: "Y'Ghatan",
            icon: eventIcons.bridgeBurners,
            description: ["The battle of Y'Ghatan"],
            citation: "",
            char: [2, 4, 11, 12, 22, 41, 42, 43, 44, 45, 46, 50, 53, 76, 79],
            loc: [368.16, 55.26],
        },
        {
            id: uuidv4(),

            book: 106,
            name: "new High Fist",
            icon: eventIcons.rally,
            description: ["After Dujeks death, Ganoes Paran becomes the new High Fist of the Malazan Army."],
            citation: "",
            char: [1, 13],
            loc: [403.56, 55.26],
        },
        {
            id: uuidv4(),

            book: 106,
            name: "The Bonehunters",
            icon: eventIcons.bridgeBurners,
            description: ["Tavore heads off to return to Malaz city by boat and names her group the Bonehunters."],
            citation: "",
            char: [2, 4, 11, 12, 22, 40, 41, 42, 43, 44, 45, 46, 50, 53, 76, 79],
            loc: [361.965, 56.794],
        },
        {
            id: uuidv4(),

            book: 106,
            name: "Challenger",
            icon: eventIcons.battle,
            description: ["Karsa agrees to fight the Edur emperor. Icarium is also being taken to Lether in order to fight the immortal emperor Rhulad Sengar"],
            citation: "",
            char: [39, 73, 24, 59, 63],
            loc: [352.23, 49.12],
        },
        {
            id: uuidv4(),

            book: 106,
            name: "Ghosthands",
            icon: eventIcons.travelBoat,
            description: ["The moon explodes and a meteor is heading towards the planet. Heboric uses the power of the Green Statues to stop it with some help from Hood."],
            citation: "",
            char: [15, 20, 23, 28, 52, 77, 78],
            loc: [423.915, 47.72],
        },
    ],
    1165: [
        {
            id: uuidv4(),

            book: 106,
            name: "Return to Malaz City",
            icon: eventIcons.city,
            description: ["Everything that happens in Malaz city and the exile of the Bonehunters."],
            citation: "",
            char: [2, 4, 10, 11, 12, 22, 40, 41, 42, 43, 44, 45, 46, 47, 53, 74, 75, 76, 79],
            loc: [420.0, 185.59],
        },
        {
            id: uuidv4(),

            book: 202,
            name: "Return of the Crimson Guard",
            icon: eventIcons.city,
            description: ["The start of Book 2 of Novels of the Malazan Empire."],
            citation: "",
            char: [],
            loc: [602.0, 230.0],
        },
    ],
    1166: [
        {
            id: uuidv4(),

            book: 107,
            name: "Start of Book 7 - Reaper's Gale",
            icon: eventIcons.city,
            description: [""],
            citation: "",
            char: [],
            loc: [16.815, 213.3],
        },
        {
            id: uuidv4(),

            book: 107,
            name: "Tehol Beddict proclaimed king",
            icon: eventIcons.city,
            description: ["Tehol Beddict and Janath Anar are proclaimed king and queen of Lether. Brys Beddict is reborn."],
            citation: "",
            char: [],
            loc: [16.815, 213.3],
        },
        {
            id: uuidv4(),

            book: 107,
            name: "Last year of Empress Laseen's reign",
            icon: eventIcons.city,
            description: [""],
            citation: "",
            char: [],
            loc: [420.0, 185.59],
        },
    ],
    1167: [
        {
            id: uuidv4(),

            book: 109,
            name: "Start of Book 9 - Dust of dreams",
            icon: eventIcons.travelFoot,
            description: ["The snake is traveling through the desert."],
            citation: "",
            char: [],
            loc: [161.5, 255.41],
        },
    ],
    1168: [
        {
            id: uuidv4(),

            book: 108,
            name: "Start of Book 8 - Toll the Hounds",
            icon: eventIcons.warren,
            description: ["Anomander Rake, Shadowthrone, Edgewalker and Hood meet up to discuss their plan."],
            citation: "",
            char: [8, 74, 81],
            loc: [0, 0],
        },
        {
            id: uuidv4(),

            book: 108,
            name: "Toll the Hounds - Karsa group",
            icon: eventIcons.travelHorse,
            description: ["Samar Dev meets Traveller and then is reunited with Karsa. They start heading towards Darujhistan."],
            citation: "",
            char: [73, 55, 39],
            loc: [530.65, 135.28],
        },
        {
            id: uuidv4(),

            book: 108,
            name: "Toll the Hounds - Nimanders group",
            icon: eventIcons.travelCart,
            description: ["Nimanders group travels to Bastion where they meet the False God and then make there way to Coral."],
            citation: "",
            char: [68],
            loc: [531, 101.3],
        },
        {
            id: uuidv4(),

            book: 108,
            name: "Toll the Hounds - Darujhistan",
            icon: eventIcons.city,
            description: ["Everything that happens in Darujhistan for the whole book."],
            citation: "",
            char: [16, 14, 15, 23, 25, 28, 30, 31, 33, 52, 80, 81],
            loc: [522.65, 84.28],
        },
        {
            id: uuidv4(),

            book: 110,
            name: "Start of Book 10 - The Crippled God",
            icon: eventIcons.assassin,
            description: [
                "Cotillion, armed with two daggers, confronts a figure known as Edgewalker. He reflects on the wear of his weapons and dismisses the idea of explaining his actions. The figure, described as an expressionless, decayed apparition, questions Cotillion's audacity.",
                "Cotillion asserts his disbelief in failure and his indifference to others' beliefs about his success or failure. Despite Edgewalker's skepticism and the suggestion that Cotillion cannot win, Cotillion remains defiant, suggesting that not winning doesn't necessarily equate to losing. The passage conveys a tense exchange, highlighting Cotillion's resolve and the eerie presence of Edgewalker.",
            ],
            citation: "",
            char: [75],
            loc: [0, 0],
        },
        {
            id: uuidv4(),

            book: 110,
            name: "The Crippled God - Battle of the Spire",
            icon: eventIcons.battle,
            description: [
                "The battle takes place outside Kolanse City once Adjunct Tavore Paran and her allies arrived with the goal of freeing the heart of the Crippled God which was held within the Great Spire by the Forkrul Assail.",
            ],
            citation: "",
            char: [],
            loc: [209.745, 259.41],
        },
    ],
    1169: [],
    1178: [
        {
            id: uuidv4(),

            book: 114,
            name: "Start of Book 1 - The God is Not Willing",
            icon: eventIcons.warren,
            description: ["set 10 years after the ending of Malazan Book of the Fallen."],
            citation: "",
            char: [],
            loc: [0, 0],
        },
    ],
};

export default timelineData;
