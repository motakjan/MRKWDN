import React, { HTMLAttributes } from 'react';

type MarkdownCodeProps = {
  props: HTMLAttributes<HTMLElement>;
};

export const MarkdownCode = ({ props }: MarkdownCodeProps): JSX.Element => {
  const { children, ...restProps } = props;

  return (
    <code className="text-sm dark:bg-neutral-700 bg-neutral-200 py-0.5 px-1 rounded-lg" {...restProps}>
      {children}
    </code>
  );
};
