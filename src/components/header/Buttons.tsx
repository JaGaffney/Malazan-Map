import { HiBookOpen, HiUsers, HiCog, HiOutlineInformationCircle, HiOutlineClock } from 'react-icons/hi'
import { HiOutlineMapPin } from "react-icons/hi2";
import { useMediaQuery } from 'react-responsive';
import { Button } from './Button';

interface IButtons {
    books: boolean;
    places: boolean;
    characters: boolean;
    history: boolean;
    settings: boolean;
    info: boolean;
    description: boolean;
    navbarControlToggle: (name: boolean, section: string) => void;
}

const Buttons = (props: IButtons) => {
    const isDesktopOrLaptop: any = useMediaQuery({ query: '(min-width: 1224px)' })

    return (
        <div className={`buttons__container ${!isDesktopOrLaptop && "buttons-mobile"}`}>
            <Button
                name={props.books}
                displayName={"Books"}
                icon={<HiBookOpen />}
                onPressHandler={props.navbarControlToggle}
            />
            <Button
                name={props.characters}
                displayName={"Characters"}
                icon={<HiUsers />}
                onPressHandler={props.navbarControlToggle}
            />
            <Button
                name={props.places}
                displayName={"Locations"}
                icon={<HiOutlineMapPin />}
                onPressHandler={props.navbarControlToggle}
            />
            <Button
                name={props.history}
                displayName={"Events"}
                icon={<HiOutlineClock />}
                onPressHandler={props.navbarControlToggle}
            />
            <Button
                name={props.settings}
                displayName={"Settings"}
                icon={<HiCog />}
                onPressHandler={props.navbarControlToggle}
            />
            {isDesktopOrLaptop ? (
                <Button
                    name={props.info}
                    displayName={"Info"}
                    icon={<HiOutlineInformationCircle />}
                    onPressHandler={props.navbarControlToggle}
                />
            ) : (
                <Button
                    name={props.description}
                    displayName={"Description"}
                    icon={<HiOutlineInformationCircle />}
                    onPressHandler={props.navbarControlToggle}
                />
            )}

        </div>
    )
}

export default Buttons