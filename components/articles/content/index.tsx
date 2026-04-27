'use client';

import ReactMarkdown from 'react-markdown';

interface ArticleContentProps {
  source: string;
}

export default function ArticleContent({ source }: ArticleContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown>{source}</ReactMarkdown>
    </div>
  );
}