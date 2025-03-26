import { HiFlag, HiBookOpen, HiUsers, HiCog, HiOutlineInformationCircle } from 'react-icons/hi'
import { HiOutlineMapPin } from "react-icons/hi2";

interface IButton {
    name: boolean;
    displayName: string;
    icon: any;
    onPressHandler: React.Dispatch<React.SetStateAction<boolean>>;
    onSettingsHandler: React.Dispatch<React.SetStateAction<boolean>>;
}
const Button = ({ name, displayName, icon, onPressHandler, onSettingsHandler }: IButton) => {
    return (
        <button className={`buttons__item ${name ? "buttons__item-active" : ""}`} onClick={() => {
            onPressHandler(!name)
            onSettingsHandler(false)
        }}>
            {icon}
            <span>{displayName}</span>
        </button>
    )
}

interface IButtons {
    books: boolean;
    places: boolean;
    characters: boolean;
    history: boolean;
    settings: boolean;
    info: boolean;
    onBooksHandler: React.Dispatch<React.SetStateAction<boolean>>
    onPlacesHandler: React.Dispatch<React.SetStateAction<boolean>>;
    onCharactersHandler: React.Dispatch<React.SetStateAction<boolean>>;
    onHistoryHandler: React.Dispatch<React.SetStateAction<boolean>>;
    onSettingsHandler: React.Dispatch<React.SetStateAction<boolean>>;
    onInfoHandler: React.Dispatch<React.SetStateAction<boolean>>;

}
const Buttons = (props: IButtons) => {
    return (
        <div className="buttons__container">
            <Button name={props.books} displayName={"Books"} icon={<HiBookOpen />} onPressHandler={props.onBooksHandler} onSettingsHandler={props.onSettingsHandler} />
            <Button name={props.characters} displayName={"Characters"} icon={<HiUsers />} onPressHandler={props.onCharactersHandler} onSettingsHandler={props.onSettingsHandler} />
            <Button name={props.places} displayName={"Locations"} icon={<HiFlag />} onPressHandler={props.onPlacesHandler} onSettingsHandler={props.onSettingsHandler} />
            <Button name={props.history} displayName={"Events"} icon={<HiOutlineMapPin />} onPressHandler={props.onHistoryHandler} onSettingsHandler={props.onSettingsHandler} />

            <button className={`buttons__item ${props.settings ? "buttons__item-active" : ""}`} onClick={() => {
                props.onSettingsHandler(!props.settings)
                props.onBooksHandler(false);
                props.onPlacesHandler(false);
                props.onCharactersHandler(false);
            }}>
                <HiCog />
                <span>Settings</span>
            </button>

            <Button name={props.info} displayName={"Info"} icon={<HiOutlineInformationCircle />} onPressHandler={props.onInfoHandler} onSettingsHandler={props.onSettingsHandler} />


        </div>
    )
}

export default Buttons