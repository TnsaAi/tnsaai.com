import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';

export async function POST(req: NextRequest) {
  try {
    const { title, content, contentType, tags, date, img, slug } = await req.json();

    if (!title || !content || !contentType) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const dataDir = path.join(process.cwd(), 'papers');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }

    const filePath = path.join(dataDir, `${contentType}.json`);
    let items = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      items = JSON.parse(fileContent);
    }

    const finalSlug = slug ? slugify(slug, { lower: true, strict: true }) : slugify(title, { lower: true, strict: true });
    const newDate = date ? new Date(date).toISOString() : new Date().toISOString();
    items.push({ title, content, tags, date: newDate, slug: finalSlug, img });
    fs.writeFileSync(filePath, JSON.stringify(items, null, 2));

    return NextResponse.json({ message: 'Content added successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
