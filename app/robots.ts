import { getOrigin } from '@/lib/getOrigin'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${getOrigin()}/sitemap.xml`,
  }
}
