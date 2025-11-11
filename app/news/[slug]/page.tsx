import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface News {
  title: string;
  content: string;
  tags: string[];
  date: string;
  slug: string;
}

const getData = (slug: string): News | undefined => {
  const filePath = path.join(process.cwd(), 'papers', 'news.json');
  if (!fs.existsSync(filePath)) {
    return undefined;
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const news: News[] = JSON.parse(fileContent);
  return news.find((item) => item.slug === slug);
};

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'papers', 'news.json');
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const news: News[] = JSON.parse(fileContent);

  return news.map((item) => ({
    slug: item.slug,
  }));
}

export default function NewsPage({ params }: { params: { slug: string } }) {
  const item = getData(params.slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 text-white">
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">{item.title}</CardTitle>
          <p className="text-gray-400 pt-2">{new Date(item.date).toLocaleDateString()}</p>
        </CardHeader>
        <CardContent>
          <div className="prose prose-invert lg:prose-xl max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.content}</ReactMarkdown>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {item.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-300">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
