import React, { FC } from 'react';

export type ProjectVisualVariant = 'yanbal' | 'bcp' | 'sip';

interface Props {
  variant: ProjectVisualVariant;
  compact?: boolean;
}

const ProjectVisual: FC<Props> = ({ variant, compact = false }) => {
  const className = `project-visual project-visual--${variant}${compact ? ' project-visual--compact' : ''}`;

  if (variant === 'yanbal') {
    return (
      <div className={className} role="img" aria-label="Vista conceptual del flujo de incorporación de Yanbal">
        <span className="visual-brand">Yanbal</span>
        <div className="mock-phone mock-phone--yanbal">
          <div className="mock-header">
            <span>←</span>
            <span className="mock-logo">YANBAL</span>
            <span>•••</span>
          </div>
          <p className="mock-title">Datos de incorporación</p>
          <p className="mock-copy">Completa la información para continuar.</p>
          <div className="mock-progress"><span /></div>
          <div className="mock-input">Primer nombre</div>
          <div className="mock-input">Documento de identidad</div>
          <div className="mock-input">Celular</div>
          <div className="mock-button">Continuar</div>
        </div>
        <div className="mock-message">
          <strong>¡Todo listo!</strong><br />
          Tu incorporación avanzó. Continúa desde aquí →
        </div>
      </div>
    );
  }

  if (variant === 'bcp') {
    return (
      <div className={className} role="img" aria-label="Vista conceptual de gestión de tarjeta de débito BCP">
        <span className="visual-brand">BCP</span>
        <div className="mock-phone mock-phone--bcp">
          <div className="mock-header">
            <span>←</span>
            <span className="mock-logo">BCP</span>
            <span>•••</span>
          </div>
          <p className="mock-title">Mi tarjeta</p>
          <p className="mock-copy">Gestiona cómo y dónde usarla.</p>
          <div className="bank-card">
            <div className="bank-card__name">Débito</div>
            <div className="bank-card__number">•••• 4821</div>
          </div>
          <div className="mock-setting">
            <span>Compras por internet</span>
            <span className="mock-toggle" />
          </div>
          <div className="mock-setting">
            <span>Uso en el exterior</span>
            <span className="mock-toggle" />
          </div>
          <div className="mock-setting">
            <span>Bloqueo temporal</span>
            <span>→</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className} role="img" aria-label="Vista conceptual de tarjetas adicionales Sip">
      <span className="visual-brand">sip.</span>
      <div className="mock-phone mock-phone--sip-main">
        <div className="mock-header">
          <span>←</span>
          <span className="mock-logo">sip.</span>
          <span>•••</span>
        </div>
        <p className="mock-title">Tarjeta adicional</p>
        <p className="mock-copy">Una tarjeta para compartir, con control desde tu app.</p>
        <div className="sip-card">
          <div className="sip-card__logo">sip.</div>
          <div className="sip-card__type">Adicional · Visa</div>
        </div>
        <div className="mock-balance">
          <span>Línea compartida</span>
          <strong>Visible y bajo control</strong>
        </div>
        <div className="mock-button" style={{ background: '#0875ee' }}>Invitar por WhatsApp</div>
      </div>
      <div className="mock-phone mock-phone--sip-side">
        <div className="mock-header">
          <span>←</span>
          <span className="mock-logo">sip.</span>
          <span>•••</span>
        </div>
        <p className="mock-title">Mis movimientos</p>
        <p className="mock-copy">Actividad de tu tarjeta adicional.</p>
        <div className="mock-transaction"><span>Compra reciente</span></div>
        <div className="mock-transaction"><span>Pago presencial</span></div>
        <div className="mock-transaction"><span>Compra por internet</span></div>
      </div>
    </div>
  );
};

export default ProjectVisual;
