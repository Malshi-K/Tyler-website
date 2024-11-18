import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  try {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Parse the markdown file
        const { data, content } = matter(fileContents);

        // Log the parsed data for debugging
        console.log('Parsed frontmatter:', data);
        console.log('File contents:', fileContents);

        // Return all the frontmatter data
        return {
          slug,
          ...data,  // This spreads all frontmatter fields
          content   // Include the content as well
        };
      });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date) - new Date(a.date);
    });
  } catch (error) {
    console.error('Error reading posts:', error);
    console.error('Error details:', error.message);
    return [];
  }
}

export async function getPostData(slug) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse the markdown file
    const { data, content } = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(content);
      
    const contentHtml = processedContent.toString();

    // Return the combined data
    return {
      slug,
      contentHtml,
      ...data  // Spread all frontmatter fields
    };
  } catch (error) {
    console.error(`Error reading post file: ${slug}`, error);
    return {
      slug,
      title: 'Post Not Found',
      contentHtml: '<p>Sorry, this post could not be found.</p>',
      date: '',
      author: '',
      image: null,
      gallery: []
    };
  }
}