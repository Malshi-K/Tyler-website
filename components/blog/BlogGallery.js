import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import BlogImage from './BlogImage';

const BlogGallery = ({ posts = [] }) => {
  if (!Array.isArray(posts)) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        <p className="text-center text-muted-foreground">No posts available at this time.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20">
      {posts.length === 0 ? (
        <p className="text-center text-muted-foreground">No blog posts found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a 
              href={`/blog/${post.slug}`} 
              key={post.slug || Math.random().toString()}
              className="no-underline"
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {post.image && (
                    <BlogImage
                      src={post.image}
                      alt={post.title || 'Blog post image'}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0"
                    />
                  )}
                </div>
                <CardHeader className="space-y-2">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    {post.date && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    )}
                    {post.author && (
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="line-clamp-2 text-xl font-semibold group-hover:text-orange-500 transition-colors">
                    {post.title || 'Untitled Post'}
                  </CardTitle>
                  {post.description && (
                    <CardDescription className="line-clamp-2 text-md">
                      {post.description}
                    </CardDescription>
                  )}
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogGallery;