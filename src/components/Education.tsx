
const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology - BTech, Information Technology",
      institution: "National Institute of Technology Raipur",
      period: "Jan 2018 - Apr 2024",
      grade: "Grade: B",
      description: "A highly motivated IT graduate with a strong foundation in software development, machine learning, and data analysis. Demonstrated expertise through projects like a custom web browser and a machine learning model for predicting severe acute malnutrition in children.",
      achievements: [
        "Recognized for academic excellence with the Dakshana Scholarship",
        "Proficient in C++, SQL, and several other technologies",
        "Passionate about leveraging technical skills to create innovative solutions"
      ]
    },
    {
      degree: "12th Grade",
      institution: "Jawahar Navodaya Vidyalaya (JNV)",
      period: "Apr 2017 - Apr 2018", 
      grade: "Grade: 86%"
    },
    {
      degree: "10th Grade", 
      institution: "Jawahar Navodaya Vidyalaya (JNV)",
      period: "Apr 2015 - Apr 2016",
      grade: "Grade: 9.6"
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-slate-900 rounded-xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-400 mb-2">{edu.degree}</h3>
                  <h4 className="text-lg text-green-400 mb-2">{edu.institution}</h4>
                  {edu.grade && <div className="text-purple-400 font-medium">{edu.grade}</div>}
                </div>
                <div className="text-gray-400 font-medium">{edu.period}</div>
              </div>
              
              {edu.description && (
                <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
              )}
              
              {edu.achievements && (
                <div>
                  <h5 className="text-lg font-semibold mb-3 text-yellow-400">Key Achievements:</h5>
                  <ul className="space-y-2 text-gray-300">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
