import type { NextPage } from 'next';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const YanbalCase: NextPage = () => {
  return (
    <CaseStudyLayout
      brand="Yanbal"
      title="Rediseñar una incorporación que dependía de dos personas"
      summary="Diseñé el proceso de principio a fin, coordinando las acciones de la incorporadora y el prospecto entre la web y WhatsApp."
      role="UX/UI Designer"
      scope="Análisis del proceso, journey, arquitectura de flujo, prototipado, UI y contenido"
      period="2025–2026"
      visual="yanbal"
      nextHref="/bcp"
      nextTitle="Gestión de tarjetas en BCP"
    >
      <section className="case-section">
        <p className="section-kicker">Reto de producto</p>
        <h2>Un proceso con varios traspasos y poca visibilidad</h2>
        <p>
          La incorporadora iniciaba el registro y hacía seguimiento. El prospecto recibía una invitación, completaba sus datos y validaba su identidad desde el celular. Cada persona veía una parte diferente del proceso y, cuando una acción quedaba pendiente, no siempre era evidente quién debía continuar.
        </p>
        <div className="case-question">
          El reto fue convertir esas acciones separadas en un solo recorrido, con estados y responsabilidades claras para ambos roles.
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Análisis</p>
        <h2>Dos personas trataban de completar un mismo objetivo</h2>
        <div className="case-grid case-grid--two">
          <article className="case-card role-card">
            <span className="case-card__number">A</span>
            <h3>La incorporadora</h3>
            <p>
              Necesitaba iniciar el registro rápidamente, consultar el avance de cada prospecto y reconocer cuándo debía intervenir o esperar.
            </p>
          </article>
          <article className="case-card role-card">
            <span className="case-card__number">B</span>
            <h3>El prospecto</h3>
            <p>
              Necesitaba entender el proceso, completar sus tareas desde el celular y retomarlas sin perder el avance ni repetir información.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Proceso</p>
        <h2>Del journey actual a una propuesta conectada</h2>
        <div className="case-grid">
          <article className="case-card">
            <span className="case-card__number">01</span>
            <h3>Reconstruí el recorrido</h3>
            <p>Separé las acciones de cada rol e identifiqué esperas, dependencias y puntos en los que se perdía el contexto.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">02</span>
            <h3>Definí el flujo futuro</h3>
            <p>Organicé pasos, estados y siguientes acciones para que cada persona supiera qué había ocurrido y qué le correspondía hacer.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">03</span>
            <h3>Prototipé y alineé</h3>
            <p>Llevé la propuesta a pantallas y mensajes que permitieron revisar el recorrido completo con producto y tecnología.</p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Decisiones de producto</p>
        <h2>Qué mantuvo unido el recorrido</h2>
        <div className="decision-list">
          <div className="decision-item">
            <strong>01</strong>
            <div>
              <h3>Un estado útil para cada caso</h3>
              <p>La incorporadora podía distinguir procesos nuevos, en curso, detenidos o terminados, y actuar según cada situación.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>02</strong>
            <div>
              <h3>Responsabilidades claras</h3>
              <p>Cada punto del flujo indicaba quién debía continuar para evitar recordatorios innecesarios o tareas duplicadas.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>03</strong>
            <div>
              <h3>Continuidad entre canales</h3>
              <p>WhatsApp funcionaba como entrada y seguimiento del proceso; la web concentraba las tareas y validaciones.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>04</strong>
            <div>
              <h3>Un recorrido que podía retomarse</h3>
              <p>La persona volvía al punto correcto después de una pausa, una espera o una validación pendiente.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-result">
          <p className="section-kicker text-white/60">Resultado</p>
          <h2>Una propuesta compartida por negocio, diseño y tecnología</h2>
          <p>
            Entregué el journey, los flujos de ambos roles, los estados, las pantallas y los mensajes necesarios para construir la experiencia. El rediseño ayudó a mejorar la comprensión del proceso y la continuidad hasta completarlo.
          </p>
        </div>
        <p className="case-note">
          Por confidencialidad, este caso no muestra pantallas productivas, datos internos ni información de las personas usuarias. Los visuales son referenciales.
        </p>
      </section>
    </CaseStudyLayout>
  );
};

export default YanbalCase;
