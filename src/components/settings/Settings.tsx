import React, { useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';
import { HiCog, HiX } from "react-icons/hi";

import Shape from './Shape';
import Textures from './Textures';

export default function Panel() {
    const [display, setDisplay] = useState(false)

    return (
        display ? (
            <ScrollContainer className="panel" draggingClassName={"timeline__container-drag"} horizontal={false}>
                <button className="sidepanel__close" onClick={() => setDisplay(false)}><HiX /></button>
                <div className="header">
                    <h3>Settings</h3>
                    <h5>These settings will help reduce lag for none Firefox users</h5>
                </div>

                <Shape />

                <Textures />

            </ScrollContainer>

        ) : (<button className="sidepanel__open  settings__button" onClick={() => setDisplay(true)}><HiCog /></button>)
    )
}
