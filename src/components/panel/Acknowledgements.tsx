import React from 'react'

const Acknowledgements = () => {
    return (
        <div className="panel__item-container">
            <h5>Acknowledgements</h5>
            <div className="panel__item-container-info panel__item-container-info-small" style={{ maxWidth: "15rem" }}>
                <span>I was finding it hard to keep track of where the characters are in book 2, so I decided to make a map. I am still in the process of reading so no spoilers please.
                </span>
            </div>
            <a href="https://steven-erikson.org/" className="panel__item-container-info panel__item-container-info-small">
                <span>Steven Erikson</span>
                <span>Author of the books</span>
            </a>
            <a href="https://ian-esslemont.com/" className="panel__item-container-info panel__item-container-info-small">
                <span>Ian C. Esslemont</span>
                <span>Author of the books</span>
            </a>
            <a href="https://atlasoficeandfireblog.wordpress.com/2020/03/04/a-new-almost-definitive-malazan-world-map/" className="panel__item-container-info  panel__item-container-info-small">
                <span>Werthead</span>
                <span>World map</span>
            </a>
            <a href="https://docs.google.com/presentation/d/1GLRmiaFcxe_cGc93ckE5UItRq5rYsfeU0BhvqcaNq9E/edit#slide=id.g489175a0dd_14_10" className="panel__item-container-info  panel__item-container-info-small">
                <span>@SonAnomander</span>
                <span>Companion guide</span>
            </a>
            <a href="https://www.reddit.com/r/Malazan/comments/8nskuc/timeline_of_events/" className="panel__item-container-info  panel__item-container-info-small">
                <span>/u/SageOfTheWise</span>
                <span>Timeline</span>
            </a>
            <span></span>
            <a href="https://github.com/JaGaffney" className="panel__item-container-info  panel__item-container-info-small">
                <span>github@jagaffney</span>
                <span>Website creator</span>
            </a>


        </div>
    )
}

export default Acknowledgements