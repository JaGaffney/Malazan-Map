import React from 'react'

export default function Books() {
    return (
        <div className="panel__item-container">
            <h5>Progress</h5>
            <div className="panel__item-container-info">
                <span>Book 1</span>
                <span>Complete</span>
            </div>
            <div className="panel__item-container-info">
                <span>Book 2</span>
                <span>inprogress</span>
            </div>
        </div>
    )
}
