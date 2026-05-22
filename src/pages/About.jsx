import { useState, useEffect, useRef } from "react";

// ─── Static Data ──────────────────────────────────────────────────────────────

const STATS = [
  { label: "Members Trained", value: 340, suffix: "+" },
  { label: "Cert Pass Rate", value: 94, suffix: "%" },
  { label: "Avg Salary Lift", value: 42, suffix: "%" },
  { label: "Industry Partners", value: 18, suffix: "" },
];

const MILESTONES = [
  {
    year: "2019",
    title: "Program Founded",
    desc: "Started as a small study group for CCNA candidates in Southeast Asia, focused on structured lab practice and real-world exam drills.",
  },
  {
    year: "2020",
    title: "Remote Expansion",
    desc: "Shifted fully online during the pandemic, which accelerated reach across Myanmar, Thailand, Singapore, and beyond.",
  },
  {
    year: "2021",
    title: "Career Coaching Added",
    desc: "Introduced resume enhancement, job portal strategy, and Interview English Masterclass based on member demand.",
  },
  {
    year: "2022",
    title: "Firewall & Security Track",
    desc: "Launched dedicated tracks for Firewall theory/lab, Advanced Network Security, and Cybersecurity theory to meet ISP and enterprise hiring needs.",
  },
  {
    year: "2023",
    title: "CCIE Lab Cohorts",
    desc: "Introduced intensive CCIE lab preparation cohorts with weekly guided sessions and peer review boards.",
  },
  {
    year: "2024",
    title: "IT Project Management",
    desc: "Added IT PM track aligned with PMP framework to serve members moving into senior network engineering leadership roles.",
  },
];

const VALUES = [
  {
    icon: "◈",
    color: "#00e5c3",
    title: "Precision over Volume",
    desc: "We cut through noise. Every session, resource, and template is curated for the actual hiring landscape—not generic advice.",
  },
  {
    icon: "◉",
    color: "#a78bfa",
    title: "Interview-Ready English",
    desc: "Technical skill alone doesn't close the offer. We build the communication confidence that gets members through hiring panels at global firms.",
  },
  {
    icon: "◆",
    color: "#f59e0b",
    title: "Lab-First Learning",
    desc: "Theory without practice is incomplete. We build every certification track around hands-on lab exercises that mirror real infrastructure.",
  },
  {
    icon: "◐",
    color: "#00e5c3",
    title: "Community Accountability",
    desc: "Members hold each other to weekly targets. Peer review, shared schedules, and cohort milestones outperform solo study every time.",
  },
];

