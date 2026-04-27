'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ArticlePreviewProps {
  author: {
    name: string;
    image: string;
  };
  date: string;
  title: string;
  metaDescription: string;
  image: string;
  slug: string;
}

export default function ArticlePreview({
  author,
  date,
  title,
  metaDescription,
  image,
  slug,
}: ArticlePreviewProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="mb-12">
      <Link href={`/blog/${slug}`} className="block group">
        <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2 group-hover:text-[#0A3D91] transition-colors">
          {title}
        </h2>
        <p className="text-gray-600 mb-4">{metaDescription}</p>
      </Link>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Image
          src={author.image}
          alt={author.name}
          width={24}
          height={24}
          className="rounded-full"
        />
        <span>By {author.name}</span>
        <span>•</span>
        <span>{formattedDate}</span>
      </div>
    </div>
  );
}