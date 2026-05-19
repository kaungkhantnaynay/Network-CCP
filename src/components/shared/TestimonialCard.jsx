export function TestimonialCard({ quote, name, role }) {
  return (
    <article className="testimonial-card">
      <p>“{quote}”</p>
      <footer>
        <strong>{name}</strong>
        <span>{role}</span>
      </footer>
    </article>
  )
}
