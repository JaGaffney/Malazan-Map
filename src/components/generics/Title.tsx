import { HiX } from "react-icons/hi";
import { IClose } from '../interfaces/close.interface';
import { useMediaQuery } from "react-responsive";
import { SCREEN_SIZE_DESKTOP } from "../../state/CONSTANTS";
import { headerColor } from "../utils/color";
export interface ITitle extends IClose {
    nameColor?: string;
    name: string;
}

export default function Title({ nameColor, name, onCloseHandler }: ITitle) {
    const isDesktopOrLaptop: any = useMediaQuery({ query: SCREEN_SIZE_DESKTOP })

    const colour = headerColor(name)
    let cssProperties: any = {}

    cssProperties['--_buttonColourLight'] = colour.light
    cssProperties['--_buttonColourDark'] = colour.dark

    if (!isDesktopOrLaptop && nameColor) {
        cssProperties['--_buttonColourDark'] = nameColor;
    }

    return (
        isDesktopOrLaptop ? (
            <div className="taskbar" style={cssProperties}>
                <h5 style={{ color: nameColor ? nameColor : "inherit" }}>{name}</h5>
                <button onClick={() => onCloseHandler(false)}><HiX /></button>
            </div>
        ) : (
            <div
                className="taskbar"
                onClick={() => onCloseHandler(false)}
                style={cssProperties}
            >
                <h5 style={{ color: colour.light }}>{name}</h5>
            </div>
        )
    )
}
