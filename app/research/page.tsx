import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface Research {
  title: string;
  content: string;
  tags: string[];
  date: string;
  slug: string;
}

export default function ResearchPage() {
  const filePath = path.join(process.cwd(), 'papers', 'research.json');
  let research: Research[] = [];
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    research = JSON.parse(fileContent);
  }

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold mb-6">Research Papers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {research.map((item, index) => (
          <Link href={`/research/${item.slug}`} key={index}>
            <div className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-400 mb-4">{new Date(item.date).toLocaleDateString()}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
