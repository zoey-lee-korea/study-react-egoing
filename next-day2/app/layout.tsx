import './globals.css'
import Link from "next/link";
import Control from "./Control"

type post = {
  id: string;
  title: string;
  body: string;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  //
  const res = await fetch("http://localhost:9999/posts", {
    next: { revalidate: 0 } // 0초에 1번씩 Revalidating
  })
  const posts: post[] = await res.json();

  //
  return (
    <html lang="en">
      <body>
        <h1><Link href='/'>Main</Link></h1>
        {/* <input type='text' placeholder='search'></input> */}
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <Link href={"/read/" + post.id}>{post.title}</Link>
              </li>
            )
          })}
        </ul>
        <article>{children}</article>
        <Control />
        {/* 이 부분만 Client Component로 사용하기 위함 */}
      </body>
    </html>
  )
}
