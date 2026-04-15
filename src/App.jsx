import { useState } from "react";

export default function App() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const projects = [
    {
      title: "Système distribué de téléchargement de fichiers",
      category: "Backend / Systèmes distribués",
      description:
        "Développement d’un système client-serveur en architecture master/slave avec gestion de connexions concurrentes. Implémentation d’un téléchargement parallèle avec vérification d’intégrité (MD5) et reprise sur erreur.",
      tech: [
        "Java",
        "Sockets",
        "Multithreading",
        "Architecture client-serveur",
        "Javadoc",
        "Java Logging",
      ],
      code: "https://github.com/n-solofoniaina",
      preview: "#",
    },
    {
      title: "Application de gestion d’observations météorologiques",
      category: "Full stack / DevOps",
      description:
        "Développement d’un écosystème complet comprenant une API Express backend, une application web et un client desktop. Conception d’une API REST et gestion des échanges de données. Mise en place d’un package npm partagé et de pipelines CI/CD (lint, tests, couverture) dans un environnement multi-projets.",
      tech: [
        "Node.js",
        "Express",
        "Vue 3",
        "Vite",
        "Electron",
        "Webpack",
        "Jest",
        "GitLab CI/CD",
        "npm workspaces",
      ],
      code: "https://github.com/n-solofoniaina",
      preview: "#",
    },
    {
      title: "Application de gestion de base de données d’une ville",
      category: "Data / Backend",
      description:
        "Conception et modélisation d’une base de données relationnelle pour des trajets urbains. Développement d’un outil Python d’analyse d’itinéraires avec exploitation de requêtes SQL optimisées. Structuration et traitement des données pour faciliter leur analyse.",
      tech: ["Python", "PostgreSQL", "SQL"],
      code: "https://github.com/n-solofoniaina",
      preview: "#",
    },
    {
      title: "Application web avec API et base de données",
      category: "Développement web",
      description:
        "Conception d’une application web connectée à une API et à une base de données, avec une logique orientée backend et gestion des données.",
      tech: ["API REST", "SQL", "Web"],
      code: "https://github.com/n-solofoniaina",
      preview: "#",
    },
    {
      title: "Projet cybersécurité : architecture bastion et iptables",
      category: "Réseaux / Cybersécurité",
      description:
        "Mise en place et test de règles iptables dans une architecture sécurisée avec bastion, dans un environnement réseau simulé.",
      tech: ["Linux", "iptables", "Snort", "Sécurité"],
      code: "https://github.com/n-solofoniaina",
      preview: "#",
    },
    {
      title: "Modélisation avec structures de Kripke et logique CTL",
      category: "Modélisation / Méthodes formelles",
      description:
        "Modélisation de systèmes sous forme de structures de Kripke et vérification de propriétés temporelles à l’aide de formules CTL (Computation Tree Logic). Implémentation en Python pour analyser si un système satisfait certaines propriétés.",
      tech: ["Structures de Kripke", "CTL","Python"],
      code: "https://github.com/n-solofoniaina",
      preview: "#",
    },
  ];

  const skills = {
    langages: [
      "Java",
      "Python",
      "C",
      "JavaScript",
      "SQL",
      "Matlab",
      "Assembleur",
      "Scala",
    ],
    web: ["React", "HTML", "CSS", "API REST", "Node.js", "Vue.js"],
    systemes: ["Linux", "TCP/IP", "DNS", "DHCP", "Docker"],
    securite: ["Nmap", "Metasploit", "Snort", "Wireshark", "GNS3", "iptables"],
    support: [
      "Diagnostic",
      "Résolution de problèmes",
      "Support utilisateurs",
      "Accompagnement",
    ],
    outils: ["Git", "GitLab CI/CD", "PostgreSQL", "MySQL", "Virtualisation"],
  };

  return (
    <div className="min-h-screen bg-[#fffaf8] text-slate-800">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-8 top-20 text-4xl text-[#e7b8c8] opacity-60">
          ✿
        </div>
        <div className="absolute right-20 top-44 text-3xl text-[#d9c2ff] opacity-50">
          ❀
        </div>
        <div className="absolute bottom-28 left-20 text-4xl text-[#f0c98c] opacity-50">
          ✿
        </div>
        <div className="absolute bottom-20 right-16 text-4xl text-[#b8d8c8] opacity-50">
          ❀
        </div>

        <div className="absolute top-10 left-10 h-56 w-56 rounded-full bg-[#ffd9c8]/40 blur-3xl" />
        <div className="absolute top-40 right-10 h-64 w-64 rounded-full bg-[#e7dcff]/50 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-[#fff1a8]/30 blur-3xl" />
      </div>

      {showEasterEgg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-6">
          <div className="max-w-lg rounded-[2rem] border border-white/70 bg-white p-8 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Easter egg trouvé ✨
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Tu as trouvé le coin caché du site
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Bien joué. Merci pour ta curiosité !
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#fff0e8] p-4">
                <p className="text-sm text-slate-500">J’aime</p>
                <p className="mt-2 font-semibold">Comprendre en profondeur</p>
              </div>

              <div className="rounded-2xl bg-[#f0eaff] p-4">
                <p className="text-sm text-slate-500">Ma méthode</p>
                <p className="mt-2 font-semibold">Tester, corriger, améliorer</p>
              </div>

              <div className="rounded-2xl bg-[#fff8d8] p-4">
                <p className="text-sm text-slate-500">Ce qui me motive</p>
                <p className="mt-2 font-semibold">Apprendre et construire</p>
              </div>

              <div className="rounded-2xl bg-[#e8f6ef] p-4">
                <p className="text-sm text-slate-500">Ambiance idéale</p>
                <p className="mt-2 font-semibold">Curiosité + rigueur + Apprentissage</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              Petit bonus : si tu es arrivé(e) ici, c’est que tu regardes les
              détails — et moi aussi, j’aime ça.
            </div>

            <button
              onClick={() => setShowEasterEgg(false)}
              className="mt-6 rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-md transition hover:-translate-y-0.5"
            >
              Refermer
            </button>
          </div>
        </div>
      )}

      <nav className="sticky top-0 z-20 border-b border-white/50 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-semibold tracking-wide">
            Ninah SOLOFONIAINA
          </h1>

          <div className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="transition hover:opacity-70">
              À propos
            </a>
            <a href="#projects" className="transition hover:opacity-70">
              Projets
            </a>
            <a href="#skills" className="transition hover:opacity-70">
              Compétences
            </a>
            <a href="#interests" className="transition hover:opacity-70">
              Centres d’intérêt
            </a>
            <a href="#contact" className="transition hover:opacity-70">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <section className="grid min-h-[80vh] items-center gap-12 py-10 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-white/85 px-4 py-2 text-sm shadow-sm">
              Master 2 Informatique • Programmation, Sûreté, Sécurité
            </p>

            <h2 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl">
              Développement, cybersécurité, DevOps et support IT.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Hello, moi c’est Ninah. Je suis étudiante en Master 2 Programmation, Sûreté, Sécurité à
              l’Université Sorbonne Paris Nord et je recherche un stage de fin
              d’études. J’aime les projets concrets, les environnements où l’on
              apprend vraiment, et les sujets qui croisent développement,
              sécurité, systèmes et résolution de problèmes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-md transition hover:-translate-y-0.5"
              >
                Voir mes projets
              </a>

              <a
                href="/CV_Ninah.pdf"
                download="CV_Ninah.pdf"
                className="rounded-2xl border border-slate-200 bg-white px-6 py-3 shadow-sm transition hover:-translate-y-0.5"
              >
                Télécharger mon CV
              </a>

              <a
                href="https://www.linkedin.com/in/ninahsolofoniaina"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-200 bg-white px-6 py-3 shadow-sm transition hover:-translate-y-0.5"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="mx-auto flex h-64 w-64 items-center justify-center overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 shadow-xl backdrop-blur md:ml-auto md:mr-0">
              <img
                src="/pic/photo-profil.jpg"
                alt="Portrait de Ninah"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/75 p-8 shadow-xl backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#ffe3d6] p-5">
                  <p className="text-sm text-slate-600">Orientation</p>
                  <p className="mt-2 font-semibold">
                    Développement • Cyber • Support IT
                  </p>
                </div>

                <div className="rounded-2xl bg-[#ece3ff] p-5">
                  <p className="text-sm text-slate-600">Recherche</p>
                  <p className="mt-2 font-semibold">
                    Stage de fin d’études 4 à 6 mois
                  </p>
                </div>

                <div className="rounded-2xl bg-[#fff4c9] p-5">
                  <p className="text-sm text-slate-600">Ce que j’aime</p>
                  <p className="mt-2 font-semibold">
                    Concevoir, sécuriser, comprendre
                  </p>
                </div>

                <div className="rounded-2xl bg-[#dff4ea] p-5">
                  <p className="text-sm text-slate-600">Approche</p>
                  <p className="mt-2 font-semibold">Curieuse et rigoureuse</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="max-w-3xl rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-lg">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              À propos
            </p>
            <h3 className="mt-3 text-3xl font-semibold">Qui je suis</h3>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Au fil de ma formation, j’ai travaillé sur des projets en
              développement, réseaux, cybersécurité, modélisation et intégration
              d’outils. Ce que j’apprécie particulièrement, c’est le moment où
              une idée devient un projet concret, structuré et utile. J’aime les
              environnements où l’on peut apprendre, progresser et contribuer de
              manière réelle.
            </p>
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Projets
              </p>
              <h3 className="mt-3 text-3xl font-semibold">
                Ce que j’ai construit
              </h3>
            </div>

            <button
              onClick={() => setShowEasterEgg(true)}
              className="hidden rounded-full bg-white/80 px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 md:block"
              title="Petit secret"
            >
              ✨
            </button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.preview !== "#" ? project.preview : project.code}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-lg shadow-slate-200/50 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm text-slate-500">{project.category}</p>

                <h4 className="mt-2 text-xl font-semibold transition group-hover:opacity-80">
                  {project.title}
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-3 text-sm text-slate-500">
                  <span>Github</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="py-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Compétences
          </p>
          <h3 className="mt-3 text-3xl font-semibold">Mes outils</h3>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Object.entries(skills).map(([key, values]) => (
              <div
                key={key}
                className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-lg"
              >
                <h4 className="text-lg font-semibold capitalize">{key}</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {values.map((value) => (
                    <span
                      key={value}
                      className="rounded-full bg-[#f6f1ff] px-3 py-1 text-sm"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="more" className="py-16">
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            
            </p>
            <h3 className="mt-3 text-3xl font-semibold">
              Ma manière d’aborder un projet
            </h3>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-[#fff0e8] p-5">
                <h4 className="font-semibold">Apprendre en construisant</h4>
                <p className="mt-3 leading-7 text-slate-600">
                  J’aime progresser par la pratique, tester, comprendre et
                  améliorer au fur et à mesure.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f0eaff] p-5">
                <h4 className="font-semibold">Rendre les choses claires</h4>
                <p className="mt-3 leading-7 text-slate-600">
                  J’accorde beaucoup d’importance à la logique, à la structure et
                  à la lisibilité dans ce que je fais.
                </p>
              </div>

              <div className="rounded-2xl bg-[#fff8d8] p-5">
                <h4 className="font-semibold">Évoluer dans une bonne équipe</h4>
                <p className="mt-3 leading-7 text-slate-600">
                  Je cherche un stage où je pourrai progresser techniquement,
                  contribuer concrètement et évoluer dans un cadre motivant.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="interests" className="py-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Centres d’intérêt
          </p>
          <h3 className="mt-3 text-3xl font-semibold">
            
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-lg">
              <h4 className="font-semibold">Créativité</h4>
              <p className="mt-3 leading-7 text-slate-600">
                J’aime apporter une touche personnelle à ce que je construis,
                même dans des projets très techniques.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-lg">
              <h4 className="font-semibold">Bénévolat</h4>
              <p className="mt-3 leading-7 text-slate-600">
                J’accorde de l’importance aux projets utiles, au collectif et à
                l’énergie positive qu’on peut apporter autour de soi.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-lg">
              <h4 className="font-semibold">Travail d’équipe</h4>
              <p className="mt-3 leading-7 text-slate-600">
                Mon expérience chez McDonald m’a appris la coordination,
                l’adaptation, la gestion des priorités et l’accompagnement.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="rounded-[2rem] bg-slate-900 px-8 py-10 text-white shadow-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">
              Contact
            </p>
            <h3 className="mt-3 text-3xl font-semibold">Parlons-en</h3>
            <p className="mt-4 max-w-2xl leading-8 text-white/80">
              Je recherche un stage de fin d’études de 4 à 6 mois. Vous pouvez
              me contacter pour échanger sur mon parcours, mes projets ou une
              opportunité.
            </p>

            <div className="mt-6 space-y-2 text-white/90">
              <p>ninahslf@gmail.com</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/CV_Ninah.pdf"
                  download="CV_Ninah.pdf"
                  className="underline underline-offset-4"
                >
                  CV PDF
                </a>
                <a
                  href="https://www.linkedin.com/in/ninahsolofoniaina"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="pb-8 pt-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Ninah SOLOFONIAINA. All rights reserved.
        </footer>
      </main>
    </div>
  );
}