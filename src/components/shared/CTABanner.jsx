export function CTABanner({ title, description, primaryAction, secondaryAction }) {
  return (
    <section className="cta-banner" id="contact" aria-labelledby="final-cta-title">
      <div>
        <span className="section-eyebrow">Next Step</span>
        <h2 id="final-cta-title">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="cta-actions">
        <a className="primary-action" href={primaryAction.href}>
          {primaryAction.label}
        </a>
        <a className="secondary-action" href={secondaryAction.href}>
          {secondaryAction.label}
        </a>
      </div>
    </section>
  )
}