const TEAM = [
  {
    name: "Kyaw Zin",
    role: "Lead Network Instructor · CCIE #62441",
    track: "Routing & Switching · SP · Security",
    initials: "KZ",
    color: "#00e5c3",
  },
  {
    name: "Aye Myat Thu",
    role: "Career Coach · Interview Specialist",
    track: "Resume · English Masterclass · Job Strategy",
    initials: "AT",
    color: "#a78bfa",
  },
  {
    name: "Zaw Myo Htet",
    role: "Security Track Lead · CCNP Security",
    track: "Firewall · Advanced NetSec · Cyber Theory",
    initials: "ZM",
    color: "#f59e0b",
  },
  {
    name: "Phyu Sin",
    role: "Program Coordinator · IT PM",
    track: "Scheduling · PMP Framework · Member Success",
    initials: "PS",
    color: "#00e5c3",
  },
];

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedCounter({ target, suffix, active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionLabel({ tag, title, subtitle }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          color: "#00e5c3",
          textTransform: "uppercase",
          border: "1px solid rgba(0,229,195,0.3)",
          padding: "2px 10px",
          borderRadius: "3px",
          display: "inline-block",
          marginBottom: "0.75rem",
        }}
      >
        {tag}
      </span>
      <h2
        style={{
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          color: "#e2eaf5",
          margin: "0 0 0.5rem",
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#7a8fa8",
            fontSize: "0.95rem",
            margin: 0,
            maxWidth: "540px",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function About() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const [activeYear, setActiveYear] = useState("2024");

  // Intersection observer for stats counter
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main
      id="about-page"
      style={{
        background: "#080d14",
        minHeight: "100vh",
        color: "#e2eaf5",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600&display=swap');

        * { box-sizing: border-box; }

        .about-grid-bg {
          background-image:
            radial-gradient(circle at 18% 28%, rgba(0,229,195,0.06) 0%, transparent 50%),
            radial-gradient(circle at 82% 68%, rgba(167,139,250,0.05) 0%, transparent 50%),
            linear-gradient(rgba(0,229,195,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,195,0.03) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 36px 36px, 36px 36px;
        }

        .milestone-item {
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .milestone-item:hover .milestone-year {
          color: #00e5c3 !important;
        }

        .value-card {
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          padding: 1.5rem;
          background: rgba(13,24,40,0.7);
          transition: border-color 0.25s ease, transform 0.25s ease;
        }
        .value-card:hover {
          border-color: rgba(0,229,195,0.25);
          transform: translateY(-2px);
        }

        .team-card {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 8px;
          padding: 1.5rem;
          background: #0d1828;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          transition: border-color 0.25s ease;
        }
        .team-card:hover {
          border-color: rgba(0,229,195,0.2);
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #00e5c3;
          color: #080d14;
          font-family: 'DM Mono', monospace;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          padding: 0.65rem 1.4rem;
          border-radius: 4px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .cta-btn:hover { opacity: 0.85; transform: translateY(-1px); }

        .cta-btn-ghost {
          background: transparent;
          color: #00e5c3;
          border: 1px solid rgba(0,229,195,0.4);
        }
        .cta-btn-ghost:hover { background: rgba(0,229,195,0.07); opacity: 1; }

        @media (max-width: 768px) {
          .about-hero-grid { flex-direction: column !important; }
          .stats-row { grid-template-columns: 1fr 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: 1fr !important; }
          .timeline-row { flex-direction: column !important; gap: 0 !important; }
          .timeline-nav { flex-direction: row !important; overflow-x: auto; border-right: none !important; border-bottom: 1px solid rgba(0,229,195,0.12) !important; }
          .timeline-nav-item { border-right: none !important; border-bottom: 2px solid transparent; white-space: nowrap; }
        }
      `}</style>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section
        className="about-grid-bg"
        style={{ padding: "5rem 1.5rem 4rem", position: "relative", overflow: "hidden" }}
      >
        {/* Node motif decoration */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "2rem",
            right: "3rem",
            width: "260px",
            height: "260px",
            opacity: 0.12,
            pointerEvents: "none",
          }}
        >
          <svg viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="130" cy="130" r="80" stroke="#00e5c3" strokeWidth="0.8" strokeDasharray="4 6" />
            <circle cx="130" cy="130" r="120" stroke="#00e5c3" strokeWidth="0.5" strokeDasharray="2 10" />
            {[0, 60, 120, 180, 240, 300].map((deg, i) => {
              const r = 80;
              const x = 130 + r * Math.cos((deg * Math.PI) / 180);
              const y = 130 + r * Math.sin((deg * Math.PI) / 180);
              return <circle key={i} cx={x} cy={y} r="4" fill="#00e5c3" />;
            })}
            <line x1="130" y1="50" x2="130" y2="210" stroke="#00e5c3" strokeWidth="0.4" />
            <line x1="50" y1="130" x2="210" y2="130" stroke="#00e5c3" strokeWidth="0.4" />
          </svg>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              color: "#00e5c3",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            ◈ Network CCP / About
          </span>

          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 4.6rem)",
              lineHeight: 0.98,
              margin: "0 0 1rem",
              maxWidth: "40rem",
            }}
          >
            <span style={{ color: "#00e5c3" }}>Empowering</span>{" "}
            your success.
          </h1>

          <p
            style={{
              color: "#7a8fa8",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "580px",
              margin: "0 0 2rem",
            }}
          >
            Network CCP is a structured career coaching and technical training program for network and security engineers in Southeast Asia and beyond. We combine certification prep, resume strategy, and interview coaching into one cohesive program.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a className="cta-btn" href="#programs">Explore Programs →</a>
            <a className="cta-btn cta-btn-ghost" href="#contact">Contact the Team</a>
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────────────────── */}
      <section ref={statsRef} style={{ padding: "3rem 1.5rem", background: "#0b1520", borderTop: "1px solid rgba(0,229,195,0.08)", borderBottom: "1px solid rgba(0,229,195,0.08)" }}>
        <div
          className="stats-row"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "1.5rem 2rem",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  fontWeight: 500,
                  color: "#00e5c3",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                <AnimatedCounter target={s.value} suffix={s.suffix} active={statsVisible} />
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  color: "#4a6280",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mission ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "4rem", alignItems: "flex-start", flexWrap: "wrap" }} className="about-hero-grid">
          <div style={{ flex: "1 1 340px" }}>
            <SectionLabel
              tag="// Mission"
              title="Why Network CCP exists"
              subtitle="Most training programs teach the exam. We prepare you for the career."
            />
            <p style={{ color: "#7a8fa8", lineHeight: 1.75, marginBottom: "1rem", fontSize: "0.95rem" }}>
              Passing a CCNA or CCNP exam is a milestone, not a destination. We saw too many certified engineers struggle to land roles because their resume didn't reflect their capability, or they couldn't hold a technical conversation in English under interview pressure.
            </p>
            <p style={{ color: "#7a8fa8", lineHeight: 1.75, fontSize: "0.95rem" }}>
              Network CCP wraps certification prep inside a career-first program. Lab sessions, resume reviews, application strategy, and interview coaching happen in the same cohort so you graduate ready to interview—not just certified.
            </p>
          </div>

          <div style={{ flex: "1 1 320px" }}>
            {/* Callout panel */}
            <div
              style={{
                background: "#0d1828",
                border: "1px solid rgba(0,229,195,0.15)",
                borderRadius: "8px",
                padding: "1.75rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.68rem",
                  color: "#00e5c3",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                ◈ What sets us apart
              </div>
              {[
                "Structured career planning from day one",
                "Resume analysis with real recruiter feedback",
                "Interview English coached by practitioners",
                "Lab-first certification tracks (CCNA → CCIE)",
                "Advanced Security & Firewall specializations",
                "Weekly cohort sessions with peer accountability",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.65rem",
                    marginBottom: "0.75rem",
                    fontSize: "0.88rem",
                    color: "#b0c4d8",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: "#00e5c3", fontFamily: "monospace", marginTop: "1px", flexShrink: 0 }}>▸</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ────────────────────────────────────────────────────────── */}
      <section style={{ padding: "0 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionLabel
            tag="// History"
            title="How we got here"
            subtitle="Six years of iteration, guided by what actually gets members hired."
          />

          <div className="timeline-row" style={{ display: "flex", gap: "2rem" }}>
            {/* Year nav */}
            <div
              className="timeline-nav"
              style={{
                display: "flex",
                flexDirection: "column",
                borderRight: "1px solid rgba(0,229,195,0.12)",
                paddingRight: "1.5rem",
                minWidth: "90px",
                gap: "0",
              }}
            >
              {MILESTONES.map((m) => (
                <button
                  key={m.year}
                  className="timeline-nav-item milestone-item"
                  onClick={() => setActiveYear(m.year)}
                  style={{
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    padding: "0.6rem 0.5rem 0.6rem 0",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.78rem",
                    cursor: "pointer",
                    color: activeYear === m.year ? "#00e5c3" : "#3a5070",
                    borderRight: activeYear === m.year ? "2px solid #00e5c3" : "2px solid transparent",
                    marginRight: "-1px",
                    transition: "color 0.2s ease",
                    letterSpacing: "0.04em",
                  }}
                >
                  {m.year}
                </button>
              ))}
            </div>

            {/* Content */}
            <div style={{ flex: 1, paddingTop: "0.3rem" }}>
              {MILESTONES.filter((m) => m.year === activeYear).map((m) => (
                <div key={m.year}>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.35rem",
                      color: "#e2eaf5",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {m.title}
                  </div>
                  <p style={{ color: "#7a8fa8", lineHeight: 1.75, fontSize: "0.95rem", maxWidth: "520px" }}>
                    {m.desc}
                  </p>
                </div>
              ))}

              {/* Progress dots */}
              <div style={{ display: "flex", gap: "0.4rem", marginTop: "2rem" }}>
                {MILESTONES.map((m) => (
                  <button
                    key={m.year}
                    onClick={() => setActiveYear(m.year)}
                    style={{
                      width: activeYear === m.year ? "24px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      background: activeYear === m.year ? "#00e5c3" : "rgba(0,229,195,0.2)",
                      border: "none",
                      cursor: "pointer",
                      transition: "width 0.25s ease, background 0.25s ease",
                      padding: 0,
                    }}
                    aria-label={m.year}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: "0 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionLabel
            tag="// Values"
            title="What we stand for"
          />
          <div
            className="values-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
            }}
          >
            {VALUES.map((v) => (
              <div key={v.title} className="value-card">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "1.2rem", color: v.color, fontFamily: "monospace" }}>{v.icon}</span>
                  <span
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "#e2eaf5",
                    }}
                  >
                    {v.title}
                  </span>
                </div>
                <p style={{ color: "#7a8fa8", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ────────────────────────────────────────────────────────────── */}
      <section style={{ padding: "0 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionLabel
            tag="// Team"
            title="The people behind the program"
            subtitle="Practitioners who coach from experience, not just curriculum."
          />
          <div
            className="team-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
            }}
          >
            {TEAM.map((member) => (
              <div key={member.name} className="team-card">
                {/* Avatar */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "6px",
                    background: `rgba(${member.color === "#00e5c3" ? "0,229,195" : member.color === "#a78bfa" ? "167,139,250" : "245,158,11"},0.12)`,
                    border: `1px solid ${member.color}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.75rem",
                    color: member.color,
                    fontWeight: 500,
                  }}
                >
                  {member.initials}
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "#e2eaf5",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {member.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                      color: member.color,
                      letterSpacing: "0.03em",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {member.role}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#4a6280",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {member.track}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Program Quote ───────────────────────────────────────────────────── */}
      <section style={{ padding: "0 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #0d1828 0%, #0a1520 100%)",
              border: "1px solid rgba(0,229,195,0.18)",
              borderRadius: "8px",
              padding: "3rem 2.5rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative teal glow */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                right: "-60px",
                top: "-60px",
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0,229,195,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", maxWidth: "760px" }}>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.68rem",
                  color: "#00e5c3",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "0.6rem",
                }}
              >
                ◈ Program principle
              </div>
              <blockquote
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.15rem, 3vw, 1.75rem)",
                  lineHeight: 1.35,
                  color: "#e2eaf5",
                  margin: "0",
                }}
              >
                "Network CCP is not only about passing exams; it is about building
                the clarity, confidence, and lab discipline to speak like the
                engineer you are becoming."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
