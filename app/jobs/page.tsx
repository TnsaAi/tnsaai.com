import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Job {
  title: string;
  content: string;
  tags: string[];
  date: string;
  slug: string;
}

export default function JobsPage() {
  const filePath = path.join(process.cwd(), 'papers', 'job.json');
  let jobs: Job[] = [];
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    jobs = JSON.parse(fileContent);
  }

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold mb-6">Careers</h1>
      <div className="space-y-6">
        {jobs.map((item, index) => (
          <Link href={`/jobs/${item.slug}`} key={index}>
            <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors duration-200">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">{new Date(item.date).toLocaleDateString()}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
