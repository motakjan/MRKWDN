import Markdown from 'react-markdown';
import rehypeColorChips from 'rehype-color-chips';
import remarkGfm from 'remark-gfm';

import { MarkdownCode } from '@/app/_components/markdown/MarkdownCode/MarkdownCode';
import { MarkdownHeader } from '@/app/_components/markdown/MarkdownHeader/MarkdownHeader';
import { MarkdownLink } from '@/app/_components/markdown/MarkdownLink/MarkdownLink';
import { MarkdownList, MarkdownListItem } from '@/app/_components/markdown/MarkdownList/MarkdownList';
import { MarkdownText } from '@/app/_components/markdown/MarkdownText/MarkdownText';

interface MarkdownViewProps {
  markdown: string;
}

// TODO [LIST]
// 1. Rewrite with components instead of css
// 2. Select remark plugins https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins (markdown)
// 3. Select rehype plugins https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins (html)

export const MarkdownView = ({ markdown }: MarkdownViewProps) => {
  return (
    <Markdown
      className="flex flex-col"
      components={{
        h1: (props) => <MarkdownHeader props={props} heading="h1" />,
        h2: (props) => <MarkdownHeader props={props} heading="h2" />,
        h3: (props) => <MarkdownHeader props={props} heading="h3" />,
        p: (props) => <MarkdownText props={props} />,
        code: (props) => <MarkdownCode props={props} />,
        ul: (props) => <MarkdownList props={props} type="unordered" />,
        ol: (props) => <MarkdownList props={props} type="ordered" />,
        li: (props) => <MarkdownListItem props={props} />,
        a: (props) => <MarkdownLink props={props} />,
      }}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        [
          rehypeColorChips,
          {
            customClassName: 'ml-1 inline-block h-2.5 w-2.5 rounded-full',
          },
        ],
      ]}
    >
      {markdown}
    </Markdown>
  );
};
