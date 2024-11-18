import React from "react";
import BlogGallery from "@/components/blog/BlogGallery";
import { getSortedPostsData } from "@/utils/markdown";
import PageTitle from "@/components/PageTitle";

export default function Blog() {
  // Add error boundary
  try {
    const posts = getSortedPostsData();

    return (
      <div className="relative min-h-screen">
        <PageTitle />
        <BlogGallery posts={posts} />
      </div>
    );
  } catch (error) {
    console.error("Error in Blog page:", error);
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        <p className="text-center text-muted-foreground">
          Error loading blog posts.
        </p>
      </div>
    );
  }
}
