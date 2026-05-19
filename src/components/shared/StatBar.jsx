export function StatBar({ stats }) {
  return (
    <section className="stat-bar" aria-label="Program statistics">
      {stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  )
}
