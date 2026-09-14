import type { NextPage } from 'next';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const YanbalCase: NextPage = () => {
  return (
    <CaseStudyLayout
      brand="Yanbal"
      title="Guiar a dos personas durante una incorporación digital"
      summary="Diseñé el flujo web y los mensajes de WhatsApp para acompañar a la incorporadora y al prospecto, que debían completar distintas tareas dentro de un mismo proceso."
      role="UX/UI Designer"
      scope="Journey, flujo web, prototipado, interfaz y UX writing"
      period="2025–2026"
      visual="yanbal"
      nextHref="/bcp"
      nextTitle="Gestión de tarjeta BCP"
    >
      <section className="case-section">
        <p className="section-kicker">Contexto</p>
        <h2>El proceso dependía de dos personas y ocurría en dos canales</h2>
        <p>
          La incorporadora iniciaba el registro y hacía seguimiento. El prospecto recibía una invitación por WhatsApp, completaba sus datos y validaba su identidad desde el celular. Si uno de los dos no entendía qué seguía, la incorporación se detenía.
        </p>
        <div className="case-question">
          Mi reto fue mantener a ambos orientados: qué ya se había hecho, quién debía actuar y cómo continuar.
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Los dos roles</p>
        <h2>No necesitaban ver lo mismo ni actuar al mismo tiempo</h2>
        <div className="case-grid case-grid--two">
          <article className="case-card role-card">
            <span className="case-card__number">A</span>
            <h3>La incorporadora</h3>
            <p>
              Necesitaba registrar a un prospecto sin perder tiempo y luego saber si había iniciado, tenía algo pendiente o ya había terminado.
            </p>
          </article>
          <article className="case-card role-card">
            <span className="case-card__number">B</span>
            <h3>El prospecto</h3>
            <p>
              Necesitaba reconocer quién lo invitaba, entender por qué se pedían sus datos y completar el proceso sin perder el avance.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Mi trabajo</p>
        <h2>Primero ordené el proceso; después diseñé las pantallas</h2>
        <div className="case-grid">
          <article className="case-card">
            <span className="case-card__number">01</span>
            <h3>Revisé el recorrido completo</h3>
            <p>Separé las acciones de cada rol e identifiqué los momentos en los que uno dependía del otro para poder avanzar.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">02</span>
            <h3>Definí los estados</h3>
            <p>Detallé qué debía mostrarse cuando el proceso aún no empezaba, estaba en curso, requería una acción o había terminado.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">03</span>
            <h3>Conecté web y WhatsApp</h3>
            <p>Trabajé las pantallas y los mensajes como partes del mismo recorrido, manteniendo el contexto al pasar de un canal a otro.</p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Decisiones de diseño</p>
        <h2>Qué hice para que fuera más fácil continuar</h2>
        <div className="decision-list">
          <div className="decision-item">
            <strong>01</strong>
            <div>
              <h3>Estados que dijeran algo útil</h3>
              <p>No bastaba con mostrar “en proceso”. La incorporadora debía saber si le correspondía actuar, esperar o contactar al prospecto.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>02</strong>
            <div>
              <h3>Mensajes que recuperaran el contexto</h3>
              <p>Cada WhatsApp explicaba quién enviaba la invitación, qué se necesitaba completar y adónde llevaba el enlace.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>03</strong>
            <div>
              <h3>Explicar antes de pedir información</h3>
              <p>Los textos daban una razón para las validaciones y los datos solicitados, especialmente en los pasos más sensibles.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>04</strong>
            <div>
              <h3>Permitir que el proceso se retomara</h3>
              <p>Los estados y accesos ayudaban a volver al punto correcto sin empezar de nuevo ni repetir información.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-result">
          <p className="section-kicker text-white/60">Resultado</p>
          <h2>Un flujo conectado de principio a fin</h2>
          <p>
            Entregué el recorrido web, sus estados y los mensajes de WhatsApp que acompañaban cada momento. El rediseño ayudó a que ambos roles entendieran mejor el proceso y a que más prospectos continuaran hasta completarlo.
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
