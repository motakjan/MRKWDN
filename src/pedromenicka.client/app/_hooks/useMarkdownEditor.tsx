'use client';

import { useHistoryState } from '@uidotdev/usehooks';
import { ChangeEvent, useLayoutEffect, useRef } from 'react';

export enum MarkdownWrapType {
  Italic,
  Bold,
}

export const markdownWrapString: Record<MarkdownWrapType, string> = {
  [MarkdownWrapType.Italic]: '*',
  [MarkdownWrapType.Bold]: '**',
};

export const useMarkdownEditor = () => {
  const {
    state: markdown,
    set: setMarkdown,
    undo,
    redo,
    clear,
    canUndo,
    canRedo,
  } = useHistoryState(
    '' +
      '# H1\n' +
      '## H2\n' +
      '### H3\n' +
      '\n' +
      '**bold text**\n' +
      '\n' +
      '*italicized text*\n' +
      '\n' +
      '_italicized text_\n' +
      '\n' +
      '> blockquote\n' +
      '\n' +
      '1. First item\n' +
      '2. Second item\n' +
      '3. Third item\n' +
      '\n' +
      '- First item\n' +
      '- Second item\n' +
      '- Third item\n' +
      '\n' +
      '`code`\n' +
      '\n' +
      '---\n' +
      '\n' +
      '[title](https://www.example.com)\n' +
      '\n' +
      '![alt text](https://refstatic.sk/article/vitez-survivoru-mikyr-si-na-herohero-mesicne-vydela-miliony-oznamil-novy-projekt-se-sefem-oktagonu~dad21974882270a970b7.jpg?is=919x570c&ic=0x42x543x339&c=2w&s=a87234b0f64ec9fce71c65823494b0fa76527bb11d42c739aab870657e219698)\n' +
      '\n' +
      '| Syntax | Description |\n' +
      '| ----------- | ----------- |\n' +
      '| Header | Title |\n' +
      '| Paragraph | Text |\n' +
      '\n' +
      '```\n' +
      '{\n' +
      '  "firstName": "John",\n' +
      '  "lastName": "Smith",\n' +
      '  "age": 25\n' +
      '}\n' +
      '```\n' +
      '\n' +
      "Here's a sentence with a footnote. [^1]\n" +
      '\n' +
      '[^1]: This is the footnote.\n' +
      '\n' +
      '### My Great Heading {#custom-id}\n' +
      '\n' +
      'term\n' +
      ': definition\n' +
      '\n' +
      '~~The world is flat.~~\n' +
      '\n' +
      '- [x] Write the press release\n' +
      '- [ ] Update the website\n' +
      '- [ ] Contact the media\n' +
      '\n' +
      'That is so funny! :joy:\n' +
      '\n' +
      'I need to highlight these ==very important words==.\n' +
      '\n' +
      'H~2~O\n' +
      '\n' +
      'X^2^\n',
  );
  const markdownInputRef = useRef<HTMLTextAreaElement>(null);
  const selectionRangeRef = useRef<{ start: number; end: number } | null>(null);

  useLayoutEffect(() => {
    if (selectionRangeRef.current && markdownInputRef.current) {
      const { start, end } = selectionRangeRef.current;
      markdownInputRef.current.setSelectionRange(start, end);
      markdownInputRef.current.focus();
      selectionRangeRef.current = null;
    }
  }, [markdown]);

  const handleMarkdownChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  const toggleWrap = (textarea: HTMLTextAreaElement, type: MarkdownWrapType) => {
    const { selectionStart: start, selectionEnd: end, value } = textarea;
    const selectedText = value.substring(start, end);
    const wrapString = markdownWrapString[type];
    const wrapLength = wrapString.length;

    const beforeText = value.substring(0, start);
    const afterText = value.substring(end);

    let newText: string;
    let newSelectionStart = start;
    let newSelectionEnd = end;

    if (selectedText) {
      if (beforeText.endsWith(wrapString) && afterText.startsWith(wrapString)) {
        // Unwrap the text
        newText = `${beforeText.slice(0, -wrapLength)}${selectedText}${afterText.slice(wrapLength)}`;
        newSelectionStart -= wrapLength;
        newSelectionEnd -= wrapLength;
      } else {
        // Wrap the text
        newText = `${beforeText}${wrapString}${selectedText}${wrapString}${afterText}`;
        newSelectionStart += wrapLength;
        newSelectionEnd += wrapLength;
      }
    } else {
      // Wrap the insertion point
      newText = `${beforeText}${wrapString}${wrapString}${afterText}`;
      newSelectionStart = newSelectionEnd = start + wrapLength;
    }

    setMarkdown(newText);
    selectionRangeRef.current = { start: newSelectionStart, end: newSelectionEnd };
  };

  return {
    markdown,
    setMarkdown,
    handleTextChange: handleMarkdownChange,
    toggleWrap,
    undo,
    redo,
    clear,
    canUndo,
    canRedo,
    markdownInputRef,
  };
};
