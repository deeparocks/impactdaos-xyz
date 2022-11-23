import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import emoji from 'remark-emoji'
import breaks from 'remark-breaks'
import caption from '@microflash/remark-figure-caption'
import embedder from '@remark-embedder/core'
import oembed from '@remark-embedder/transformer-oembed'

export async function markdownToHtml(markdown) {
  const result = await remark()
    .use(embedder, { transformers: [oembed] })
    .use(html)
    .use(gfm)
    .use(emoji)
    .use(caption)
    .use(breaks)
    .process(markdown)
    
  return result.toString()
}