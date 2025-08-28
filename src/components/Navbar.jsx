export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0">
      <h1 className="text-2xl font-bold text-blue-600">Sindhu V</h1>
      <ul className="flex gap-6">
        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500">About Me</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#certifications" className="hover:text-blue-500">Certifications</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
}
