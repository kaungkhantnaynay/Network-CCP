export function ProgramCard({ program }) {
  const trackClass = `program-card-${program.track ?? 'career'}`

  return (
    <article className={`program-card ${trackClass}`}>
      <div>
        <span>{program.category}</span>
        <h3>{program.title}</h3>
      </div>
      <p>{program.summary}</p>
      <strong>{program.outcome}</strong>
    </article>
  )
}
