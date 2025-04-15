import './Card.css'

function Card({ title, children }) {
  return (
    <div className={`card`}>
      {title && <h4 className="card-title">{title}</h4>}
      <div className="card-content">{children}</div>
    </div>
  )
}

export default Card
