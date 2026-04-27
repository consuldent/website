'use client';

import Image from 'next/image';
import ArticleMeta from './meta';
import ArticleTitle from './title';
import ArticleContent from './content';

interface ArticleProps {
  frontMatter: {
    title: string;
    date: string;
    author: {
      name: string;
      image: string;
    };
    tags?: string[];
    readingTime?: number;
    image: string;
  };
  source: string;
}

export default function Article({ frontMatter, source }: ArticleProps) {
  const { title, date, author, tags, readingTime, image } = frontMatter;

  return (
    <article className="max-w-4xl mx-auto">
      <ArticleMeta date={date} author={author} tags={tags} readingTime={readingTime} />
      <ArticleTitle title={title} />
      <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      <ArticleContent source={source} />
    </article>
  );
}