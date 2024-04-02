import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';

import Shape from './Shape';
import Textures from './Textures';
import Areas from './Areas';
import Acknowledgements from '../panel/Acknowledgements';
import Title from '../panel/Title';

export default function Panel(props) {
    return (
        <ScrollContainer className="panel panel-scroll" draggingClassName={"timeline__container-drag"} horizontal={false}>
            <Title name={""} onCloseHandler={props.onCloseHandler} />

            <Shape />

            <div className="panel__item  panel__item-last">
                <Acknowledgements />
            </div>
        </ScrollContainer>
    )
}
