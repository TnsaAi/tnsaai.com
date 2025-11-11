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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";


export default function AdminPage() {
  const [content, setContent] = useState('');
  const [contentType, setContentType] = useState('model');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [img, setImg] = useState('');
  const [slug, setSlug] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, contentType, tags: tags.split(','), date, img, slug }),
    });
    if (response.ok) {
      alert('Content added successfully!');
      setTitle('');
      setContent('');
      setTags('');
      setDate(new Date());
      setImg('');
      setSlug('');
    } else {
      alert('Failed to add content.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="text-black">
        <CardHeader>
          <CardTitle>Admin Panel</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="contentType">Content Type</Label>
              <Select onValueChange={setContentType} defaultValue={contentType}>
                <SelectTrigger id="contentType">
                  <SelectValue placeholder="Select content type" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black">
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
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">URL Suffix</Label>
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="img">Image URL</Label>
              <Input
                id="img"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="content">Content (Markdown supported)</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={20}
                />
              </div>
              <div className="space-y-2">
                <Label>Preview</Label>
                <div className="mt-1 p-4 rounded-md border h-[450px] overflow-y-auto prose">
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
              />
            </div>
            <Button type="submit">Add Content</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
