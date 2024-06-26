import React, { HTMLAttributes } from 'react';

type MarkdownHeaderProps = {
  props: HTMLAttributes<HTMLHeadingElement>;
  heading: 'h1' | 'h2' | 'h3';
};

export const MarkdownHeader = ({ props, heading }: MarkdownHeaderProps): JSX.Element => {
  const { children, ...restProps } = props;

  const headingClasses = {
    h1: 'text-4xl mb-1',
    h2: 'text-2xl mb-1',
    h3: 'text-xl mb-1',
  };

  switch (heading) {
    case 'h1':
      return (
        <h1 className={headingClasses.h1} {...restProps}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={headingClasses.h2} {...restProps}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={headingClasses.h3} {...restProps}>
          {children}
        </h3>
      );
    default:
      return (
        <h1 className={headingClasses.h1} {...restProps}>
          {children}
        </h1>
      );
  }
};
