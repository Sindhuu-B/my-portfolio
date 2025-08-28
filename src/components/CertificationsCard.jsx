export default function CertificationsCard({ image, title, description }) {
  return (
    <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg bg-white hover:scale-[1.02] transition">
      {/* Image */}
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
}
