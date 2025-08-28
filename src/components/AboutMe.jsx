export default function AboutMe() {
  const skills = [
    "Java", "Python", "JavaScript","C","React","Flask", "HTML", "CSS", "Tailwind CSS",
     "Power BI", "Tableau", "Canva"
  ];

  return (
    <section id="about" className="px-6 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Intro */}
        <div>
          <p className="text-lg text-gray-700 mb-4">
            I am a Final Year student passionate about building user focused digital solutions.
With skills in software development, web technologies, and product thinking, I enjoy turning ideas into practical applications.
          </p>
          <p className="text-lg text-gray-700">
            Outside of tech, I enjoy reading about product strategy, exploring new design trends, and playing badminton.
          </p>
        </div>

        {/* Right: Education */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <ul className="space-y-4">
            <li>
              <p className="font-medium">B.E in Information Science</p>
              <p className="text-gray-600">Jawaharlal Nehru New College of Engineering, 2022-2026</p>
              <p className="text-gray-600">9.1 CGPA</p>
            </li>
            <li>
              <p className="font-medium">Higher Secondary & Secondary Education | Class 6-12 | CBSE</p>
              <p className="text-gray-600">Jawahar Navodaya Vidyalaya, 2015-2022</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-5xl mx-auto mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-6">Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full shadow-sm hover:bg-blue-600 hover:text-white transition cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
