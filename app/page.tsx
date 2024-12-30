import BlogPostPreview from './components/BlogPostPreview'

const blogPosts = [
  {
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and start building your first component.",
    date: "2023-05-15",
    slug: "getting-started-with-react",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "CSS Grid Layout: A Comprehensive Guide",
    excerpt: "Master CSS Grid Layout and create complex layouts with ease.",
    date: "2023-05-10",
    slug: "css-grid-layout-guide",
    imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "JavaScript ES6 Features You Should Know",
    excerpt: "Explore the powerful features introduced in ECMAScript 6.",
    date: "2023-05-05",
    slug: "javascript-es6-features",
    imageUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Responsive Web Design Principles",
    excerpt: "Learn how to create websites that look great on any device.",
    date: "2023-04-30",
    slug: "responsive-web-design-principles",
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80"
  }
]

export default function Home() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <div className="space-y-12">
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-4 rounded-lg shadow-xl">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Frontend Dev Blog</h1>
          <p className="text-xl">Expand your web development skills with our in-depth tutorials and tips.</p>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Post</h2>
        <BlogPostPreview {...featuredPost} />
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Latest Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {otherPosts.map((post) => (
            <BlogPostPreview key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </div>
  )
}

