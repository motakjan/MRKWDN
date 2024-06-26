import React, { HTMLAttributes } from 'react';

type MarkdownLinkProps = {
  props: HTMLAttributes<HTMLAnchorElement>;
};

export const MarkdownLink = ({ props }: MarkdownLinkProps): JSX.Element => {
  const { children, ...restProps } = props;

  return (
    <a className="text-sm text-blue-500 underline underline-offset-2" {...restProps}>
      {children}
    </a>
  );
};
