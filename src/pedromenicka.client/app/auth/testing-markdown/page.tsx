'use client';

import { Bold, Italic } from 'lucide-react';
import * as React from 'react';

import { MarkdownView } from '@/app/_components/markdown/MarkdownView/MarkdownView';
import { MarkdownWrapType, useMarkdownEditor } from '@/app/_hooks/useMarkdownEditor';
import { ModeToggle } from '@/app/temp-components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function MarkdownPage() {
  const { markdown, handleTextChange, toggleWrap, markdownInputRef, undo, redo } = useMarkdownEditor();

  const handleBoldClick = () => {
    if (markdownInputRef.current) {
      toggleWrap(markdownInputRef.current, MarkdownWrapType.Bold);
    }
  };

  const handleItalicClick = () => {
    if (markdownInputRef.current) {
      toggleWrap(markdownInputRef.current, MarkdownWrapType.Italic);
    }
  };

  const handleUndoClick = () => {
    undo();
  };

  const handleRedoClick = () => {
    redo();
  };

  return (
    <main className="min-h-screen flex items-center gap-8 p-64">
      <ModeToggle />
      <div className="flex gap-2 hidden">
        <Button variant="outline" size="icon" onClick={handleBoldClick}>
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleItalicClick}>
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleUndoClick}>
          Undo
        </Button>
        <Button variant="outline" size="icon" onClick={handleRedoClick}>
          Redo
        </Button>
      </div>
      <Textarea
        placeholder="Type your markdown here."
        rows={16}
        ref={markdownInputRef}
        value={markdown}
        onChange={handleTextChange}
        className="w-[600px]"
      />
      <MarkdownView markdown={markdown} />
    </main>
  );
}
