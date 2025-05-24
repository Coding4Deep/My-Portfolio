
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
    // Create a proper download link for the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure to add your resume.pdf to the public folder
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 light:from-slate-100 light:via-blue-100 light:to-slate-200 text-white dark:text-white light:text-slate-900 relative overflow-hidden transition-all duration-300">
      {/* Theme Toggle Button */}
      <div className="absolute top-6 right-6 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="border-white/20 dark:border-white/20 light:border-slate-900/20 text-white dark:text-white light:text-slate-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-900/10 transition-all duration-300"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20 dark:opacity-20 light:opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 dark:bg-blue-500 light:bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 dark:bg-purple-500 light:bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-green-500 dark:bg-green-500 light:bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full border-4 border-blue-400 dark:border-blue-400 light:border-blue-600 p-1 shadow-2xl">
            <img 
              src="/lovable-uploads/44dd66f9-860d-4af0-95ab-d8c8c1897121.png" 
              alt="Deepak Sagar" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 dark:from-blue-400 dark:via-purple-400 dark:to-green-400 light:from-blue-600 light:via-purple-600 light:to-green-600 bg-clip-text text-transparent">
          Deepak Sagar
        </h1>
        
        <div className="flex items-center justify-center mb-6">
          <span className="bg-blue-600 dark:bg-blue-600 light:bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium mr-2">
            Verified
          </span>
          <span className="text-gray-300 dark:text-gray-300 light:text-gray-600">He/Him</span>
        </div>

        <h2 className="text-2xl md:text-3xl text-gray-300 dark:text-gray-300 light:text-gray-700 mb-8 max-w-4xl mx-auto">
          DevOps Engineer | AWS | Automation | Kubernetes | Docker | Cloud Infrastructure & CI/CD Pipelines
        </h2>

        <p className="text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 mb-12 max-w-3xl mx-auto">
          Passionate about building reliable DevOps ecosystems that boost deployment speed, system reliability, and developer productivity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 light:bg-blue-700 light:hover:bg-blue-800 text-white px-8 py-4 text-lg transition-all duration-300"
            onClick={handleViewWork}
          >
            <Eye className="mr-2" size={20} />
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-slate-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-900 light:border-slate-900 light:text-slate-900 light:hover:bg-slate-900 light:hover:text-white px-8 py-4 text-lg transition-all duration-300"
            onClick={handleDownloadResume}
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Coding4Deep" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white light:text-gray-600 light:hover:text-slate-900 transition-colors duration-300">
            <Github size={32} />
          </a>
          <a href="https://www.linkedin.com/in/deepaksagar07/" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white light:text-gray-600 light:hover:text-slate-900 transition-colors duration-300">
            <Linkedin size={32} />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 dark:text-blue-400 light:text-blue-600">54</div>
            <div className="text-gray-400 dark:text-gray-400 light:text-gray-600">Connections</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 dark:text-green-400 light:text-green-600">25</div>
            <div className="text-gray-400 dark:text-gray-400 light:text-gray-600">Repositories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 dark:text-purple-400 light:text-purple-600">574</div>
            <div className="text-gray-400 dark:text-gray-400 light:text-gray-600">Contributions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 dark:text-yellow-400 light:text-yellow-600">552</div>
            <div className="text-gray-400 dark:text-gray-400 light:text-gray-600">Profile Views</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
