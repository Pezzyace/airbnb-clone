import Img from '../assets/img2.png';

export default function Card() {
  return(
    <div className="card">
      <div>
        <img 
          src={Img} 
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
        <span>5.0</span>
        <span className="gray">(6) .</span>
        <span className="gray">USA</span>
      </div>
      <h2>Life lessons with Kate Zaferes</h2>  
      <p><span className="bold">From $136</span>/ person</p>     
    </div>
  )
}