'use client';
import Link from "next/link";

export default function Control() {
    return (
        <ul>
            <li>
                <Link href='/create'>create</Link>
            </li>
            <li>
                <Link href={"/update/1"}>update</Link>
            </li>
            <li>
                <button>delete</button>
            </li>
        </ul>
    )
}