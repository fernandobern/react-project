import './Cardfull.css'

function CardFullSize({ title, children }) {
  return (
    <div className={`cardfull`}>
      {title && <h4 className="card-title">{title}</h4>}
      <div className="card-content">{children}</div>
    </div>
  )
}

export default CardFullSize
