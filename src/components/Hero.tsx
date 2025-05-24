
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Eye, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Hero = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Create a proper download link
    const link = document.createElement('a');
    link.href = 'https://docs.google.com/document/d/1your-resume-id/export?format=pdf'; // Replace with your actual Google Docs resume link
    link.download = 'Deepak_Sagar_DevOps_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 text-white relative overflow-hidden">
      {/* Theme Toggle Button */}
      <div className="absolute top-6 right-6 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="border-white/20 text-white hover:bg-white/10"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full border-4 border-blue-400 p-1 shadow-2xl">
            <img 
              src="/lovable-uploads/44dd66f9-860d-4af0-95ab-d8c8c1897121.png" 
              alt="Deepak Sagar" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
          Deepak Sagar
        </h1>
        
        <div className="flex items-center justify-center mb-6">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-2">
            Verified
          </span>
          <span className="text-gray-300">He/Him</span>
        </div>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto">
          DevOps Engineer | AWS | Automation | Kubernetes | Docker | Cloud Infrastructure & CI/CD Pipelines
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Passionate about building reliable DevOps ecosystems that boost deployment speed, system reliability, and developer productivity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            onClick={handleViewWork}
          >
            <Eye className="mr-2" size={20} />
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
            onClick={handleDownloadResume}
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Coding4Deep" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-white transition-colors">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/in/deepaksagar" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={32} />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">54</div>
            <div className="text-gray-400">Connections</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">25</div>
            <div className="text-gray-400">Repositories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">574</div>
            <div className="text-gray-400">Contributions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">552</div>
            <div className="text-gray-400">Profile Views</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
