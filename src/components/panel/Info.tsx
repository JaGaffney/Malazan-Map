
import Draggable, { DraggableCore } from "react-draggable"
import ScrollContainer from 'react-indiana-drag-scroll';
import { HiBookOpen } from "react-icons/hi";
import { FaPaintBrush, FaGithub, FaDiscord, FaGoogleDrive, FaRedditAlien } from "react-icons/fa";



import Title from './Title';
import { IPanel } from './panel.inteface';

const InfoItem = ({ name, role, description, link, image }: any) => {


    return (
        <div className="intoItem__container">
            <a href={link}>
                {image}
                <div>
                    <span className="intoItem__container-title">{name}</span>
                    <span>{role}</span>
                </div>
            </a>
            <p><i>{description}</i></p>
        </div>
    )
}


export default function Info({ onCloseHandler }: IPanel) {

    return (

        <Draggable handle="h5" >
            <div className="panel panel__draggable panel__draggable-large">

                <ScrollContainer hideScrollbars={false} horizontal={false} className="panel-scroll" draggingClassName={"timeline__container-drag"}>
                    <div className="panel__item">
                        <div className="panel__item-container panel__header-draggable" >

                            <Title name={"Info"} onCloseHandler={onCloseHandler} />

                            <div className="panel__info">
                                <h6>Acknowledgements</h6>
                                <p>I would like to extend my deepest gratitude to Steven Erikson & Ian C. Esslemont for creating such an inspiring and captivating book series. Thank you for sharing your incredible talent with the world.</p>
                                <InfoItem name={"Steven Erikson"} role={"Author"} link={"https://steven-erikson.org/"} description={"Malazan works: Malazan Book of the Fallen, The Kharkanas Trilogy, The Witness Trilogy, The Tales of Bauchelain and Korbal Broach"} image={<HiBookOpen />} />
                                <InfoItem name={"Ian C. Esslemont"} role={"Author"} link={"https://ian-esslemont.com/"} description={"Malazan works: Novels of the Malazan Empire, Path to Ascendancy"} image={<HiBookOpen />} />

                                <br />
                                <p>I would also like to thank the people below for providing the groundwork that allowed me to create this website, without them it never would have been possible.</p>
                                <InfoItem name={"Werthead"} role={"Map creator"} link={"https://atlasoficeandfireblog.wordpress.com/2020/03/04/a-new-almost-definitive-malazan-world-map/"} description={"Creator of the map in which this website timeline is based on, the level of detail provided is amazing."} image={<FaPaintBrush />} />
                                <InfoItem name={"@SonAnomander"} role={"Companion guide creator"} link={"https://docs.google.com/presentation/d/1GLRmiaFcxe_cGc93ckE5UItRq5rYsfeU0BhvqcaNq9E/edit#slide=id.g489175a0dd_14_10"} description={"Information used from this guide to help create timeline events."} image={<FaGoogleDrive />} />
                                <InfoItem name={"/u/SageOfTheWise"} role={"Orignal timeline creator"} link={"https://www.reddit.com/r/Malazan/comments/8nskuc/timeline_of_events/"} description={"Information used to help create the blueprint for the timeline events."} image={<FaRedditAlien />} />
                            </div>

                            <div className="panel__info">
                                <h6>Links</h6>
                                <p>Feel free to get in touch with me. I am open to any feedback or help, especially for the timeline</p>
                                <InfoItem name={"Map of the Fallen"} role={"Discord"} link={"https://discord.gg/xmwVBjQ6"} description={"Feel free to join the Discord server"} image={<FaDiscord />} />
                                <InfoItem name={"github@jagaffney"} role={"github"} link={"https://github.com/JaGaffney"} description={""} image={<FaGithub />} />

                            </div>
                        </div>
                    </div>
                </ScrollContainer>

            </div >
        </Draggable >
    )
}
