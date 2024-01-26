

export default function App(props)  {
  return (
    <div className="contacts">
      <div className="contact-card">
          <img 
            src={props.img}
            alt="Katie"/>
          <h3>{props.name}</h3>
          <div className="info-group">
            <img 
              width="14" 
              height="14" 
              src="https://img.icons8.com/ios-glyphs/30/FD1600/star--v1.png" 
              alt="star icon" 
              className="card-star"
            />
              <p>{props.phoneNumber}</p>
          </div>
          <div className="info-group">
            <img 
              width="14" 
              height="14" 
              src="https://img.icons8.com/ios-glyphs/30/FD1600/star--v1.png" 
              alt="star icon" 
              className="card-star"
              />
              <p>{props.email}</p>
          </div>
      </div>
    </div>
  )
}