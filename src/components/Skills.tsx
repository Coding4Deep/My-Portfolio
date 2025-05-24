
const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", badge: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" },
        { name: "Terraform", badge: "https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white" },
        { name: "Ansible", badge: "https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&logoColor=white" },
        { name: "Linux", badge: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" },
        { name: "Red Hat", badge: "https://img.shields.io/badge/Red%20Hat-EE0000?style=for-the-badge&logo=redhat&logoColor=white" },
        { name: "Networking", badge: "https://img.shields.io/badge/Networking-0078D4?style=for-the-badge&logo=cisco&logoColor=white" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Containers & Orchestration", 
      skills: [
        { name: "Docker", badge: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" },
        { name: "Kubernetes", badge: "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white" },
        { name: "Docker Swarm", badge: "https://img.shields.io/badge/Docker_Swarm-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
        { name: "Container Registry", badge: "https://img.shields.io/badge/Container_Registry-4285F4?style=for-the-badge&logo=docker&logoColor=white" }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "CI/CD & Automation",
      skills: [
        { name: "Jenkins", badge: "https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white" },
        { name: "GitHub Actions", badge: "https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white" },
        { name: "Maven", badge: "https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=Apache%20Maven&logoColor=white" },
        { name: "Tomcat", badge: "https://img.shields.io/badge/apache%20tomcat-%23F8DC75.svg?style=for-the-badge&logo=apache-tomcat&logoColor=black" },
        { name: "GitOps", badge: "https://img.shields.io/badge/GitOps-326CE5?style=for-the-badge&logo=git&logoColor=white" }
      ],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { name: "Prometheus", badge: "https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white" },
        { name: "Grafana", badge: "https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white" },
        { name: "ELK Stack", badge: "https://img.shields.io/badge/ELK_Stack-005571?style=for-the-badge&logo=elastic&logoColor=white" },
        { name: "Kibana", badge: "https://img.shields.io/badge/kibana-005571.svg?style=for-the-badge&logo=kibana&logoColor=white" },
        { name: "Fluentd", badge: "https://img.shields.io/badge/Fluentd-0E83C8?style=for-the-badge&logo=fluentd&logoColor=white" }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Programming & Scripting",
      skills: [
        { name: "Python", badge: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" },
        { name: "Shell Scripting", badge: "https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" },
        { name: "YAML", badge: "https://img.shields.io/badge/yaml-%23ffffff.svg?style=for-the-badge&logo=yaml&logoColor=151515" },
        { name: "JSON", badge: "https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" },
        { name: "PowerShell", badge: "https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white" }
      ],
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", badge: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" },
        { name: "Slack", badge: "https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" },
        { name: "SonarQube", badge: "https://img.shields.io/badge/SonarQube-black?style=for-the-badge&logo=sonarqube&logoColor=4E9BCD" },
        { name: "Nexus Repo", badge: "https://img.shields.io/badge/Nexus-1B1C30?style=for-the-badge&logo=sonatype&logoColor=white" },
        { name: "VS Code", badge: "https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" },
        { name: "PyCharm", badge: "https://img.shields.io/badge/pycharm-143?style=for-the-badge&logo=pycharm&logoColor=black&color=black&labelColor=green" }
      ],
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
                  <div key={skillIndex} className="mb-2">
                    <img 
                      src={skill.badge} 
                      alt={skill.name}
                      className="h-6"
                      loading="lazy"
                    />
                  </div>
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
