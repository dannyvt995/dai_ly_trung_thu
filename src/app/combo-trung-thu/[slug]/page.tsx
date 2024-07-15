// app/combo-trung-thu/[slug]/page.tsx
import postsData from '../../../data/info.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface IPost {
  id: number;
  name?: string;
  slug: string;
  title? : string;
  body?: string;
  price?: string;
  detail? :any
}

interface IParams {
  slug: string;
  name: string;
}

export async function generateStaticParams() {
  const posts = [
    ...postsData.givral.combo.map(post => ({ ...post, name: postsData.givral.name })),
    ...postsData.brodard.combo.map(post => ({ ...post, name: postsData.brodard.name })),
  ];

  return posts.map((post) => ({
    name: post.name,
    slug: post.slug,
  }));
}

export default function PostPage({ params }: { params: IParams }) {
  const { name, slug } = params;
  
  const allPosts = [
    ...postsData.givral.combo,
    ...postsData.brodard.combo,
  ];
  const post  : any = allPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <h1>======== ID {post.id}</h1>
      <p>======== NAME {post.name}</p>
      <p>======== BODY {post.body}</p>
      <Link href="/combo-trung-thu">Trở về danh sách</Link>
    </main>
  );
}
