import { HiX } from "react-icons/hi";
import { IClose } from '../interfaces/close.interface';
import { useMediaQuery } from "react-responsive";
export interface ITitle extends IClose {
    nameColor?: string;
    name: string;
}

export default function Title({ nameColor, name, onCloseHandler }: ITitle) {
    const isDesktopOrLaptop: any = useMediaQuery({ query: '(min-width: 1224px)' })
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
