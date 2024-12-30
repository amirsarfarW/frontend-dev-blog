import Image from 'next/image'
import Link from 'next/link'

interface BlogPostPreviewProps {
  title: string
  excerpt: string
  date: string
  slug: string
  imageUrl: string
}

export default function BlogPostPreview({ title, excerpt, date, slug, imageUrl }: BlogPostPreviewProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">
          <Link href={`/posts/${slug}`} className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            {title}
          </Link>
        </h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
    </div>
  )
}

