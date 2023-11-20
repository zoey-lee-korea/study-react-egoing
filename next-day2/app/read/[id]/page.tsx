type ReadProps = {
    params: {
        id: string;
    };
};

export default function Read({ params: { id } }: ReadProps) {
    return (
        <>
            <h3>Read {id}</h3>
        </>
    )
}