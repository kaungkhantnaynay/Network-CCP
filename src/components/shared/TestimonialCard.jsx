export function TestimonialCard({ image, name, quote, role }) {
  return (
    <article className="testimonial-card">
      {image && <img src={image} alt={`${name} testimonial portrait`} />}
      <p>“{quote}”</p>
      <footer>
        <strong>{name}</strong>
        <span>{role}</span>
      </footer>
    </article>
  )
}
