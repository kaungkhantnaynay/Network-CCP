import { testimonials } from '../data/testimonials'

const videoTestimonials = [
  {
    title: 'Member video testimonial',
    source: 'Facebook',
    href: 'https://web.facebook.com/share/v/18mxF7X6No/',
  },
  {
    title: 'Member video testimonial',
    source: 'Facebook',
    href: 'https://web.facebook.com/share/v/1LAaWNEuD7/',
  },
]

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

      <section className="testimonial-videos" aria-labelledby="testimonial-videos-title">
        <div className="testimonial-videos-header">
          <span>Video Testimonials</span>
          <h2 id="testimonial-videos-title">Watch member stories on Facebook.</h2>
        </div>
        <div className="testimonial-video-grid">
          {videoTestimonials.map((video) => (
            <article className="testimonial-video-card" key={video.href}>
              <div className="testimonial-video-preview" aria-hidden="true">
                <span />
              </div>
              <div>
                <span>{video.source}</span>
                <h3>{video.title}</h3>
                <a href={video.href} rel="noreferrer" target="_blank">
                  Watch video
                </a>
              </div>
            </article>
          ))}
        </div>
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
