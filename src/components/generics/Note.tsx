interface INote {
    message: string;
    mType?: string;
}

export default function Note({ message, mType = "info" }: INote) {
    return (
        <div className={`generic__note generic__note-${mType} `}>
            <i>{message}</i>
        </div>
    )
}
