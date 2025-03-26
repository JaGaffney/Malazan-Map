
interface ISpacer {
    type?: string;
}
export default function Spacer({ type = "medium" }: ISpacer) {
    return (
        <div className={`spacer space${type}`}></div>
    )
}
