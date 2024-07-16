import { FaDiscord, FaGithub } from "react-icons/fa";

const Acknowledgements = () => {
    return (
        <div className="panel__item-container">
            <h5>Acknowledgements</h5>
            <a href="https://steven-erikson.org/" className="panel__item-container-info">
                <span>Steven Erikson</span>
                <span>Author</span>
            </a>
            <a href="https://ian-esslemont.com/" className="panel__item-container-info">
                <span>Ian C. Esslemont</span>
                <span>Author</span>
            </a>

            <br />

            <a href="https://atlasoficeandfireblog.wordpress.com/2020/03/04/a-new-almost-definitive-malazan-world-map/" className="panel__item-container-info">
                <span>Werthead</span>
                <span>World map</span>
            </a>
            <a href="https://docs.google.com/presentation/d/1GLRmiaFcxe_cGc93ckE5UItRq5rYsfeU0BhvqcaNq9E/edit#slide=id.g489175a0dd_14_10" className="panel__item-container-info">
                <span>@SonAnomander</span>
                <span>Companion guide</span>
            </a>
            <a href="https://www.reddit.com/r/Malazan/comments/8nskuc/timeline_of_events/" className="panel__item-container-info">
                <span>/u/SageOfTheWise</span>
                <span>Timeline</span>
            </a>

            <br />

            <h5>Links</h5>
            <div className="panel__item-container-info" style={{ maxWidth: "15rem" }}>
            </div>
            <a href="https://github.com/JaGaffney" className="panel__item-container-info">
                <span className="panel__item-container-info-link"><FaGithub /> github@jagaffney</span>

            </a>
            <a href="https://discord.gg/xmwVBjQ6" className="panel__item-container-info">
                <span className="panel__item-container-info-link"><FaDiscord /> Discord</span>
            </a>

        </div>
    )
}

export default Acknowledgements