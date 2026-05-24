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
import image from '../assets/images/image.png';
import logistic from '../assets/images/logistic.png'
import zabix from '../assets/images/zabixx.png'
import germanApp from '../assets/images/german.png'
import shield from '../assets/images/shiled.png'
import fre from '../assets/images/fre.png'
import tahadi from '../assets/images/tahadi.png'
import booklib from '../assets/images/booklib.png'
import edu from '../assets/images/edu.png'
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
      demo: "https://expo.dev/artifacts/eas/f7a3EeffRsRrpZjAexRUhs.apk",
     
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
  title: "EduGenAI",
  repo_name: "EduGenAI",
  category: "Full-Stack / Web",
  description:
    "AI-powered German lesson generator built with Laravel and NVIDIA NIM — complete CRUD with multilingual support for Moroccan learners.",
  tech: ["PHP", "Laravel", "MySQL", "React", "CSS"],
  image: edu,
  github: "https://github.com/bahasalah255/EduGenAI",
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
      title: "Logistics Management System",
      repo_name : "ak-rapid-trans",
      category: "Full-Stack / Web",
      description:
        "A full-stack logistics dashboard built to optimize transport operations. It includes intelligent truck assignment, order lifecycle management, real-time notifications, and data visualization for better decision-making",
      tech: [ "Laravel","React", "MySQL" , "Tailwend CSS"],
      image: logistic,
      imageScale: 0.99,
      imagePosition: "50% 29%",
      github: "https://github.com/alielfarissi51-code/ak-rapid-trans",
      demo: "#",
     
    },
    {
  title: "German Learning App",
  repo_name: "german-learning-app",
  category: "Mobile / React Native",
  description:
    "A mobile language learning app for German, featuring daily word of the day, streak tracking, XP and leveling system, vocabulary management, and sentence practice. Designed to make language learning engaging through gamification.",
  tech: ["React Native", "Expo", "JavaScript"],
  image: germanApp,
  imageScale: 0.99,
  imagePosition: "50% 10%",
  github: "https://github.com/bahasalah255/german-learning-app",
  demo: "https://expo.dev/accounts/salah12311/projects/almand-app/builds/a600cdc3-3f55-4e7d-bfee-f338ba7ae951",
},
{
  title: "AntiBot Shield Dashboard",
  repo_name: "Shield--Dashboard",
  category: "Full-Stack / Web",
  description:
    "AntiBot Shield Dashboard Tableau de bord centralisé de surveillance pour la protection anti-bot multi-sites.",
  tech: ["React", "PHP", "JavaScript"],
  image: shield,
  imageScale: 0.99,
  imagePosition: "50% 10%",
  github: "https://github.com/bahasalah255/Shield--Dashboard",
  demo: "#",
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
  title: "Network Supervision Lab",
  repo_name: "supervision-lab",
  category: "DevOps / Networking",
  description:
    "A network supervision platform built with Zabbix 6.4, configured to monitor host availability, CPU utilization, and system performance in real-time. Features include custom dashboards, alert management by severity, geomap visualization, and automated data collection with trigger-based notifications.",
  tech: ["Zabbix", "Linux", "SNMP", "MySQL"],
  image: zabix,
  imageScale: 0.99,
  imagePosition: "50% 20%",
  github: "#",
  demo: "#",
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
      title: "Academie Portal",
      repo_name : "academic-portal",
      category: "Full-Stack / Web",
      description:
        "A web-based academic events portal with role-based dashboards for students and managers. Built with PHP, MySQL, and vanilla HTML/CSS/JS, it supports event scheduling, user management, and authentication",
      tech: ["Html", "CSS" , "Javascript", 'PHP', 'mysql'],
      image: fre,
      github: "https://github.com/bahasalah255/academic-portal",
      demo: '#',
      
    },
    {
      title: "Education Platform – Learning Management System (LMS)",
      repo_name : "education-platforme",
      category: "Full-Stack / Web",
      description:
        "Développement d’une plateforme éducative web permettant la gestion des cours, utilisateurs et contenus pédagogiques avec une interface moderne et responsive",
      tech: ["Html", "CSS" , "Javascript", 'PHP', 'mysql'],
      image: tahadi,
      github: "https://github.com/bahasalah255/education-platforme",
      demo: 'http://84.8.221.159/',
      
    },
    {
  title: "BookLib – Gestion de Bibliothèque Universitaire",
  repo_name: "BookLib",
  category: "Backend / Microservices",
  description:
    "Système de gestion de bibliothèque universitaire basé sur une architecture microservices. Comprend la gestion du catalogue de livres, des emprunts/retours, et l'authentification JWT. Communication asynchrone via RabbitMQ et conteneurisation complète avec Docker.",
  tech: ["Node.js", "Express.js", "MongoDB", "RabbitMQ", "Docker", "JWT", "REST API"],
  image: booklib, 
  github: "https://github.com/bahasalah255/BookLib",
  demo: null, 
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