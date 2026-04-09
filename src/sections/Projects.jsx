import { motion } from "framer-motion";
import devis from '../assets/images/devis1.png'
import admin from '../assets/images/admin.png'
import ista from '../assets/images/ista.png'
import autofix from '../assets/images/autofix.png'
import devis2 from '../assets/images/devis2.png'
import django from '../assets/images/django.png'
import GitHubStarsButtonDemo from "../components/ui/ButtonGithub";
export default function Projects() {
  const projects = [
    {
      title: "Devis App",
      repo_name : "devis-app",
      description:
        "Application de génération de devis avec gestion des clients, produits et export PDF.",
      tech: ["React Native", "Laravel", "MySQL"],
      image: devis,
      github: "https://github.com/bahasalah255/devis-app",
      demo: "#",
    },
    {
      title: "Garage Management",
      repo_name : "System-Gestion-Stagaires",
      description:
        "Tableau de bord pour gérer les rendez-vous, clients, véhicules, réparations et factures.",
      tech: ["PHP", "MySQL", "Bootstrap", "React"],
      image: admin,
      github: "#",
      demo: "#",
    },
    {
      title: "ISTA Platform",
      repo_name : "my-ista",
      description:
        "Plateforme web moderne pour présenter les informations académiques et faciliter l’accès aux ressources.",
      tech: ["Html", "CSS" , "Javascript"],
      image: ista,
      github: "#",
      demo: "#",
    },
    {
      title: "AutoFix Website",
      repo_name : "AutoFix-Garage",
      description:
        "Site vitrine automobile avec sections services, prise de contact et mise en page orientée conversion.",
      tech: ["PHP", "HTML" , "Css" , "JavaScript" , "Boostrap" ],
      image: autofix,
      github: "#",
      demo: "#",
    },
    {
      title: "Devis Admin",
      repo_name : "devis-app-web",
      description:
        "Interface d’administration pour suivre les devis, modifier les lignes produit et gérer les états de validation.",
      tech: ["React", "Laravel API", "MySQL" ,"Tailwend CSS"],
      image: devis2,
      github: "#",
      demo: "#",
    },
    {
      title: "Django Dashboard",
      repo_name : "Simple-Crud-Django",
      description:
        "Dashboard back-office avec authentification, gestion des données et visualisation d’indicateurs clés.",
      tech: ["Django", "Python", "SQLite"],
      image: django,
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 text-white">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-3">
          <span className="w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm font-medium text-white/80">
            Selected Work
          </span>
          <p className="text-4xl sm:text-7xl font-bold tracking-tight text-white text-balance leading-none">
            <span className="text-white">Things I </span>
            <span className="text-gray-500">Built</span>
          </p>
          <p className="text-gray-300 max-w-2xl text-base sm:text-lg leading-relaxed">
            A selection of projects that highlight my approach to clean UI, solid backend logic, and practical product thinking.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title + index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="group/image relative overflow-hidden bg-slate-950/50">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="w-full aspect-[16/10] object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent transition-opacity duration-300 group-hover/image:opacity-100" />
                <div className="pointer-events-none absolute inset-0 bg-black/45 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100" />
                <span className="absolute top-4 left-4 z-10 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="pointer-events-none absolute inset-x-0 bottom-4 z-10 flex justify-center gap-5 opacity-0 translate-y-2 transition-all duration-300 group-hover/image:opacity-100 group-hover/image:translate-y-0">
                  <GitHubStarsButtonDemo
                    variant={project.github}
                    size="sm"
                    repo={project.repo_name}
                    className="pointer-events-auto"
                  />
                  <a
                      href={project.github}
                      target={project.github !== "#" ? "_blank" : undefined}
                      rel={project.github !== "#" ? "noreferrer" : undefined}
                      className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-white/75 hover:text-white hover:border-white/30 transition"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target={project.demo !== "#" ? "_blank" : undefined}
                      rel={project.demo !== "#" ? "noreferrer" : undefined}
                      className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-white/75 hover:text-white hover:border-white/30 transition"
                    >
                      Live
                    </a>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white/95">{project.title}</h3>

                  <div className="flex items-center gap-3">
                    
                    
                  </div>
                </div>

                <p className="text-white/65 leading-relaxed mb-5 text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


