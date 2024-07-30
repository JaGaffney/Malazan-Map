
import { HiOutlineCheckCircle, HiCheckCircle } from "react-icons/hi";

interface IUI {
    timeline: boolean;
    worldMap: boolean;
    onTimelineHandler: React.Dispatch<React.SetStateAction<boolean>>;
    onMapHandler: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function UI({ timeline, onTimelineHandler, worldMap, onMapHandler }: IUI) {
    return (
        <div className="panel__item">
            <div className="panel__item-container">
                <h5>Interface</h5>

                <div className="panel__item-container-info" onClick={() => onTimelineHandler(!timeline)}>
                    <span>Timeline</span>
                    <span>{!timeline ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>

                <div className="panel__item-container-info" onClick={() => onMapHandler(!worldMap)}>
                    <span>mini-Map</span>
                    <span>{!worldMap ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>


            </div>
        </div>
    )
}
