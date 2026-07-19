import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getArticleSlugs } from '@/lib/articles';
import Article from '@/components/articles';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const { frontMatter } = await getArticleBySlug(slug);
    
    return {
      title: `${frontMatter.title} - Consuldent Blog`,
      description: frontMatter.description,
      openGraph: {
        title: frontMatter.title,
        description: frontMatter.description,
        type: 'article',
        publishedTime: frontMatter.date,
        authors: [frontMatter.author.name],
        images: [
          {
            url: frontMatter.image,
            alt: frontMatter.title,
          },
        ],
      },
    };
  } catch {
    return {
      title: 'Blog - Consuldent',
    };
  }
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  
  try {
    const { frontMatter, source } = await getArticleBySlug(slug);
    
    return (
      <div className="min-h-screen bg-[#F5F0E8] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink transition-colors mb-8 block">
            ← Back to Blog
          </Link>
          <Article frontMatter={frontMatter} source={source} />
          <div className="mt-12 pt-8 border-t border-line">
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink transition-colors">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}