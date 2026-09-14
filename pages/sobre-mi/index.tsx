import type { NextPage } from 'next';
import Head from 'next/head';
import Menu from '../../components/Menu';

const About: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Sobre mí · Liliana Palomino</title>
        <meta
          name="description"
          content="Conoce la experiencia y la forma de trabajar de Liliana Palomino, Product Designer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="case-shell">
        <div className="grid grid-cols-12">
          <Menu />
        </div>
      </header>

      <main className="case-shell py-14 md:py-24">
        <section className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <div className="overflow-hidden rounded-[28px] bg-[#c1dbf3]">
              <img src="/images/fotoPersonal.png" alt="Liliana Palomino" className="h-auto w-full" />
            </div>
            <p className="mt-5 text-sm font-bold text-oscuro/55">Lima, Perú · Disponible para conversar</p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <p className="section-kicker">Sobre mí</p>
            <h1 className="text-[clamp(2.8rem,6vw,5.6rem)] font-black leading-[0.98] tracking-[-0.055em]">
              Antes de diseñar una solución, necesito entender el problema completo.
            </h1>
            <div className="mt-9 space-y-6 text-lg leading-9 text-oscuro/68">
              <p>
                Soy Liliana, Product Designer. Mi experiencia incluye productos financieros, venta directa, educación y otros servicios digitales. He participado en el análisis del problema, definición de journeys y flujos, prototipado, diseño de interfaz y acompañamiento a desarrollo.
              </p>
              <p>
                Me siento cómoda en proyectos con varios roles, reglas de negocio y dependencias técnicas. Suelo ordenar esa complejidad, comparar alternativas y hacer visibles las decisiones para que el equipo pueda discutirlas y avanzar.
              </p>
              <p>
                Trabajo de cerca con producto, negocio y tecnología durante todo el proceso. Comparto los flujos desde etapas tempranas, recojo observaciones y ajusto la propuesta cuando aparecen nuevas condiciones. También cuido el contenido y el detalle visual, pero siempre como parte de la solución completa.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:lilyevantter@gmail.com"
                className="rounded-full bg-morado px-6 py-3.5 text-sm font-black text-white"
              >
                Escríbeme
              </a>
              <a
                href="https://pe.linkedin.com/in/liliana-pamela-palomino-urdanivia-149711137"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-oscuro/20 px-6 py-3.5 text-sm font-black hover:border-morado hover:text-morado"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>

        <section className="mt-24 border-t border-oscuro/10 pt-14 md:mt-32">
          <p className="section-kicker">Cómo trabajo</p>
          <div className="case-grid">
            <article className="case-card">
              <span className="case-card__number">01</span>
              <h3>Entiendo el contexto</h3>
              <p>Reviso las necesidades de las personas, los objetivos del producto, las reglas del negocio y las restricciones técnicas.</p>
            </article>
            <article className="case-card">
              <span className="case-card__number">02</span>
              <h3>Hago visibles las decisiones</h3>
              <p>Uso journeys, flujos y prototipos para comparar alternativas y conversar sobre algo concreto con el equipo.</p>
            </article>
            <article className="case-card">
              <span className="case-card__number">03</span>
              <h3>Acompaño la implementación</h3>
              <p>Documento estados, comportamientos y casos alternos, y sigo ajustando la solución junto con desarrollo.</p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
