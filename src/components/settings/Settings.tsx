import ScrollContainer from 'react-indiana-drag-scroll';

import Shape from './Shape';
import Acknowledgements from '../panel/Acknowledgements';
import Title from '../panel/Title';
import UI from './UI';

interface ISettings {
    timeline: boolean;
    worldMap: boolean;
    onCloseHandler: React.Dispatch<React.SetStateAction<boolean>>;
    onTimelineHandler: React.Dispatch<React.SetStateAction<boolean>>;
    onMapHandler: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Panel({ timeline, worldMap, onCloseHandler, onTimelineHandler, onMapHandler }: ISettings) {


    return (
        <ScrollContainer className="panel panel-scroll" draggingClassName={"timeline__container-drag"} horizontal={false}>
            <Title name={""} onCloseHandler={onCloseHandler} />

            <UI timeline={timeline} onTimelineHandler={onTimelineHandler} worldMap={worldMap} onMapHandler={onMapHandler} />

            <Shape />

        </ScrollContainer>
    )
}