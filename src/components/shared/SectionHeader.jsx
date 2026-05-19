export function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <header className={`section-header section-header-${align}`}>
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  )
}
