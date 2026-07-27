import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="band band--top band--gradient-mint">
      <div className="container">
        <hr className="hairline" />
        <h1 className="display" style={{ fontSize: 'clamp(56px, 12vw, 140px)', margin: '28px 0 18px' }}>
          404
        </h1>
        <p style={{ marginBottom: 28 }}>That page doesn&rsquo;t exist.</p>
        <Link to="/" className="pill">
          Back home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
