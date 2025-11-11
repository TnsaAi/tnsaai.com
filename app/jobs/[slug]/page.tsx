import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Job {
  title: string;
  content: string;
  tags: string[];
  date: string;
  slug: string;
}

const getData = (slug: string): Job | undefined => {
  const filePath = path.join(process.cwd(), 'papers', 'job.json');
  if (!fs.existsSync(filePath)) {
    return undefined;
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const jobs: Job[] = JSON.parse(fileContent);
  return jobs.find((item) => item.slug === slug);
};

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'papers', 'job.json');
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const jobs: Job[] = JSON.parse(fileContent);

  return jobs.map((item) => ({
    slug: item.slug,
  }));
}

export default function JobPage({ params }: { params: { slug: string } }) {
  const item = getData(params.slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
        <p className="text-gray-400 mb-6">{new Date(item.date).toLocaleDateString()}</p>
        <div className="prose prose-invert lg:prose-xl">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.content}</ReactMarkdown>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {item.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
