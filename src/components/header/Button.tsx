import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZE_DESKTOP } from '../../state/CONSTANTS';
import { bookColor, headerColor } from '../utils/color'
import { Fragment } from 'react/jsx-runtime';

interface IButton {
    name: boolean | string;
    displayName: string;
    icon: any;
    onPressHandler: (name: boolean | string, section: string) => void;
}

export const Button = ({ name, displayName, icon, onPressHandler }: IButton) => {
    const isDesktopOrLaptop: any = useMediaQuery({ query: SCREEN_SIZE_DESKTOP })

    const colour = headerColor(displayName)
    let cssProperties: any = {}

    cssProperties['--_buttonColourLight'] = colour.light
    cssProperties['--_buttonColourDark'] = colour.dark

    return (
        <button
            style={cssProperties}
            className={`buttons__item 
            ${!isDesktopOrLaptop ? "buttons__item-mobile" : ""} 
            ${name ? `${isDesktopOrLaptop ? "buttons__item-active" : "buttons__item-mobile-active"}` : ""}`}
            onClick={() => onPressHandler(name, displayName)}

        >   {icon}
            <span>{displayName}</span>
        </button>
    )
}