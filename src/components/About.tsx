
const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">DevOps Enthusiast | Cloud & Automation</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  IT graduate from NIT Raipur, passionate about DevOps, cloud computing, and automation. 
                  Currently interning at Digiera, gaining hands-on experience in building scalable infrastructure 
                  and deployment strategies.
                </p>
                <p>
                  I thrive on solving problems, learning continuously, and optimizing workflows. My expertise 
                  spans across cloud infrastructure, containerization, CI/CD automation, and monitoring solutions.
                </p>
                <p>
                  Driven to master cloud infrastructure and deployment strategies, I specialize in building 
                  reliable DevOps ecosystems that boost deployment speed, system reliability, and developer productivity.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-700 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-green-400">Core Expertise</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Cloud & Infrastructure: AWS, Terraform</li>
                  <li>• Containers & Orchestration: Docker, Kubernetes</li>
                  <li>• CI/CD & Automation: Jenkins, GitHub Actions</li>
                  <li>• Monitoring & Logging: Prometheus, Grafana</li>
                </ul>
              </div>
              
              <div className="bg-slate-700 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-purple-400">Current Focus</h4>
                <p className="text-gray-300">
                  Building end-to-end CI/CD pipelines with real-time monitoring and 
                  automated deployment strategies for containerized applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
