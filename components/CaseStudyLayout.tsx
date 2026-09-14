import Head from 'next/head';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import Menu from './Menu';
import ProjectVisual, { ProjectVisualVariant } from './ProjectVisual';

interface Props {
  brand: string;
  title: string;
  summary: string;
  role: string;
  scope: string;
  period: string;
  visual: ProjectVisualVariant;
  nextHref: string;
  nextTitle: string;
  children: ReactNode;
}

const CaseStudyLayout: FC<Props> = ({
  brand,
  title,
  summary,
  role,
  scope,
  period,
  visual,
  nextHref,
  nextTitle,
  children,
}) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>{title} · Liliana Palomino</title>
        <meta name="description" content={summary} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="case-shell">
        <div className="grid grid-cols-12">
          <Menu />
        </div>
      </header>

      <main>
        <section className="case-shell case-hero">
          <div>
            <Link legacyBehavior href="/#proyectos">
              <a className="case-back"><span aria-hidden="true">←</span> Proyectos</a>
            </Link>
            <p className="case-kicker">{brand} · {period}</p>
            <h1 className="case-title">{title}</h1>
            <p className="case-lead">{summary}</p>

            <dl className="case-meta">
              <div>
                <dt>Mi rol</dt>
                <dd>{role}</dd>
              </div>
              <div>
                <dt>Alcance</dt>
                <dd>{scope}</dd>
              </div>
              <div>
                <dt>Periodo</dt>
                <dd>{period}</dd>
              </div>
            </dl>
          </div>

          <ProjectVisual variant={visual} />
        </section>

        <div className="case-shell case-content">{children}</div>

        <nav className="case-shell case-next" aria-label="Siguiente caso">
          <div>
            <span>Siguiente caso</span>
            <Link legacyBehavior href={nextHref}>
              <a>{nextTitle} →</a>
            </Link>
          </div>
          <Link legacyBehavior href="/#proyectos">
            <a className="text-sm font-black text-oscuro/55">Ver todos</a>
          </Link>
        </nav>
      </main>

      <footer className="site-footer">
        <div className="case-shell flex flex-col justify-between gap-3 text-sm text-oscuro/55 sm:flex-row">
          <span>© {new Date().getFullYear()} Liliana Palomino</span>
          <a href="mailto:lilyevantter@gmail.com" className="font-bold text-morado">Conversemos</a>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudyLayout;
