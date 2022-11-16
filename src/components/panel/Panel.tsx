import React from 'react'
import Header from './Header'
import Locations from './Locations'
import WorldMap from './WorldMap'
import Characters from './Characters'

export default function Panel() {
    return (
        <div className="panel">
            <Header />
            <WorldMap />
            <Characters />
            {/* <Locations /> */}
        </div>
    )
}
