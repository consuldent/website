import Link from 'next/link';

interface ArticleMetaProps {
  date: string;
  author: {
    name: string;
    image: string;
  };
  tags?: string[];
  readingTime?: number;
}

export default function ArticleMeta({ date, author, tags = [], readingTime }: ArticleMetaProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
      <div className="flex items-center gap-2">
        <span>{formattedDate}</span>
        {readingTime && (
          <>
            <span>•</span>
            <span>{readingTime} min read</span>
          </>
        )}
      </div>
      {tags.length > 0 && (
        <div className="flex items-center gap-2">
          <span>•</span>
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[#0A3D91] hover:underline"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="flex items-center gap-2">
        <span>•</span>
        <span>By </span>
        <Link
          href={`/blog/authors/${author.name.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-[#0A3D91] hover:underline"
        >
          {author.name}
        </Link>
      </div>
    </div>
  );
}