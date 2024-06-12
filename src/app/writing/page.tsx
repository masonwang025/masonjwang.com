import Layout from '@/components/global/Layout'
import { BlogPosts } from '@/components/global/posts'
import Writing from '@/components/home/Writing'

export const metadata = {
  title: 'Writing',
  description: 'Some thoughts, musings, and ramblings.',
}

export default function Page() {
  return (
    <Layout>
      <Writing />
    </Layout>
  )
}
