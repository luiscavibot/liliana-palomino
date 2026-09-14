import type { NextPage } from 'next';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const SipCase: NextPage = () => {
  return (
    <CaseStudyLayout
      brand="Sip"
      title="Tarjetas adicionales sin perder el control"
      summary="Diseñé la experiencia del titular y del adicional para compartir una línea de crédito con reglas claras, autonomía suficiente y control visible."
      role="Product Designer"
      scope="Journey de dos actores, interacción, UX writing y alineamiento negocio–tecnología"
      period="2026"
      visual="sip"
      nextHref="/yanbal"
      nextTitle="Incorporación digital en Yanbal"
    >
      <section className="case-section">
        <p className="section-kicker">Contexto</p>
        <h2>Una sola línea de crédito, dos experiencias diferentes</h2>
        <p>
          Una tarjeta adicional permite extender el uso del crédito a otra persona, pero no crea una relación simétrica. El titular conserva la responsabilidad y el control; el adicional necesita autonomía para usar su tarjeta y entender sus movimientos. Si esa diferencia no se explica bien, aparecen dudas sobre permisos, consumos y dinero disponible.
        </p>
        <div className="case-question">
          ¿Cómo damos autonomía al adicional sin que el titular pierda visibilidad ni control sobre una línea compartida?
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Journey conectado</p>
        <h2>Diseñé el recorrido de ambos lados</h2>
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
            <div className="journey-step">Se incorpora</div>
            <div className="journey-step">Activa</div>
            <div className="journey-step">Consulta</div>
          </div>
        </div>
        <div className="case-grid case-grid--two">
          <article className="case-card role-card">
            <span className="case-card__number">T</span>
            <h3>Lo que necesita el titular</h3>
            <p>Solicitar, entender la línea compartida, reconocer consumos, administrar permisos y resolver bloqueo o cancelación.</p>
          </article>
          <article className="case-card role-card">
            <span className="case-card__number">A</span>
            <h3>Lo que necesita el adicional</h3>
            <p>Aceptar la invitación, completar su primer ingreso, reconocer su tarjeta, consultar movimientos y saber qué puede gestionar.</p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Complejidad clave</p>
        <h2>Explicar una línea compartida sin inventar un saldo separado</h2>
        <p>
          El producto no asignaba una línea independiente al adicional. Por eso evité mostrar un “monto disponible” que pudiera interpretarse como dinero reservado exclusivamente para esa tarjeta. La experiencia priorizó movimientos, relación con el titular y una explicación accesible de cómo se comparte la línea.
        </p>
        <div className="decision-list">
          <div className="decision-item">
            <strong>01</strong>
            <div>
              <h3>Invitación con continuidad</h3>
              <p>El mensaje de WhatsApp explica quién invita, para qué sirve la tarjeta y cuál es la siguiente acción segura.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>02</strong>
            <div>
              <h3>Información progresiva</h3>
              <p>Una hoja de “Más información” aclara la relación entre línea y tarjetas sin recargar el momento de solicitud.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>03</strong>
            <div>
              <h3>Permisos por rol</h3>
              <p>Definí qué acciones corresponden al titular y cuáles puede realizar el adicional, haciendo visibles los límites antes de generar frustración.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>04</strong>
            <div>
              <h3>Primer ingreso con contexto</h3>
              <p>La bienvenida conecta la invitación recibida con la tarjeta que aparece en la app y orienta la primera tarea.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Diseñar con restricciones</p>
        <h2>Cuando cambió la viabilidad, rediseñé la promesa</h2>
        <p>
          Una restricción técnica hizo que la opción virtual dejara de ser viable. Reorganicé el recorrido alrededor de la tarjeta física para que la experiencia siguiera siendo coherente: ajusté expectativas, confirmaciones, entrega y acceso posterior sin presentar el cambio como una degradación improvisada.
        </p>
        <div className="case-grid">
          <article className="case-card">
            <span className="case-card__number">01</span>
            <h3>Repriorizar</h3>
            <p>Identifiqué qué valor debía conservarse aunque cambiara el soporte de la tarjeta.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">02</span>
            <h3>Reescribir</h3>
            <p>Ajusté promesas y mensajes para no crear expectativas que el producto no podía cumplir.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">03</span>
            <h3>Realinear</h3>
            <p>Actualicé flujo y documentación para mantener sincronizados negocio, diseño y desarrollo.</p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <div className="case-result">
          <p className="section-kicker text-white/60">Resultado</p>
          <h2>Una experiencia coherente para compartir, usar y controlar</h2>
          <p>
            La propuesta conectó solicitud, invitación, incorporación y gestión posterior en un sistema entendible para ambos roles. Las decisiones de permisos, contenido y visualización de movimientos quedaron documentadas junto con sus excepciones y restricciones.
          </p>
        </div>
        <p className="case-note">
          Este caso muestra la lógica de diseño sin exponer información de clientes, cifras internas ni pantallas de trabajo. Los visuales son conceptuales.
        </p>
      </section>
    </CaseStudyLayout>
  );
};

export default SipCase;
