const DEFAULT_ITEMS = [
  'Decision Making',
  'NeurIPS',
  'Road Trips',
  'Yoga',
  'Algorithms',
  'CV',
]

function Marquee({ items = DEFAULT_ITEMS }) {
  const doubled = [...items, ...items]

  return (
    <div className="marquee">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span className="marquee__item" key={`${item}-${i}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
