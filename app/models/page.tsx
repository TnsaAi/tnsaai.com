import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Model {
  title: string;
  content: string;
  tags: string[];
  date: string;
  slug: string;
}

export default function ModelsPage() {
  const filePath = path.join(process.cwd(), 'papers', 'model.json');
  let models: Model[] = [];
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    models = JSON.parse(fileContent);
  }

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold mb-6">Models</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model, index) => (
          <Link href={`/models/${model.slug}`} key={index}>
            <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors duration-200">
              <CardHeader>
                <CardTitle>{model.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">{new Date(model.date).toLocaleDateString()}</p>
                <div className="flex flex-wrap gap-2">
                  {model.tags.map((tag, i) => (
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
