import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectList = [
    {
      image: "/crop_rec.png",
      title: "Crop Recommendation System",
      description:
        "A machine learning-based project that suggests the most suitable crop for cultivation using soil nutrients like pH, temperature, humidity. Helping farmers improve yield through data-driven decisions.",
      tech: ["HTML", "CSS", "Python", "Flask"],
      repo: "https://github.com/Sindhzzz/Crop-Recommendation-System",
    },
    {
      image: "/PD.jpg",
      title: "Parkinson's Disease Detection",
      description:
        "Developed a machine learning model to detect Parkinson’s disease from biomedical voice measurements. Implemented algorithms like Random Forest, and SVM to classify patients, with a focus on feature selection.Evaluated model performance using accuracy to ensure reliability in early diagnosis support.",
      tech: ["React", "Javascript", "Tailwindcss", "SVM"],
      repo: " ",
    },
    {
      image: "/HelloPM.png",
      title: "Carbon Transparency in E-Commerce (2035) - HelloPM Case Challenge",
      description:
        "Addressed the challenge of low visibility into the carbon footprint of online purchases. Researched user pain points around eco-conscious shopping and lack of reliable sustainability data. Proposed an “Eco Filter” feature that allows users to sort and compare products by carbon impact. Designed a scalable framework that helps users make greener choices while enabling businesses to showcase sustainable practices.",
      tech: ["User Research", "Wireframing", "Producr Strategy", "Road Mapping"],
      repo: "https://drive.google.com/file/d/16LxQzR0SJxrB2kNoFGCPOWxTkwnJ_WiX/view?usp=sharing",
    },

  ];

  return (
    <section id="projects" className="px-6 my-12">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
      {projectList.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
      </div>
    </section>
  );
}





