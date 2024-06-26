import React, { HTMLAttributes } from 'react';

type MarkdownCodePreProps = {
  props: HTMLAttributes<HTMLPreElement>;
};

export const MarkdownCodePre = ({ props }: MarkdownCodePreProps): JSX.Element => {
  const { children, ...restProps } = props;

  return (
    <pre
      className="text-sm mb-3 dark:bg-neutral-800 bg-neutral-100 px-2 py-3 rounded-md dark:[&_code]:bg-neutral-800 [&_code]:bg-neutral-100"
      {...restProps}
    >
      {children}
    </pre>
  );
};
