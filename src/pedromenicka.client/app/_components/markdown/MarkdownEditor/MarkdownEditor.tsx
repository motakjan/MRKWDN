import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Textarea } from '@/components/ui/textarea';
import * as React from 'react';
import { MarkdownHeader } from '@/app/_components/markdown/MarkdownHeader/MarkdownHeader';
import { MarkdownText } from '@/app/_components/markdown/MarkdownText/MarkdownText';
import { MarkdownCode } from '@/app/_components/markdown/MarkdownCode/MarkdownCode';
import { MarkdownList, MarkdownListItem } from '@/app/_components/markdown/MarkdownList/MarkdownList';
import { MarkdownLink } from '@/app/_components/markdown/MarkdownLink/MarkdownLink';
import { MarkdownBlockquote } from '@/app/_components/markdown/MarkdownBlockquote/MarkdownBlockquote';
import { MarkdownSeparator } from '@/app/_components/markdown/MarkdownSeparator/MarkdownSeparator';
import { MarkdownCodePre } from '@/app/_components/markdown/MarkdownCodePre/MarkdownCodePre';
import remarkGfm from 'remark-gfm';
import Markdown from 'react-markdown';
import { useMarkdownEditor } from '@/app/_hooks/useMarkdownEditor';
import rehypeSanitize from 'rehype-sanitize';
import { useRef, useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { motion } from 'framer-motion';
import { CaseSensitive, Code, Columns2 } from 'lucide-react';
import { ImperativePanelHandle } from 'react-resizable-panels';

enum MarkdownEditorView {
  Split = 'split',
  FullCode = 'full-code',
  FullMarkdown = 'full-markdown',
}

const codeVariants: Record<MarkdownEditorView, any> = {
  [MarkdownEditorView.Split]: { width: '50%', opacity: 1 },
  [MarkdownEditorView.FullCode]: { width: '100%', opacity: 1 },
  [MarkdownEditorView.FullMarkdown]: { width: '0%', opacity: 0 },
};

const markdownVariants: Record<MarkdownEditorView, any> = {
  [MarkdownEditorView.Split]: { width: '50%', opacity: 1 },
  [MarkdownEditorView.FullCode]: { width: '0%', opacity: 0 },
  [MarkdownEditorView.FullMarkdown]: { width: '100%', opacity: 1 },
};

export const MarkdownEditor = () => {
  const [editorView, setEditorView] = useState(MarkdownEditorView.Split);
  const { markdown, handleTextChange, toggleWrap, markdownInputRef, undo, redo } = useMarkdownEditor();
  const codePanelRef = useRef<ImperativePanelHandle>(null);

  const handleSizeToggle = (value: string) => {
    setEditorView((value as MarkdownEditorView) || MarkdownEditorView.Split);
  };

  return (
    <div className="h-screen w-full">
      <div className="options mb-2">
        <ToggleGroup
          type="single"
          size="sm"
          variant="outline"
          onValueChange={(value) => handleSizeToggle(value)}
          value={editorView}
        >
          <ToggleGroupItem value={MarkdownEditorView.FullCode}>
            <Code className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value={MarkdownEditorView.Split}>
            <Columns2 className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value={MarkdownEditorView.FullMarkdown}>
            <CaseSensitive className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex">
        <motion.div animate={codeVariants[editorView]}>
          <Textarea
            placeholder="Type your markdown here."
            rows={16}
            ref={markdownInputRef}
            value={markdown}
            onChange={handleTextChange}
            className="w-full h-full no-scrollbar focus:outline-none border-0 focus-visible:ring-0"
          />
        </motion.div>
        <motion.div animate={markdownVariants[editorView]} className="p-4">
          <Markdown
            className="flex flex-col"
            components={{
              h1: (props) => <MarkdownHeader props={props} heading="h1" />,
              h2: (props) => <MarkdownHeader props={props} heading="h2" />,
              h3: (props) => <MarkdownHeader props={props} heading="h3" />,
              p: (props) => <MarkdownText props={props} />,
              code: (props) => <MarkdownCode props={props} />,
              ul: (props) => <MarkdownList props={props} type="unordered" />,
              ol: (props) => <MarkdownList props={props} type="ordered" />,
              li: (props) => <MarkdownListItem props={props} />,
              a: (props) => <MarkdownLink props={props} />,
              blockquote: (props) => <MarkdownBlockquote props={props} />,
              hr: (props) => <MarkdownSeparator props={props} />,
              pre: (props) => <MarkdownCodePre props={props} />,
            }}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSanitize]}
          >
            {markdown}
          </Markdown>
        </motion.div>
      </div>
    </div>
  );
};
