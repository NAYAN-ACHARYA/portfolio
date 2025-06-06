interface Props {
  title: string
  description: string
  link: string
}

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-gray-300">{description}</p>
      <a href={link} target="_blank" className="inline-block mt-3 text-blue-400">View Project</a>
    </div>
  )
}
