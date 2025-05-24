
const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS", "Terraform", "Ansible", "Linux", "Red Hat", "Networking"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Containers & Orchestration", 
      skills: ["Docker", "Kubernetes", "Docker Swarm", "Container Registry"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "CI/CD & Automation",
      skills: ["Jenkins", "GitHub Actions", "Maven", "Tomcat", "GitOps"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Monitoring & Observability",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Kibana", "Fluentd"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Programming & Scripting",
      skills: ["Python", "Shell Scripting", "YAML", "JSON", "PowerShell"],
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Slack", "SonarQube", "Nexus Repo", "VS Code", "PyCharm"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-slate-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Language Proficiency */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-blue-400">Most Used Languages</h3>
          <div className="bg-slate-800 rounded-xl p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-orange-400 font-medium">Java</span>
                <span className="text-gray-400">42.34%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full" style={{width: '42.34%'}}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-purple-400 font-medium">CSS</span>
                <span className="text-gray-400">25.30%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-400 to-purple-500 h-2 rounded-full" style={{width: '25.30%'}}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-pink-400 font-medium">SCSS</span>
                <span className="text-gray-400">9.15%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-pink-400 to-pink-500 h-2 rounded-full" style={{width: '9.15%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
