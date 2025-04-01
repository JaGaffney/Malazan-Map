import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZE_DESKTOP } from '../../state/CONSTANTS';

interface IButton {
    name: boolean | string;
    displayName: string;
    icon: any;
    onPressHandler: (name: boolean | string, section: string) => void;
}

export const Button = ({ name, displayName, icon, onPressHandler }: IButton) => {
    const isDesktopOrLaptop: any = useMediaQuery({ query: SCREEN_SIZE_DESKTOP })

    return (
        <button className={`buttons__item 
            ${!isDesktopOrLaptop && "buttons__item-mobile"} 
            ${name ? `${isDesktopOrLaptop ? "buttons__item-active" : "buttons__item-mobile-active"}` : ""}`}
            onClick={() => onPressHandler(name, displayName)}
        >
            {icon}
            <span>{displayName}</span>
        </button>
    )
}