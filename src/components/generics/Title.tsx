import { HiX } from "react-icons/hi";
import { IClose } from '../interfaces/close.interface';
import { useMediaQuery } from "react-responsive";
import { SCREEN_SIZE_DESKTOP } from "../../state/CONSTANTS";
export interface ITitle extends IClose {
    nameColor?: string;
    name: string;
}

export default function Title({ nameColor, name, onCloseHandler }: ITitle) {
    const isDesktopOrLaptop: any = useMediaQuery({ query: SCREEN_SIZE_DESKTOP })
    return (
        isDesktopOrLaptop ? (
            <div className="taskbar">
                <h5 style={{ color: nameColor ? nameColor : "inherit" }}>{name}</h5>
                <button onClick={() => onCloseHandler(false)}><HiX /></button>
            </div>
        ) : (
            <div className="taskbar" onClick={() => onCloseHandler(false)}>
                <h5 style={{ color: nameColor ? nameColor : "inherit" }}>{name}</h5>
            </div>
        )
    )
}
