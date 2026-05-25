import { testimonials } from '../data/testimonials'

export function Testimonials() {
  return (
    <main className="testimonials-page" id="testimonials-page">
      <header className="testimonials-page-header">
        <div className="programs-eyebrow">
          <span aria-hidden="true" />
          <strong>Testimonials</strong>
        </div>
        <h1>
          Career progress stories from <span>Network CCP members.</span>
        </h1>
        <p>Real stories from members who improved their careers with Network CCP.</p>
      </header>

      <section className="testimonials-grid" aria-label="Member testimonial stories">
        {testimonials.map((testimonial, index) => {
          const testimonialKey = `${index}-${testimonial.name}-${testimonial.role}`

          return (
            <article className="testimonials-card" key={testimonialKey}>
              <header>
                <img src={testimonial.image} alt={`${testimonial.name} testimonial portrait`} />
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </header>
              <div className="testimonials-quote-wrap">
                <p>“{testimonial.quote}”</p>
              </div>
            </article>
          )
        })}
      </section>

      <section className="testimonials-cta" aria-labelledby="testimonials-cta-title">
        <div>
          <span>Start Your Plan</span>
          <h2 id="testimonials-cta-title">Build the story your next interview needs.</h2>
          <p>
            Start with a focused review of your resume, target role, interview readiness,
            and technical preparation path.
          </p>
        </div>
        <a href="#contact">Contact Network CCP</a>
      </section>
    </main>
  )
}
