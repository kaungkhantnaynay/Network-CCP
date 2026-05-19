import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

export function Home() {
  const regionRef = useRef(null)
  const regionSplitTweenRef = useRef(null)

  const primaryPrograms = [
    {
      title: 'CAREER & RESUME',
      summary: 'Career planning, resume key point analysis, review, and full resume enhancement.',
      tone: 'career',
      href: '#programs',
    },
    {
      title: 'INTERVIEW & ENGLISH',
      summary: 'Interview English, communication practice, answer structure, and mock interview prep.',
      tone: 'interview',
      href: '#programs',
    },
    {
      title: 'TECHNICAL TRAINING',
      summary: 'CCNA to CCIE, firewall labs, security theory, services, and IT project management.',
      tone: 'technical',
      href: '#programs',
    },
  ]

  const countryCoverage = [
    {
      country: 'Malaysia',
      flag: '🇲🇾',
      note: 'Enterprise network support, NOC roles, telecom operations, and firewall administration are strong targets for resume positioning.',
    },
    {
      country: 'Singapore',
      flag: '🇸🇬',
      note: 'High expectations for concise resumes, interview clarity, cloud-aware networking, cybersecurity basics, and vendor certification signals.',
    },
    {
      country: 'Dubai',
      flag: '🇦🇪',
      note: 'Relevant for data center support, MSP environments, IT operations, security projects, and English communication for client-facing roles.',
    },
    {
      country: 'Thailand',
      flag: '🇹🇭',
      note: 'Good fit for regional network engineering, managed services, SOC support paths, and practical weekly preparation for job applications.',
    },
  ]

  const testimonials = [
    {
      quote:
        'The resume review made my network experience easier to understand. I finally knew which projects and certifications to highlight.',
      name: 'Aung Min',
      role: 'Network Support Candidate',
    },
    {
      quote:
        'Interview practice helped me answer in English with structure instead of memorizing random sentences. That changed my confidence.',
      name: 'Thiri Htet',
      role: 'Junior Network Engineer',
    },
    {
      quote:
        'The weekly technical prep connected CCNA, firewall basics, and real job questions in a way that felt practical for applications.',
      name: 'Nay Lin',
      role: 'Security Operations Trainee',
    },
  ]

  useEffect(() => {
    const region = regionRef.current
    if (!region) {
      return undefined
    }

    let splitInstance
    let isActive = true
    const splitTargets = region.querySelectorAll('.region-mask-text')

    const createRegionSplit = () => {
      if (!isActive) {
        return
      }

      gsap.set(splitTargets, { opacity: 1 })

      splitInstance = SplitText.create(splitTargets, {
        type: 'words,lines',
        linesClass: 'region-mask-line',
        autoSplit: true,
        mask: 'lines',
        onSplit: (self) => {
          regionSplitTweenRef.current?.kill()
          regionSplitTweenRef.current = gsap.from(self.lines, {
            duration: 0.6,
            yPercent: 100,
            opacity: 0,
            stagger: 0.08,
            ease: 'expo.out',
          })

          return regionSplitTweenRef.current
        },
      })
    }

    const fontsReady = document.fonts?.ready ?? Promise.resolve()
    fontsReady.then(createRegionSplit)

    return () => {
      isActive = false
      regionSplitTweenRef.current?.kill()
      splitInstance?.revert()
    }
  }, [])

  const replayCountryReveal = () => {
    regionSplitTweenRef.current?.timeScale(0.2).play(0)
  }

  return (
    <main className="hero-home" id="home">
      <section className="network-hero" aria-labelledby="network-hero-title">
        <div className="network-hero-copy">
          <span className="network-kicker">Network Career Coaching Program</span>
          <h1 id="network-hero-title">Build your network career with a clearer plan.</h1>
          <p>
            A focused coaching path for resumes, job applications, interview English,
            and practical network/security preparation.
          </p>
        </div>

        <div className="coaching-visual" aria-label="Animated network coaching visual">
          <div className="visual-orbit visual-orbit-one" />
          <div className="visual-orbit visual-orbit-two" />
          <div className="mentor-node">
            <span>Coach</span>
          </div>
          <div className="learner-node learner-resume">
            <span>Resume</span>
          </div>
          <div className="learner-node learner-interview">
            <span>Interview</span>
          </div>
          <div className="learner-node learner-network">
            <span>Network</span>
          </div>
          <div className="learner-node learner-communication">
            <span>Communication</span>
          </div>
          <div className="connection-line line-resume" />
          <div className="connection-line line-interview" />
          <div className="connection-line line-network" />
          <div className="connection-line line-communication" />
        </div>

        <div className="credential-strip" aria-label="Network CCP credentials">
          <div>
            <strong>500+</strong>
            <span>Active Members</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Countries Covered</span>
          </div>
          <div>
            <strong>CCNA→CCIE</strong>
            <span>Technical Range</span>
          </div>
          <div>
            <strong>Weekly</strong>
            <span>Live Sessions</span>
          </div>
          <div>
            <strong>14</strong>
            <span>Program Tracks</span>
          </div>
        </div>
      </section>

      <section className="primary-programs" id="services" aria-labelledby="primary-programs-title">
        <div className="primary-programs-header">
          <span>Primary Programs</span>
          <h2 id="primary-programs-title">Choose the track that matches your next career move.</h2>
        </div>
        <div className="primary-program-grid">
          {primaryPrograms.map((program) => (
            <a
              className={`primary-program-card primary-program-${program.tone}`}
              href={program.href}
              key={program.title}
            >
              <span>{program.title}</span>
              <p>{program.summary}</p>
              <strong>View details in Programs</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="founder-summary" id="about" aria-labelledby="founder-summary-title">
        <div className="founder-photo-card">
          <div className="founder-photo" role="img" aria-label="Founder portrait placeholder">
            <span>NCCP</span>
          </div>
        </div>
        <div className="founder-summary-copy">
          <span>About the Founder</span>
          <h2 id="founder-summary-title">Practical coaching for network career growth.</h2>
          <p>
            Network CCP is guided by a career-first mentoring approach: clarify the target
            role, improve the resume signal, practice interview communication, and connect
            technical learning to real hiring conversations.
          </p>
        </div>
      </section>

      <section
        className="region-coverage"
        id="country-coverage"
        ref={regionRef}
        aria-labelledby="region-coverage-title"
      >
        <div className="region-coverage-header">
          <span>Country Coverage</span>
          <h2 className="region-mask-text" id="region-coverage-title">
            Regional preparation for where members apply.
          </h2>
          <p className="region-mask-text">
            Network CCP keeps coaching practical by connecting resume, interview, and
            technical preparation to common hiring signals across target markets.
          </p>
          <button className="region-replay-button" type="button" onClick={replayCountryReveal}>
            Replay reveal
          </button>
        </div>

        <div className="region-grid">
          {countryCoverage.map((region) => (
            <article className="region-card" key={region.country}>
              <div className="region-flag" aria-hidden="true">
                {region.flag}
              </div>
              <div>
                <h3 className="region-mask-text">{region.country}</h3>
                <p className="region-mask-text">{region.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-testimonials" id="testimonials" aria-labelledby="quote-testimonials-title">
        <div className="quote-testimonials-header">
          <span>Testimonials</span>
          <h2 id="quote-testimonials-title">Clearer preparation, stronger career signals.</h2>
          <a href="#testimonials">View more stories</a>
        </div>

        <div className="quote-grid">
          {testimonials.map((testimonial) => (
            <article className="quote-card" key={testimonial.name}>
              <p>“{testimonial.quote}”</p>
              <footer>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta" id="contact" aria-labelledby="home-cta-title">
        <div>
          <span>Start Your Plan</span>
          <h2 id="home-cta-title">Ready to build a sharper career direction?</h2>
          <p>
            Begin with a simple review of your resume, target role, interview readiness,
            and technical preparation path.
          </p>
        </div>
        <a href="mailto:networkccp@example.com">Contact Network CCP</a>
      </section>
    </main>
  )
}
