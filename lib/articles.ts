import { supabase } from './supabaseClient';
import config from './config';

export async function getArticleSlugs() {
  const { data: articles, error } = await supabase
    .from('blogposts')
    .select('slug')
    .eq('host', 'consuldent.com.au');

  if (error) {
    console.error('Error fetching article slugs:', error);
    return [];
  }

  return articles.map((article) => article.slug);
}

export async function getAllArticles() {
  const { data: articles, error } = await supabase
    .from('blogposts')
    .select(`
      *,
      author:authors(*)
    `)
    .eq('host', 'consuldent.com.au')
    .order('createdAt', { ascending: false });

  if (error) {
    console.error('Error fetching articles:', error);
    return [];
  }

  return articles.map(mapArticleToFrontMatter);
}

function mapArticleToFrontMatter(article: any) {
  return {
    title: article.title,
    date: new Date(article.date).toISOString(),
    description: article.metaDescription || article.excerpt,
    tags: article.tags || [],
    image: article.image,
    author: {
      name: article.author?.name,
      image: article.author?.image,
    },
    slug: article.slug,
    metaDescription: article.metaDescription || article.excerpt,
    readTime: article.readTime,
  };
}

export async function getArticleBySlug(slug: string) {
  const { data: articles, error } = await supabase
    .from('blogposts')
    .select(`
      *,
      author:authors(*)
    `)
    .eq('host', 'consuldent.com.au')
    .eq('slug', slug)
    .single();

  if (error || !articles) {
    throw new Error('Article not found');
  }

  return {
    frontMatter: {
      title: articles.title,
      date: new Date(articles.date).toISOString(),
      description: articles.metaDescription || articles.excerpt,
      tags: articles.tags || [],
      image: articles.image,
      author: {
        name: articles.author?.name,
        image: articles.author?.image,
      },
      slug: articles.slug,
      readingTime: articles.readTime,
    },
    source: articles.content,
  };
}