
import { HiOutlineCheckCircle, HiCheckCircle } from "react-icons/hi";
import Note from "../generics/Note";

interface IUI {
    timeline: boolean;
    worldMap: boolean;
    onTimelineHandler: React.Dispatch<React.SetStateAction<boolean>>;
    onMapHandler: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function UI({ timeline, onTimelineHandler, worldMap, onMapHandler }: IUI) {
    return (
        <div className="">
            <h5>Interface</h5>
            <Note message="change how the UI is displayed" />
            <div className="panel__item-container-line" onClick={() => onTimelineHandler(!timeline)}>
                <span>Timeline</span>
                <span>{!timeline ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
            </div>

            <div className="panel__item-container-line" onClick={() => onMapHandler(!worldMap)}>
                <span>mini-Map</span>
                <span>{!worldMap ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
            </div>
        </div>

    )
}
