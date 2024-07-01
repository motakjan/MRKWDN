import React, { ClassAttributes, HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import { ExtraProps } from 'react-markdown';
import { cn } from '@/lib/utils';

type MarkdownTableProps = {
  props: ClassAttributes<HTMLTableElement> & TableHTMLAttributes<HTMLTableElement> & ExtraProps;
};

type MarkdownTableHeadProps = {
  props: ClassAttributes<HTMLTableSectionElement> & HTMLAttributes<HTMLTableSectionElement> & ExtraProps;
};

type MarkdownTableRowProps = {
  props: ClassAttributes<HTMLTableRowElement> & HTMLAttributes<HTMLTableRowElement> & ExtraProps;
};

type MarkdownTableHeader = {
  props: ClassAttributes<HTMLTableHeaderCellElement> & ThHTMLAttributes<HTMLTableHeaderCellElement> & ExtraProps;
};

type MarkdownTableDataCellProps = {
  props: ClassAttributes<HTMLTableDataCellElement> & TdHTMLAttributes<HTMLTableDataCellElement> & ExtraProps;
};

const baseStyle = 'dark:border-neutral-700 border-neutral-300';

export const MarkdownTable = ({ props }: MarkdownTableProps) => {
  const { children, ...restProps } = props;

  return <table className={cn(baseStyle, 'border-2 mb-4 w-min')}>{children}</table>;
};

export const MarkdownTableHead = ({ props }: MarkdownTableHeadProps) => {
  const { children, ...restProps } = props;

  return <thead className={cn(baseStyle, 'border-b-2')}>{children}</thead>;
};

export const MarkdownTableRow = ({ props }: MarkdownTableRowProps) => {
  const { children, ...restProps } = props;

  return <tr className={cn(baseStyle, 'border-b-2 even:dark:bg-neutral-800/70')}>{children}</tr>;
};

export const MarkdownTableHeader = ({ props }: MarkdownTableHeader) => {
  const { children, ...restProps } = props;

  return <th className={cn(baseStyle, 'border-l-2 p-2')}>{children}</th>;
};

export const MarkdownTableDataCell = ({ props }: MarkdownTableDataCellProps) => {
  const { children, ...restProps } = props;

  return <td className={cn(baseStyle, 'border-l-2 p-2')}>{children}</td>;
};
