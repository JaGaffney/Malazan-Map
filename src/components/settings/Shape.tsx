import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineCheckCircle, HiCheckCircle } from "react-icons/hi";

import { flattern, raise } from "../../state/features/settings"



export default function Shape() {
    const flatternData = useSelector((state) => state.settings.flattern)
    const dispatch = useDispatch()

    return (
        <div className="panel__item">
            <div className="panel__item-container">
                <h5>Shape</h5>
                <div className="panel__item-container-info" onClick={() => dispatch(flatternData ? raise() : flattern())}>
                    <span>Flattern</span>
                    <span>{flatternData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>

                {/* <div className="panel__item-container-info" onClick={() => dispatch(flatternData ? raise() : flattern())}>
                    <span>Merge moutains</span>
                    <span>{flatternData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>
                <div className="panel__item-container-info" onClick={() => dispatch(flatternData ? raise() : flattern())}>
                    <span>Merge grasslands</span>
                    <span>{flatternData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div> */}
            </div>
        </div>
    )
}
