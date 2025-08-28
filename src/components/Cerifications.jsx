import CertificationsCard from "./CertificationsCard";

export default function Certifications() {
  const certiList = [
    {
      image: "/spark.jpeg",
      title: "SPARK Internship Program",
      description: "Conducted by JNNCE in collaboration with Subbaih Institute of Medical Science focusing on real world healthcare applications. Gained hands on experience in applying machine learning to medical devices.",
      link: "https://coursera.org/verify/your-cert-link",
    },
    {
      image: "/PMBootcamp.png",
      title: "Summer of Product Bootcamp",
      description: "Completed the Summer of Product bootcamp by HelloPM, covering core concepts of product management. Learned frameworks, case studies, and practical approaches to building user-centric products.",
      link: "https://aws.training/certificate/your-cert-link",
    },
    {
      image: "/Nptel.png",
      title: "NPTEL SWAYAM- Programming in Java",
      description: "Completed the Summer of Product bootcamp by HelloPM, covering core concepts of product management. Learned frameworks, case studies, and practical approaches to building user-centric products.",
      link: "https://aws.training/certificate/your-cert-link",
    },
    {
      image: "/ieee.JPG",
      title: "Event Coordinator-IEEE Yugma",
      description: "Conducted and Coordinated Yugma Tech Fest under IEEE banner in our department.which included a 24-hour hackathon and a one-day tech fest. Managed event activities and supported smooth execution of technical and cultural segments.",
      link: "https://aws.training/certificate/your-cert-link",
    },
  ];

  return (
    <section id="certifications" className="px-6 my-12">
      <h2 className="text-3xl font-bold text-center mb-12">Certifications & Activities</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {certiList.map((certi, index) => (
          <CertificationsCard key={index} {...certi} />
        ))}
      </div>
    </section>
  );
}
