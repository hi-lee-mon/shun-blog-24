import { getCurrentDateJp } from '@/lib/date'
import fs from 'fs'
import path from 'path'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

/**
 * フロントマターを除いた本文とフロントマターを取得
 */
function parseFrontmatter(fileContent: string) {
  // フロントマターブロックを抽出
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const frontMatterBlock = match![1]
  // フロントマターブロックを行毎に配列に格納
  const frontMatterLines = frontMatterBlock.trim().split('\n')
  // フロントマターをオブジェクトに変換
  const metadata: Partial<Metadata> = {}
  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim() // カンマ付きの文字列に復元
    value = value.replace(/^['"](.*)['"]$/, '$1') // クォートの削除
    metadata[key.trim() as keyof Metadata] = value
  })

  // フロントマターを削除した本文を取得
  const content = fileContent.replace(frontmatterRegex, '').trim()

  return { metadata: metadata as Metadata, content }
}

/**
 * 拡張子がmdxファイルのものを同期的に取得する
 * @example
 *  const fileNames = getMDXFiles(path)
 *  // fileNames = ["a.mdx", "b.mdx", "c.mdx"]
 */
function getMDXFileNames(postDir: string) {
  return fs.readdirSync(postDir).filter((fileName) => path.extname(fileName) === '.mdx')
}

/**
 * mdxファイルのファイルパスからファイルの内容を読み込む
 */
function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(postDir: string) {
  const fileNames = getMDXFileNames(postDir)
  return fileNames.map((fileName) => {
    const { metadata, content } = readMDXFile(path.join(postDir, fileName))
    const basename = path.basename(fileName, '.mdx')

    return {
      metadata,
      slug: basename,
      content,
    }
  })
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', '(default)', 'blog', '_posts'))
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = getCurrentDateJp()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }

  const targetDate = new Date(date)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}年前`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}ヶ月前`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}日前`
  } else {
    formattedDate = '今日'
  }

  const fullDate = targetDate.toLocaleString('ja-JP', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (includeRelative) {
    return `${fullDate} (${formattedDate})`
  }

  return fullDate
}
