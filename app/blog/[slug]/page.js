// app/blog/[slug]/page.js
import React from 'react';
import BlogPost from '@/components/blog/BlogPost';
import { getPostData, getSortedPostsData } from '@/utils/markdown';

export default async function Post({ params }) {
  const post = await getPostData(params.slug);
  return <BlogPost post={post} />;
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}