import React, { HTMLAttributes } from 'react';

type MarkdownBlockquoteProps = {
  props: HTMLAttributes<HTMLQuoteElement>;
};

export const MarkdownBlockquote = ({ props }: MarkdownBlockquoteProps): JSX.Element => {
  const { children, ...restProps } = props;

  return (
    <blockquote
      className="text-md border-l-4 pl-2 [&_p]:mb-0 mb-3 dark:text-neutral-400 dark:border-neutral-600 text-neutral-500 border-neutral-300"
      {...restProps}
    >
      {children}
    </blockquote>
  );
};
