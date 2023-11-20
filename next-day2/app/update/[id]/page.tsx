type UpdateProps = {
    params: {
        id: string;
    };
};

export default function Update(props: UpdateProps) {
    return (
        <>
            <h3>Update {props.params.id}</h3>
        </>
    )
}