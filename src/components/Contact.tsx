
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            I'm always open to discussing new opportunities, collaboration on exciting DevOps projects, 
            or sharing knowledge about cloud infrastructure and automation.
          </p>
          
          <div className="bg-slate-800 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Get In Touch</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-green-400">Professional Interests</h4>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li>• DevOps Engineering & Cloud Architecture</li>
                  <li>• CI/CD Pipeline Optimization</li>
                  <li>• Container Orchestration & Automation</li>
                  <li>• Infrastructure as Code (IaC)</li>
                  <li>• Monitoring & Observability Solutions</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-400">Open For</h4>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li>• Full-time DevOps Engineer roles</li>
                  <li>• Cloud Engineer positions</li>
                  <li>• Technical consulting projects</li>
                  <li>• Mentorship opportunities</li>
                  <li>• Open source collaborations</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="https://www.linkedin.com/in/deepaksagar07/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <Linkedin className="mr-2" size={20} />
                Connect on LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
              <a href="https://github.com/Coding4Deep" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <Github className="mr-2" size={20} />
                View GitHub Profile
              </a>
            </Button>
          </div>
          
          <div className="text-gray-400">
            <p>Based in Moradabad, Uttar Pradesh, India</p>
            <p className="mt-2">Always open to feedback & collaboration! 🤝</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
