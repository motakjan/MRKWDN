'use client';

import * as React from 'react';
import { MarkdownEditor } from '@/app/_components/markdown/MarkdownEditor/MarkdownEditor';

export default function MarkdownPage() {
  return (
    <main className="min-h-screen flex items-center gap-8 px-32 py-8">
      <MarkdownEditor />
    </main>
  );
}
