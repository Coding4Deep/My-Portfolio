
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
    <section id="experience" className="py-20 bg-slate-900 dark:bg-slate-900 light:bg-slate-50 text-white dark:text-white light:text-slate-900 transition-all duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 dark:from-blue-400 dark:to-green-400 light:from-blue-600 light:to-green-600 bg-clip-text text-transparent">
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-800 dark:bg-slate-800 light:bg-white rounded-xl p-8 shadow-lg border dark:border-slate-700 light:border-slate-200 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 dark:text-blue-400 light:text-blue-600 mb-2">{exp.role}</h3>
                  <h4 className="text-xl text-green-400 dark:text-green-400 light:text-green-600 mb-2">{exp.company}</h4>
                </div>
                <div className="text-right">
                  <div className="text-gray-300 dark:text-gray-300 light:text-gray-700 font-medium">{exp.period}</div>
                  <div className="text-gray-400 dark:text-gray-400 light:text-gray-600">{exp.location}</div>
                </div>
              </div>
              
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
              
              <div>
                <h5 className="text-lg font-semibold mb-3 text-purple-400 dark:text-purple-400 light:text-purple-600">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-slate-700 dark:bg-slate-700 light:bg-slate-100 text-gray-300 dark:text-gray-300 light:text-gray-700 px-3 py-1 rounded-full text-sm border dark:border-slate-600 light:border-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-4">Open to work as:</p>
          <div className="inline-flex bg-slate-800 dark:bg-slate-800 light:bg-white rounded-lg p-4 border dark:border-slate-700 light:border-slate-200">
            <span className="text-blue-400 dark:text-blue-400 light:text-blue-600 font-semibold">DevOps Engineer, AWS Engineer, Cloud Engineer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
