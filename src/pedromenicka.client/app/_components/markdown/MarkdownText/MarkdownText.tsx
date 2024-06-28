import React, { HTMLAttributes } from 'react';

type MarkdownTextProps = {
  props: HTMLAttributes<HTMLParagraphElement>;
};

export const MarkdownText = ({ props }: MarkdownTextProps): JSX.Element => {
  const { children, ...restProps } = props;

  return (
    <p className="text-md mb-3" {...restProps}>
      {children}
    </p>
  );
};
