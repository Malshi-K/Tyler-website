import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft } from "lucide-react";
import BlogImage from './BlogImage';

const BlogPost = ({ post }) => {
  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Card className="p-8 text-center">
          <CardContent>
            <p className="text-muted-foreground">Post not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-20 mt-20">
      <a 
        href="/blog" 
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 no-underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </a>

      <div className="mb-8 text-center">
        {post.label && (
          <Badge variant="secondary" className="mb-4">
            {post.label}
          </Badge>
        )}
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
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
      </div>

      <Card className="overflow-hidden">
        {post.image && (
          <div className="relative aspect-[16/9] overflow-hidden bg-muted">
            <BlogImage
              src={post.image}
              alt={post.title || 'Blog post image'}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <CardHeader className="space-y-4">
          {post.contentHtml && (
            <div 
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          )}
        </CardHeader>
      </Card>

      {post.gallery && Array.isArray(post.gallery) && post.gallery.length > 0 && (
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {post.gallery.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-muted">
                <BlogImage
                  src={image.src}
                  alt={image.alt || `Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transition-all duration-300"
                />                
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default BlogPost;