import devis from '../assets/images/devis1.png'
import admin from '../assets/images/admin.png'
import ista from '../assets/images/ista.png'
import autofix from '../assets/images/autofix.png'
import devis2 from '../assets/images/devis2.png'
import django from '../assets/images/django.png'
import MonitorIcon from './Web.jsx'
import Mobile from './Mobile.jsx'
import n8n from '../assets/images/n8n.png'
import airbnb from '../assets/images/airbnb.png';
import image from '../assets/images/image.png'
const projects = [
    {
      title: "Devis App",
      repo_name : "devis-app",
      category: "Full-Stack / Mobile",
      description:
        "Devis-App is a mobile application for managing and generating quotes, with a Laravel backend and an Expo frontend. It integrates AI SMARTPASTE to automatically fill in quote lines from text, while offering a local fallback if AI credits are exhausted.",
      tech: ["React Native", "Laravel", "MySQL"],
      image: image,
      imageScale: 0.99,
      imagePosition: "50% 29%",
      github: "https://github.com/bahasalah255/devis-app",
      demo: "#",
     
    },
    {
      title: "System Gestion Stagaires",
      repo_name : "System-Gestion-Stagaires",
      category: "Full-Stack / Web",
      description:
        "Full-stack web application for managing interns — React.js + PHP + MySQL. Complete CRUD with group management.",
      tech: ["PHP", "MySQL", "Bootstrap", "React"],
      image: admin,
      github: "https://github.com/bahasalah255/System-Gestion-Stagaires",
      demo: "#",
     
    },
     {
      title: "Airbnb System",
      repo_name : "airbnb-system",
      category: "Full-Stack / Web",
      description:
        "Full-stack apartment rental management system with role-based authentication, reservation workflow, availability calendar, and admin dashboard.",
      tech: [ "Laravel","React", "MySQL" , "Tailwend CSS"],
      image: airbnb,
      imageScale: 0.99,
      imagePosition: "50% 29%",
      github: "https://github.com/bahasalah255/airbnb-system",
      demo: "https://repo-apartement.vercel.app",
     
    },
    {
      title: "ISTA Platform",
      repo_name : "my-ista",
      category: "Front-End / Web",
      description:
        "A structured educational platform designed for ISTA students, including modules, quizzes, exams, and academic resources.",
      tech: ["Html", "CSS" , "Javascript"],
      image: ista,
      github: "https://github.com/bahasalah255/my-ista",
      demo: "https://my-ista.vercel.app/",
      
    },
    {
      title: "AutoFix Website",
      repo_name : "AutoFix-Garage",
      category: "Full-Stack / Web",
      description:
        "A web-based Garage Management System built with PHP & MySQL — manage clients, vehicles, repairs, invoices & appointments with role-based dashboards for Admin, User, and Client.",
      tech: ["PHP", "HTML" , "Css" , "JavaScript" , "Boostrap" ],
      image: autofix,
      github: "https://github.com/bahasalah255/AutoFix-Garage",
      demo: "#",
      
    },
    {
      title: "Devis Admin",
      repo_name : "devis-app-web",
      category: "Front-End / Dashboard",
      description:
        "Administration interface designed to manage and monitor quotes generated from the Devis App mobile application. It allows tracking quotes, updating product lines, and handling validation statuses efficiently.",
      tech: ["React", "Laravel API", "MySQL" ,"Tailwend CSS"],
      image: devis2,
      github: "https://github.com/bahasalah255/devis-app-web",
      demo: "#",
          },
    {
      title: "Automated B2B Email Outreach",
      repo_name : "n8n-email-automation",
      category: "Workflow / Automation",
      description:
        "Système d’automatisation d’envoi d’emails B2B avec n8n. Le workflow récupère des entreprises depuis Google Sheets, filtre les emails valides, envoie des messages par batch (5 emails / heure) et met à jour automatiquement le statut.",
      tech: ["n8n", "Google Sheets API", "Gmail API"],
      image: n8n,
      github: "https://github.com/bahasalah255/n8n-email-automation",
      demo: "#",
          },
    {
      title: "Django Dashboard",
      repo_name : "Simple-Crud-Django",
      category: "Back-End / Dashboard",
      description:
        "Back-office dashboard with authentication, data management and visualization of key indicators.",
      tech: ["Django", "Python", "SQLite"],
      image: django,
      github: "https://github.com/bahasalah255/Simple-Crud-Django",
      demo: "#",
      
    },
  ];
  export default projects ;