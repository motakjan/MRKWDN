import Markdown from 'react-markdown';
import rehypeColorChips from 'rehype-color-chips';
import remarkGfm from 'remark-gfm';

import { MarkdownHeader } from '@/app/_components/markdown/MarkdownHeader/MarkdownHeader';
import { MarkdownText } from '@/app/_components/markdown/MarkdownText/MarkdownText';

import classes from './MarkdownView.module.scss';

interface MarkdownViewProps {
  markdown: string;
}

// TODO [LIST]
// 1. Rewrite with components instead of css
// 2. Select remark plugins https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins (markdown)
// 3. Select rehype plugins https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins (html)

export const MarkdownView = ({ markdown }: MarkdownViewProps) => {
  console.log({ markdown });
  return (
    <div className={classes.markdown}>
      <Markdown
        components={{
          h1: (props) => <MarkdownHeader props={props} heading="h1" />,
          h2: (props) => <MarkdownHeader props={props} heading="h2" />,
          h3: (props) => <MarkdownHeader props={props} heading="h3" />,
          p: (props) => <MarkdownText props={props} />,
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
    </div>
  );
};
