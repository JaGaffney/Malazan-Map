
import Toggle from 'react-toggle'

interface IItemToggle {
    name: string;
    data: boolean;
    handler: any;
}
export default function ItemToggle({ name, data, handler }: IItemToggle) {
    return (
        <div className="itemToggle">
            <span>{name}</span>
            <Toggle
                defaultChecked={data}
                icons={false}
                onChange={handler}
                className="reactToggle"
            />
        </div>
    )
}
