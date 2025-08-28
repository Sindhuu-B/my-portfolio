
export default function ProjectCard({ image, title, description, tech, repo }) {
  return (
    <div className="max-w-sm mx-auto my-15 rounded-2xl overflow-hidden shadow-lg bg-white hover:scale-[1.02] transition">
      {/* Top: Image */}
      <a href={repo} target="_blank" rel="noopener noreferrer" className="block">
        <img src={image} alt={title} className="w-full h-46 object-cover" />
      </a>

      {/* Bottom: Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}




