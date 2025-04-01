
import Draggable from "react-draggable"
import ScrollContainer from 'react-indiana-drag-scroll';

import Title, { ITitle } from '../generics/Title';
import { useMediaQuery } from 'react-responsive';
import { ReactElement, useRef } from "react";
import { SCREEN_SIZE_DESKTOP } from "../../state/CONSTANTS";


interface IPanel extends ITitle {
    children: ReactElement;
    screenLocation: string;
    name: string;
}

export default function Panel({ children, screenLocation, name, onCloseHandler }: IPanel) {
    const nodeRef = useRef(null);
    const isDesktopOrLaptop: any = useMediaQuery({ query: SCREEN_SIZE_DESKTOP })

    return (
        isDesktopOrLaptop ? (
            <Draggable handle="h5" nodeRef={nodeRef}>
                <div ref={nodeRef} className={`panel panel__draggable panel-${screenLocation}`}>

                    <Title name={name} onCloseHandler={onCloseHandler} />
                    <ScrollContainer hideScrollbars={false} horizontal={false} className="panel-scroll" draggingClassName={"timeline__container-drag"}>
                        <div className="panel__item">
                            {children}
                        </div>
                    </ScrollContainer>
                </div>
            </Draggable>
        ) : (
            <div className={"panel panel__mobile"}>
                <Title name={name} onCloseHandler={onCloseHandler} />
                <ScrollContainer hideScrollbars={false} horizontal={true} className="panel-scroll">
                    <div className="panel__item">
                        {children}
                    </div>
                    <div className="vertTimeline-bottom"></div>
                </ScrollContainer>

            </div>
        )

    )
}
