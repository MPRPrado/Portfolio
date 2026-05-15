import React, { useState } from 'react';
import {
  ArrowUpRight,
  Cpu,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ServerCog,
  TerminalSquare,
  Workflow,
} from 'lucide-react';

const contacts = [
  {
    label: 'GitHub',
    value: 'MPRPrado',
    href: 'https://github.com/MPRPrado',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'in/mprprado',
    href: 'https://www.linkedin.com/in/mprprado',
    icon: Linkedin,
  },
  {
    label: 'Email',
    value: 'matheusprado09ribeiro@gmail.com',
    href: 'mailto:matheusprado09ribeiro@gmail.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+55 35 99895-4131',
    href: 'tel:+5535998954131',
    icon: Phone,
  },
];

const techLogos = [
  {
    name: 'React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'JavaScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  },
  {
    name: 'Django',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
  },
  {
    name: 'FastAPI',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  },
  {
    name: 'Go',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
  },
  {
    name: 'MySQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  },
  {
    name: 'SQLite',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
  },
  {
    name: 'C',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
  },
  {
    name: 'C++',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  },
  {
    name: 'Arduino',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg',
  },
  {
    name: 'Git',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  },
  {
    name: 'GitHub',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  },
  {
    name: 'VS Code',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
  },
  {
    name: 'STM32',
    src: '/st_logo.png',
  },
  {
    name: 'ESP32',
    src: '/esp-logo-esp-letter-esp-letter-logo-design-initials-esp-logo-linked-with-circle-and-uppercase-monogram-logo-esp-typography-for-technology-business-and-real-estate-brand-vector.png',
  },
];

const copy = {
  pt: {
    nav: {
      home: 'Início',
      projects: 'Projetos',
      tech: 'Tecnologias',
      education: 'Formação',
      contact: 'Contato',
    },
    hero: {
      eyebrow: 'Desenvolvedor Full Stack e Sistemas Embarcados',
      bio: [
        'Sou desenvolvedor Full-Stack com foco em backend utilizando ',
        { tech: 'Python' },
        ', ',
        { tech: 'Django' },
        ' e ',
        { tech: 'FastAPI' },
        ', além de experiência com ',
        { tech: 'React' },
        ', ',
        { tech: 'JavaScript' },
        ', ',
        { tech: 'Golang' },
        ' e ',
        { tech: 'MySQL' },
        '. Atualmente curso Engenharia de Software pelo INATEL e possuo formação técnica em Eletrônica, atuando no desenvolvimento de sistemas, APIs, sistemas embarcados com ',
        { tech: 'STM32' },
        ' e ',
        { tech: 'ESP32' },
        ' e integração entre hardware e software. Tenho interesse em arquitetura de software, IoT e desenvolvimento de soluções escaláveis e eficientes.',
      ],
      primary: 'Ver projetos',
      cv: 'Baixar CV',
      photoAlt: 'Matheus Prado trabalhando no notebook',
    },
    intro: {
      kicker: 'Sobre mim',
      title: 'Software de ponta a ponta, com pé firme no hardware.',
      text:
        'Sou desenvolvedor Full-Stack com foco em backend. Atualmente curso Engenharia de Software pelo INATEL e possuo formação técnica em Eletrônica, atuando no desenvolvimento de sistemas, APIs, sistemas embarcados e integração entre hardware e software. Tenho interesse em arquitetura de software, IoT e desenvolvimento de soluções escaláveis e eficientes.',
      techLabel: 'Tecnologias:',
      techs: ['Python', 'Django', 'FastAPI', 'React', 'JavaScript', 'Golang', 'MySQL', 'STM32', 'ESP32'],
    },
    projectsKicker: 'Projetos em destaque',
    projectsTitle: 'Soluções com dados, mobilidade e sistemas embarcados.',
    techKicker: 'Experiência técnica',
    techTitle: 'Stack preparada para produto, API e protótipo conectado.',
    techCarousel: 'Tecnologias que uso no dia a dia',
    educationKicker: 'Formação',
    educationTitle: 'Base acadêmica em software e eletrônica.',
    interestsLabel: 'Áreas de interesse',
    contactKicker: 'Contato',
    contactTitle: 'Vamos conversar sobre APIs, IoT ou produtos digitais.',
    location: 'Santa Rita do Sapucaí, MG',
    phoneLabel: 'Telefone',
    languageLabel: 'Mudar idioma',
    projects: [
      {
        name: 'AERIS',
        year: '2025',
        summary:
          'Monitoramento de emissões de gases poluentes em áreas industriais com sensores, envio de dados em tempo real e relatórios periódicos para análise ambiental.',
        stack: ['Django', 'Python', 'SQLite', 'APIs REST', 'React', 'ESP32', 'MQTT'],
      },
      {
        name: 'Jogo da Memória',
        year: '2025',
        summary:
          'Jogo embarcado em STM32 com display ST7789, interface gráfica, controle por botões e sistema de recorde para a melhor pontuação.',
        stack: ['STM32', 'C', 'Display ST7789', 'Firmware'],
      },
      {
        name: 'SPO',
        year: '2024',
        summary:
          'Sistema de passe eletrônico com RFID e ESP32 para substituir passes de ônibus em papel, com validação offline e recargas por aplicativo.',
        stack: ['RFID', 'ESP32', 'C', 'Kodular'],
      },
    ],
    skillGroups: [
      {
        title: 'Backend',
        icon: ServerCog,
        items: ['Python', 'Django', 'FastAPI', 'Go', 'APIs REST', 'MySQL', 'SQLite'],
      },
      {
        title: 'Frontend',
        icon: TerminalSquare,
        items: ['React', 'JavaScript', 'HTML', 'CSS'],
      },
      {
        title: 'Embarcados',
        icon: Cpu,
        items: ['STM32', 'ESP32', 'Arduino', 'RFID', 'MQTT', 'Sensores'],
      },
      {
        title: 'Ferramentas',
        icon: Workflow,
        items: ['Git', 'GitHub', 'VS Code', 'STM32CubeIDE', 'Arduino IDE'],
      },
    ],
    education: [
      {
        school: 'INATEL - Instituto Nacional de Telecomunicações',
        course: 'Engenharia de Software',
        period: 'Atual',
        place: 'Santa Rita do Sapucaí - MG',
      },
      {
        school: 'Escola Técnica de Eletrônica Francisco Moreira da Costa',
        course: 'Técnico em Eletrônica',
        period: '2023 - 2026',
        place: 'Santa Rita do Sapucaí - MG',
      },
    ],
    interests: [
      'Sistemas Embarcados e IoT',
      'Desenvolvimento Full Stack',
      'Backend e APIs',
      'Automação e Integração de Sistemas',
      'Arquitetura de Software',
    ],
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      tech: 'Tech Stack',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Full Stack Developer and Embedded Systems Builder',
      bio: [
        'I am a Full-Stack developer focused on backend using ',
        { tech: 'Python' },
        ', ',
        { tech: 'Django' },
        ' and ',
        { tech: 'FastAPI' },
        ', with experience in ',
        { tech: 'React' },
        ', ',
        { tech: 'JavaScript' },
        ', ',
        { tech: 'Golang' },
        ' and ',
        { tech: 'MySQL' },
        '. I currently study Software Engineering at INATEL and have technical training in Electronics, working on systems, APIs, embedded systems with ',
        { tech: 'STM32' },
        ' and ',
        { tech: 'ESP32' },
        ', plus hardware/software integration. I am interested in software architecture, IoT and building scalable, efficient solutions.',
      ],
      primary: 'View projects',
      cv: 'Download CV',
      photoAlt: 'Matheus Prado working on a laptop',
    },
    intro: {
      kicker: 'About me',
      title: 'End-to-end software with a strong hardware foundation.',
      text:
        'I am a Full-Stack developer focused on backend. I currently study Software Engineering at INATEL and have technical training in Electronics, working on systems, APIs, embedded systems and hardware/software integration. I am interested in software architecture, IoT and building scalable, efficient solutions.',
      techLabel: 'Technologies:',
      techs: ['Python', 'Django', 'FastAPI', 'React', 'JavaScript', 'Golang', 'MySQL', 'STM32', 'ESP32'],
    },
    projectsKicker: 'Featured projects',
    projectsTitle: 'Solutions for data, mobility and embedded systems.',
    techKicker: 'Technical experience',
    techTitle: 'A stack for products, APIs and connected prototypes.',
    techCarousel: 'Technologies I use day to day',
    educationKicker: 'Education',
    educationTitle: 'Academic base in software and electronics.',
    interestsLabel: 'Areas of interest',
    contactKicker: 'Contact',
    contactTitle: 'Let us talk about APIs, IoT or digital products.',
    location: 'Santa Rita do Sapucai, MG',
    phoneLabel: 'Phone',
    languageLabel: 'Change language',
    projects: [
      {
        name: 'AERIS',
        year: '2025',
        summary:
          'Monitoring of pollutant gas emissions in industrial areas with sensors, real-time data delivery and periodic reports for environmental analysis.',
        stack: ['Django', 'Python', 'SQLite', 'REST APIs', 'React', 'ESP32', 'MQTT'],
      },
      {
        name: 'Memory Game',
        year: '2025',
        summary:
          'Embedded memory game on STM32 with ST7789 display, graphical interface, button controls and a record system for the best score.',
        stack: ['STM32', 'C', 'ST7789 Display', 'Firmware'],
      },
      {
        name: 'SPO',
        year: '2024',
        summary:
          'Electronic bus pass system using RFID and ESP32, replacing paper passes with offline validation and mobile app recharges.',
        stack: ['RFID', 'ESP32', 'C', 'Kodular'],
      },
    ],
    skillGroups: [
      {
        title: 'Backend',
        icon: ServerCog,
        items: ['Python', 'Django', 'FastAPI', 'Go', 'REST APIs', 'MySQL', 'SQLite'],
      },
      {
        title: 'Frontend',
        icon: TerminalSquare,
        items: ['React', 'JavaScript', 'HTML', 'CSS'],
      },
      {
        title: 'Embedded',
        icon: Cpu,
        items: ['STM32', 'ESP32', 'Arduino', 'RFID', 'MQTT', 'Sensors'],
      },
      {
        title: 'Tools',
        icon: Workflow,
        items: ['Git', 'GitHub', 'VS Code', 'STM32CubeIDE', 'Arduino IDE'],
      },
    ],
    education: [
      {
        school: 'INATEL - National Institute of Telecommunications',
        course: 'Software Engineering',
        period: 'Current',
        place: 'Santa Rita do Sapucai - MG',
      },
      {
        school: 'Francisco Moreira da Costa Electronics Technical School',
        course: 'Electronics Technician',
        period: '2023 - 2026',
        place: 'Santa Rita do Sapucai - MG',
      },
    ],
    interests: [
      'Embedded Systems and IoT',
      'Full Stack Development',
      'Backend and APIs',
      'Automation and Systems Integration',
      'Software Architecture',
    ],
  },
};

