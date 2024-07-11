import ScrollContainer from 'react-indiana-drag-scroll';

import Shape from './Shape';
import Acknowledgements from '../panel/Acknowledgements';
import Title from '../panel/Title';

interface IPanel {
    onCloseHandler: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Panel({ onCloseHandler }: IPanel) {
    return (
        <ScrollContainer className="panel panel-scroll" draggingClassName={"timeline__container-drag"} horizontal={false}>
            <Title name={""} onCloseHandler={onCloseHandler} />

            <Shape />

            <div className="panel__item  panel__item-last">
                <Acknowledgements />
            </div>
        </ScrollContainer>
    )
}