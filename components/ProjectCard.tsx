interface Props {
  title: string;
  description: string;
  link: string;         // For GitHub link
  liveDemo?: string;    // Optional live demo link
  image?: string;       // Image URL or imported image path
}

export default function ProjectCard({ title, description, link, liveDemo, image }: Props) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center text-gray-300 bg-black rounded-lg p-4 hover:bg-[#111] transition-colors duration-300 shadow-md mb-16">
      <img
        src={image || "/project-placeholder.png"}
        alt={`${title} Thumbnail`}
        className="w-full sm:w-1/2 h-48 object-cover rounded-lg mb-4 sm:mb-0"
      />
      <div className="flex flex-col sm:ml-6 text-center sm:text-left">
        <div className="text-[1.6rem] mb-1">{title}</div>
        <div className="text-[1.1rem] text-gray-400 mb-2">{description}</div>
        <div className="text-sm text-gray-500 mb-1">Tech Stack: MERN</div>
        <div className="flex gap-4 mt-2 justify-center sm:justify-start">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-[1.2rem] bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-md transition"
          >
            GitHub
          </a>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-[1.1rem] bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-md transition"
            >
              Live Demo
            </a>
        </div>
      </div>
    </div>
  );
}
