import ScrollContainer from 'react-indiana-drag-scroll';

import Shape from './Shape';
import Title from '../generics/Title';
import UI from './UI';
import Draggable, { DraggableCore } from 'react-draggable';
import Spacer from '../generics/Spacer';

interface ISettings {
    timeline: boolean;
    worldMap: boolean;
    onCloseHandler: React.Dispatch<React.SetStateAction<boolean>>;
    onTimelineHandler: React.Dispatch<React.SetStateAction<boolean>>;
    onMapHandler: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Panel({ timeline, worldMap, onCloseHandler, onTimelineHandler, onMapHandler }: ISettings) {
    return (
        <Draggable handle="h5" >
            <div className="panel panel__draggable ">
                <Title name={"Settings"} onCloseHandler={onCloseHandler} />

                <ScrollContainer className="panel-scroll" draggingClassName={"timeline__container-drag"} horizontal={false}>
                    <div className="panel__item">

                        <UI timeline={timeline} onTimelineHandler={onTimelineHandler} worldMap={worldMap} onMapHandler={onMapHandler} />
                        <Spacer />
                        <Shape />
                    </div>
                </ScrollContainer>
            </div >
        </Draggable >
    )
}