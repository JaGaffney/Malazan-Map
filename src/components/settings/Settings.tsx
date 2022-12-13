import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';

import Shape from './Shape';
import Textures from './Textures';
import Areas from './Areas';

export default function Panel() {
    return (
        <ScrollContainer className="panel" draggingClassName={"timeline__container-drag"} horizontal={false}>
            <div className="panel__item">
                <div className="panel__item-container">
                    <i className="disclaimer">These settings map help reduce lag*</i>
                </div>
            </div>

            <Shape />
            <Areas />
            <Textures />
        </ScrollContainer>
    )
}
