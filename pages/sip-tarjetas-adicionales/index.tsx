import type { NextPage } from 'next';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const SipCase: NextPage = () => {
  return (
    <CaseStudyLayout
      brand="Sip"
      title="Definir tarjetas adicionales como un producto para dos personas"
      summary="Diseñé la experiencia de principio a fin para el titular y el adicional, incluyendo reglas, permisos, movimientos, onboarding y cambios en el alcance técnico."
      role="Product Designer"
      scope="Definición del journey, arquitectura de flujos, reglas por rol, prototipado, UI y handoff"
      period="2026"
      visual="sip"
      nextHref="/yanbal"
      nextTitle="Incorporación digital en Yanbal"
    >
      <section className="case-section">
        <p className="section-kicker">Reto de producto</p>
        <h2>Una tarjeta adicional crea dos experiencias que deben funcionar juntas</h2>
        <p>
          El titular solicita la tarjeta, conserva la responsabilidad sobre la línea y administra ciertos permisos. La persona adicional la recibe, la usa y consulta sus propios movimientos. El producto tenía que responder a ambos sin mezclar sus responsabilidades ni mostrar información que pudiera interpretarse de forma incorrecta.
        </p>
        <div className="case-question">
          El reto fue definir qué veía y qué podía hacer cada persona durante todo el ciclo de vida de la tarjeta.
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Arquitectura del servicio</p>
        <h2>Dos journeys dentro de un mismo producto</h2>
        <div className="journey" aria-label="Recorridos conectados de titular y adicional">
          <div className="journey-row">
            <strong>Titular</strong>
            <div className="journey-step">Solicita</div>
            <div className="journey-step">Invita</div>
            <div className="journey-step">Configura</div>
            <div className="journey-step">Supervisa</div>
          </div>
          <div className="journey-row">
            <strong>Adicional</strong>
            <div className="journey-step">Recibe</div>
            <div className="journey-step">Ingresa</div>
            <div className="journey-step">Activa</div>
            <div className="journey-step">Consulta</div>
          </div>
        </div>
        <div className="case-grid case-grid--two">
          <article className="case-card role-card">
            <span className="case-card__number">T</span>
            <h3>Recorrido del titular</h3>
            <p>Incluía solicitud, datos del adicional, invitación, administración de permisos, revisión de movimientos, bloqueo y cancelación.</p>
          </article>
          <article className="case-card role-card">
            <span className="case-card__number">A</span>
            <h3>Recorrido del adicional</h3>
            <p>Incluía incorporación a la app, primer ingreso, activación, visualización de la tarjeta y consulta de sus movimientos.</p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Regla que definió la experiencia</p>
        <h2>La línea era compartida; el saldo no pertenecía a una sola tarjeta</h2>
        <p>
          El producto no asignaba una línea independiente al adicional. Mostrar un “monto disponible” dentro de su tarjeta habría dado a entender que ese dinero estaba reservado para su uso. Decidí no mostrarlo y prioricé la información que sí podía interpretar correctamente: sus movimientos y la relación con la tarjeta del titular.
        </p>
        <div className="decision-list">
          <div className="decision-item">
            <strong>01</strong>
            <div>
              <h3>Permisos definidos por rol</h3>
              <p>Organicé qué podía consultar o configurar el titular y qué acciones correspondían al adicional sobre su propia tarjeta.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>02</strong>
            <div>
              <h3>Información progresiva sobre la línea</h3>
              <p>La explicación principal era breve y se complementaba con un espacio de detalle para quien necesitara entender cómo se compartía el crédito.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>03</strong>
            <div>
              <h3>Continuidad entre invitación y onboarding</h3>
              <p>La invitación por WhatsApp daba inicio al recorrido del adicional y la bienvenida en la app retomaba ese mismo contexto.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>04</strong>
            <div>
              <h3>Gestión durante todo el ciclo</h3>
              <p>La propuesta contempló uso, consulta, cambios de configuración, bloqueo y cancelación, no solo el momento de solicitud.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Decisiones y restricciones</p>
        <h2>El alcance cambió y el flujo tuvo que cambiar con él</h2>
        <p>
          La propuesta inicial combinaba una tarjeta virtual inmediata con la opción de pedir una física. Cuando la generación de la tarjeta virtual dejó de ser viable, reorganicé el recorrido para una entrega física directa. También ajusté los estados y expectativas posteriores para que el cambio no dejara partes del journey sin resolver.
        </p>
        <div className="case-grid">
          <article className="case-card">
            <span className="case-card__number">01</span>
            <h3>Revisé el valor principal</h3>
            <p>Separé lo que dependía del formato de la tarjeta de lo que debía mantenerse para ambos roles.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">02</span>
            <h3>Actualicé el journey completo</h3>
            <p>Ajusté solicitud, confirmación, entrega, primer ingreso y gestión posterior, no solo la pantalla donde aparecía la restricción.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">03</span>
            <h3>Integré escenarios relacionados</h3>
            <p>Incluí el aumento de línea y el caso en que un adicional podía acceder a una tarjeta como titular.</p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <div className="case-result">
          <p className="section-kicker text-white/60">Resultado</p>
          <h2>Una definición completa del producto y sus reglas</h2>
          <p>
            Dejé documentados los journeys, flujos, permisos, estados, textos y casos alternos de ambos roles. La propuesta conectaba la solicitud con el uso posterior y podía adaptarse a las decisiones técnicas que aparecieron durante el proyecto.
          </p>
        </div>
        <p className="case-note">
          Por confidencialidad, este caso no muestra datos de clientes, cifras internas ni pantallas de trabajo. Los visuales son referenciales.
        </p>
      </section>
    </CaseStudyLayout>
  );
};

export default SipCase;
