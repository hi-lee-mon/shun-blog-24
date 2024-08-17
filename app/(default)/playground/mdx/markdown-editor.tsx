'use client'

import type { MDXEditorMethods } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'

import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  thematicBreakPlugin,
} from '@mdxeditor/editor'

type Props = {
  markdown: string
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>
}

export default function MarkdownEditor({ markdown, editorRef }: Props) {
  return (
    <MDXEditor
      className="prose mb-4 border dark:prose-invert"
      onChange={(e) => console.log(e)}
      ref={editorRef}
      markdown={markdown}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
      ]}
    />
  )
}
