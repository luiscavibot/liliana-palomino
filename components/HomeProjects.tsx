import Link from 'next/link';
import React from 'react';
import ProjectVisual, { ProjectVisualVariant } from './ProjectVisual';

interface FeaturedProject {
  company: string;
  title: string;
  summary: string;
  role: string;
  link: string;
  visual: ProjectVisualVariant;
  tags: string[];
}

const featuredProjects: FeaturedProject[] = [
  {
    company: 'Yanbal',
    title: 'Incorporación digital de nuevas consultoras',
    summary: 'Una experiencia coordinada entre web y WhatsApp para guiar a dos roles, reducir dudas y mantener el impulso durante todo el proceso.',
    role: 'UX/UI Designer',
    link: '/yanbal',
    visual: 'yanbal',
    tags: ['Journey', 'Interacción', 'UX writing'],
  },
  {
    company: 'BCP',
    title: 'Gestión digital de una tarjeta de débito',
    summary: 'Flujos claros para convertir reglas bancarias complejas en decisiones comprensibles, seguras y coherentes dentro de la app.',
    role: 'Product Designer',
    link: '/bcp',
    visual: 'bcp',
    tags: ['Discovery', 'Prototipado', 'Design system'],
  },
  {
    company: 'Sip',
    title: 'Tarjetas adicionales sin perder el control',
    summary: 'Una solución de dos actores que equilibra autonomía, visibilidad y control cuando una línea de crédito se comparte.',
    role: 'Product Designer',
    link: '/sip-tarjetas-adicionales',
    visual: 'sip',
    tags: ['Service design', 'Interacción', 'Contenido'],
  },
];

const archiveProjects = [
  {
    title: 'Sitios web para facultades de una universidad pública',
    role: 'UX Lead · Product Designer',
    link: '/sitios-web-facultades-universidad',
    image: '/images/proyecto-facultades.png',
  },
  {
    title: 'Explorando emociones',
    role: 'UX Designer · Visual Designer',
    link: '/explorando-emociones',
    image: '/images/explorando-emociones.png',
  },
  {
    title: 'Empy',
    role: 'Interaction Designer · Visual Designer',
    link: '/empy',
    image: '/images/proyecto-empy.png',
  },
];

const HomeProjects = () => {
  return (
    <section id="proyectos" className="case-shell scroll-mt-4 pb-24 md:pb-32">
      <div className="mb-12 flex flex-col justify-between gap-4 border-t border-oscuro/10 pt-10 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-morado">Trabajo seleccionado</p>
          <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-[-0.035em] md:text-5xl">
            Casos recientes
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-oscuro/65">
          Proyectos donde estrategia, interacción y contenido trabajan juntos para hacer que el siguiente paso se sienta evidente.
        </p>
      </div>

      <div className="space-y-10 md:space-y-14">
        {featuredProjects.map((project, index) => (
          <article
            key={project.link}
            className="grid overflow-hidden rounded-[30px] border border-oscuro/10 bg-white shadow-[0_18px_70px_rgba(38,35,53,0.06)] md:grid-cols-2"
          >
            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
              <ProjectVisual variant={project.visual} compact />
            </div>
            <div className="flex flex-col justify-center p-7 md:p-12 lg:p-16">
              <div className="mb-5 flex items-center justify-between gap-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-morado">{project.company}</p>
                <p className="text-xs font-bold text-oscuro/45">{project.role}</p>
              </div>
              <h3 className="text-2xl font-black leading-tight tracking-[-0.025em] md:text-4xl">{project.title}</h3>
              <p className="mt-5 text-base leading-8 text-oscuro/65">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-oscuro/[0.05] px-3 py-1.5 text-xs font-bold text-oscuro/65">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={project.link}>
                <a className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-morado px-5 py-3 text-sm font-black text-white transition-transform hover:-translate-y-0.5">
                  Ver caso de estudio <span aria-hidden="true">→</span>
                </a>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-24">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-morado">Archivo</p>
        <h2 className="text-3xl font-black tracking-[-0.03em]">Otros proyectos</h2>
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {archiveProjects.map((project) => (
            <Link href={project.link} key={project.link}>
              <a className="group overflow-hidden rounded-2xl border border-oscuro/10 bg-white transition-transform hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden bg-fondoClaro">
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-black leading-snug">{project.title}</h3>
                  <p className="mt-2 text-xs font-bold text-oscuro/50">{project.role}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
