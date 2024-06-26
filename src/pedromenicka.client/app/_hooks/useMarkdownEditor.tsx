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
    '# Sample Markdown Document\n' +
      '\n' +
      '## Heading Level 2\n' +
      '\n' +
      'This is a paragraph with **bold** text, _italic_ text, and `inline code`.',
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
