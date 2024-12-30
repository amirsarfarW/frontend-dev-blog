import Image from 'next/image'
import { notFound } from 'next/navigation'

const blogPosts = [
  {
    title: "Getting Started with React",
    content: "React is a popular JavaScript library for building user interfaces. In this tutorial, we'll cover the basics of React and guide you through creating your first component...",
    date: "2023-05-15",
    slug: "getting-started-with-react",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "CSS Grid Layout: A Comprehensive Guide",
    content: "CSS Grid Layout is a powerful tool for creating complex web layouts. In this guide, we'll explore the key concepts of Grid Layout and show you how to use it effectively...",
    date: "2023-05-10",
    slug: "css-grid-layout-guide",
    imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "JavaScript ES6 Features You Should Know",
    content: "ECMAScript 6 (ES6) introduced many new features to JavaScript. In this article, we'll cover some of the most important ES6 features that every developer should know...",
    date: "2023-05-05",
    slug: "javascript-es6-features",
    imageUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Responsive Web Design Principles",
    content: "Responsive web design is crucial in today's multi-device world. In this tutorial, we'll discuss the key principles of responsive design and how to implement them...",
    date: "2023-04-30",
    slug: "responsive-web-design-principles",
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80"
  }
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative h-64 w-full">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-500 mb-6">{post.date}</div>
        <div className="prose max-w-none">{post.content}</div>
      </div>
    </article>
  )
}

