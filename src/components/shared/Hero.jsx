export function Hero() {
  const topologyCallouts = [
    { label: 'Resume', value: 'ATS+', tone: 'teal', className: 'hero-node-resume' },
    { label: 'Routing', value: 'CCNP', tone: 'amber', className: 'hero-node-cert' },
    { label: 'English', value: 'Mock', tone: 'purple', className: 'hero-node-english' },
    { label: 'Firewall', value: 'Lab', tone: 'teal', className: 'hero-node-firewall' },
  ]

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-topology-callouts" aria-hidden="true">
        {topologyCallouts.map((callout) => (
          <div
            className={`topology-callout ${callout.className} callout-${callout.tone}`}
            key={callout.label}
          >
            <span>{callout.label}</span>
            <strong>{callout.value}</strong>
          </div>
        ))}
      </div>

      <div className="hero-copy">
        <div className="hero-status-rail">
          <span>Open Cohort</span>
          <span>Career + Network Track</span>
          <span>Weekly Prep</span>
        </div>
        <h1 id="hero-title">
          Network Career Coaching &
          <span> Technical Growth Program</span>
        </h1>
        <div className="hero-underline" aria-hidden="true" />
        <p>
          Build a stronger resume, sharper interview answers, smarter job application
          strategy, and deeper network/security confidence with guided weekly preparation.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#programs">
            Start Career Plan
          </a>
          <a className="secondary-action" href="#founder">
            View Process
          </a>
        </div>
      </div>
    </section>
  )
}
