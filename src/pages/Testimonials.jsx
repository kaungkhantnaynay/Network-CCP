import { useState } from 'react'
import { testimonialCategories, testimonials } from '../data/testimonials'

export function Testimonials() {
  const [activeCategory, setActiveCategory] = useState('all')

  const visibleTestimonials =
    activeCategory === 'all'
      ? testimonials
      : testimonials.filter((testimonial) => testimonial.category === activeCategory)

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
        <p>
          Demo-safe member stories showing how focused resume review, interview English,
          technical prep, and security training help candidates prepare for the next role.
        </p>
      </header>

      <div className="testimonials-filter-bar" aria-label="Testimonial filters">
        <span>Filter</span>
        {testimonialCategories.map((category) => (
          <button
            aria-pressed={activeCategory === category.id}
            className={`programs-filter-chip ${category.tone ?? ''} ${
              activeCategory === category.id ? 'active' : ''
            }`}
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            type="button"
          >
            {category.label}
          </button>
        ))}
        <strong>
          {visibleTestimonials.length}{' '}
          {visibleTestimonials.length === 1 ? 'story' : 'stories'}
        </strong>
      </div>

      <section className="testimonials-grid" aria-label="Member testimonial stories">
        {visibleTestimonials.map((testimonial) => (
          <article className={`testimonials-card ${testimonial.category}`} key={testimonial.id}>
            <header>
              <img src={testimonial.image} alt={testimonial.imageAlt} />
              <div>
                <span>{testimonial.tag}</span>
                <strong>{testimonial.outcome}</strong>
              </div>
            </header>
            <p>“{testimonial.quote}”</p>
            <footer>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </footer>
          </article>
        ))}
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
