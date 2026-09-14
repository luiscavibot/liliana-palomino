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
              Me gusta entender cómo funciona una experiencia hasta el último detalle.
            </h1>
            <div className="mt-9 space-y-6 text-lg leading-9 text-oscuro/68">
              <p>
                Soy Liliana, Product Designer. He trabajado en banca, venta directa, educación y servicios digitales. En algunos proyectos participé desde la exploración; en otros llegué cuando el reto ya estaba definido y había que llevarlo a un flujo concreto.
              </p>
              <p>
                Lo que más disfruto es el diseño de interacción: ordenar pasos, conectar lo que necesitan distintos roles y pensar qué ocurre fuera del camino ideal. También pongo mucho cuidado en los textos, porque una pantalla puede estar bien resuelta y aun así generar dudas si no explica lo necesario.
              </p>
              <p>
                Trabajo de cerca con producto, negocio y desarrollo. Suelo hacer muchas preguntas, documentar las decisiones y ajustar la propuesta cuando aparecen restricciones. Me importa que lo diseñado sea útil para la persona y posible para el equipo.
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
              <h3>Primero entiendo el problema</h3>
              <p>Antes de diseñar necesito saber qué intenta hacer la persona, qué información tiene y qué restricciones existen.</p>
            </article>
            <article className="case-card">
              <span className="case-card__number">02</span>
              <h3>Recorro todos los escenarios</h3>
              <p>No me quedo solo con el camino ideal: reviso esperas, errores, bloqueos y formas de volver al flujo.</p>
            </article>
            <article className="case-card">
              <span className="case-card__number">03</span>
              <h3>Reviso cada texto</h3>
              <p>Trabajo los mensajes junto con la interacción para que la persona sepa qué pasó y qué puede hacer después.</p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
