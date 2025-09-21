// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <div className="img-card">
      <li className="destination-item">
        <img src={imgUrl} alt={name} className="destination-img" />
        <p>{name}</p>
      </li>
    </div>
  )
}

export default DestinationItem
