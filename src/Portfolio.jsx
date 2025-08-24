import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload, FaCode, FaDatabase, FaCloud, FaAward, FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt, FaPaperPlane, FaUser, FaBriefcase, FaGraduationCap, FaFolder, FaStar } from 'react-icons/fa';
import resumePDF from './assets/Java_resume.pdf';
import profilePic from './assets/profile.jpg'; // Ensure you have a profile picture in the assets folder
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: FaUser },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'skills', label: 'Skills', icon: FaCode },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'projects', label: 'Projects', icon: FaFolder },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  const skills = {
    'Languages': ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
    'Backend': ['Spring Boot', 'Hibernate', 'JPA', 'Node.js', 'Express', 'RESTful APIs'],
    'Frontend': ['React', 'Next.js', 'Bootstrap', 'Tailwind CSS', 'HTML5', 'CSS3'],
    'Cloud & DevOps': ['AWS (EC2, RDS, S3, Lambda)', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Terraform'],
    'Databases': ['MySQL', 'PostgreSQL', 'Oracle SQL', 'MongoDB', 'Redis'],
    'Testing & QA': ['JUnit', 'Mockito', 'Postman', 'Selenium', 'Jest', 'TDD'],
  };

  const experience = [
    {
      company: 'ValueLabs',
      location: 'Hyderabad, India',
      title: 'Software Engineer',
      date: 'Jul 2022 – Aug 2023',
      description: 'Led full-stack development of scalable microservices architecture',
      achievements: [
        '🚀 Designed scalable microservices using Spring Boot & ReactJS, reducing page load times by 30%',
        '⚡ Optimized RESTful APIs to support 10,000+ concurrent users, improving performance by 15%',
        '🔄 Automated CI/CD pipelines with GitHub Actions & Docker, reducing release time by 20%',
        '👥 Mentored junior developers through code reviews and pair programming',
        '📈 Led Agile ceremonies, boosting team velocity and delivery predictability'
      ]
    },
    {
      company: 'Optival Health Solutions',
      location: 'Hyderabad, India',
      title: 'Software Engineer Intern',
      date: 'Apr 2021 – Sep 2021',
      description: 'Developed secure healthcare applications using MERN stack',
      achievements: [
        '🔐 Built secure full-stack features with MERN stack & AWS S3 integration',
        '📊 Enhanced prescription accuracy by 20% through API optimization',
        '🤝 Collaborated with cross-functional Agile teams for rapid product delivery',
        '☁️ Implemented cloud-based document storage with encryption compliance'
      ]
    }
  ];

  const education = [
    {
      school: 'New York University',
      degree: 'Master of Engineering in Computer Engineering',
      location: 'New York, NY',
      date: 'Sep 2023 – May 2025',
      gpa: '3.5/4.0',
      highlight: true,
      achievements: [
        'Advanced coursework in Distributed Systems & Cloud Computing',
        'Machine Learning and AI Applications',
        'Software Engineering Leadership'
      ]
    },
    {
      school: 'GITAM University',
      degree: 'Bachelor of Engineering in Computer Science',
      location: 'Hyderabad, India',
      date: 'Jun 2017 – Apr 2021',
      gpa: '8.3/10.0',
      achievements: [
        'Graduated with Distinction',
        'Active in coding competitions and tech societies'
      ]
    }
  ];

  const projects = [
        {
      name: 'Car Rental System',
      description: 'Multi-role platform for vehicle inventory and booking management',
      skills: ['Spring Boot', 'MySQL', 'React', 'Payment Gateway', 'AWS'],
      highlights: [
        '🚗 Complete vehicle inventory management system',
        '💳 Integrated payment gateway for seamless transactions',
        '📊 Admin dashboards with business intelligence insights',
        '⚡ High-performance SQL optimization for large datasets',
        '☁️ Cloud-deployed with automated scaling'
      ],
      url: 'https://rentalwhybuy.netlify.app/',
      featured: true
    },
{
  name: 'Jewelry Showcase',
  description: 'A modern jewelry catalog featuring curated collections, detailed product information, and high-quality media hosted on AWS.',
  skills: ['React', 'AWS S3', 'AWS EC2', 'AWS RDS (MySQL)', 'Redis', 'Tailwind CSS'],
  highlights: [
    '💎 Elegant product browsing experience with a fully responsive UI',
    '☁️ Deployed on AWS: static frontend on S3, backend API on EC2, and data persisted in RDS',
    '🖼️ Jewelry images stored in S3 with references linked in RDS for seamless access',
    '⚡ Redis caching integrated to deliver faster product load times',
    '🔐 Secure environment-based configuration for managing keys and credentials'
  ],
  url: 'http://dhara-frontend-bucket.s3-website.us-east-2.amazonaws.com/',
  featured: true
}
,
    {
      name: 'Appointment Scheduler',
      description: 'Enterprise-grade microservices system for healthcare booking management',
      skills: ['Spring Boot', 'MySQL', 'JWT', 'Redis', 'Docker', 'Grafana'],
      highlights: [
        '🏥 Handles 1,000+ monthly bookings with 99.9% uptime',
        '🔒 JWT authentication with Redis caching for optimal performance',
        '🤖 Automated appointment handling via intelligent chatbot',
        '📊 Real-time monitoring with Grafana dashboards',
        '⚡ Optimized SQL queries for sub-second response times'
      ]
    },
    {
      name: 'Cruise Management System',
      description: 'Full-stack admin portal for cruise booking operations',
      skills: ['React', 'Spring Boot', 'Oracle DB', 'Bootstrap', 'GitHub Actions'],
      highlights: [
        '🚢 Manages 500+ cruise bookings with real-time updates',
        '👤 Role-based access control (RBAC) for secure operations',
        '🎨 Modern responsive UI with Bootstrap & Tailwind CSS',
        '🔄 Automated CI/CD pipeline with GitHub Actions',
        '📱 Mobile-responsive design for on-the-go management'
      ]
    },
    {
      name: 'Split App',
      description: 'Real-time group expense tracker mobile application',
      skills: ['React Native', 'Spring Boot', 'MySQL', 'JWT', 'Docker'],
      highlights: [
        '📱 Cross-platform mobile app with React Native',
        '💰 Real-time expense calculations and balance updates',
        '🔐 Secure JWT-based session management',
        '🐳 Containerized deployment with Docker',
        '⚡ Live synchronization across multiple devices'
      ]
    },
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Google Form integration
    const googleFormData = new FormData();
    googleFormData.append('entry.983984954', formData.get('name'));
    googleFormData.append('entry.654700782', formData.get('email'));
    googleFormData.append('entry.560424013', formData.get('message'));

    fetch('https://docs.google.com/forms/d/e/1FAIpQLScjiMKiCLgrktBD3smK_kgbUqwTbelM88WBpWZT5mSaXdmBYg/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body: googleFormData,
    }).then(() => {
      alert('✨ Thank you for your message! I\'ll get back to you soon.');
      e.target.reset();
    }).catch(() => {
      alert('Message sent successfully! Thank you for reaching out.');
      e.target.reset();
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x * 0.02 - 200,
            top: mousePosition.y * 0.02 - 200,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          style={{
            right: mousePosition.x * -0.02 - 200,
            bottom: mousePosition.y * -0.02 - 200,
            transition: 'all 0.5s ease-out'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Dinesh Sathunuri
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 ${
                      activeSection === item.id ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <img 
              src={profilePic} 
              alt="Dinesh Sathunuri"
              className="w-40 h-40 mx-auto rounded-full border-4 border-gradient-to-r from-blue-400 to-purple-400 shadow-2xl object-cover"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Dinesh Sathunuri
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            Java Full-Stack Developer
          </p>
          
          <div className="flex items-center justify-center space-x-3 text-lg text-blue-400 mb-8">
            <FaGraduationCap className="w-6 h-6" />
            <span className="font-semibold">NYU Graduate</span>
            <FaStar className="w-5 h-5 text-yellow-400" />
            <span>Master's in Computer Engineering</span>
          </div>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about building scalable, high-performance applications using cutting-edge technologies. 
            Experienced in microservices architecture, cloud computing, and modern development practices.
          </p>
          
<div className="flex flex-wrap justify-center gap-6 mb-12">
  {[
    { icon: FaEnvelope, label: 'Email', href: 'mailto:dsathunuri@gmail.com' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/dinesh-sathunuri' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/dinesh-sathunuri' },
    { icon: FaDownload, label: 'Resume', href: resumePDF }
  ].map((link) => {
    const Icon = link.icon;
    const isDownload = link.label === 'Resume';
    return (
      <a
        key={link.label}
        href={link.href}
        {...(isDownload
          ? { download: 'Dinesh_Sathunuri_Resume.pdf' } 
          : { target: "_blank", rel: "noopener noreferrer" }
        )}
        className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
      >
        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        <span className="font-medium">{link.label}</span>
        {!isDownload && <FaExternalLinkAlt className="w-4 h-4 opacity-70" />}
      </a>
    );
  })}
</div>
          
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 text-green-400 font-semibold">
            🚀 Open to New Opportunities
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl p-8 border border-slate-600/30 backdrop-blur-sm">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate Java Full-Stack Developer with 1+ years of professional experience building 
                high-performance, scalable applications. Recently graduated from <span className="text-blue-400 font-semibold">New York University</span> 
                with a Master's in Computer Engineering, I specialize in modern web technologies and cloud-native solutions.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My expertise spans across <span className="text-purple-400 font-semibold">Spring Boot</span>, 
                <span className="text-blue-400 font-semibold"> ReactJS</span>, 
                <span className="text-green-400 font-semibold"> AWS</span>, and 
                <span className="text-yellow-400 font-semibold"> microservices architecture</span>. 
                I'm passionate about writing clean, maintainable code and implementing best practices in software development.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/20">
                  <FaCode className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="font-bold text-lg mb-2">Full-Stack Development</h3>
                  <p className="text-gray-400">End-to-end application development with modern frameworks</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-500/20">
                  <FaCloud className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="font-bold text-lg mb-2">Cloud Architecture</h3>
                  <p className="text-gray-400">Scalable cloud solutions with AWS and containerization</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-r from-pink-600/20 to-red-600/20 rounded-2xl border border-pink-500/20">
                  <FaDatabase className="w-12 h-12 mx-auto mb-4 text-pink-400" />
                  <h3 className="font-bold text-lg mb-2">Database Design</h3>
                  <p className="text-gray-400">Efficient data modeling and optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-6 border border-slate-600/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-blue-400">{category}</h3>
                <div className="space-y-3">
                  {skillList.map((skill) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div key={index} className={`bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border backdrop-blur-sm hover:scale-105 transition-all duration-300 ${
                edu.highlight ? 'border-yellow-400/30 shadow-lg shadow-yellow-400/10' : 'border-slate-600/30'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.school}</h3>
                    <p className="text-lg text-blue-400">{edu.degree}</p>
                  </div>
                  {edu.highlight && (
                    <div className="mt-4 md:mt-0">
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-400/30">
                        <FaAward className="w-5 h-5 text-yellow-400 mr-2" />
                        <span className="text-yellow-400 font-semibold">NYU Graduate</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center text-gray-400 mb-4 space-x-4">
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>{edu.date}</span>
                  </div>
                  <div className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">
                    GPA: {edu.gpa}
                  </div>
                </div>
                
                <div className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-lg text-blue-400 mb-2">{exp.company}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <div className="flex items-center text-gray-400 mb-2">
                      <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <FaCalendarAlt className="w-4 h-4 mr-2" />
                      <span>{exp.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border backdrop-blur-sm hover:scale-105 transition-all duration-300 ${
                project.featured ? 'border-yellow-400/30 shadow-lg shadow-yellow-400/10' : 'border-slate-600/30'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  {project.featured && (
                    <div className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-400/30">
                      <FaStar className="w-4 h-4 text-yellow-400" />
                    </div>
                  )}
                </div>
                
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-sm text-blue-400 border border-blue-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
                {project.url && (
  <div className="mt-6">
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-blue-500/30
                 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-500/30
                 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
    >
      <span className="font-medium">Live Demo</span>
      <FaExternalLinkAlt className="w-4 h-4 opacity-80" />
    </a>
  </div>
)}    
              </div>
            ))}
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, innovative projects, or just connect with fellow developers.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/30 backdrop-blur-sm">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                      <label className="block text-gray-300 mb-2 font-medium">Name</label>
                      <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-200 text-white"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-200 text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-200 text-white resize-vertical"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <FaPaperPlane className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-slate-600/30">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <FaEnvelope className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                    <h4 className="font-semibold text-white mb-2">Email</h4>
                    <a href="mailto:dsathunuri@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                      dsathunuri@gmail.com
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <FaLinkedin className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                    <h4 className="font-semibold text-white mb-2">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/dinesh-sathunuri" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-700/50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-6">
              {[
                { icon: FaGithub, href: 'https://github.com/dinesh-sathunuri', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/dinesh-sathunuri', label: 'LinkedIn' },
                { icon: FaEnvelope, href: 'mailto:dsathunuri@gmail.com', label: 'Email' }
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-full border border-slate-600/30 text-gray-400 hover:text-white hover:from-blue-600/20 hover:to-purple-600/20 hover:border-blue-500/30 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            <p className="text-gray-400 mb-4">
              © 2025 Dinesh Sathunuri. Built with React & Tailwind CSS.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <FaGraduationCap className="w-4 h-4" />
              <span>Proudly graduated from New York University</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;