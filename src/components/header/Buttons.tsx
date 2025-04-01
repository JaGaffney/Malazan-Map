import { HiBookOpen, HiUsers, HiCog, HiOutlineInformationCircle, HiOutlineClock } from 'react-icons/hi'
import { HiOutlineMapPin } from "react-icons/hi2";
import { useMediaQuery } from 'react-responsive';
import { Button } from './Button';
import { SCREEN_SIZE_DESKTOP } from '../../state/CONSTANTS';

interface IButtons {
    books: boolean;
    places: boolean;
    characters: boolean;
    history: boolean;
    settings: boolean;
    info: boolean;
    description: string;
    navbarControlToggle: (name: boolean | string, section: string) => void;
}

const Buttons = ({ books, places, characters, settings, history, info, description, navbarControlToggle }: IButtons) => {
    const isDesktopOrLaptop: any = useMediaQuery({ query: SCREEN_SIZE_DESKTOP })

    return (
        <div className={`buttons__container ${!isDesktopOrLaptop && "buttons-mobile"}`}>
            <Button
                name={books}
                displayName={"Books"}
                icon={<HiBookOpen />}
                onPressHandler={navbarControlToggle}
            />
            <Button
                name={characters}
                displayName={"Characters"}
                icon={<HiUsers />}
                onPressHandler={navbarControlToggle}
            />
            <Button
                name={places}
                displayName={"Locations"}
                icon={<HiOutlineMapPin />}
                onPressHandler={navbarControlToggle}
            />
            <Button
                name={history}
                displayName={"Events"}
                icon={<HiOutlineClock />}
                onPressHandler={navbarControlToggle}
            />
            <Button
                name={settings}
                displayName={"Settings"}
                icon={<HiCog />}
                onPressHandler={navbarControlToggle}
            />
            {isDesktopOrLaptop ? (
                <Button
                    name={info}
                    displayName={"Info"}
                    icon={<HiOutlineInformationCircle />}
                    onPressHandler={navbarControlToggle}
                />
            ) : (
                <Button
                    name={description}
                    displayName={"Description"}
                    icon={<HiOutlineInformationCircle />}
                    onPressHandler={navbarControlToggle}
                />
            )}

        </div>
    )
}

export default Buttons