interface ArticleTitleProps {
  title: string;
}

export default function ArticleTitle({ title }: ArticleTitleProps) {
  return (
    <h1 className="text-4xl font-bold mb-8">
      {title.length > 140 ? `${title.substring(0, 140)}...` : title}
    </h1>
  );
}