import React, { HTMLAttributes } from 'react';

type MarkdownListProps = {
  props: HTMLAttributes<HTMLUListElement | HTMLOListElement>;
  type: 'unordered' | 'ordered';
};

type MarkdownListItemProps = {
  props: HTMLAttributes<HTMLLIElement>;
};

export const MarkdownList = ({ props, type }: MarkdownListProps): JSX.Element => {
  const { children, ...restProps } = props;

  if (type === 'unordered') {
    return (
      <ul className="text-sm list-disc ml-7 mb-3" {...restProps}>
        {children}
      </ul>
    );
  }

  return (
    <ol className="text-sm list-decimal ml-7 mb-3" {...restProps}>
      {children}
    </ol>
  );
};

export const MarkdownListItem = ({ props }: MarkdownListItemProps): JSX.Element => {
  const { children, ...restProps } = props;

  return (
    <li className="text-sm " {...restProps}>
      {children}
    </li>
  );
};
