import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineCheckCircle, HiCheckCircle } from "react-icons/hi";

import { resetActiveAreas, updateActiveAreas } from "../../state/features/settings"

import AREAS, { IAreas } from "../../data/areas"

interface IArea {
    name: string;
    area: number;
}
const Area = ({ name, area }: IArea) => {
    const areas = useSelector((state: any) => state.settings.areas)
    const dispatch = useDispatch()
    return (
        <div className="panel__item-container-info" onClick={() => dispatch(updateActiveAreas(area))}>
            <span>{name}</span>
            <span>{areas.includes(area) ? <HiCheckCircle /> : <HiOutlineCheckCircle />}</span>
        </div>
    )
}

export default function Areas() {
    const dispatch = useDispatch()

    const areaData = AREAS

    return (
        <div className="panel__item">
            <div className="panel__item-container">
                <h5>Areas</h5>
                <div className="panel__item-container-info" onClick={() => dispatch(resetActiveAreas())}>
                    <span>Show all</span>
                </div>

                {areaData.map((i: IAreas, k: number) => {
                    return (
                        <Area area={k + 1} name={i.name} key={k} />
                    )
                })}
            </div>

        </div>
    )
}
