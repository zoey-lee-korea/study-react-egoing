"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type UpdateProps = {
    params: {
        id: string;
    };
};


export default function Update(props: UpdateProps) {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        fetch("http://localhost:9999/posts/" + props.params.id)
            .then(res => res.json())
            .then(result => {
                setTitle(result.title);
                setBody(result.body);
            })
    }, []);

    return (
        <>
            <h3>게시글 수정</h3>
            <form onSubmit={async (e: any) => {
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;

                const res = await fetch("http://localhost:9999/posts/" + props.params.id, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ title, body }),
                })
                const result: any = await res.json();
                router.push("/read/" + result.id);
                router.refresh();
            }}>
                <p>
                    <input
                        type="text"
                        name="title"
                        placeholder="제목"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </p>
                <p>
                    <textarea
                        name="body"
                        placeholder="내용"
                        value={body}
                        onChange={(e) => { setBody(e.target.value) }}
                    ></textarea>
                </p>
                <p>
                    <input type="submit" />
                </p>
            </form>
        </>
    )
}