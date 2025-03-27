
import Note from "../generics/Note";
import ItemToggle from "../generics/ItemToggle";

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
            <Note message="change how the UI is displayed (timeline may lag)" />

            <ItemToggle name="Timeline" data={timeline} handler={() => onTimelineHandler(!timeline)} />
            <ItemToggle name="mini-Map" data={worldMap} handler={() => onMapHandler(!worldMap)} />

        </div>

    )
}
