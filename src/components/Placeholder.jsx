/** Dashed placeholder block marking where real content/photos will go. */
function Placeholder({ label = 'Content coming soon', height, className = '' }) {
  return (
    <div className={`placeholder ${className}`} style={height ? { minHeight: height } : undefined}>
      {label}
    </div>
  )
}

export default Placeholder
