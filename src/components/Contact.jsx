import { Linkedin, Github, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
      <p className="mb-6 text-gray-600">Feel free to reach out</p>

      <div className="flex justify-center gap-10">
        <a
          href="https://www.linkedin.com/in/sindhubhatv/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <Linkedin size={40} />
        </a>

        <a
          href="https://github.com/Sindhuu-B"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition"
        >
          <Github size={40} />
        </a>

        <a
          href="mailto:sindhubhatv@gmail.com"
          className="hover:text-red-500 transition"
        >
          <Mail size={40} />
        </a>
      </div>
    </section>
  );
}
