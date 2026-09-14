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
          content="Conoce el enfoque y la experiencia de Liliana Palomino, Product Designer."
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
              Diseño para que las personas sepan qué hacer y por qué.
            </h1>
            <div className="mt-9 space-y-6 text-lg leading-9 text-oscuro/68">
              <p>
                Soy Liliana, Product Designer. He trabajado en productos de banca, venta directa, educación y servicios digitales, acompañando el proceso desde la exploración del problema hasta el detalle de la interfaz.
              </p>
              <p>
                Mi fortaleza está en ordenar escenarios complejos, conectar las necesidades de distintos actores y convertir reglas de negocio en flujos y mensajes comprensibles. Disfruto especialmente el diseño de interacción y el UX writing.
              </p>
              <p>
                Trabajo de manera cercana con producto, negocio y desarrollo. Me interesa que una solución no solo se vea bien: debe poder explicarse, construirse y sostenerse ante los casos que no siguen el camino ideal.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:lilyevantter@gmail.com"
                className="rounded-full bg-morado px-6 py-3.5 text-sm font-black text-white"
              >
                Contactarme
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
              <h3>Entender antes de dibujar</h3>
              <p>Mapeo personas, restricciones, información y momentos de decisión antes de elegir una pantalla.</p>
            </article>
            <article className="case-card">
              <span className="case-card__number">02</span>
              <h3>Diseñar el sistema completo</h3>
              <p>Trabajo el camino principal, pero también los estados, errores y dependencias que sostienen la experiencia.</p>
            </article>
            <article className="case-card">
              <span className="case-card__number">03</span>
              <h3>Escribir es diseñar</h3>
              <p>Uso jerarquía y lenguaje claro para que cada interfaz reduzca dudas y haga evidente la siguiente acción.</p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
