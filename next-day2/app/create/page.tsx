"use client"

import { useRouter } from "next/navigation";

// client component : 사용자가 입력한 정보를 받기 때문


export default function Create() {
    const router = useRouter();

    return (
        <>
            <form onSubmit={async (e: any) => {
                e.preventDefault(); // submit의 default는 화면 전환 -> prevent로 사용하지 않겠다 선언

                const title = e.target.title.value;
                const body = e.target.body.value;

                const res = await fetch("http://localhost:9999/posts", {
                    method: "POST",
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
                    <input type="text" name="title" placeholder="제목" />
                </p>
                <p>
                    <textarea name="body" placeholder="내용"></textarea>
                </p>
                <p>
                    <input type="submit" />
                </p>
            </form>
        </>
    )
}
