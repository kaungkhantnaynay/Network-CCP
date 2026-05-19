export function FounderPanel() {
  return (
    <section className="founder-panel" id="founder" aria-labelledby="founder-title">
      <div className="founder-avatar" aria-hidden="true">
        NCCP
      </div>
      <div>
        <span className="section-eyebrow">About the Founder</span>
        <h2 id="founder-title">Built by a network career mentor for practical outcomes.</h2>
        <p>
          The founder’s approach combines career coaching, resume storytelling, technical
          theory, and interview practice so members can connect their real skills to the
          roles they want.
        </p>
        <dl className="founder-points">
          <div>
            <dt>Coaching Style</dt>
            <dd>Direct, structured, and role-focused.</dd>
          </div>
          <div>
            <dt>Technical Focus</dt>
            <dd>Networking, firewall, security, services, and IT delivery.</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
