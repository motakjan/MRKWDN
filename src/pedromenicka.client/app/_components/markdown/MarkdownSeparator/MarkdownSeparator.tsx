import React, { HTMLAttributes } from 'react';

type MarkdownSeparatorProps = {
  props: HTMLAttributes<HTMLHRElement>;
};

export const MarkdownSeparator = ({ props }: MarkdownSeparatorProps): JSX.Element => {
  return <hr className="border-2 mb-4 dark:border-neutral-700 mt-1" {...props} />;
};
