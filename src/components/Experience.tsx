
const Experience = () => {
  const experiences = [
    {
      role: "Intern",
      company: "DigiEra",
      period: "Present",
      location: "Remote",
      description: "Gaining hands-on experience in DevOps, cloud computing, and automation. Working on real-world projects involving AWS, Docker, Kubernetes, Jenkins, and modern DevOps practices.",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitHub", "Prometheus", "Grafana", "Terraform"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{exp.role}</h3>
                  <h4 className="text-xl text-green-400 mb-2">{exp.company}</h4>
                </div>
                <div className="text-right">
                  <div className="text-gray-300 font-medium">{exp.period}</div>
                  <div className="text-gray-400">{exp.location}</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
              
              <div>
                <h5 className="text-lg font-semibold mb-3 text-purple-400">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Open to work as:</p>
          <div className="inline-flex bg-slate-800 rounded-lg p-4">
            <span className="text-blue-400 font-semibold">DevOps Engineer, AWS Engineer, Cloud Engineer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
