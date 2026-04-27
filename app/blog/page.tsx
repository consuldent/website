import { Metadata } from 'next';
import { supabase } from '@/lib/supabaseClient';
import ArticlePreview from '@/components/articles/preview';

export const metadata: Metadata = {
  title: 'Blog - Consuldent',
  description: 'Insights and articles on dental practice growth, technology, and customer experience.',
};

export default async function BlogPage() {
  const { data: articles, error } = await supabase
    .from('blogposts')
    .select(`
      *,
      author:authors(*)
    `)
    .eq('host', 'consuldent.com.au')
    .order('createdAt', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts:', error);
    return (
      <div className="min-h-screen bg-[#FAF4EC] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-gray-600">Error loading posts. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF4EC] pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12">Blog</h1>
        
        {articles && articles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticlePreview
                key={article.slug}
                title={article.title}
                date={article.date}
                metaDescription={article.metaDescription || article.excerpt}
                image={article.image}
                slug={article.slug}
                author={{
                  name: article.author?.name || 'Consuldent',
                  image: article.author?.image || '/default-author.jpg',
                }}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No blog posts yet. Check back soon!</p>
        )}
      </div>
    </div>
  );
}