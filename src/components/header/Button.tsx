import { useMediaQuery } from 'react-responsive';

interface IButton {
    name: boolean;
    displayName: string;
    icon: any;
    onPressHandler: (name: boolean, section: string) => void;
}
export const Button = ({ name, displayName, icon, onPressHandler }: IButton) => {
    const isDesktopOrLaptop: any = useMediaQuery({ query: '(min-width: 1224px)' })

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