function App() {
  const [language, setLanguage] = useState('pt');
  const t = copy[language];
  const logoLoop = [...techLogos, ...techLogos];

  return (
    <main>
      <header className="topbar" aria-label="Main navigation">
        <a className="brand" href="#inicio" aria-label="Go to top">
          {t.nav.home}
        </a>
        <div className="topbar__actions">
          <nav>
            <a href="#projetos">{t.nav.projects}</a>
            <a href="#tecnologias">{t.nav.tech}</a>
            <a href="#formacao">{t.nav.education}</a>
            <a href="#contato">{t.nav.contact}</a>
          </nav>
          <div className="language-toggle" aria-label={t.languageLabel}>
            <button className={language === 'pt' ? 'is-active' : ''} type="button" onClick={() => setLanguage('pt')}>
              PT
            </button>
            <button className={language === 'en' ? 'is-active' : ''} type="button" onClick={() => setLanguage('en')}>
              EN
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero__portrait">
          <img src="/matheus-prado.jpg" alt={t.hero.photoAlt} />
        </div>
        <div className="hero__shade" />
        <div className="hero__content">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>Matheus Prado</h1>
          <p className="hero__lead">
            {t.hero.bio.map((part, index) =>
              typeof part === 'string' ? part : <span className="glow-tech" key={`${part.tech}-${index}`}>{part.tech}</span>,
            )}
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projetos">
              {t.hero.primary}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--ghost" href="/curriculo-matheus-prado.pdf" download>
              <Download size={18} aria-hidden="true" />
              {t.hero.cv}
            </a>
          </div>
        </div>
      </section>

      <section className="tech-showcase tech-showcase--top" aria-label={t.techCarousel}>
        <div className="logo-carousel">
          <div className="logo-track">
            {logoLoop.map((tech, index) => (
              <div className="tech-logo" key={`${tech.name}-${index}`}>
                {tech.src ? <img src={tech.src} alt="" loading="lazy" /> : <span className="logo-fallback">{tech.name}</span>}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="projetos">
        <div className="section-heading">
          <p className="section-kicker">{t.projectsKicker}</p>
          <h2>{t.projectsTitle}</h2>
        </div>
        <div className="project-grid">
          {t.projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-card__top">
                <h3>{project.name}</h3>
                <span>{project.year}</span>
              </div>
              <p>{project.summary}</p>
              <ul className="tag-list" aria-label={`Stack ${project.name}`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell split" id="tecnologias">
        <div className="section-heading">
          <p className="section-kicker">{t.techKicker}</p>
          <h2>{t.techTitle}</h2>
        </div>
        <div className="skill-grid">
          {t.skillGroups.map(({ title, icon: Icon, items }) => (
            <article className="skill-card" key={title}>
              <Icon size={22} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{items.join(' · ')}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell education" id="formacao">
        <div className="section-heading">
          <p className="section-kicker">{t.educationKicker}</p>
          <h2>{t.educationTitle}</h2>
        </div>
        <div className="timeline">
          {t.education.map((item) => (
            <article className="timeline-item" key={item.school}>
              <GraduationCap size={22} aria-hidden="true" />
              <div>
                <h3>{item.course}</h3>
                <p>{item.school}</p>
                <span>
                  {item.period} · {item.place}
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="interest-strip" aria-label={t.interestsLabel}>
          {t.interests.map((interest) => (
            <span key={interest}>{interest}</span>
          ))}
        </div>
      </section>

      <section className="contact-band" id="contato">
        <div>
          <p className="section-kicker">{t.contactKicker}</p>
          <h2>{t.contactTitle}</h2>
        </div>
        <div className="contact-grid">
          {contacts.map(({ label, value, href, icon: Icon }) => {
            const contactLabel = label === 'Phone' ? t.phoneLabel : label;

            return (
              <a className="contact-link" href={href} key={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <Icon size={20} aria-hidden="true" />
                <span>
                  <strong>{contactLabel}</strong>
                  {value}
                </span>
              </a>
            );
          })}
        </div>
        <p className="location">
          <MapPin size={18} aria-hidden="true" />
          {t.location}
        </p>
      </section>
    </main>
  );
}

export default App;
