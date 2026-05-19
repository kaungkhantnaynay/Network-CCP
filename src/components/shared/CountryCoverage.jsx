export function CountryCoverage({ countries }) {
  return (
    <section className="country-coverage" id="knowledge" aria-labelledby="country-title">
      <div>
        <span className="section-eyebrow">Country Coverage</span>
        <h2 id="country-title">Regional career knowledge, mapped for network professionals.</h2>
      </div>
      <div className="country-grid">
        {countries.map((country) => (
          <article className="country-card" key={country.country}>
            <strong>{country.country}</strong>
            <p>{country.focus}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
