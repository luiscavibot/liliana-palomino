import type { NextPage } from 'next';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const SipCase: NextPage = () => {
  return (
    <CaseStudyLayout
      brand="Sip"
      title="Tarjetas adicionales para quien la pide y quien la usa"
      summary="Diseñé cómo el titular solicita y administra una tarjeta adicional, y cómo la persona invitada la recibe, la encuentra en su app y consulta sus movimientos."
      role="Product Designer"
      scope="Flujos de titular y adicional, interacción, UX writing y alineamiento con negocio y tecnología"
      period="2026"
      visual="sip"
      nextHref="/yanbal"
      nextTitle="Incorporación digital en Yanbal"
    >
      <section className="case-section">
        <p className="section-kicker">Contexto</p>
        <h2>El titular la solicita, pero otra persona la recibe y la usa</h2>
        <p>
          El titular sigue siendo responsable de la línea de crédito y necesita saber qué ocurre con todas sus tarjetas. La persona adicional, en cambio, necesita reconocer su tarjeta, consultar sus propios movimientos y entender qué puede gestionar desde su app. El producto debía responder a ambos sin confundir sus responsabilidades.
        </p>
        <div className="case-question">
          Tenía que conectar dos recorridos distintos y explicar con cuidado qué se comparte y qué controla cada persona.
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Los dos recorridos</p>
        <h2>Diseñé la experiencia desde ambos lados</h2>
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
            <h3>Para el titular</h3>
            <p>Trabajé la solicitud, el ingreso de los datos del adicional, la invitación, los permisos, los movimientos y la cancelación.</p>
          </article>
          <article className="case-card role-card">
            <span className="case-card__number">A</span>
            <h3>Para la persona adicional</h3>
            <p>Diseñé la llegada a la app, el primer ingreso, la visualización de su tarjeta y la consulta de los movimientos que le correspondían.</p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">La decisión más delicada</p>
        <h2>El adicional no tenía una línea propia</h2>
        <p>
          Todas las tarjetas usaban la misma línea de crédito. Mostrar un “monto disponible” dentro de la tarjeta adicional podía hacer pensar que existía un dinero reservado solo para esa persona, cuando no era así. Decidí no mostrarlo y prioricé sus movimientos junto con una explicación sencilla de la línea compartida.
        </p>
        <div className="decision-list">
          <div className="decision-item">
            <strong>01</strong>
            <div>
              <h3>Explicar cómo se comparte la línea</h3>
              <p>Incluí una explicación breve durante la solicitud y un espacio de “Más información” para quien necesitara revisar el detalle.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>02</strong>
            <div>
              <h3>Separar las acciones por rol</h3>
              <p>Definí qué podía ver y configurar el titular, y qué acciones podía realizar la persona adicional sobre su propia tarjeta.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>03</strong>
            <div>
              <h3>Conectar la invitación con el primer ingreso</h3>
              <p>El WhatsApp explicaba quién enviaba la invitación y qué debía hacer. Al entrar a la app, una bienvenida retomaba ese contexto.</p>
            </div>
          </div>
          <div className="decision-item">
            <strong>04</strong>
            <div>
              <h3>Diseñar también el cierre</h3>
              <p>Trabajé el bloqueo, la cancelación y sus motivos para que ambos roles entendieran qué ocurría con la tarjeta.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">Cambios durante el proyecto</p>
        <h2>La propuesta tuvo que adaptarse a nuevas restricciones</h2>
        <p>
          Al inicio se contemplaba entregar una tarjeta virtual y ofrecer la física como opción. Cuando vimos que la tarjeta virtual probablemente no sería viable, reorganicé el recorrido para una entrega física directa y ajusté los mensajes para no prometer algo que el producto no podría cumplir.
        </p>
        <div className="case-grid">
          <article className="case-card">
            <span className="case-card__number">01</span>
            <h3>Durante la solicitud</h3>
            <p>Ajusté los textos sobre los datos del adicional, la línea compartida y la forma en que recibiría su tarjeta.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">02</span>
            <h3>Después de recibirla</h3>
            <p>Conecté el primer ingreso con la aparición de la tarjeta en la app y el acceso a sus movimientos.</p>
          </article>
          <article className="case-card">
            <span className="case-card__number">03</span>
            <h3>Otros escenarios</h3>
            <p>Integré el aumento de línea y el mensaje para adicionales que también podían acceder a una tarjeta como titulares.</p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <div className="case-result">
          <p className="section-kicker text-white/60">Resultado</p>
          <h2>Un recorrido completo para solicitarla, recibirla y gestionarla</h2>
          <p>
            Dejé documentados los flujos de ambos roles, los textos, permisos y casos alternos. La propuesta cubría desde la solicitud y la invitación hasta el uso posterior, incluyendo los cambios que aparecieron durante el proyecto.
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
