import { useDispatch, useSelector } from "react-redux"
import ReactTooltip from 'react-tooltip';

import { update, updateActiveData } from "../../state/features/engine"
import { bookColor } from '../utils/color';
import { ITimelinePoint } from '../../data/timelineData';
import TimelineBook from './TimelineBook';

export const TimeEvent = ({ data }: { data: ITimelinePoint }) => {
    const activeID = useSelector((state: any) => state.filter.activeData.id)
    const dispatch = useDispatch()
    return (
        <div className="timeline__event-item" key={data.id} onClick={() => {
            dispatch(updateActiveData(data))
            if (data.loc !== null) {
                dispatch(update({ x: data.loc[0], y: data.loc[1] }));
            } else {
                dispatch(update(data.loc));
            }
        }}
            data-tip={data.citation !== "" ? data.citation : data.name}
        >
            <div className={`
                    timeline__event-item-icon 
                    ${activeID === data.id ? "timeline__event-item-icon-active" : ""}`}
                style={{ backgroundColor: bookColor(data.book) }}
            >
                <TimelineBook bookData={data.book} eventData={data} />
            </div>
            <ReactTooltip effect="solid" border={true} borderColor='white' />
        </div>
    )
}