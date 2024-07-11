import { useSelector } from 'react-redux'

import { cityData } from "../../../data/city"
import Words from './Words'

const Flags = () => {
    const activeCity = useSelector((state: any) => state.filter.activeCity)

    const data = cityData

    return (
        <>
            {activeCity.map((i: number, k: number) => {
                return (
                    <Words key={k} data={data[i]} cityKey={i} />
                )
            })}
        </>
    )
}

export default Flags