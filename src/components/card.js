

export default function Card(props) {
  return(
    <div className="card">
      <div>
        <img 
          src={props.img} 
          alt="Katie Zaferes" className="card-image"
        />
        {/* <p className="info">Sold out</p> */}
      </div>
      <div className="card-stats">
        <img 
          width="14" 
          height="14" 
          src="https://img.icons8.com/ios-glyphs/30/FD1600/star--v1.png" 
          alt="star icon" 
          className="card-star"
        />
        <span className="rating">{props.rating}</span>
        <span className="gray">({props.reviewCount}) </span>
        <span className="gray">{props.country}</span>
      </div>
      <h2>{props.title}</h2>  
      <p><span className="bold">From ${props.price}</span>/ person</p>     
    </div>
  )
}