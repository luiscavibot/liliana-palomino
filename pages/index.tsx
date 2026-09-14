import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import HomeProjects from '../components/HomeProjects';
import Menu from '../components/Menu';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Liliana Palomino · Product Designer</title>
        <meta
          name="description"
          content="Portafolio de Liliana Palomino, Product Designer. Casos de Yanbal, BCP, Sip y otros proyectos."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="case-shell">
        <div className="grid grid-cols-12">
          <Menu />
        </div>
      </header>

      <main>
        <section className="case-shell grid min-h-[660px] items-center gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-9">
            <p className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-morado">
              Product Designer · UX/UI
            </p>
            <h1 className="max-w-5xl text-[clamp(3rem,8vw,7rem)] font-black leading-[0.94] tracking-[-0.065em]">
              Disfruto resolver cómo funciona una experiencia y{' '}
              <span className="text-morado">encontrar las palabras para explicarla.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-oscuro/65 md:text-xl md:leading-9">
              Soy Liliana. He trabajado en banca, venta directa, educación y otros servicios digitales. Me involucro tanto en los flujos y escenarios como en la interfaz y los textos que acompañan a las personas.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link legacyBehavior href="/#proyectos">
                <a className="rounded-full bg-morado px-6 py-3.5 text-sm font-black text-white transition-transform hover:-translate-y-0.5">
                  Ver proyectos
                </a>
              </Link>
              <a
                href="mailto:lilyevantter@gmail.com"
                className="rounded-full border border-oscuro/20 px-6 py-3.5 text-sm font-black transition-colors hover:border-morado hover:text-morado"
              >
                Escríbeme
              </a>
            </div>
          </div>

          <div className="hidden md:col-span-3 md:block">
            <div className="rounded-[28px] border border-oscuro/10 bg-white p-7 shadow-[0_20px_60px_rgba(38,35,53,0.05)]">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-morado">Lo que más disfruto</p>
              <ul className="mt-5 space-y-4 text-sm font-bold leading-6 text-oscuro/70">
                <li>Diseño de interacción</li>
                <li>Flujos con varios roles</li>
                <li>Contenido y UX writing</li>
              </ul>
            </div>
          </div>
        </section>

        <HomeProjects />

        <section className="case-shell pb-24 md:pb-32">
          <div className="rounded-[30px] bg-oscuro px-7 py-14 text-white md:px-16 md:py-20">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-white/55">Contacto</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
              Si quieres saber más sobre mi trabajo, conversemos.
            </h2>
            <a
              href="mailto:lilyevantter@gmail.com"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-black text-oscuro"
            >
              Escríbeme →
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="case-shell flex flex-col justify-between gap-3 text-sm text-oscuro/55 sm:flex-row">
          <span>© {new Date().getFullYear()} Liliana Palomino</span>
          <span>Product Designer · UX/UI</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
