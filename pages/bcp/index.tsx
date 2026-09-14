import type { NextPage } from 'next';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const BcpCase: NextPage = () => {
  return (
    <CaseStudyLayout
      brand="BCP"
      title="Hacer comprensible la gestión de una tarjeta de débito"
      summary="Transformé reglas, estados y decisiones sensibles en flujos claros para que las personas pudieran gestionar su tarjeta desde la app con mayor seguridad y confianza."
      role="Product Designer"
      scope="Discovery, arquitectura de flujo, interacción, UI, contenido y handoff"
      period="2022–2025"
      visual="bcp"
      nextHref="/sip-tarjetas-adicionales"
      nextTitle="Tarjetas adicionales en Sip"
    >
      <section className="case-section">
        <p className="section-kicker">Contexto</p>
        <h2>En banca, una acción simple puede esconder muchas reglas</h2>
        <p>
          Consultar o configurar una tarjeta parece sencillo desde la interfaz, pero detrás existen validaciones, permisos, estados y consecuencias que el cliente no debería tener que descifrar. El reto fue sostener esa complejidad sin trasladarla a la experiencia.
        </p>
        <div className="case-question">
          ¿Cómo damos control sobre una tarjeta sin saturar de información y sin perder la claridad que una decisión financiera exige?
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Mi aporte</p>
        <h2>Traducir el sistema a decisiones humanas</h2>
        <div className="case-grid">
          <article className="case-card">
            <span className="case-card__number">01</span>
            <h3>Ordenar reglas y dependencias</h3>
            <p>Convertí requerimientos dispersos en un mapa de acciones, precondiciones, respuestas y escenarios alternos.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">02</span>
            <h3>Diseñar los estados completos</h3>
            <p>Además del camino ideal, contemplé bloqueos, validaciones, carga, errores y confirmaciones para evitar vacíos de experiencia.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">03</span>
            <h3>Alinear experiencia y viabilidad</h3>
            <p>Trabajé con producto, negocio y desarrollo para ajustar la solución sin perder el propósito para el cliente.</p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Principios de diseño</p>
        <h2>La confianza se construye antes de confirmar</h2>
        <div className="decision-list">
          <div className="decision-item">
            <strong>01</strong>
            <div>
              <h3>Mostrar primero lo que cambia</h3>
              <p>La interfaz explica el estado actual y la consecuencia de la acción antes de pedir una confirmación.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>02</strong>
            <div>
              <h3>Usar lenguaje cotidiano con precisión</h3>
              <p>Los textos reducen tecnicismos sin ocultar información importante para una decisión segura.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>03</strong>
            <div>
              <h3>Mantener patrones reconocibles</h3>
              <p>Las nuevas interacciones se apoyan en comportamientos del ecosistema del banco para reducir aprendizaje y errores.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>04</strong>
            <div>
              <h3>Tratar los errores como parte del producto</h3>
              <p>Cada escenario alterno indica qué ocurrió, qué puede hacer la persona y cuándo necesita otro canal de ayuda.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Diseño de interacción + contenido</p>
        <h2>Una pantalla no termina cuando se ve bien</h2>
        <p>
          Mi trabajo combinó estructura, jerarquía y escritura. El objetivo no era solo reducir pasos, sino asegurar que cada paso tuviera sentido: qué está gestionando la persona, por qué se solicita una validación y cómo sabe que la operación terminó correctamente.
        </p>
        <div className="case-grid case-grid--two">
          <article className="case-card">
            <h3>Antes de la acción</h3>
            <p>Contexto suficiente, condiciones visibles y una etiqueta que describe exactamente qué ocurrirá.</p>
          </article>
          <article className="case-card">
            <h3>Después de la acción</h3>
            <p>Confirmación específica, estado actualizado y un siguiente paso útil, sin mensajes genéricos ni callejones sin salida.</p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <div className="case-result">
          <p className="section-kicker text-white/60">Resultado</p>
          <h2>Una propuesta consistente, explicable y preparada para construirse</h2>
          <p>
            Los flujos permitieron al equipo razonar sobre la experiencia completa, alinear decisiones entre disciplinas y llevar reglas complejas a una interfaz más clara. La documentación incluyó comportamiento, contenido y excepciones para facilitar el handoff.
          </p>
        </div>
        <p className="case-note">
          Por confidencialidad, el caso se presenta sin cifras, datos de clientes ni pantallas internas del banco. Los visuales son una representación conceptual.
        </p>
      </section>
    </CaseStudyLayout>
  );
};

export default BcpCase;
