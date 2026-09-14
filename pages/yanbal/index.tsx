import type { NextPage } from 'next';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const YanbalCase: NextPage = () => {
  return (
    <CaseStudyLayout
      brand="Yanbal"
      title="Una incorporación que acompaña a dos personas a la vez"
      summary="Diseñé un flujo web y una secuencia de mensajes de WhatsApp para que incorporadora y prospecto entendieran qué hacer, mantuvieran el contexto y avanzaran con confianza."
      role="UX/UI Designer"
      scope="Journey, flujo web, prototipado, interfaz y UX writing"
      period="2025–2026"
      visual="yanbal"
      nextHref="/bcp"
      nextTitle="Gestión de tarjeta BCP"
    >
      <section className="case-section">
        <p className="section-kicker">Contexto</p>
        <h2>La experiencia no ocurría en un solo canal</h2>
        <p>
          Incorporar a una nueva consultora conecta a dos personas con necesidades distintas. La incorporadora inicia y acompaña; el prospecto entrega información, valida su identidad y toma decisiones. Cuando los pasos y mensajes pierden continuidad, ambas partes dudan y el proceso pierde impulso.
        </p>
        <div className="case-question">
          ¿Cómo guiamos a dos roles a través de un mismo proceso sin que ninguno pierda el contexto ni la motivación para continuar?
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Dos experiencias conectadas</p>
        <h2>Cada rol necesitaba claridad en un momento diferente</h2>
        <div className="case-grid case-grid--two">
          <article className="case-card role-card">
            <span className="case-card__number">A</span>
            <h3>La incorporadora</h3>
            <p>
              Necesitaba iniciar rápidamente, saber en qué estado estaba cada incorporación y reconocer cuándo debía acompañar, esperar o retomar una acción.
            </p>
          </article>
          <article className="case-card role-card">
            <span className="case-card__number">B</span>
            <h3>El prospecto</h3>
            <p>
              Necesitaba comprender por qué se pedía cada dato, completar la validación desde su celular y volver al flujo sin tener que reconstruir lo ocurrido.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Mi proceso</p>
        <h2>Diseñé continuidad, no solo pantallas</h2>
        <div className="case-grid">
          <article className="case-card">
            <span className="case-card__number">01</span>
            <h3>Mapear la experiencia completa</h3>
            <p>Organicé actores, pasos, dependencias y puntos de espera para hacer visible dónde se rompía el acompañamiento.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">02</span>
            <h3>Definir estados y siguiente acción</h3>
            <p>Cada momento del flujo debía responder tres preguntas: qué pasó, quién actúa ahora y qué viene después.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">03</span>
            <h3>Conectar web y WhatsApp</h3>
            <p>Diseñé mensajes que recuperan contexto, anticipan dudas y llevan a la acción correcta sin competir con la interfaz.</p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Decisiones de diseño</p>
        <h2>Menos incertidumbre en cada transición</h2>
        <div className="decision-list">
          <div className="decision-item">
            <strong>01</strong>
            <div>
              <h3>Una acción principal por momento</h3>
              <p>La jerarquía visual evita que tareas secundarias compitan con lo que realmente hace avanzar la incorporación.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>02</strong>
            <div>
              <h3>Estados legibles y recuperables</h3>
              <p>La incorporadora puede reconocer procesos iniciados, en espera o completados y retomar desde el punto correcto.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>03</strong>
            <div>
              <h3>Mensajes con contexto y propósito</h3>
              <p>Los textos explican el motivo de la acción y reducen la sensación de estar siguiendo un enlace aislado.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>04</strong>
            <div>
              <h3>Excepciones dentro del recorrido</h3>
              <p>Validaciones, reintentos y esperas se diseñaron como parte de la experiencia, no como pantallas agregadas al final.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-result">
          <p className="section-kicker text-white/60">Resultado</p>
          <h2>Un proceso más guiado y coherente entre personas y canales</h2>
          <p>
            El rediseño dio continuidad al recorrido, hizo visible la responsabilidad de cada rol y utilizó el contenido para sostener la comprensión y la conversión. La solución quedó expresada en flujos, prototipos y mensajes listos para alineamiento y construcción.
          </p>
        </div>
        <p className="case-note">
          Para proteger información del producto, este caso utiliza visuales conceptuales y omite datos operativos, pantallas productivas e indicadores internos.
        </p>
      </section>
    </CaseStudyLayout>
  );
};

export default YanbalCase;
