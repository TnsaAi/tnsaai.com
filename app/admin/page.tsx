"use client";

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function AdminPage() {
  const [content, setContent] = useState('');
  const [contentType, setContentType] = useState('model');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, contentType, tags: tags.split(',') }),
    });
    if (response.ok) {
      alert('Content added successfully!');
      setTitle('');
      setContent('');
      setTags('');
    } else {
      alert('Failed to add content.');
    }
  };

  return (
    <div className="container mx-auto p-4 text-white">
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle>Admin Panel</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="contentType">Content Type</Label>
              <Select onValueChange={setContentType} defaultValue={contentType}>
                <SelectTrigger id="contentType" className="bg-gray-800 border-gray-700">
                  <SelectValue placeholder="Select content type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white">
                  <SelectItem value="model">Model</SelectItem>
                  <SelectItem value="research">Research Paper</SelectItem>
                  <SelectItem value="news">News</SelectItem>
                  <SelectItem value="job">Job</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="content">Content (Markdown supported)</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={20}
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label>Preview</Label>
                <div className="mt-1 p-4 rounded-md border border-gray-700 bg-gray-800 h-[450px] overflow-y-auto prose prose-invert">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <Button type="submit">Add Content</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
