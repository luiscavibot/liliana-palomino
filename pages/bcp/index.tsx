import type { NextPage } from 'next';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const BcpCase: NextPage = () => {
  return (
    <CaseStudyLayout
      brand="BCP"
      title="Evolucionar la gestión de tarjetas de débito en la app"
      summary="Diseñé mejoras para distintos flujos de tarjeta, convirtiendo reglas de negocio y estados técnicos en una solución consistente y lista para implementar."
      role="Product Designer"
      scope="Discovery, modelado de estados, flujos, prototipado, UI, sistema de diseño y handoff"
      period="2022–2025"
      visual="bcp"
      nextHref="/sip-tarjetas-adicionales"
      nextTitle="Tarjetas adicionales en Sip"
    >
      <section className="case-section">
        <p className="section-kicker">Reto de producto</p>
        <h2>Gestionar una tarjeta era más que resolver una pantalla</h2>
        <p>
          En una misma sección convivían acciones de consulta, configuración y seguridad. Cada una respondía a reglas de negocio, validaciones y estados que el cliente no veía. Si cada flujo se diseñaba de forma aislada, la experiencia podía perder consistencia y volverse difícil de mantener.
        </p>
        <div className="case-question">
          Mi reto fue resolver cada necesidad sin perder la lógica del producto completo ni los patrones que las personas ya conocían en la app.
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Mi enfoque</p>
        <h2>Organicé la complejidad antes de llevarla a la interfaz</h2>
        <div className="case-grid">
          <article className="case-card">
            <span className="case-card__number">01</span>
            <h3>Modelé reglas y estados</h3>
            <p>Organicé qué acciones estaban disponibles en cada estado de la tarjeta, qué condiciones debían cumplirse y qué respuesta podía dar el sistema.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">02</span>
            <h3>Diseñé los recorridos completos</h3>
            <p>Trabajé el camino principal junto con validaciones, tiempos de espera, bloqueos, errores y formas de recuperación.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">03</span>
            <h3>Revisé viabilidad y consistencia</h3>
            <p>Contrasté los flujos con negocio y tecnología, reutilizando patrones del sistema de diseño y ajustándolos cuando el caso lo requería.</p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Decisiones de producto</p>
        <h2>Los criterios que mantuvieron consistentes los flujos</h2>
        <div className="decision-list">
          <div className="decision-item">
            <strong>01</strong>
            <div>
              <h3>El estado de la tarjeta como punto de partida</h3>
              <p>La información y las acciones disponibles cambiaban según el estado real del producto, evitando opciones que no podían completarse.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>02</strong>
            <div>
              <h3>Prioridad para la tarea principal</h3>
              <p>La jerarquía de cada pantalla respondía primero a lo que la persona había ido a resolver y dejaba el detalle para cuando era necesario.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>03</strong>
            <div>
              <h3>Patrones que pudieran reutilizarse</h3>
              <p>Confirmaciones, errores y cambios de estado seguían una misma lógica para no diseñar una solución distinta por cada funcionalidad.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>04</strong>
            <div>
              <h3>Casos alternos documentados</h3>
              <p>El handoff incluía qué mostrar, qué acción permitir y cómo continuar cuando el flujo no seguía el camino esperado.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Trabajo con el equipo</p>
        <h2>La propuesta se ajustó durante todo el proceso</h2>
        <p>
          Compartí los flujos desde etapas tempranas para detectar reglas faltantes y discutir alternativas antes de cerrar la interfaz. Esto permitió incorporar restricciones técnicas, mantener consistencia con otras partes de la app y llegar al handoff con menos decisiones abiertas.
        </p>
        <div className="case-grid case-grid--two">
          <article className="case-card">
            <h3>Con producto y negocio</h3>
            <p>Revisé prioridades, condiciones y consecuencias de cada acción para asegurar que el flujo representara correctamente el producto.</p>
          </article>
          <article className="case-card">
            <h3>Con tecnología</h3>
            <p>Validé la viabilidad de los escenarios y documenté estados, comportamientos y excepciones necesarios para la implementación.</p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <div className="case-result">
          <p className="section-kicker text-white/60">Resultado</p>
          <h2>Un sistema de flujos preparado para crecer</h2>
          <p>
            Dejé una propuesta consistente con la app y el sistema de diseño, acompañada por especificaciones de comportamiento y casos alternos. El equipo podía revisar cada iniciativa dentro de una lógica común, en lugar de resolverla como una pantalla independiente.
          </p>
        </div>
        <p className="case-note">
          Por confidencialidad, este caso no incluye cifras, datos de clientes ni pantallas internas del banco. Los visuales son referenciales.
        </p>
      </section>
    </CaseStudyLayout>
  );
};

export default BcpCase;
