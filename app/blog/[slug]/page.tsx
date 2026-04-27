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
      <div className="min-h-screen bg-[#FAF4EC] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <Article frontMatter={frontMatter} source={source} />
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}