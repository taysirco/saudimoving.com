import Head from 'next/head'
import { MetaData } from '@/types'

interface Props {
  meta: MetaData
}

export default function Meta({ meta }: Props) {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords.join(', ')} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {meta.ogImage && <meta name="twitter:image" content={meta.ogImage} />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
} 