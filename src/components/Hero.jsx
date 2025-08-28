export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[60vh] flex flex-col md:flex-row items-center justify-center px-8 bg-gradient-to-r from-blue-50 to-blue-100"
    >
      {/* Left: Profile Picture */}
      <div className="flex-1 flex justify-center mb-8 md:mb-0">
        <img
          src="/profile.jpeg"   // 👈 place your image in frontend/public/profile.jpg
          alt="Profile"
          className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-white"
        />
      </div>

      {/* Right: Name, intro, resume */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m <span className="text-blue-600">Sindhu V</span>
        </h1>
        <p className="text-lg mb-6 max-w-lg">
          A passionate developer who enjoys turning ideas into real, user-friendly solutions through code.I'm eager to contribute to impactful solutions and grow.
        </p>

        {/* View Resume Button */}
        <a
          href="/Sindhu V.pdf" // 👈 put your resume in frontend/public/resume.pdf
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}
