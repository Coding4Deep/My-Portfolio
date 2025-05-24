
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "End-to-End CI/CD Pipeline for Dockerized Spring Boot App",
      description: "Complete DevOps pipeline with containerized Spring Boot application and production-ready CI/CD system using Jenkins, Docker, and EFK stack – all integrated seamlessly with Slack notifications!",
      tech: ["Jenkins", "Docker", "Spring Boot", "GitHub", "Fluentd", "Elasticsearch", "Kibana", "Slack"],
      features: [
        "Triggered automatically on GitHub push",
        "SCM checkout and Dockerfile validation", 
        "Build Docker image and push to Registry",
        "Pull image from registry and scan vulnerabilities",
        "Launch Docker container with Spring Boot app",
        "Real-time logging with EFK Stack",
        "Pipeline notifications sent to Slack"
      ],
      link: "https://github.com/Coding4Deep/Java-NodeJs-SpringBoot-Dockerize-Project.git",
      image: "/lovable-uploads/d527fc67-7b96-48f4-b19f-2db221f7492f.png"
    },
    {
      title: "EFK Stack + NGINX Logging System", 
      description: "Centralized logging system using Docker Compose with Elasticsearch, Fluentd, Kibana, and NGINX. Real-time log streaming and visualization for web server monitoring.",
      tech: ["Elasticsearch", "Fluentd", "Kibana", "NGINX", "Docker Compose"],
      features: [
        "Containerized Setup: All services managed via Docker Compose",
        "Fluentd Log Driver: NGINX logs forwarded using Fluentd",
        "Kibana Dashboards: Visualize web server logs and traffic",
        "Elasticsearch Indexing: Log data indexed and queryable instantly"
      ],
      link: "https://github.com/Coding4Deep/EFK-STACK-PROJECT.git",
      image: "/lovable-uploads/ecf212e4-b4bc-4691-be3c-1c458c5f4f13.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-green-400">Key Features:</h4>
                    <ul className="space-y-2 text-gray-300">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-purple-400">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                      <Github className="mr-2" size={16} />
                      View Project
                    </a>
                  </Button>
                </div>
                
                <div className="p-8 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="rounded-lg shadow-lg max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
