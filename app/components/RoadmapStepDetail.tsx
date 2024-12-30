import Link from 'next/link'
import Image from 'next/image'

interface RoadmapStepDetailProps {
  title: string
  description: string
  topics: string[]
  resources: { title: string; url: string }[]
  imageUrl: string
}

export default function RoadmapStepDetail({ title, description, topics, resources, imageUrl }: RoadmapStepDetailProps) {
  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-4 rounded-lg shadow-xl">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl">{description}</p>
        </div>
      </section>

      <Image
        src={imageUrl}
        alt={title}
        width={800}
        height={400}
        className="rounded-lg mx-auto"
      />

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Key Topics</h2>
        <ul className="list-disc list-inside space-y-2">
          {topics.map((topic, index) => (
            <li key={index} className="text-lg">{topic}</li>
          ))}
        </ul>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
        <ul className="space-y-2">
          {resources.map((resource, index) => (
            <li key={index}>
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="max-w-3xl mx-auto">
        <Link 
          href="/roadmap" 
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Back to Roadmap
        </Link>
      </div>
    </div>
  )
}

