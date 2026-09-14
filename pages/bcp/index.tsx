import type { NextPage } from 'next';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const BcpCase: NextPage = () => {
  return (
    <CaseStudyLayout
      brand="BCP"
      title="Gestionar una tarjeta de débito desde la app"
      summary="Trabajé mejoras en los flujos de consulta y configuración de tarjetas. Mi foco estuvo en ordenar las reglas del producto y explicar cada acción sin recargar las pantallas."
      role="Product Designer"
      scope="Discovery, flujos, interacción, interfaz, contenido y handoff"
      period="2022–2025"
      visual="bcp"
      nextHref="/sip-tarjetas-adicionales"
      nextTitle="Tarjetas adicionales en Sip"
    >
      <section className="case-section">
        <p className="section-kicker">Contexto</p>
        <h2>La misma acción podía cambiar según el estado de la tarjeta</h2>
        <p>
          Gestionar una tarjeta desde la app no siempre sigue un único camino. Algunas opciones dependen del estado de la tarjeta y otras necesitan validaciones o confirmaciones antes de ejecutarse. Mi trabajo fue traducir esas reglas a una experiencia que el cliente pudiera seguir sin conocer cómo funciona el sistema por dentro.
        </p>
        <div className="case-question">
          El reto no era agregar más información, sino mostrar la correcta justo cuando hacía falta.
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Mi trabajo</p>
        <h2>Pasé de las reglas del producto a flujos concretos</h2>
        <div className="case-grid">
          <article className="case-card">
            <span className="case-card__number">01</span>
            <h3>Levanté reglas y escenarios</h3>
            <p>Organicé qué acciones estaban disponibles, qué condiciones debían cumplirse y qué respuesta daba el sistema en cada caso.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">02</span>
            <h3>Diseñé el recorrido completo</h3>
            <p>Además del camino principal, trabajé validaciones, tiempos de espera, bloqueos, errores y confirmaciones.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">03</span>
            <h3>Ajusté la propuesta con el equipo</h3>
            <p>Revisé cada flujo con producto, negocio y desarrollo para resolver restricciones sin perder de vista lo que necesitaba el cliente.</p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Decisiones de diseño</p>
        <h2>Cuatro criterios que usé en los flujos</h2>
        <div className="decision-list">
          <div className="decision-item">
            <strong>01</strong>
            <div>
              <h3>Nombrar la acción sin ambigüedad</h3>
              <p>Botones y títulos debían decir exactamente qué se iba a consultar, activar, desactivar o confirmar.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>02</strong>
            <div>
              <h3>Anticipar las consecuencias</h3>
              <p>Antes de confirmar, la persona debía saber qué cambiaría en su tarjeta y cómo podía revertirlo cuando fuera posible.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>03</strong>
            <div>
              <h3>Usar patrones conocidos</h3>
              <p>Mantuve componentes y comportamientos ya presentes en la app para que las nuevas opciones no se sintieran ajenas.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>04</strong>
            <div>
              <h3>Dar una salida cuando algo fallaba</h3>
              <p>Los mensajes de error indicaban qué había ocurrido y qué podía hacer la persona, en lugar de dejarla en un punto muerto.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Interacción y contenido</p>
        <h2>Trabajé el flujo y los textos al mismo tiempo</h2>
        <p>
          En estas operaciones, cambiar una palabra podía modificar la manera en que se entendía una acción. Por eso revisé títulos, instrucciones, botones y confirmaciones junto con el comportamiento de cada pantalla, no como una capa añadida al final.
        </p>
        <div className="case-grid case-grid--two">
          <article className="case-card">
            <h3>Antes de confirmar</h3>
            <p>La persona debía reconocer qué tarjeta estaba gestionando, qué iba a cambiar y si existía alguna condición importante.</p>
          </article>
          <article className="case-card">
            <h3>Después de confirmar</h3>
            <p>El mensaje debía mencionar la acción realizada, mostrar el nuevo estado y ofrecer un siguiente paso cuando correspondía.</p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <div className="case-result">
          <p className="section-kicker text-white/60">Resultado</p>
          <h2>Flujos y casos alternos listos para desarrollo</h2>
          <p>
            Dejé documentados los recorridos, estados, textos y comportamientos necesarios para construir la propuesta. Esto permitió revisar escenarios concretos con el equipo y no quedarnos únicamente con la pantalla principal.
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
