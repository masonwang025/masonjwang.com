import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/global/mdx'
import { formatDate, getBlogPosts } from '@/app/writing/utils'
import { baseUrl } from '@/app/sitemap'
import Hero from '@/components/writing/Hero'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/writing/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section id="top">
      <Hero
        title={post.metadata.title}
        publishedAt={post.metadata.publishedAt}
      // image={post.metadata.image}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/writing/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Mason Wang',
            },
          }),
        }}
      />
      <div id="content" className="bg-background-light max-w-2xl mx-4 lg:mx-auto py-8 sm:py-14 md:py-28">
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
        {/* back to top link */}
        <a href="#top" className="text-sm text-neutral-600 hover:text-neutral-800 text-center !mx-auto block">
          [back to top ↑]
        </a>
      </div>
    </section>
  )
}
