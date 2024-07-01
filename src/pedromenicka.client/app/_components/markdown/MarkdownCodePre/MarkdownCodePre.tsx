import { useCopyToClipboard } from '@uidotdev/usehooks';
import { Check, Copy } from 'lucide-react';
import React, { ClassAttributes, HTMLAttributes, ReactElement, useState } from 'react';
import { ExtraProps } from 'react-markdown';

import { Button } from '@/components/ui/button';

type MarkdownCodePreProps = {
  props: ClassAttributes<HTMLPreElement> & HTMLAttributes<HTMLPreElement> & ExtraProps;
};

export const MarkdownCodePre = ({ props }: MarkdownCodePreProps): JSX.Element => {
  const [_copiedText, copyToClipboard] = useCopyToClipboard();
  const [isTextCopied, setIsTextCopied] = useState(false);

  const { children } = props;

  const handleClick = async () => {
    await copyToClipboard((children as ReactElement)?.props.children);

    setIsTextCopied(true);
    setTimeout(() => {
      setIsTextCopied(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <pre className="text-md mb-3 dark:bg-neutral-800 bg-neutral-100 px-2 py-3 rounded-md dark:[&_code]:bg-neutral-800 [&_code]:bg-neutral-100">
        {children}
        <Button
          className="absolute top-2 right-2"
          variant="ghost"
          size="icon"
          disabled={isTextCopied}
          onClick={handleClick}
        >
          {isTextCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </Button>
      </pre>
    </div>
  );
};
