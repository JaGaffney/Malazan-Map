import { GrPowerReset } from "react-icons/gr";

interface IReset {
    message: string;
    handler: any;
}

export default function Reset({ message, handler }: IReset) {
    return (
        <button className="generic__resetButton" onClick={(e) => handler(e)}><GrPowerReset /> {message}</button>
    )
}
