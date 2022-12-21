import React from 'react'
import { useSelector } from 'react-redux'

import { cityData } from "../../../data/city"
import Words from './Words'

const Flags = (props) => {
    const activeCity = useSelector((state: any) => state.filter.activeCity)

    const data = cityData
    return (
        <>
            {activeCity.map((i, k) => {
                return (
                    <Words data={data[i]} key={k} />
                )
            })}
        </>
    )
}

export default Flags