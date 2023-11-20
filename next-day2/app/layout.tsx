import './globals.css'
import Link from "next/link";

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
        <input type='text' placeholder='search'></input>
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
        <ul>
          <li>
            <Link href='/create'>create</Link>
          </li>
          <li>
            <Link href='/update/1'>update</Link>
          </li>
          <li>
            <button>delete</button>
          </li>
        </ul>
      </body>
    </html>
  )
}
