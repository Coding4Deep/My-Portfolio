
<div align="center">

#  **Deepak Sagar - DevOps Engineer Portfolio**

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=netlify)](https://lovable.dev/projects/c4d5c241-d9ba-4888-9d00-e096abb3fa54)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/deepaksagar)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Coding4Deep)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

*A modern, responsive portfolio showcasing DevOps expertise and professional journey*

</div>

---
![DevOps Portfolio ](Screenshot1.png)
## 🎯 Overview

This portfolio website showcases my expertise as a **DevOps Engineer** with comprehensive experience in cloud infrastructure, automation, and modern deployment practices. Built with cutting-edge web technologies to demonstrate both technical skills and attention to detail.

### ✨ Key Highlights

- 🏗️ **Infrastructure as Code** expertise with Terraform & Ansible
- ☁️ **AWS Cloud** architecture and deployment
- 🐳 **Container Orchestration** with Docker & Kubernetes
- 🔄 **CI/CD Pipeline** automation with Jenkins
- 📊 **Monitoring & Observability** with Prometheus & Grafana
- 🛡️ **Security Tools** including Trivy, SonarQube, OWASP ZAP & Checkov
- 🌙 **Dark/Light Theme** toggle support

---
![DevOps Portfolio ](Screenshot2.png)
## 🛠️ Tech Stack

### Frontend Technologies
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### DevOps Technologies Showcased
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)
![Jenkins](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white)
![Terraform](https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white)
![Ansible](https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![NGINX](https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white)
![Nexus](https://img.shields.io/badge/Nexus_Repo-000000?style=for-the-badge&logo=sonatype&logoColor=white)
![Tomcat](https://img.shields.io/badge/Tomcat-F8DC75?style=for-the-badge&logo=apache-tomcat&logoColor=black)

### Security Tools
![Trivy](https://img.shields.io/badge/Trivy-1904DA?style=for-the-badge&logo=trivy&logoColor=white)
![SonarQube](https://img.shields.io/badge/SonarQube-black?style=for-the-badge&logo=sonarqube&logoColor=4E9BCD)
![OWASP](https://img.shields.io/badge/OWASP%20ZAP-00549E?style=for-the-badge&logo=owasp&logoColor=white)
![Checkov](https://img.shields.io/badge/Checkov-892CA0?style=for-the-badge&logo=checkov&logoColor=white)

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:

- ![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) *(v18 or higher)*
- ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) 
- ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) 

### 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:8080
   ```

### 🏗️ Build for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

---

## 📁 Project Structure

```
📦 portfolio/
├── 📂 public/
│   ├── 🖼️ lovable-uploads/     # Images and assets
│   └── 📄 favicon.ico
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 🏠 Hero.tsx         # Landing section with theme toggle
│   │   ├── 👤 About.tsx        # About me section
│   │   ├── 🛠️ Skills.tsx       # Technical skills with security tools
│   │   ├── 💼 Projects.tsx     # Featured projects
│   │   ├── 💻 Experience.tsx   # Work experience
│   │   ├── 🎓 Education.tsx    # Educational background
│   │   ├── 📞 Contact.tsx      # Contact information
│   │   └── 📂 ui/              # Reusable UI components
│   ├── 📂 lib/
│   │   └── ⚙️ utils.ts         # Utility functions
│   ├── 📂 pages/
│   │   ├── 🏡 Index.tsx        # Main page
│   │   └── ❌ NotFound.tsx     # 404 page
│   ├── 🎨 index.css           # Global styles
│   └── 🚀 main.tsx            # App entry point
├── 📄 package.json
├── 📄 tailwind.config.ts
├── 📄 vite.config.ts
└── 📖 README.md
```

---

## 🌟 Features

### 🎨 Modern Design
- **Responsive Layout**: Optimized for all device sizes
- **Dark/Light Theme**: Toggle between themes with a button
- **Gradient Effects**: Eye-catching visual elements
- **Smooth Animations**: Enhanced user experience

### 📱 Sections Included

| Section | Description | Technologies |
|---------|-------------|--------------|
| 👤 **About** | Professional background | TypeScript |
| 🛠️ **Skills** | Technical expertise with security tools | Shield.io badges |
| 💼 **Projects** | Featured DevOps projects | Interactive cards |
| 💻 **Experience** | Current role at DigiEra | Timeline layout |
| 🎓 **Education** | Academic background | Card components |
| 📞 **Contact** | Professional links | Social integration |



---

## 🛡️ Security & Best Practices

- ✅ **Type Safety** with TypeScript
- ✅ **Security Scanning** with Trivy, SonarQube, OWASP ZAP, Checkov
- ✅ **Code Quality** with ESLint
- ✅ **Responsive Design** principles
- ✅ **Accessibility** standards
- ✅ **SEO Optimization**
- ✅ **Performance** optimization

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork the Project**
2. **Create Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit Changes** (`git commit -m 'Add AmazingFeature'`)
4. **Push to Branch** (`git push origin feature/AmazingFeature`)
5. **Open Pull Request**

---

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/deepaksagar07/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Coding4Deep)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:deepaksagar@example.com)

**Deepak Sagar** - DevOps Engineer

📍 Moradabad, Uttar Pradesh, India

</div>

---

<div align="center">
   
> This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
> #### Star this repository if you found it helpful!
> **Made with ❤️ by Deepak Sagar**

</div>
