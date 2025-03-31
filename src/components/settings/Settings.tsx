
import Shape from './Shape';

import UI from './UI';

import Spacer from '../generics/Spacer';
import Panel from "../panel/Panel"
import { IClose } from '../interfaces/close.interface';

interface ISettings extends IClose {
    timeline: boolean;
    worldMap: boolean;
    onTimelineHandler: React.Dispatch<React.SetStateAction<boolean>>;
    onMapHandler: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Settings({ timeline, worldMap, onCloseHandler, onTimelineHandler, onMapHandler }: ISettings) {
    return (
        <Panel name="Settings" screenLocation="right" onCloseHandler={onCloseHandler}>
            <div className="panel__item">

                <UI timeline={timeline} onTimelineHandler={onTimelineHandler} worldMap={worldMap} onMapHandler={onMapHandler} />
                <Spacer />
                <Shape />
            </div>
        </Panel>
    )
}