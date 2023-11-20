type ReadProps = {
    params: {
        id: string;
    };
};

export default async function Read({ params: { id } }: ReadProps) {
    const res = await fetch("http://localhost:9999/posts/" + id);
    const post = await res.json();
    return (
        <>
            <h2>{post.title} </h2>
            {post.body}
        </>
    )
}