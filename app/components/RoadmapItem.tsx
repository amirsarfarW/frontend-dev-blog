import { ReactNode } from 'react'

interface RoadmapItemProps {
  title: string
  description: string
  children?: ReactNode
}

export default function RoadmapItem({ title, description, children }: RoadmapItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {children && (
        <div className="mt-4 pl-4 border-l-2 border-blue-500">
          {children}
        </div>
      )}
    </div>
  )
}

